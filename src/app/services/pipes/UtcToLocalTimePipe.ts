import { Pipe, PipeTransform } from '@angular/core';
import { UtcConverterService } from './UTCConverterService';

@Pipe({
  name: 'utcToLocalTime',
})
export class UtcToLocalTimePipe implements PipeTransform {
  constructor(private _dateConverter: UtcConverterService) {}

  transform(date?: string, args?: any): string {
    if (date == undefined) {
      throw new Error('no Date');
    }
    return this._dateConverter.convertUtcToLocalTime(date, args);
  }
}
