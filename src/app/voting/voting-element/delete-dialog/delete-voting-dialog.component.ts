import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-voting-dialog.component.html',
  styleUrls: ['./delete-voting-dialog.component.css'],
})
export class DeleteVotingComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteVotingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    // Implement your delete logic here
    this.dialogRef.close();
  }
}
