import { Component, OnInit } from '@angular/core';
import { VotingAddEditComponent } from '../add-edit/voting-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-voting-button',
  templateUrl: './new-voting-button.component.html',
  styleUrls: ['./new-voting-button.component.css'],
})
export class NewVotingButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
