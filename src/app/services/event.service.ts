import { Injectable } from '@angular/core';
import { EventDto } from '../models/models';
import { EVENT_DATA } from '../test-data/test-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  baseUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getEventById(id: number): EventDto {
    return EVENT_DATA.find((e) => e.id === Number(id)) as EventDto;
  }

  getAllEvents(): Observable<EventDto[]> {
    return this.httpClient.get<EventDto[]>(this.baseUrl + 'events');
  }

  getEventByEventId(eventId: number): Observable<EventDto> {
    return this.httpClient.get<EventDto>(this.baseUrl + 'events/' + eventId);
  }

  updateEvent(id: number, eventDto: EventDto) {
    return this.httpClient.put<EventDto>(this.baseUrl + 'events/' + id, {
      id,
      eventDto,
    });
  }

  createEvent(eventDto: EventDto) {
    return this.httpClient.post<EventDto>(this.baseUrl + 'events', eventDto);
  }

  deleteEventByEventId(eventId: number) {
    return this.httpClient.delete<Response>(this.baseUrl + 'events/' + eventId);
  }
}
