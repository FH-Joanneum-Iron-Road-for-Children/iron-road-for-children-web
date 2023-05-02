import { Component } from '@angular/core';
import { EventDto } from '../../models/models';
import { EVENT_DATA } from '../../test-data/test-data';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css'],
})
export class ProgramViewComponent {
  public events: EventDto[] = EVENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
