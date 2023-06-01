import { Component } from '@angular/core';
import { VotingDto } from '../models/models';
import { VOTING } from '../test-data/test-data';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent {
  votingList: VotingDto[] = VOTING;
}
