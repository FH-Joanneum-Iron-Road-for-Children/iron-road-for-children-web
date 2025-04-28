import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../news-page/news-page.service';
import { HighlightDTO, HighlightFileUploadDTO } from '../models/models';

@Component({
  selector: 'app-highlight-upload',
  templateUrl: './highlight-upload.component.html',
  styleUrls: ['./highlight-upload.component.css'],
})
export class HighlightUploadComponent {
  fileToUpload: HighlightFileUploadDTO = {
    file: null,
    altText: '',
    description: '',
  };

  existingFiles: HighlightDTO[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllHighlights().subscribe(
      (highlights) => {
        this.existingFiles = highlights;
      },
      (error) => {
        console.error('Error fetching highlights:', error);
      }
    );
  }

  removeFileEntry(index: number): void {
    this.newsService
      .deleteHighlight(this.existingFiles[index].highlightId)
      .subscribe(
        (response) => {
          alert('Datei erfolgreich gelöscht!');
          this.existingFiles.splice(index, 1); // Remove the file from the list
        },
        (error) => {
          alert('Fehler beim Löschen der Datei!');
        }
      );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.fileToUpload.file = file;
      this.fileToUpload.altText = file.name;
    }
  }

  uploadFile(): void {
    const formData = new FormData();
    if (this.fileToUpload?.file != null) {
      formData.append(
        'file',
        this.fileToUpload.file,
        this.fileToUpload.file.name
      );
      formData.append('altText', this.fileToUpload.altText);
      formData.append('description', this.fileToUpload.description);
      formData.append(
        'fileType',
        this.fileToUpload.file.name.split('.').pop()?.toUpperCase() || ''
      );

      this.newsService.createHighlight(formData).subscribe(
        (response) => {
          alert('Datei erfolgreich hochgeladen!');
          this.existingFiles.push(response);
        },
        (error) => {
          alert('Fehler beim Hochladen der Datei!');
        }
      );
    }
  }

  isVideo(filePath: string): boolean {
    const videoExtensions = ['mp4'];
    const extension = filePath.split('.').pop()?.toLowerCase() || '';
    return videoExtensions.includes(extension);
  }
}
