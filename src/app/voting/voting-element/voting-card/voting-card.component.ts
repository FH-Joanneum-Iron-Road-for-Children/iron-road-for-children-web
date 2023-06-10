import { Component, Input } from '@angular/core';
import { ConfirmDialogService } from '../../../services/shared/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css'],
})
export class VotingCardComponent {
  @Input()
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService
  ) {}

  openConfirmWinnerDialog() {
    const msg = 'Band als Gewinner auswählen?'; // TODO: Show band name
    const actionType = 'Bestätigen';
    const dialogRef = this.confirmDialogService.openDialog(
      actionType,
      msg,
      false
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        // TODO: confirm
      }
    });
  }
}
