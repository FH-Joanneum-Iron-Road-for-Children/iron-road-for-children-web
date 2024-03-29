import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  EventCategoryDto,
  EventDto,
  EventLocationDto,
  PictureDto,
} from '../../../models/models';
import { Subscription } from 'rxjs';
import { EventService } from '../../../services/event/event.service';
import { EventLocationService } from '../../../services/event/event-location.service';
import { EventCategoriesService } from '../../../services/event/event-categories.service';
import { PicturesService } from '../../../services/event/pictures.service';
import { DateConverterService } from '../../../services/shared/date-converter.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit, OnDestroy {
  @Input() event: EventDto | undefined;
  @Input() eventId: number | undefined;

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl<EventLocationDto | null>(
      null,
      Validators.required
    ),
    category: new FormControl<EventCategoryDto | null>(
      null,
      Validators.required
    ),
    startDateTime: new FormControl(new Date(), Validators.required),
    endDateTime: new FormControl(new Date(), Validators.required),
    file0: new FormControl('', Validators.nullValidator),
    file1: new FormControl('', Validators.nullValidator),
    file2: new FormControl('', Validators.nullValidator),
    file3: new FormControl('', Validators.nullValidator),
  });

  title: string | undefined;
  date: any;
  category: EventCategoryDto | undefined;
  location: EventLocationDto | undefined;
  filePaths: (string | null)[] = Array(4).fill(null);
  fileNames: (string | null)[] = Array(4).fill(null);

  public categories: EventCategoryDto[] = [];
  public locations: EventLocationDto[] = [];

  receivedPictures: PictureDto[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private eventService: EventService,
    private eventLocationService: EventLocationService,
    private eventCategoryService: EventCategoriesService,
    private pictureService: PicturesService,
    private dateConverter: DateConverterService
  ) {}

  ngOnInit(): void {
    this.eventLocationService.getAllEventLocations().subscribe((locations) => {
      this.locations = locations;
    });

    this.eventCategoryService
      .getAllEventCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });

    if (this.eventId != undefined) {
      this.eventService.getEventByEventId(this.eventId).subscribe((event) => {
        this.event = event;

        if (this.event) {
          // edit event
          this.eventFormGroup.patchValue({
            title: this.event.title,
            description: this.event.eventInfo?.infoText,
            location: this.event.eventLocation,
            category: this.event.eventCategory,
            startDateTime: new Date(this.event.startDateTimeInUTC * 1000),
            endDateTime: new Date(this.event.endDateTimeInUTC * 1000),
          });

          this.filePaths[0] = this.event.picture?.path ?? null;
          this.filePaths[1] = this.event.eventInfo?.pictures[0]?.path ?? null;
          this.filePaths[2] = this.event.eventInfo?.pictures[1]?.path ?? null;
          this.filePaths[3] = this.event.eventInfo?.pictures[2]?.path ?? null;

          this.fileNames[0] = this.event.picture?.altText ?? null;
          this.fileNames[1] =
            this.event.eventInfo?.pictures[0]?.altText ?? null;
          this.fileNames[2] =
            this.event.eventInfo?.pictures[1]?.altText ?? null;
          this.fileNames[3] =
            this.event.eventInfo?.pictures[2]?.altText ?? null;

          this.category = this.event.eventCategory;
          this.location = this.event.eventLocation;

          this.receivedPictures = this.event.eventInfo?.pictures;
          this.receivedPictures.push(this.event.picture);
          console.log(this.receivedPictures);
        }
      });
    } else {
      // add event - reset datetime fields
      this.eventFormGroup.patchValue({
        startDateTime: null,
        endDateTime: null,
      });
    }
  }

  uploadedFile: File | null = null;
  addPicturesList: (File | null)[] = Array(4).fill(null);
  filePreviews: (string | ArrayBuffer | null)[] = Array(4).fill(null);

  subscription: Subscription = new Subscription();

  openFileSelectDialog(index: number) {
    document.getElementById('file-input' + index)?.click();
  }

  onFileSelected(event: any, index: number) {
    this.uploadedFile = event.target.files[0] as File;

    if (this.isValidImageFile()) {
      this.addPicturesList[index] = this.uploadedFile;
      this.filePaths[index] = null;
      this.fileNames[index] = null;

      // preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreviews[index] = e.target.result;
      };
      reader.readAsDataURL(this.uploadedFile);
    }
  }

  isValidImageFile(): boolean {
    if (this.uploadedFile) {
      const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
      const maxFileSize = 2 * 1024 * 1024; // 2MB

      return (
        allowedFormats.includes(this.uploadedFile.type) &&
        this.uploadedFile.size <= maxFileSize
      );
    }
    return false;
  }

  removeFile(index: number) {
    this.filePreviews[index] = null;
    this.addPicturesList[index] = null;
  }

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    const value = this.eventFormGroup.controls['startDateTime'].value;
    let utcMillisecondsStartDate = 0;
    if (value != undefined) {
      const startDate = new Date(value);
      utcMillisecondsStartDate =
        this.dateConverter.getTimestampFromDate(startDate);
    }

    const valueEndDateTime = this.eventFormGroup.controls['endDateTime'].value;
    let utcMillisecondsEndDate = 0;
    if (valueEndDateTime != undefined) {
      const endDate = new Date(valueEndDateTime);
      utcMillisecondsEndDate = this.dateConverter.getTimestampFromDate(endDate);
    }

    let titlePicture: PictureDto;
    const sentPicturesList: PictureDto[] = [];
    const numberOfPictures = this.addPicturesList.filter(
      (picture) => picture !== null
    ).length;
    let sentPicturesCounter = 0;

    for (const addPicture of this.addPicturesList) {
      if (addPicture !== null) {
        let fileType = '';
        if (addPicture.type == 'image/png') {
          fileType = 'PNG';
        } else {
          fileType = 'JPG';
        }
        this.subscription.add(
          this.pictureService
            .postPictures(addPicture, addPicture.name, fileType)
            .subscribe({
              next: (response) => {
                sentPicturesCounter++;
                if (sentPicturesCounter === 1) {
                  titlePicture = response;
                } else {
                  sentPicturesList.push(response);
                }
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {
                // if all pictures are uploaded
                if (
                  numberOfPictures - 1 === sentPicturesCounter ||
                  numberOfPictures === 1
                ) {
                  let title = this.eventFormGroup.controls['title'].value;
                  if (title == null || title == '') {
                    title = '-';
                  }
                  if (this.category && this.location && sentPicturesList) {
                    const event: EventDto = {
                      eventId: undefined,
                      title: title,
                      startDateTimeInUTC: utcMillisecondsStartDate,
                      endDateTimeInUTC: utcMillisecondsEndDate,
                      eventCategory: this.category,
                      eventLocation: this.location,
                      picture: {
                        pictureId: titlePicture.pictureId,
                        path: titlePicture.path,
                        altText: titlePicture.altText,
                      },
                      eventInfo: {
                        infoText:
                          this.eventFormGroup.controls['description'].value,
                        pictures: sentPicturesList,
                      },
                    };
                    console.log(event);
                    this.eventService.createEvent(event).subscribe((event) => {
                      if (event) {
                        this.router.navigate(['program']);
                      }
                    });
                  }
                }
              },
            })
        );
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  compareObjects(o1: any, o2: any) {
    return o1.name === o2.name && o1.id === o2.id;
  }
}
