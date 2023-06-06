import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventDto } from '../../../models/models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  private _title = '';

  @Input()
  get title(): string {
    return this._title;
  }

  @Input() event?: EventDto;

  @Output() eventAdded = new EventEmitter<EventDto>();

  addToParentList(event: EventDto) {
    if (event !== undefined) this.eventAdded.emit(event);
  }
}
