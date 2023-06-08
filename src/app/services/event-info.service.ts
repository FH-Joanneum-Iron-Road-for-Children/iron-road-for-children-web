import { Injectable } from '@angular/core';
import { EventInfoDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventInfoService {
  constructor(private httpClient: HttpClient) {}

  getEventInfoById(eventInfoId: number): Observable<EventInfoDto> {
    return this.httpClient.get<EventInfoDto>('api/eventInfos/' + eventInfoId);
  }

  updateEventInfo(id: number, eventInfo: EventInfoDto) {
    return this.httpClient.put<EventInfoDto>('api/eventInfos/' + id, eventInfo);
  }

  createEventInfo(eventInfo: EventInfoDto) {
    return this.httpClient.post<EventInfoDto>('api/eventInfos', eventInfo);
  }

  deleteEventInfoById(eventInfoId: number) {
    return this.httpClient.delete<Response>('api/eventInfos/' + eventInfoId);
  }
}
