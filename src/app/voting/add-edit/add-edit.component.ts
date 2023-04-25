import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  listOfStrings: string[] = ['nfweii', 'fiwejfoe'];

  constructor() {}

  //add method to add participant
  //addToList(participant:string){
  //list.push(value);}

  sendDataToRest() {}
}
