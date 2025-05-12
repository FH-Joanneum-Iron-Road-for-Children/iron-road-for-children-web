import { Injectable } from '@angular/core';
import { VideoDto } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getVideo(): Observable<VideoDto> {
    return this.httpClient.get<VideoDto>('api/intro-video');
  }

  postVideos(videoDto: FormData): Observable<VideoDto> {
    return this.httpClient.post<VideoDto>(`api/intro-video`, videoDto); // Send a POST request to add a video
  }
}
