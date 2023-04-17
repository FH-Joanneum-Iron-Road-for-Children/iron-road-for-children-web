import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy-dialog',
  templateUrl: './dummy-dialog.component.html',
  styleUrls: ['./dummy-dialog.component.css'],
})
export class DummyDialogComponent {
  constructor() {}

  sendDataToRest() {
    //here comes the rest call
  }
}
