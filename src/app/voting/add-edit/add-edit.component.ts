import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent {
    
    addEditFormGroup = new FormGroup({
    votingName: new FormControl(''),
    participant: new FormControl(''),
  });

  constructor() {}

  listOfBands: string[] = ['Seiler und Speer', 'Veins of Suffering', 'Burnswell'];
  newItem: any;
  itemFormGroup = new FormGroup({
    name: new FormControl('', Validators.min(1)),
  });

    //add method to add participant
  //addToList(participant:string){
  //list.push(value);}

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
    throw new Error('Method not implemented.');
    }
    
   
  sendDataToRest() {}
}
