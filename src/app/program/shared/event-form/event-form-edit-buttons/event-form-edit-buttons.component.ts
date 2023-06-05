import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../../event-dialog/category-dialog/category-dialog.component';
import { LocationDialogComponent } from '../../event-dialog/location-dialog/location-dialog.component';

@Component({
  selector: 'app-event-form-edit-buttons',
  templateUrl: './event-form-edit-buttons.component.html',
  styleUrls: ['./event-form-edit-buttons.component.css'],
})
export class EventFormEditButtonsComponent {
  constructor(public dialog: MatDialog) {}

  editCategoriesDialog() {
    this.dialog.open(CategoryDialogComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }

  editLocationsDialog() {
    this.dialog.open(LocationDialogComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
