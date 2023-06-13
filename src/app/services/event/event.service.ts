import { Injectable } from '@angular/core';
import { EventDto } from '../../models/models';
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

  getEventByEventId(id: number): Observable<EventDto> {
    return this.httpClient.get<EventDto>(`api/events/${id}`);
  }

  updateEvent(id: number, eventDto: EventDto) {
    return this.httpClient.put<EventDto>(`api/events/${id}`, { eventDto });
  }

  createEvent(eventDto: EventDto) {
    return this.httpClient.post<EventDto>('api/events', eventDto);
  }

  deleteEventByEventId(id: number) {
    return this.httpClient.delete<Response>(`api/events/${id}`);
  }
}
