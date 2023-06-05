import {Injectable} from '@angular/core';
import {EventCategoryDto, EventLocationDto} from '../models/models';
import {CATEGORY_DATA, EVENT_DATA, LOCATION_DATA,} from '../test-data/test-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventCategoriesService {
  baseUrl = 'https://backend.irfc-test.st-ki.at/api/';

  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");

  constructor(private httpClient: HttpClient) {}

  getAllEventCategories(): Observable<EventCategoryDto[]> {
    // const headers = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
    return this.httpClient.get<EventCategoryDto[]>(
      this.baseUrl + 'eventCategories'
    );
  }

  getEventByEventCategoryId(eventId: number): Observable<EventCategoryDto> {
    return this.httpClient.get<EventCategoryDto>(this.baseUrl + 'eventCategories/' + eventId);
  }

  updateEventCategory(id: number, EventCategoryDto: EventCategoryDto) {
    return this.httpClient.put<EventCategoryDto>(this.baseUrl + 'eventCategories/' + id, {
      id,
      EventCategoryDto,
    });
  }

  createEventCategory(EventCategoryDto: EventCategoryDto) {
    return this.httpClient.post<EventCategoryDto>(this.baseUrl + 'eventCategories', EventCategoryDto);
  }

  deleteEventCategoryByEventCategoryId(id: number) {
    return this.httpClient.delete<Response>(this.baseUrl + 'eventCategories/' + id);
  }
}
