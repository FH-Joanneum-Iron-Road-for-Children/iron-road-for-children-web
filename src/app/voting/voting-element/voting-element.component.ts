import { Component, Input } from '@angular/core';
import { EventDto } from '../../models/models';

@Component({
  selector: 'app-voting-element',
  templateUrl: './voting-element.component.html',
  styleUrls: ['./voting-element.component.css'],
})
export class VotingElementComponent {
  @Input()
  events: EventDto[] | undefined;

  constructor() {}
}
