import { Injectable } from '@angular/core';
import { VotingDto, VotingResultDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotingResultService {
  constructor(private httpClient: HttpClient) {}

  getVotingResults(): Observable<VotingResultDto[]> {
    return this.httpClient.get<VotingResultDto[]>('api/votingresult');
  }

  getVotingResultById(id: number): Observable<VotingResultDto> {
    return this.httpClient.get<VotingResultDto>(`api/votingresult/${id}`);
  }

  deleteVotingResult(id: number) {
    return this.httpClient.delete<Response>(`api/votingresult/${id}`);
  }
}
