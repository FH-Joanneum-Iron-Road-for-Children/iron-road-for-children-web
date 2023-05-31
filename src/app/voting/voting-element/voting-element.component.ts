import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { VotingAddEditComponent } from '../add-edit/voting-add-edit.component';

@Component({
  selector: 'app-voting-element',
  templateUrl: './voting-element.component.html',
  styleUrls: ['./voting-element.component.css'],
})
export class VotingElementComponent {
  isActive: boolean | undefined;

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
    const msg = 'Voting endgültig löschen?'; // TODO: Show voting title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // TODO: delete voting
      }
    });
  }
}
