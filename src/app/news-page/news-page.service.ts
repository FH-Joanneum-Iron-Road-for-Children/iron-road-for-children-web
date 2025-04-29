import { Injectable } from '@angular/core';
import { HighlightDTO as HighlightDto, VideoDto } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  createHighlight(formData: FormData) {
    return this.httpClient.post<HighlightDto>('api/highlights', formData);
  }

  getAllHighlights(): Observable<HighlightDto[]> {
    return this.httpClient.get<HighlightDto[]>('api/highlights');
  }

  deleteHighlight(highlightId: number): Observable<Response> {
    return this.httpClient.delete<Response>(`api/highlights/${highlightId}`);
  }

  getVideo(): Observable<VideoDto> {
    return this.httpClient.get<VideoDto>('api/intro-video');
  }

  postVideos(videoDto: FormData): Observable<VideoDto> {
    return this.httpClient.post<VideoDto>(`api/intro-video`, videoDto); // Send a POST request to add a video
  }
}
