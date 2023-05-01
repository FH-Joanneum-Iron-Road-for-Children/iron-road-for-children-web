import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DummyDialogComponent } from '../../dummy-dialog/dummy-dialog.component';
import { CategoryDialogComponent } from '../../category-dialog/category-dialog.component';
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
    });
  }

  editLocationsDialog() {
    this.dialog.open(DummyDialogComponent, {
      disableClose: true,
    });
  }
}
