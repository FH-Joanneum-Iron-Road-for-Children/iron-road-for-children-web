import { Component } from '@angular/core';
import { EventDto } from '../../../models/models';
import { EVENT_DATA } from '../../../test-data/test-data';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css'],
})
export class ProgramViewComponent {
  public events: EventDto[] = EVENT_DATA;

  constructor(
    public dialog: MatDialog,
    public confirmDialogService: ConfirmDialogService
  ) {}

  openDeleteEventDialog(id: number, title: string) {
    const msg = `"${title}" wirklich löschen?`; // TODO: Show event title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // TODO: delete event
      }
    });
  }

  getDateFromUTC(startDateTimeUTC: number | undefined) {
    if (startDateTimeUTC == undefined) {
      throw new Error('undefined timestamp');
    }
    return new Date(startDateTimeUTC * 1000);
  }
}
