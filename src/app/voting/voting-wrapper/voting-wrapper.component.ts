import { Component, Input } from '@angular/core';
import { VotingDto } from '../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { VotingAddEditComponent } from '../add-edit/voting-add-edit.component';
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'app-voting-wrapper',
  templateUrl: './voting-wrapper.component.html',
  styleUrls: ['./voting-wrapper.component.css'],
})
export class VotingWrapperComponent {
  @Input()
  votingList: VotingDto[] | undefined;

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService,
    private votingService: VotingService
  ) {}

  openEditVotingDialog(voting: VotingDto) {
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '60vw',
      height: '80vh',
    });
  }

  openDeleteVotingDialog(voting: VotingDto) {
    const msg = `<strong>${voting.title}</strong> wirklich löschen?`;
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.votingService
          .deleteVoting(voting.votingId)
          .subscribe((result) => console.log(result));
        this.refreshPage();
      }
    });
  }

  openStartVotingDialog(voting: VotingDto) {
    voting.active = !voting.active;

    if (voting.active) {
      const msg = `<strong>${voting.title}</strong> wirklich starten? <br> <br>Nach Start des Votings können keine <br> neuen Bands mehr hinzugefügt werden.`;
      const actionType = 'Starten';
      const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.votingService
            .startVoting(voting.votingId)
            .subscribe((result) => console.log(result));
          voting.active = true;
        } else {
          voting.active = false;
        }
      });
    }
  }

  refreshPage() {
    window.location.reload();
  }
}
