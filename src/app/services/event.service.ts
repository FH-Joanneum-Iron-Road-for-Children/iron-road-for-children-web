import { Injectable } from '@angular/core';
import { EventDto } from '../models/models';
import { EVENT_DATA } from '../test-data/test-data';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEventById(id: number): EventDto {
    return EVENT_DATA.find((e) => e.id === Number(id)) as EventDto;
  }
}
