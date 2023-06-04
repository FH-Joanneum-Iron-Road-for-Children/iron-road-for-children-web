import { Component, Input } from '@angular/core';
import { EventDto } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';
import { DateConverterService } from '../../../services/date-converter.service';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css'],
})
export class ProgramViewComponent {
  @Input() events?: EventDto[];

  constructor(
    public dialog: MatDialog,
    public confirmDialogService: ConfirmDialogService,
    public dateConverterService: DateConverterService
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

  displayTime(startDateTimeUTC: number, endDateTimeUTC: number) {
    if (
      this.dateConverterService.getTimestampWithoutTime(startDateTimeUTC) ==
      this.dateConverterService.getTimestampWithoutTime(endDateTimeUTC)
    ) {
      return this.dateConverterService.getDateFromTimestamp(startDateTimeUTC);
    }
    return null;
  }

  checkIfSameDate(startDateTimeUTC: number, endDateTimeUTC: number) {
    if (
      this.dateConverterService.getTimestampWithoutTime(startDateTimeUTC) ==
      this.dateConverterService.getTimestampWithoutTime(endDateTimeUTC)
    ) {
      return true;
    }
    return false;
  }
}
