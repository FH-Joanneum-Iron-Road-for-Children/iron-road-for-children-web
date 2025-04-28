import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-target-date-dialog',
  templateUrl: './edit-target-date-dialog.component.html',
  styleUrls: ['./edit-target-date-dialog.component.css'],
})
export class EditTargetDateDialogComponent {
  newTargetDate: Date | null = null;
  formattedTargetTime = '';

  constructor(
    public dialogRef: MatDialogRef<EditTargetDateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { targetDate: Date }
  ) {
    this.newTargetDate = new Date(data.targetDate);
    this.formattedTargetTime = this.getTimeFromDate(this.newTargetDate);
  }

  onSave(): void {
    const [hours, minutes] = this.formattedTargetTime.split(':').map(Number);
    if (this.newTargetDate) {
      this.newTargetDate.setHours(hours, minutes);
    }
    this.dialogRef.close(this.newTargetDate);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onTimeChange(newTime: string): void {
    this.formattedTargetTime = newTime ? newTime : '00:00';
  }

  private getTimeFromDate(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
