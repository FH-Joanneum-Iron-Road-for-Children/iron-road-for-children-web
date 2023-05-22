import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DeleteVotingComponent } from './delete-dialog/delete-voting-dialog.component';
import { EventDto } from '../../models/models';
import { EVENT_DATA } from '../../test-data/test-data';
import { MatDialog } from '@angular/material/dialog';
import { VotingCardComponent } from './voting-card/voting-card.component';

@Component({
  selector: 'app-voting-element',
  templateUrl: './voting-element.component.html',
  styleUrls: ['./voting-element.component.css'],
})
export class VotingElementComponent {
  public events: EventDto[] = EVENT_DATA;

  constructor(public dialog: MatDialog) {}

  onDeleteClick(): void {
    const dialogRef = this.dialog.open(DeleteVotingComponent, {
      width: '50vw',
      height: '40vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  @ViewChild('cardContainer', { read: ViewContainerRef })
  cardContainer!: ViewContainerRef;

  newCard() {
    this.cardContainer.createComponent(VotingCardComponent);
  }

  deleteCard() {
    console.log('delete');
  }
}
