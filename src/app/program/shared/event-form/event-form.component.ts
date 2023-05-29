import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  EventCategoryDto,
  EventDto,
  EventLocationDto,
} from '../../../models/models';
import { CATEGORY_DATA, LOCATION_DATA } from '../../../test-data/test-data';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event: EventDto | undefined;

  //TODO: overlook! Datepicker -> Date?
  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.min(1)),
    description: new FormControl('', Validators.min(1)),
    location: new FormControl('', Validators.min(1)),
    category: new FormControl(''),
    startDateTime: new FormControl(new Date(), Validators.min(1)),
    endDateTime: new FormControl(new Date(), Validators.min(1)),
    file1: new FormControl('', Validators.required),
    file2: new FormControl('', Validators.nullValidator),
    file3: new FormControl('', Validators.nullValidator),
    file4: new FormControl('', Validators.nullValidator),
  });

  title: string | undefined;
  date: any;
  category: number | undefined;
  location: number | undefined;

  public categories: EventCategoryDto[] = CATEGORY_DATA;
  public locations: EventLocationDto[] = LOCATION_DATA;
  minDate: Date;

  constructor(private router: Router, public dialog: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
  }

  ngOnInit(): void {
    if (this.event) {
      this.eventFormGroup.setValue({
        title: this.event.title,
        description: this.event.eventInfo?.infoText,
        location: this.event.eventLocation.name,
        category: this.event.category.name,
        startDateTime: new Date(this.event.startDateTimeUTC * 1000),
        endDateTime: new Date(this.event.endDateTimeUTC * 1000),
        file1: this.event.image?.path,
        file2: null,
        file3: null,
        file4: null,

        // file2: this.event.eventInfo?.pictures[0]
      });
    }
    console.log(this.event);
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log(files);
  }

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    this.router.navigate(['program']);
  }

  showLocationValue() {
    if (this.event == undefined) {
      return '';
    } else {
      return this.event.eventLocation.id;
    }
  }
}
