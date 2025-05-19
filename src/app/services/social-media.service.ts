import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SocialMedia {
  socialMediaId: number;
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  private apiUrl = 'api/socialMedias';

  constructor(private http: HttpClient) {}

  // Method to get all social media links
  getAllSocialMedias(): Observable<SocialMedia[]> {
    return this.http.get<SocialMedia[]>(this.apiUrl);
  }

  // Method to add a new social media link
  addSocialMedia(socialMedia: SocialMedia): Observable<SocialMedia> {
    return this.http.post<SocialMedia>(this.apiUrl, socialMedia);
  }

  deleteSocialMedia(socialMediaId: number): Observable<SocialMedia> {
    return this.http.delete<SocialMedia>(`api/socialMedias/${socialMediaId}`);
  }
}
