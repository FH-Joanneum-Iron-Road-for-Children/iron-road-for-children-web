import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-voting-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  @Input() message: string | undefined;
  @Input() actionType: 'Bestätigen' | 'Löschen' | 'Starten' | undefined;

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onConfirmClick() {
    this.dialogRef.close(true);
  }

  onCancelClick() {
    this.dialogRef.close(false);
  }
}
