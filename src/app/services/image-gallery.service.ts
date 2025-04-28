import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryDto, PictureDto } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  private readonly apiUrl = '/api/gallery'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   * Fetch all galleries from the backend.
   * @returns Observable of an array of GalleryDto.
   */
  getAllGalleries(): Observable<GalleryDto[]> {
    return this.http.get<GalleryDto[]>(this.apiUrl);
  }

  /**
   * Fetch a specific gallery by ID.
   * @param id The ID of the gallery.
   * @returns Observable of PictureDto.
   */
  getGalleryById(id: number): Observable<GalleryDto> {
    return this.http.get<GalleryDto>(`${this.apiUrl}/${id}`);
  }

  /**
   * Upload a new gallery entry to the backend.
   * @param file The image file to upload.
   * @param metadata Metadata for the gallery (e.g., title, description).
   * @returns Observable of the created PictureDto.
   */
  createGallery(
    file: File,
    metadata: {
      title: string;
      description: string;
      altText: string;
      fileEndingType: string;
    }
  ): Observable<GalleryDto> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', metadata.title);
    formData.append('description', metadata.description);
    formData.append('altText', metadata.altText);
    formData.append('fileType', metadata.fileEndingType); // Include fileEndingType in the request

    return this.http.post<GalleryDto>(this.apiUrl, formData);
  }

  /**
   * Delete a gallery by ID.
   * @param id The ID of the gallery to delete.
   * @returns Observable of void.
   */
  deleteGallery(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Fetch the root path for the gallery.
   * @returns Observable of string.
   */
  getRootPath(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/rootpath`, {
      responseType: 'text' as 'json',
    });
  }
}
