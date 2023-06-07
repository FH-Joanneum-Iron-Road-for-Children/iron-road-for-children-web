import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../models/models';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
})
export class EventDialogComponent {
  @Input() itemList: Item[] | null = null;
  @Output() addItemList = new EventEmitter<Item[]>();
  @Output() removeItemList = new EventEmitter<Item[]>();

  addItems: Item[] = [];
  removeItems: Item[] = [];

  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  removeItem(item: Item) {
    if (this.itemList) {
      const index = this.itemList.indexOf(item);
      const indexAddItemsList = this.addItems.indexOf(item);
      if (index !== -1) {
        this.itemList?.splice(index, 1);

        if (indexAddItemsList !== -1) {
          this.addItems?.splice(indexAddItemsList, 1);
        } else {
          this.removeItems.push(item);
        }
      }
    }
  }

  addItem() {
    const newItemName: string | null =
      this.itemFormGroup.controls['name'].value;

    if (newItemName && this.itemList) {
      const exists = this.itemList.some((item) => item.name === newItemName);
      if (!exists) {
        const newItem: Item = { id: 0, name: newItemName, isInUse: false };
        this.itemList.push(newItem);
        this.addItems.push(newItem);
      }
    }
  }

  saveItemList() {
    this.addItemList.emit(this.addItems);
    this.removeItemList.emit(this.removeItems);
  }
}
