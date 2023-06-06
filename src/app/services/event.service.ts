import { Injectable } from '@angular/core';
import { EventDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<EventDto[]> {
    return this.httpClient.get<EventDto[]>('api/events');
  }

  getEventByEventId(eventId: number): Observable<EventDto> {
    return this.httpClient.get<EventDto>('api/events/' + eventId);
  }

  updateEvent(id: number, eventDto: EventDto) {
    return this.httpClient.put<EventDto>('api/events/' + id, {
      id,
      eventDto,
    });
  }

  createEvent(eventDto: EventDto) {
    return this.httpClient.post<EventDto>('api/events', eventDto);
  }

  deleteEventByEventId(eventId: number) {
    return this.httpClient.delete<Response>('api/events/' + eventId);
  }
}
