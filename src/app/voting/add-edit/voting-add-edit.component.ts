import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventDto } from '../../models/models';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventDto[],
    private dialogRef: MatDialogRef<VotingAddEditComponent>
  ) {}

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
