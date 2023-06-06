import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EventCategoryDto} from "../../../models/models";

type Item = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
})
export class EventDialogComponent {
  @Input() itemList: Item[] | null = null;

  @Output() saveItemList = new EventEmitter<Item[]>();
  @Output() removeItemList = new EventEmitter<Item[]>();

  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.min(1)),
  });

  //TODO: change to setItem -1 and emit
  removeItem(item: Item) {
    if (this.itemList) {
      const index = this.itemList.indexOf(item);
      if (index !== -1) {
        this.itemList?.splice(index, 1);
      }
    }
  }

  addItem() {
    const newItemName: string | null =
      this.itemFormGroup.controls['name'].value;

    if (newItemName && this.itemList) {
      const exists = this.itemList.some((item) => item.name === newItemName);
      if (!exists) {
        const newItem: Item = { id: 0, name: newItemName };
        this.itemList.push(newItem);
        this.saveItemList.emit(this.itemList);
      }
    }
  }
}
