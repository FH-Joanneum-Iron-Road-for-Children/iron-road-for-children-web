import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateConverterService {
  constructor() {}

  getTimestampFromDate(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }

  getDateFromTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }

  getDateWithoutTime(date: Date): Date {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return new Date(year, month, day);
  }

  getDateWithoutTimeFromTimestamp(date: number): Date {
    return this.getDateWithoutTime(this.getDateFromTimestamp(date));
  }

  getTimestampWithoutTime(date: number): number {
    return this.getTimestampFromDate(
      this.getDateWithoutTime(this.getDateFromTimestamp(date))
    );
  }

  getTimestampWithoutTimeFromDate(date: Date): number {
    return this.getTimestampFromDate(this.getDateWithoutTime(date));
  }
}
