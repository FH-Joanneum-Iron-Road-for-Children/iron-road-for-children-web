import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaylistDto } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiUrl = '/api/playlist'; // Backend endpoint for a single playlist

  constructor(private http: HttpClient) {}

  savePlaylist(playlist: PlaylistDto): Observable<PlaylistDto> {
    return this.http.post<PlaylistDto>(this.apiUrl, playlist);
  }

  getPlaylist(): Observable<PlaylistDto> {
    return this.http.get<PlaylistDto>(this.apiUrl); // Fetch a single playlist
  }

  deletePlaylist(playlistId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/`);
  }
}
