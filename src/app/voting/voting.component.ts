import { Component, OnInit } from '@angular/core';
import { VotingDto } from '../models/models';
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
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
