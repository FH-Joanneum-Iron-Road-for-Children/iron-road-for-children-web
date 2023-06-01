import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  env = environment;
  url: string = 'https://backend.irfc-test.st-ki.at/api/';

  postLoginData(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }
}
