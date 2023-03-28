import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class User {

  name: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private httpClient: HttpClient
  ) {}



  getData(): Observable<User>{
      return this.httpClient.get<User>('http://localhost:8080/irfc/user');
  }

}
