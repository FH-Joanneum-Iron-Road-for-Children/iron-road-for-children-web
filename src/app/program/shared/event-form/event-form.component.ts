import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  EventCategoryDto,
  EventDto,
  EventLocationDto,
  PictureDto,
} from '../../../models/models';
import { EventService } from '../../../services/event.service';
import { PicturesService } from '../../../services/pictures.service';
import { EventLocationService } from '../../../services/event-location.service';
import { EventCategoriesService } from '../../../services/event-categories.service';
import { DateConverterService } from '../../../services/date-converter.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event: EventDto | undefined;
  @Input() eventId: number | undefined;

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl(-1, Validators.required),
    category: new FormControl(-1, Validators.required),
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

  sentPictures: PictureDto[] | undefined;

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
            location: this.event.eventLocation.eventLocationId,
            category: this.event.eventCategory.eventCategoryId,
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
  uploadedFiles: (File | null)[] = Array(4).fill(null);
  filePreviews: (string | ArrayBuffer | null)[] = Array(4).fill(null);

  openFileSelectDialog(index: number) {
    document.getElementById('file-input' + index)?.click();
  }

  onFileSelected(event: any, index: number) {
    this.uploadedFile = event.target.files[0] as File;

    if (this.isValidImageFile()) {
      this.uploadedFiles[index] = this.uploadedFile;
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
    this.uploadedFiles[index] = null;
  }

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    const pictureToSend: PictureDto[] = [];
    const file0 = this.uploadedFiles[0];
    const file1 = this.uploadedFiles[1];
    const file2 = this.uploadedFiles[2];
    const file3 = this.uploadedFiles[3];

    let file0ToSend: PictureDto = {
      pictureId: 128,
      altText: file0?.name,
      path: 'https://pictures.irfc-test.fh-joanneum.at/40b8a5bb-20a7-47e1-adea-d0c2ff0d403d.png',
    };

    const file1Send: PictureDto = {
      pictureId: 127,
      altText: file1?.name,
      path: 'https://pictures.irfc-test.fh-joanneum.at/40b8a5bb-20a7-47e1-adea-d0c2ff0d403d.png',
    };

    // if (file0 !== null) {
    //   this.pictureService
    //     .postPictures(file0, file0.name, 'PNG')
    //     .subscribe((file0FromBackend) => {
    //       file0ToSend = file0FromBackend;
    //     });
    // }

    // console.log(file0ToSend);
    // if (file1 !== null) {
    //   this.pictureService
    //     .postPictures(file1, file1.name, 'PNG')
    //     .subscribe((file1FromBackend) => {
    //       pictureToSend.push(file1FromBackend);
    //     });
    // }
    // if (file2 !== null) {
    //   this.pictureService
    //     .postPictures(file2, file2.name, 'PNG')
    //     .subscribe((file2FromBackend) => {
    //       pictureToSend.push(file2FromBackend);
    //     });
    // }
    // if (file3 !== null) {
    //   this.pictureService
    //     .postPictures(file3, file3.name, 'PNG')
    //     .subscribe((file3FromBackend) => {
    //       pictureToSend.push(file3FromBackend);
    //     });
    // }

    // console.log(pictureToSend);
    //TODO: first post pics then post event! & property filetype .png and .jpg

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

    let title = this.eventFormGroup.controls['title'].value;
    if (title == null || title == '') {
      title = '-';
    }

    if (this.category && this.location) {
      const event: EventDto = {
        title: title,
        startDateTimeInUTC: utcMillisecondsEndDate,
        endDateTimeInUTC: utcMillisecondsEndDate,
        eventCategory: this.category,
        eventLocation: this.location,
        picture: {
          path: file0ToSend.path,
          altText: file0ToSend.altText,
        },
        eventInfo: {
          infoText: this.eventFormGroup.controls['description'].value,
          pictures: [
            {
              altText: file1Send.altText,
              path: file1Send?.path,
            },
          ],
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
}
