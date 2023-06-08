import { Component, OnInit } from '@angular/core';
import { VotingDto } from '../models/models';
import { AddVotingComponent } from './add-edit/add-voting/add-voting.component';
import { MatDialog } from '@angular/material/dialog';
import { VotingService } from '../services/voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  isActive = false;
  votingList: VotingDto[] | undefined;

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
    this.dialog.open(AddVotingComponent, {
      disableClose: true,
      width: '60vw',
      minWidth: ' 40rem',
      height: '60vh',
      minHeight: '32rem',
    });
  }
}
