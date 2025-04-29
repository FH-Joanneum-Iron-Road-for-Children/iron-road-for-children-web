import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../video/video.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onYesClick(): void {
    this.dialogRef.close(true);
    console.log('dialog true');
  }

  onNoClick(): void {
    this.dialogRef.close(false);
    console.log('dialog false');
  }
}
