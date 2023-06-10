import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../../../../services/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { EventDto, VotingDto } from '../../../../../models/models';
import { VotingService } from '../../../../../services/voting/voting.service';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css'],
})
export class VotingCardComponent {
  @Input() event: EventDto | undefined;
  @Input() voting: VotingDto | undefined;

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService,
    private votingService: VotingService
  ) {}

  getVotes(id: number | undefined): any {
    if (id != undefined) {
      const votingResult = this.voting?.votingResult?.partialResults?.find(
        (result) => result.id === id
      );
      return votingResult ? `${votingResult.percentage}` : '';
    }
  }

  openConfirmWinnerDialog() {
    const msg = `<strong>${this.event?.title}</strong> als Gewinner auswählen?`;
    const actionType = 'Bestätigen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.voting != undefined) {
          this.votingService
            .endVoting(this.voting.votingId)
            .subscribe((result) => console.log(result));
        }
      }
    });
  }
}
