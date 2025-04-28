import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GalleryDto, PictureDto } from 'src/app/models/models';
import { ImageGalleryService } from 'src/app/services/image-gallery.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  galleries: GalleryDto[] = [];
  isLoading = true;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput')
  descriptionInput!: ElementRef<HTMLInputElement>;

  constructor(private imageGalleryService: ImageGalleryService) {}

  ngOnInit(): void {
    this.fetchGalleries();
  }

  /**
   * Fetch all galleries from the backend.
   */
  fetchGalleries(): void {
    this.imageGalleryService.getAllGalleries().subscribe({
      next: (galleries: GalleryDto[]) => {
        console.log('Fetched galleries:', galleries); // Log the response
        this.galleries = galleries;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching galleries:', err);
        this.isLoading = false;
      },
    });
  }

  /**
   * Handle the form submission to upload a new gallery.
   * @param event The form submission event.
   */
  onUpload(event: Event): void {
    event.preventDefault();

    const file = this.fileInput.nativeElement.files?.[0];
    const title = this.titleInput.nativeElement.value.trim();
    const description = this.descriptionInput.nativeElement.value.trim();
    const altText = this.titleInput.nativeElement.value.trim(); // Use the title as altText for now

    if (!file) {
      console.error('File is required.');
      return;
    }

    if (!title || !description || !altText) {
      console.error('Title, description, and altText are required.');
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toUpperCase();
    if (!fileExtension || !['JPG', 'PNG', 'GIF'].includes(fileExtension)) {
      console.error('Invalid file extension:', fileExtension);
      return;
    }

    const metadata = {
      title,
      description,
      altText,
      fileEndingType: fileExtension,
    };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', metadata.title);
    formData.append('description', metadata.description);
    formData.append('altText', metadata.altText);
    formData.append('fileType', metadata.fileEndingType);

    console.log('FormData being sent:');
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    this.imageGalleryService.createGallery(file, metadata).subscribe({
      next: (newGallery: GalleryDto) => {
        console.log('New gallery created:', newGallery); // Log the response
        this.galleries.push(newGallery);
        console.log('Gallery uploaded successfully');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error uploading gallery:', err);
      },
    });
  }

  /**
   * Delete a gallery by ID.
   * @param galleryId The ID of the gallery to delete.
   */
  deleteGallery(galleryId?: number): void {
    if (!galleryId) {
      console.error('Gallery ID is required for deletion.');
      return;
    }

    this.imageGalleryService.deleteGallery(galleryId).subscribe({
      next: () => {
        this.galleries = this.galleries.filter(
          (gallery) => gallery.galleryId !== galleryId
        );
        console.log('Gallery deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting gallery:', err);
      },
    });
  }

  /**
   * Reset the upload form inputs.
   */
  private resetForm(): void {
    this.fileInput.nativeElement.value = '';
    this.titleInput.nativeElement.value = '';
    this.descriptionInput.nativeElement.value = '';
  }
}
