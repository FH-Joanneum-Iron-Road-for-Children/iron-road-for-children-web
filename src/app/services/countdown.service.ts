import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CountdownDTO {
  countdownId: number; // Match the backend's field name
  endDateTimeInUTC: number; // Use a number for the Unix timestamp
}

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private readonly apiUrl = '/api/countdowns'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   * Fetch the countdown target date by ID.
   * @param id The ID of the countdown.
   * @returns Observable of CountdownDTO.
   */
  getCountdown(id: number): Observable<CountdownDTO> {
    return this.http.get<CountdownDTO>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new countdown.
   * @param countdown The CountdownDTO to create.
   * @returns Observable of CountdownDTO.
   */
  createCountdown(countdown: CountdownDTO): Observable<CountdownDTO> {
    return this.http.post<CountdownDTO>(this.apiUrl, countdown);
  }

  /**
   * Update the countdown target date by ID.
   * @param id The ID of the countdown.
   * @param countdown The updated CountdownDTO.
   * @returns Observable of CountdownDTO.
   */
  updateCountdown(
    id: number,
    countdown: CountdownDTO
  ): Observable<CountdownDTO> {
    return this.http.put<CountdownDTO>(`${this.apiUrl}/${id}`, countdown);
  }
}
