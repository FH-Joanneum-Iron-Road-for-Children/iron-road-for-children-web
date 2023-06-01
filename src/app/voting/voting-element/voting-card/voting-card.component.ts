import { Component, Input } from '@angular/core';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';
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

  // @Input()
  // get text(): string {
  //   return this._text;
  // }
  //
  // set text(name: string) {
  //   this._text = (name && name.trim()) || '<no name set>';
  // }
  //
  // private _text = '';

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService
  ) {}

  openConfirmWinnerDialog() {
    const msg = 'Band als Gewinner auswählen?'; // TODO: Show band name
    const actionType = 'Bestätigen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        // TODO: confirm
      }
    });
  }
}
