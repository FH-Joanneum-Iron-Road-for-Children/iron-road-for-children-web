import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  CreatePictureDto,
  EventCategoryDto,
  EventDto,
  EventLocationDto,
  PictureDto,
} from '../../../models/models';
import { CATEGORY_DATA, LOCATION_DATA } from '../../../test-data/test-data';
import { EventService } from '../../../services/event.service';
import { PicturesService } from '../../../services/pictures.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event: EventDto | undefined;

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.min(1)),
    description: new FormControl('', Validators.min(1)),
    location: new FormControl(-1, Validators.required),
    category: new FormControl(-1, Validators.required),
    startDateTime: new FormControl(new Date(), Validators.min(1)),
    endDateTime: new FormControl(new Date(), Validators.min(1)),
    file0: new FormControl('', Validators.required),
    file1: new FormControl('', Validators.nullValidator),
    file2: new FormControl('', Validators.nullValidator),
    file3: new FormControl('', Validators.nullValidator),
  });

  title: string | undefined;
  date: any;
  category: number | undefined;
  location: number | undefined;

  public categories: EventCategoryDto[] = CATEGORY_DATA;
  public locations: EventLocationDto[] = LOCATION_DATA;
  minDate: Date;

  sentPictures: PictureDto[] | undefined;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private eventService: EventService,

    private pictureService: PicturesService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
  }

  ngOnInit(): void {
    console.log(this.event);
    if (this.event) {
      // edit event
      console.log('setValue');
      this.eventFormGroup.setValue({
        title: this.event.title,
        description: this.event.eventInfo?.infoText,
        location: this.event.eventLocation.id,
        category: this.event.category.id,
        startDateTime: new Date(this.event.startDateTimeInUTC * 1000),
        endDateTime: new Date(this.event.endDateTimeInUTC * 1000),
        file0: this.event.picture?.path,
        file1: this.event.eventInfo?.pictures[0]?.path ?? null,
        file2: this.event.eventInfo?.pictures[1]?.path ?? null,
        file3: this.event.eventInfo?.pictures[2]?.path ?? null,
      });
      this.category = this.event.category.id;
      this.location = this.event.eventLocation.id;
    } else {
      // add event - reset datetime fields
      this.eventFormGroup.patchValue({
        startDateTime: null,
        endDateTime: null,
      });
    }
    console.log(this.event);
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
    for (const uploadedFile1 of this.uploadedFiles) {
      if (uploadedFile1 !== null) {
        const pictureDto: CreatePictureDto = {
          file: uploadedFile1.name,
          altText: '',
          fileType: uploadedFile1.type,
        };

        this.pictureService
          .postPictures(pictureDto)
          .subscribe((fromBackendPictures) => {
            this.sentPictures?.push(fromBackendPictures);
            console.log(this.sentPictures);
          });
      }
    }

    //TODO: first post pics then post event! & property filetype .png and .jpg
    let title = this.eventFormGroup.controls['title'].value;

    if (title == null || title == '') {
      title = '-';
    }
    const event: EventDto = {
      title: title,
      startDateTimeInUTC: 1690320193,
      endDateTimeInUTC: 1690327393,
      category: {
        id: 100,
        name: 'test category',
      },
      eventLocation: {
        id: 100,
        name: 'test location',
      },
      picture: {
        path: '',
        altText: 'test alt text',
      },
      eventInfo: {
        infoText: this.eventFormGroup.controls['description'].value,
        pictures: [],
      },
    };

    console.log(event);
    // this.eventService.createEvent(event).subscribe((event) => {
    //   if (event) {
    //     this.router.navigate(['program']);
    //   }
    // });
  }
}
