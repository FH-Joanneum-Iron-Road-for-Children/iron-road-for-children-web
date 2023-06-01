import { Component, OnInit } from '@angular/core';
import { VotingDto } from '../models/models';
import { VOTING } from '../test-data/test-data';
import { VotingAddEditComponent } from './add-edit/voting-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../services/confirm-dialog.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  isActive: boolean = false;
  votingList: VotingDto[] = VOTING;

  ngOnInit(): void {}

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService
  ) {}

  openEditVotingDialog() {
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }

  openDeleteVotingDialog() {
    const msg = 'Voting wirklich löschen?'; // TODO: Show voting title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // TODO: delete voting
      }
    });
  }

  toggleButton() {
    this.isActive = !this.isActive;
  }

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
