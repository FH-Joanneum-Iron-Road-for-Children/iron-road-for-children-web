import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../news-page/news-page.service';

@Component({
  selector: 'app-highlight-upload',
  templateUrl: './highlight-upload.component.html',
  styleUrls: ['./highlight-upload.component.css'],
})
export class HighlightUploadComponent {
  imageUrl: string | ArrayBuffer | null = null;
  imageLink = '';
  altText = '';
  description = '';
  fileType = '';
  selectedFile: File | null = null;

  constructor(private newsServerice: NewsService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target!.result;
      };
      reader.readAsDataURL(this.selectedFile);
      this.fileType = this.selectedFile.name.split('.').pop() || '';
    }
  }

  uploadFile(event: any) {
    if (!event.target.files[0]) return;
    this.selectedFile = event.target.files[0];

    const formData = new FormData();
    formData.append('file', this.selectedFile!);
    formData.append('altText', this.altText);
    formData.append('description', this.description);
    formData.append('fileType', this.fileType);

    this.newsServerice.createHighlight(formData).subscribe(
      (response) => {
        this.imageUrl = response.path;
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }
}
