import {Injectable} from '@angular/core';
import {PictureDto} from '../models/models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  baseUrl = 'https://backend.irfc-test.st-ki.at/api/';

  // header = new Headers().set('access-control-allow-origin',"https://backend.irfc.st-ki.at/api/");
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}


  getAllPictures(): Observable<PictureDto[]> {
    return this.httpClient.get<PictureDto[]>(
      this.baseUrl + 'pictures'
    );
  }

  getPictureById(id: number): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>(this.baseUrl + 'pictures/' + id);
  }

  getPictureByRootpath(): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>(this.baseUrl + 'pictures/'+ 'rootpath');
  }

  postPictures( PictureDto: PictureDto) {
    return this.httpClient.post<PictureDto>(this.baseUrl + 'pictures/', {
      PictureDto,
    });
  }

  deletePicture(id: number) {
    return this.httpClient.delete<Response>(this.baseUrl + 'pictures/' + id);
  }

}
