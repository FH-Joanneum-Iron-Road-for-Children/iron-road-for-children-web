import { Component, Input } from '@angular/core';
import { EventDto, VotingDto } from '../../../../models/models';

@Component({
  selector: 'app-voting-element',
  templateUrl: './voting-element.component.html',
  styleUrls: ['./voting-element.component.css'],
})
export class VotingElementComponent {
  @Input() events: EventDto[] | undefined;
  @Input() voting: VotingDto | undefined;

  constructor() {
    // order by event with the most votes
    if (this.voting?.votingResult != undefined) {
      this.events?.sort((a, b) => {
        const eventA = this.voting?.votingResult?.partialResults?.find(
          (e) => e.id === a.eventId
        );
        const eventB = this.voting?.votingResult?.partialResults?.find(
          (e) => e.id === b.eventId
        );

        if (eventA && eventB) {
          return eventA.percentage - eventB.percentage;
        }

        return 0;
      });
    }
  }
}
