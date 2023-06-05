import {Injectable} from '@angular/core';
import {EventCategoryDto, EventDto, EventLocationDto} from '../models/models';
import {CATEGORY_DATA, EVENT_DATA, LOCATION_DATA,} from '../test-data/test-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {



  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<EventDto[]> {
    // const headers = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
    return this.httpClient.get<EventDto[]>(
      'api/events'
    );
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
