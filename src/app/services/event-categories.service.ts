import { Injectable } from '@angular/core';
import { EventCategoryDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventCategoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllEventCategories(): Observable<EventCategoryDto[]> {
    return this.httpClient.get<EventCategoryDto[]>('api/eventCategories');
  }

  getEventByEventCategoryId(eventId: number): Observable<EventCategoryDto> {
    return this.httpClient.get<EventCategoryDto>(
      'api/eventCategories/' + eventId
    );
  }

  createEventCategory(EventCategoryDto: EventCategoryDto) {
    return this.httpClient.post<EventCategoryDto>(
      'api/eventCategories',
      EventCategoryDto
    );
  }

  deleteEventCategoryByEventCategoryId(id: number) {
    return this.httpClient.delete<Response>('api/eventCategories/' + id);
  }
}
