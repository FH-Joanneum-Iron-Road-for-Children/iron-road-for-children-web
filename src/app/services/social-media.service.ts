import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SocialMedia {
  socialMediatId: number;
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  private apiUrl = '/api/socialMedias';

  constructor(private http: HttpClient) {}

  // Method to send POST request
  addSocialMedia(socialMedia: SocialMedia): Observable<SocialMedia> {
    return this.http.post<SocialMedia>(this.apiUrl, socialMedia);
  }
}
