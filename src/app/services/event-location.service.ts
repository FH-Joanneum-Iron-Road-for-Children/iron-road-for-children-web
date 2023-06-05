import {Injectable} from '@angular/core';
import {EventLocationDto} from '../models/models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLocationService {
  baseUrl = 'https://backend.irfc-test.st-ki.at/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllEventLocations(): Observable<EventLocationDto[]> {
    return this.httpClient.get<EventLocationDto[]>(
      this.baseUrl + 'event-locations'
    );
  }

  getEventLocationById(id: number): Observable<EventLocationDto> {
    return this.httpClient.get<EventLocationDto>(
      this.baseUrl + 'event-locations' + id
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

  deleteEventByEventId(id: number) {
    return this.httpClient.delete<Response>(
      this.baseUrl + 'event-locations' + id
    );
  }
}
