import { Injectable } from '@angular/core';
import { EventDto } from '../models/models';
import { EVENT_DATA } from '../test-data/test-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  baseUrl = environment.baseUrl;

  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getEventById(id: number): EventDto {
    return EVENT_DATA.find((e) => e.id === Number(id)) as EventDto;
  }

  getAllEvents(): Observable<EventDto[]> {
    // const headers = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
    return this.httpClient.get<EventDto[]>(
      this.baseUrl + 'events',
      this.httpOptions
    );
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
