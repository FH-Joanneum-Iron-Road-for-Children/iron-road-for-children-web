import { Component, Input } from '@angular/core';
import { EventDto, VotingDto } from '../../../../../models/models';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css'],
})
export class VotingCardComponent {
  @Input() event: EventDto | undefined;
  @Input() voting: VotingDto | undefined;

  constructor() {}

  getEventWithMostVotes(name: string | undefined): any {
    if (name != undefined) {
      const eventMostVotes = this.voting?.votingResult?.partialResults?.reduce(
        (a, b) => {
          return a.percentage > b.percentage ? a : b;
        }
      );

      return eventMostVotes?.eventName === name;
    }
  }

  getVotes(name: string | undefined): any {
    if (name != undefined) {
      const votingResult = this.voting?.votingResult?.partialResults?.find(
        (result) => result.eventName === name
      );
      return votingResult ? `${votingResult.percentage}` : '';
    }
  }
}
