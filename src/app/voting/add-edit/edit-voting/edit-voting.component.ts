import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventDto, VotingDto } from '../../../models/models';
import { EventService } from '../../../services/event.service';
import { VotingService } from '../../../services/voting.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-voting',
  templateUrl: './edit-voting.component.html',
  styleUrls: [
    './edit-voting.component.css',
    '../../../program/shared/event-dialog/event-dialog.component.css',
  ],
})
export class EditVotingComponent implements OnInit {
  @Input()
  events: EventDto[] = [];

  eventList: EventDto[] = [];

  myForm: FormGroup;

  votingAddEditFormGroup = new FormGroup({
    votingName: new FormControl(''),
    participant: new FormControl(''),
  });

  constructor(
    private eventService: EventService,
    private votingService: VotingService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public voting: any
  ) {
    this.myForm = this.formBuilder.group({
      votingName: [''],
    });
  }

  ngOnInit() {
    this.eventService
      .getAllEvents()
      .subscribe((result) => (this.events = result));
  }

  isEventInList(event: EventDto): boolean {
    //check if event is already in the list of events
    return this.eventList.some((item) => item.eventId === event.eventId);
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
    const newVoting: VotingDto = {
      id: undefined,
      title: this.myForm.get('votingName')?.value,
      isActive: true,
      isEditable: true,
      events: this.eventList,
      votingResult: undefined,
      active: true,
      editable: true,
    };
    // send post request
    this.votingService
      .createVoting(newVoting)
      .subscribe(() => console.log('new voting submitted'));
    window.location.reload();
  }
}
