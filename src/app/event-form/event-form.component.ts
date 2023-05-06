import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventCategoryDto, EventDto, EventLocationDto } from '../models/models';
import { CATEGORY_DATA, LOCATION_DATA } from '../test-data/test-data';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event!: EventDto;

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.min(1)),
    description: new FormControl('', Validators.min(1)),
    location: new FormControl('', Validators.min(1)),
    startDateTime: new FormControl('', Validators.min(1)),
    endDateTime: new FormControl('', Validators.min(1)),
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
    console.log(this.event);
  }

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    this.router.navigate(['program']);
  }

  uploadFile(event: Event) {}
}
