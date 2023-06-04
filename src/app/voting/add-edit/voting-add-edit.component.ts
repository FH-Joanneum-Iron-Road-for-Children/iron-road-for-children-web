import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './voting-add-edit.component.html',
  styleUrls: [
    './voting-add-edit.component.css',
    '../../program/shared/event-dialog/event-dialog.component.css',
  ],
})
export class VotingAddEditComponent {
  votingAddEditFormGroup = new FormGroup({
    votingName: new FormControl(''),
    participant: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<VotingAddEditComponent>) {}

  listOfBands: any[] = ['Seiler und Speer', 'Veins of Suffering', 'Burnswell'];
  newItem: any;
  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.min(1)),
  });

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
    this.dialogRef.close(this.listOfBands);
  }
}
