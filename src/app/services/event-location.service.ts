import { Injectable } from '@angular/core';
import { EventLocationDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLocationService {
  baseUrl = '';

  constructor(private httpClient: HttpClient) {}

  getAllEventLocations(): Observable<EventLocationDto[]> {
    return this.httpClient.get<EventLocationDto[]>(
      this.baseUrl + 'api/event-locations'
    );
  }

  getEventLocationById(id: number): Observable<EventLocationDto> {
    return this.httpClient.get<EventLocationDto>(
      this.baseUrl + 'api/event-locations' + id
    );
  }

  updateEventLocation(id: number, eventDto: EventLocationDto) {
    return this.httpClient.put<EventLocationDto>(
      this.baseUrl + 'api/event-locations' + id,
      { id, eventDto }
    );
  }

  createEventLocation(eventDto: EventLocationDto) {
    return this.httpClient.post<EventLocationDto>(
      this.baseUrl + 'api/event-locations',
      eventDto
    );
  }

  deleteEventByEventId(id: number) {
    return this.httpClient.delete<Response>(
      this.baseUrl + 'api/event-locations' + id
    );
  }
}
