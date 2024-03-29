import { Injectable } from '@angular/core';
import { PictureDto } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  postSubject: Subject<PictureDto> = new Subject<PictureDto>();

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

    return this.httpClient.post<PictureDto>('api/pictures/', formData).pipe(
      map((response) => {
        return response;
      }),
      tap((response) => this.postSubject.next(response))
    );
  }

  deletePicture(id: number) {
    return this.httpClient.delete<Response>(`api/pictures/${id}`);
  }
}
