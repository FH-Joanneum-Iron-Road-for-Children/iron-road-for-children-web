import { Component, OnInit } from '@angular/core';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-voting-button',
  templateUrl: './new-voting-button.component.html',
  styleUrls: ['./new-voting-button.component.css'],
})




export class NewVotingButtonComponent implements OnInit{


  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(AddEditComponent, {
      disableClose: true,
    });   
} }; 