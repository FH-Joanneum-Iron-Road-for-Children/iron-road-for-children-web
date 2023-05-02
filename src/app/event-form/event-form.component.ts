import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventDto } from '../models/models';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event: EventDto | null = null;

  eventFormGroup = new FormGroup({
    title: new FormControl('', Validators.min(1)),
    description: new FormControl('', Validators.min(1)),
    location: new FormControl('', Validators.min(1)),
    date: new FormControl('', Validators.min(1)),
    startTime: new FormControl('', Validators.min(1)),
    endTime: new FormControl('', Validators.min(1)),
  });

  date: any;
  startTime: any;
  endTime: any;
  category: any;
  location: any;

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
