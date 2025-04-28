import { Injectable } from '@angular/core';
import { HighlightDTO as HighlightDto, VideoDto } from 'src/app/models/models';
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

  updateVideo(videoDto: VideoDto) {
    return this.httpClient.put<VideoDto>(`api/intro-video`, { videoDto });
  }

  createVideo(videoDto: VideoDto) {
    return this.httpClient.post<VideoDto>('api/intro-video', videoDto);
  }

  deleteVideo() {
    return this.httpClient.delete<Response>(`api/intro-video`);
  }

  postVideos(videoDto: VideoDto) {
    return this.httpClient.post<VideoDto>('api/intro-video', videoDto);
  }

  createHighlight(formData: FormData) {
    return this.httpClient.post<HighlightDto>('api/highlight', formData);
  }
}
