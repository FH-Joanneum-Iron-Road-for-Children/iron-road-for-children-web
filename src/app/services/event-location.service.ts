import { Injectable } from '@angular/core';
import { EventDto, EventLocationDto } from '../models/models';
import { EVENT_DATA } from '../test-data/test-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLocationService {
  baseUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getAllEventLocations(): Observable<EventLocationDto[]> {
    return this.httpClient.get<EventLocationDto[]>(
      this.baseUrl + 'event-locations'
    );
  }

  getEventLocationById(eventId: number): Observable<EventLocationDto> {
    return this.httpClient.get<EventLocationDto>(
      this.baseUrl + 'event-locations' + eventId
    );
  }

  updateEventLocation(id: number, eventDto: EventLocationDto) {
    return this.httpClient.put<EventLocationDto>(
      this.baseUrl + 'event-locations' + id,
      { id, eventDto }
    );
  }

  createEventLocation(eventDto: EventLocationDto) {
    return this.httpClient.post<EventLocationDto>(
      this.baseUrl + 'event-locations',
      eventDto
    );
  }

  deleteEventByEventId(eventId: number) {
    return this.httpClient.delete<Response>(
      this.baseUrl + 'event-locations' + eventId
    );
  }
}
