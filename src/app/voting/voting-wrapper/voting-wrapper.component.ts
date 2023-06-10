import { Component, Input, OnInit } from '@angular/core';
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
export class VotingWrapperComponent implements OnInit {
  @Input()
  votingList: VotingDto[] | undefined;

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService,
    private votingService: VotingService
  ) {}

  ngOnInit(): void {
    console.log('');
  }

  openEditVotingDialog() {
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '60vw',
      height: '80vh',
    });
    // }).afterClosed().subscribe((resultList) =>{
    //   this.votingList = resultList;
    // });
  }

  openDeleteVotingDialog() {
    const msg = 'Voting wirklich löschen?'; // TODO: Show voting title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // if( this.votingList !== undefined) {
        //   delete this.votingList[0];
        //   this.cd.markForCheck();
        // }
      }
    });
  }

  openStartVotingDialog(voting: VotingDto) {
    voting.active = !voting.active;

    if (voting.active) {
      const msg = `Voting "${voting.title}" wirklich starten? <br> <br>Nach Start des Votings können keine <br> neuen Bands mehr hinzugefügt werden.`;
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
}
