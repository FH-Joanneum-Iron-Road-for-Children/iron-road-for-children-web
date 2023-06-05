import {Injectable} from '@angular/core';
import {EventCategoryDto, EventDto, EventLocationDto} from '../models/models';
import {CATEGORY_DATA, EVENT_DATA, LOCATION_DATA,} from '../test-data/test-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  baseUrl = 'https://backend.irfc-test.st-ki.at/api/';

  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getEvents(): EventDto[] {
    return EVENT_DATA;
  }

  getEventById(id: number): EventDto {
    return EVENT_DATA.find((e) => e.eventId === Number(id)) as EventDto;
  }

  getAllEvents(): Observable<EventDto[]> {
    // const headers = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
    return this.httpClient.get<EventDto[]>(
      this.baseUrl + 'events'
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

  getCategories(): EventCategoryDto[] {
    return CATEGORY_DATA;
  }

  getLocations(): EventLocationDto[] {
    return LOCATION_DATA;
  }
}
