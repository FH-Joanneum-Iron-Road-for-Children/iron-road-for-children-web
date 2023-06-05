import {Injectable} from '@angular/core';
import {EventCategoryDto, EventLocationDto, VotingDto} from '../models/models';
import {CATEGORY_DATA, EVENT_DATA, LOCATION_DATA,} from '../test-data/test-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  baseUrl = 'https://backend.irfc-test.st-ki.at/api/';

  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAllVotings(): Observable<VotingDto[]> {
    // const headers = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
    return this.httpClient.get<VotingDto[]>(
      this.baseUrl + 'votings'
    );
  }

  getVotingById(eventId: number): Observable<VotingDto> {
    return this.httpClient.get<VotingDto>(this.baseUrl + 'votings/' + eventId);
  }

  updateVoting(id: number, votingDto: VotingDto) {
    return this.httpClient.put<VotingDto>(this.baseUrl + 'votings/' + id, {
      id,
      votingDto,
    });
  }

  createVoting(VotingDto: VotingDto) {
    return this.httpClient.post<VotingDto>(this.baseUrl + 'votings', VotingDto);
  }

  deleteVotingByVotingId(id: number) {
    return this.httpClient.delete<Response>(this.baseUrl + 'votings/' + id);
  }

  setEndForVoting(id: number){
    return this.httpClient.put<Response>(this.baseUrl + 'votings/' + '/endVoting' + id ,{
      id
    });
  }

}
