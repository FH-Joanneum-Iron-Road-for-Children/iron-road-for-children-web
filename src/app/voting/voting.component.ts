import { Component, OnInit } from '@angular/core';
import { EventDto, VotingDto } from '../models/models';
import { EVENT_DATA, VOTING } from '../test-data/test-data';
import { VotingAddEditComponent } from './add-edit/voting-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { VotingService } from '../services/voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  isActive = false;
  votingList: VotingDto[] = VOTING;
  events: EventDto[] = EVENT_DATA;

  ngOnInit(): void {
    this.votingService
      .getAllVotings()
      .subscribe((result) => (this.votingList = result));
  }

  constructor(
    private dialog: MatDialog,
    private votingService: VotingService
  ) {}

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(VotingAddEditComponent, {
      data: this.events,
      disableClose: true,
      width: '60vw',
      minWidth: ' 40rem',
      height: '60vh',
      minHeight: '32rem',
    });
  }
}
