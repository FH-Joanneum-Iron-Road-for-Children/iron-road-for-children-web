import { Injectable } from '@angular/core';
import { PictureDto } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  baseUrl = '';

  constructor(private httpClient: HttpClient) {}

  getAllPictures(): Observable<PictureDto[]> {
    return this.httpClient.get<PictureDto[]>(this.baseUrl + 'api/pictures');
  }

  getPictureById(id: number): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>(this.baseUrl + 'api/pictures/' + id);
  }

  getPictureByRootpath(): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>(
      this.baseUrl + 'api/pictures/' + 'rootpath'
    );
  }

  postPictures(file: File, name: string, fileType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('altText', name);
    formData.append('fileType', fileType);

    return this.httpClient.post<PictureDto>(
      this.baseUrl + 'api/pictures/',
      formData
    );
  }

  deletePicture(id: number) {
    return this.httpClient.delete<Response>(
      this.baseUrl + 'api/pictures/' + id
    );
  }
}
