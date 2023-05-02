import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventCategoryDto, EventDto, EventLocationDto } from '../models/models';
import {
  CATEGORY_DATA,
  EVENT_DATA,
  LOCATION_DATA,
} from '../test-data/test-data';

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
    date: new FormControl('', Validators.min(1)),
    startTime: new FormControl('', Validators.min(1)),
    endTime: new FormControl('', Validators.min(1)),
  });

  title: string | undefined;
  date: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  category: number | undefined;
  location: number | undefined;

  public categories: EventCategoryDto[] = CATEGORY_DATA;
  public locations: EventLocationDto[] = LOCATION_DATA;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.event);
  }

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    this.router.navigate(['program']);
  }
}
