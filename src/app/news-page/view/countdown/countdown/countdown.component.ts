import { Component, OnInit, OnDestroy } from '@angular/core';
import { EditTargetDateDialogComponent } from '../edit-target-date-dialog/edit-target-date-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // Default: 24 hours from now
  private intervalId: any;
  private remainingTime: number = 0;
  isEventRunning: boolean = false;

  countdownUnits: { value: number; label: string }[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const target = this.targetDate.getTime();
      this.remainingTime = target - now;

      if (this.remainingTime <= 0) {
        this.isEventRunning = true;
        this.remainingTime = now - target; // Time since the event started
      } else {
        this.isEventRunning = false;
      }

      this.updateCountdownUnits();
    }, 1000);
  }

  updateCountdownUnits(): void {
    this.countdownUnits = [
      {
        value: this.getDays(),
        label: this.isEventRunning ? 'DAYS SINCE' : 'DAYS',
      },
      {
        value: this.getHours(),
        label: this.isEventRunning ? 'HOURS SINCE' : 'HOURS',
      },
      {
        value: this.getMinutes(),
        label: this.isEventRunning ? 'MIN. SINCE' : 'MIN.',
      },
      {
        value: this.getSeconds(),
        label: this.isEventRunning ? 'SEC. SINCE' : 'SEC.',
      },
    ];
  }

  getDays(): number {
    return Math.floor(Math.abs(this.remainingTime) / (1000 * 60 * 60 * 24));
  }

  getHours(): number {
    return Math.floor((Math.abs(this.remainingTime) / (1000 * 60 * 60)) % 24);
  }

  getMinutes(): number {
    return Math.floor((Math.abs(this.remainingTime) / (1000 * 60)) % 60);
  }

  getSeconds(): number {
    return Math.floor((Math.abs(this.remainingTime) / 1000) % 60);
  }

  editTargetDate(): void {
    const dialogRef = this.dialog.open(EditTargetDateDialogComponent, {
      width: '400px',
      data: { targetDate: this.targetDate },
    });

    dialogRef.afterClosed().subscribe((result: string | null) => {
      if (result) {
        this.targetDate = new Date(result);
        this.startCountdown();
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
