import { Component, OnInit } from '@angular/core';
import { VotingDto } from '../models/models';
import { VOTING } from '../test-data/test-data';
import { VotingAddEditComponent } from './add-edit/voting-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  isActive = false;
  votingList: VotingDto[] = VOTING;

  ngOnInit(): void {
    console.log(this.votingList[0].isActive);
  }

  constructor(private dialog: MatDialog) {}

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
