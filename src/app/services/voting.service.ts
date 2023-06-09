import { Injectable } from '@angular/core';
import { VotingDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  constructor(private httpClient: HttpClient) {}

  getAllVotings(): Observable<VotingDto[]> {
    return this.httpClient.get<VotingDto[]>('api/votings');
  }

  getVotingById(id: number): Observable<VotingDto> {
    return this.httpClient.get<VotingDto>(`api/votings/${id}`);
  }

  updateVoting(id: number, votingDto: VotingDto) {
    return this.httpClient.put<VotingDto>(`api/votings/${id}`, {
      id,
      votingDto,
    });
  }

  createVoting(VotingDto: VotingDto) {
    return this.httpClient.post<VotingDto>('api/votings', VotingDto);
  }

  deleteVoting(id: number) {
    return this.httpClient.delete<Response>(`api/votings/${id}`);
  }

  startVoting(id: number) {
    return this.httpClient.put<Response>(`api/votings/startVoting/${id}`, {});
  }

  endVoting(id: number) {
    return this.httpClient.put<Response>(`api/votings/endVoting/${id}`, {});
  }
}
