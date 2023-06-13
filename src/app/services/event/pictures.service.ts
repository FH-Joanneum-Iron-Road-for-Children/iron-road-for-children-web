import { Injectable } from '@angular/core';
import { PictureDto } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private httpClient: HttpClient) {}

  getAllPictures(): Observable<PictureDto[]> {
    return this.httpClient.get<PictureDto[]>('api/pictures');
  }

  getPictureById(id: number): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>(`api/pictures/${id}`);
  }

  getPictureByRootpath(): Observable<PictureDto> {
    return this.httpClient.get<PictureDto>('api/pictures/rootpath');
  }

  postPictures(file: File, name: string, fileType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('altText', name);
    formData.append('fileType', fileType);

    return this.httpClient.post<PictureDto>('api/pictures', formData);
  }

  deletePicture(id: number) {
    return this.httpClient.delete<Response>(`api/pictures/${id}`);
  }
}
