import { Component, Input } from '@angular/core';
import { EventDto } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../../services/shared/confirm-dialog.service';
import { DateConverterService } from '../../../services/shared/date-converter.service';
import { EventService } from '../../../services/event/event.service';
import { PicturesService } from '../../../services/event/pictures.service';
import { VotingService } from '../../../services/voting/voting.service';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css'],
})
export class ProgramViewComponent {
  @Input() events?: EventDto[];
  @Input() isLoading = true;

  constructor(
    public dialog: MatDialog,
    public confirmDialogService: ConfirmDialogService,
    public dateConverterService: DateConverterService,
    public eventService: EventService,
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
        msg = `<strong>${event.title}</strong> kann nicht gelöscht werden, <br>da es in einem Voting vorkommt.`;
      } else {
        msg = `<strong>${event.title}</strong> wirklich löschen?`;
      }

      const dialogRef = this.confirmDialogService.openDialog(
        'Löschen',
        msg,
        isInUse
      );

      dialogRef.afterClosed().subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.deleteEvent(event);
          window.location.reload();
        }
      });
    });
  }

  deleteEvent(event: EventDto) {
    const eventToDelete = event;

    if (event.eventId !== undefined) {
      this.eventService
        .deleteEventByEventId(event.eventId)
        .subscribe((result) => console.log(result));
    } else {
      throw new Error('undefined eventId at: ' + event);
    }

    for (const picture of eventToDelete.eventInfo.pictures) {
      if (picture.pictureId !== undefined) {
        this.pictureService
          .deletePicture(picture.pictureId)
          .subscribe((result) => console.log(result));
      }
    }
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
