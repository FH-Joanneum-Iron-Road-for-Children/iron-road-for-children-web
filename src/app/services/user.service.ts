import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/models";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {}



  postLoginData(user: User): Observable<User>{
      return this.httpClient.post<User>('http://localhost:8080/irfc/user', user);
  }

}
