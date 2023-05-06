import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
})
export class EventDialogComponent {
  itemList: string[] = ['Musik', 'Tattoo', 'Food & Drinks', ' Ausfahrten'];
  newItem: any;
  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.min(1)),
  });

  removeItem(name: string) {
    const index = this.itemList.indexOf(name);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }

  addItem() {
    this.newItem = this.itemFormGroup.controls['name'].value;

    if (this.newItem && !this.itemList.includes(this.newItem)) {
      this.itemList.push(this.newItem);
      this.newItem = '';
    }
  }
}
