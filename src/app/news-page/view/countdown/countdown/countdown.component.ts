import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CountdownService,
  CountdownDTO,
} from 'src/app/services/countdown.service';
import { EditTargetDateDialogComponent } from '../edit-target-date-dialog/edit-target-date-dialog.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date(); // Default target date
  private intervalId: any;
  private remainingTime = 0;
  isEventRunning = false;
  // We only allow the user to interact with a single countdown entry (ID 100)
  // xdocumentation
  private readonly SINGLETON_COUNTDOWN_ID = 100; // Fixed ID for the single countdown

  countdownUnits: { value: number; label: string }[] = [];

  constructor(
    private dialog: MatDialog,
    private countdownService: CountdownService
  ) {}

  ngOnInit(): void {
    this.fetchTargetDate(); // Fetch the target date from the backend
    this.startCountdown();
  }

  /**
   * Fetch the target date from the backend.
   */
  fetchTargetDate(): void {
    this.countdownService.getCountdown(this.SINGLETON_COUNTDOWN_ID).subscribe({
      next: (data: CountdownDTO) => {
        this.targetDate = new Date(data.endDateTimeInUTC); // Convert timestamp to Date
        this.startCountdown(); // Start the countdown after fetching the target date
      },
      error: (err) => {
        console.error('Error fetching target date:', err);
        // Fallback to a default target date
        this.targetDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.startCountdown(); // Start the countdown with the fallback target date
      },
    });
  }

  formatNumber(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  /**
   * Save the target date to the backend.
   * @param newDate The new target date.
   */
  saveTargetDate(newDate: Date): void {
    const updatedCountdown: CountdownDTO = {
      countdownId: this.SINGLETON_COUNTDOWN_ID,
      endDateTimeInUTC: newDate.getTime(), // Convert Date to timestamp
    };

    // Check if the countdown exists
    this.countdownService.getCountdown(this.SINGLETON_COUNTDOWN_ID).subscribe({
      next: () => {
        // If the countdown exists, update it
        this.countdownService
          .updateCountdown(this.SINGLETON_COUNTDOWN_ID, updatedCountdown)
          .subscribe({
            next: (data: CountdownDTO) => {
              console.log('Countdown erfolgreich aktualisiert:', data);
            },
            error: (err) => {
              console.error('Fehler beim Aktualisieren:', err);
            },
          });
      },
      error: () => {
        // If the countdown does not exist, create it
        this.countdownService.createCountdown(updatedCountdown).subscribe({
          next: (data: CountdownDTO) => {
            console.log('Countdown erfolgreich hochgeladen:', data);
          },
          error: (err) => {
            console.error('Fehler beim Hochladen:', err);
          },
        });
      },
    });
  }

  editTargetDate(): void {
    const dialogRef = this.dialog.open(EditTargetDateDialogComponent, {
      width: '400px',
      data: { targetDate: this.targetDate },
    });

    dialogRef.afterClosed().subscribe((result: string | null) => {
      if (result) {
        this.targetDate = new Date(result);
        this.saveTargetDate(this.targetDate); // Save the updated target date
        this.startCountdown();
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
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
}
