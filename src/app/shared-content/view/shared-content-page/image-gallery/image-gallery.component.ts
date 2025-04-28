import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  ImageGalleryService,
  ImageDto,
} from 'src/app/services/image-gallery.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  images: ImageDto[] = [];
  isLoading = true;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('altTextInput') altTextInput!: ElementRef<HTMLInputElement>;

  constructor(private imageGalleryService: ImageGalleryService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.imageGalleryService.getAllImages().subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching images:', err);
        this.isLoading = false;
      },
    });
  }

  /**
   * Handle the form submission to upload a new image.
   * @param event The form submission event.
   */
  onUpload(event: Event): void {
    event.preventDefault();

    const file = this.fileInput.nativeElement.files?.[0];
    const altText = this.altTextInput.nativeElement.value;

    if (file) {
      this.imageGalleryService.uploadImage(file, altText).subscribe({
        next: (newImage) => {
          this.images.push(newImage); // Add the new image to the gallery
          console.log('Image uploaded successfully');
          this.resetForm();
        },
        error: (err) => {
          console.error('Error uploading image:', err);
        },
      });
    }
  }

  /**
   * Reset the upload form inputs.
   */
  private resetForm(): void {
    this.fileInput.nativeElement.value = '';
    this.altTextInput.nativeElement.value = '';
  }

  deleteImage(imageId: number): void {
    this.imageGalleryService.deleteImage(imageId).subscribe({
      next: () => {
        this.images = this.images.filter((image) => image.id !== imageId);
        console.log('Image deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting image:', err);
      },
    });
  }
}
