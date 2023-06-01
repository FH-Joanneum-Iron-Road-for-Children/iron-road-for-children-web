import { Injectable } from '@angular/core';
import { EventCategoryDto, EventDto, EventLocationDto } from '../models/models';
import {
  CATEGORY_DATA,
  EVENT_DATA,
  LOCATION_DATA,
} from '../test-data/test-data';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEvents(): EventDto[] {
    return EVENT_DATA;
  }

  getEventById(id: number): EventDto {
    return EVENT_DATA.find((e) => e.id === Number(id)) as EventDto;
  }

  getCategories(): EventCategoryDto[] {
    return CATEGORY_DATA;
  }

  getLocations(): EventLocationDto[] {
    return LOCATION_DATA;
  }
}
