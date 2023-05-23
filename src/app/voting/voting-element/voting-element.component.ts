import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DeleteVotingComponent } from './delete-dialog/delete-voting-dialog.component';
import { EventDto } from '../../models/models';
import { EVENT_DATA } from '../../test-data/test-data';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-voting-element',
  templateUrl: './voting-element.component.html',
  styleUrls: ['./voting-element.component.css'],
})
export class VotingElementComponent {
  public events: EventDto[] = EVENT_DATA;
  cards: { title: string; content: string }[] = [];

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
    const card = { title: 'New Card', content: 'Card Content' };
    this.cards.push(card);
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
