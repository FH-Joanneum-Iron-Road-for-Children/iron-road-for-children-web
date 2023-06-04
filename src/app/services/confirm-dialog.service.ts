import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  dialogRef: MatDialogRef<ConfirmDialogComponent> | undefined;

  constructor(private dialog: MatDialog) {}

  openDialog(
    actionType: 'Bestätigen' | 'Löschen' | 'Starten',
    message: string
  ): MatDialogRef<ConfirmDialogComponent> {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
    });
    this.dialogRef.componentInstance.actionType = actionType;
    this.dialogRef.componentInstance.message = message;
    return this.dialogRef;
  }
}
