import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  //   constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }

  constructor(public dialog: MatDialog, private router: Router) {}

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  editEvent() {
    this.router.navigate(['program/edit']);
  }
}
