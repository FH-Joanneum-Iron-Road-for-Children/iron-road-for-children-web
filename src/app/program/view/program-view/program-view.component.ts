import { Component, Input } from '@angular/core';
import { EventDto } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';
import { DateConverterService } from '../../../services/date-converter.service';
import { EventService } from '../../../services/event.service';
import { PicturesService } from '../../../services/pictures.service';
import { VotingService } from '../../../services/voting.service';
import { EventInfoService } from '../../../services/event-info.service';

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
    public dateConverterService: DateConverterService,
    public eventService: EventService,
    public eventInfoService: EventInfoService,
    public votingService: VotingService,
    public pictureService: PicturesService
  ) {}

  openDeleteEventDialog(event: EventDto) {
    // check if event is in a voting
    this.votingService.getAllVotings().subscribe((votings) => {
      const isInUse = votings.some((voting) =>
        voting.events.some(
          (votingEvent) => votingEvent.eventId === event.eventId
        )
      );

      let msg = '';

      if (isInUse) {
        msg = `"${event.title}" kann nicht gelöscht werden, da es in einem Voting vorkommt.`;
      } else {
        msg = `"${event.title}" wirklich löschen?`; // TODO: Show event title
      }

      const dialogRef = this.confirmDialogService.openDialog(
        'Löschen',
        msg,
        isInUse
      );

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // if confirmed
          this.deleteEvent(event);
        }
      });
    });
  }

  deleteEvent(event: EventDto) {
    if (event.picture.pictureId != undefined) {
      this.pictureService
        .deletePicture(event.picture.pictureId)
        .subscribe((result) => console.log(result));
    }

    for (const picture of event.eventInfo.pictures) {
      if (picture.pictureId !== undefined) {
        this.pictureService
          .deletePicture(picture.pictureId)
          .subscribe((result) => console.log(result));
      }
    }

    if (event.eventInfo.eventInfoId !== undefined) {
      this.eventInfoService
        .deleteEventInfoById(event.eventInfo.eventInfoId)
        .subscribe((result) => console.log(result));
    }

    this.eventService
      .deleteEventByEventId(event.eventId)
      .subscribe((result) => console.log(result));
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
