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

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.min(1)),
    description: new FormControl('', Validators.min(1)),
    location: new FormControl(-1, Validators.required),
    category: new FormControl(-1, Validators.required),
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
      // edit event
      this.eventFormGroup.setValue({
        title: this.event.title,
        description: this.event.eventInfo?.infoText,
        location: this.event.eventLocation.id,
        category: this.event.category.id,
        startDateTime: new Date(this.event.startDateTimeUTC * 1000),
        endDateTime: new Date(this.event.endDateTimeUTC * 1000),
        file1: this.event.image?.path,
        file2: this.event.eventInfo?.pictures[0]?.path ?? null,
        file3: this.event.eventInfo?.pictures[1]?.path ?? null,
        file4: this.event.eventInfo?.pictures[2]?.path ?? null,
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
}
