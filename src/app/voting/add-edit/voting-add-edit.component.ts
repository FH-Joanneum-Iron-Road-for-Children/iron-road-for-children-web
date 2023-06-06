import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  eventList: EventDto[] = [];
  votingAddEditFormGroup = new FormGroup({
    votingName: new FormControl(''),
    participant: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: EventDto[]) {}

  isEventInList(event: EventDto): boolean {
    //check if event is already in the list of events
    return this.eventList.some((item) => item.id === event.id);
  }

  addEventToList(event: EventDto) {
    if (!this.isEventInList(event)) this.eventList.push(event);
  }

  removeFromList(event: EventDto) {
    if (this.eventList) {
      const index = this.eventList.indexOf(event);
      if (index !== -1) {
        this.eventList?.splice(index, 1);
      }
    }
  }

  saveCategories() {
    // send post request
  }
}
