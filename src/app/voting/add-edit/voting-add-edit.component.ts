import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  EventCategoryDto,
  EventDto,
  EventLocationDto,
} from '../../models/models';
import { EventService } from '../../services/event.service';
import { CATEGORY_DATA, LOCATION_DATA } from '../../test-data/test-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './voting-add-edit.component.html',
  styleUrls: [
    './voting-add-edit.component.css',
    '../../program/shared/event-dialog/event-dialog.component.css',
  ],
})
export class VotingAddEditComponent {
  @Input()
  events: EventDto[] | undefined;
  votingAddEditFormGroup = new FormGroup({
    votingName: new FormControl(''),
    participant: new FormControl(''),
  });

  // constructor(
  //   private dialog: MatDialog,
  //   private dialogRef: MatDialogRef<VotingAddEditComponent>) {
  // }

  listOfBands: any[] = ['Seiler und Speer', 'Veins of Suffering', 'Burnswell'];
  newItem: any;
  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.min(1)),
  });
  EventDto: any;

  addToList() {
    this.newItem = this.itemFormGroup.controls['name'].value;

    if (this.newItem && !this.listOfBands.includes(this.newItem)) {
      this.listOfBands.push(this.newItem);
      this.newItem = '';
    }
  }

  removeFromList(name: string) {
    const index = this.listOfBands.indexOf(name);
    if (index !== -1) {
      this.listOfBands.splice(index, 1);
    }
  }

  saveCategories() {
    // this.dialogRef.close(this.listOfBands);
  }
}
