import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DummyDialogComponent } from '../../dummy-dialog/dummy-dialog.component';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})
export class AddEventFormComponent {
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

  editCategoriesDialog() {
    this.dialog.open(DummyDialogComponent, {
      disableClose: true,
    });
  }

  editLocationsDialog() {
    this.dialog.open(DummyDialogComponent, {
      disableClose: true,
    });
  }
}
