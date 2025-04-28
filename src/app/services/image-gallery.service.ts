import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ImageDto {
  id: number;
  path: string;
  altText: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  private readonly apiUrl = '/api/images'; // Placeholder API endpoint

  constructor(private http: HttpClient) {}

  /**
   * Fetch all images from the backend.
   * @returns Observable of an array of ImageDto.
   */
  getAllImages(): Observable<ImageDto[]> {
    return this.http.get<ImageDto[]>(this.apiUrl);
  }

  /**
   * Upload a new image to the backend.
   * @param file The image file to upload.
   * @param altText The alt text for the image.
   * @returns Observable of the uploaded ImageDto.
   */
  uploadImage(file: File, altText: string): Observable<ImageDto> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('altText', altText);

    return this.http.post<ImageDto>(this.apiUrl, formData);
  }

  /**
   * Delete an image from the backend.
   * @param imageId The ID of the image to delete.
   * @returns Observable of void.
   */
  deleteImage(imageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${imageId}`);
  }
}
