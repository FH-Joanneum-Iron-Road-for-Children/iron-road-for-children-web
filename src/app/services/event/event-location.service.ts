import { Injectable } from '@angular/core';
import { EventLocationDto } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLocationService {
  constructor(private httpClient: HttpClient) {}

  getAllEventLocations(): Observable<EventLocationDto[]> {
    return this.httpClient.get<EventLocationDto[]>('api/event-locations');
  }

  createEventLocation(eventDto: EventLocationDto) {
    return this.httpClient.post<EventLocationDto>(
      'api/event-locations',
      eventDto
    );
  }

  deleteEventLocationById(id: number) {
    return this.httpClient.delete<Response>(`api/event-locations/${id}`);
  }
}
