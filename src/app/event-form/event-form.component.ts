import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {
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

  cancel() {
    this.router.navigate(['program']);
  }

  submit() {
    this.router.navigate(['program']);
  }
}
