import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-target-date-dialog',
  templateUrl: './edit-target-date-dialog.component.html',
  styleUrls: ['./edit-target-date-dialog.component.css'],
})
export class EditTargetDateDialogComponent {
  newTargetDate: Date;
  formattedTargetTime: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditTargetDateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { targetDate: Date }
  ) {
    this.newTargetDate = new Date(data.targetDate);
  }

  onSave(): void {
    this.dialogRef.close(this.newTargetDate);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onTimeChange(newTime: string): void {
    this.formattedTargetTime = newTime;
  }
}
