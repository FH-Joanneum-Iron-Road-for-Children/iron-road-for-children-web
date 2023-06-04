import { Component, Input, OnInit } from '@angular/core';
import { VotingDto } from '../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { VotingAddEditComponent } from '../add-edit/voting-add-edit.component';

@Component({
  selector: 'app-voting-wrapper',
  templateUrl: './voting-wrapper.component.html',
  styleUrls: ['./voting-wrapper.component.css'],
})
export class VotingWrapperComponent implements OnInit {
  @Input()
  votingList: VotingDto[] | undefined;

  isActive: boolean = false;

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    console.log('');
  }

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