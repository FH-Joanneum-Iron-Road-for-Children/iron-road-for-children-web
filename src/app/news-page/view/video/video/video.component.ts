import type { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import type { NewsService } from '../../../news-page.service';
import type { VideoDto } from '../../../../models/models';
import type { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

export interface DialogData {
  confirmBool: boolean;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit, OnDestroy {
  video: VideoDto = { videoId: 0, altText: '', path: '' };
  isLoading = true;

  fileEntry: { file: File | null; altText: string; path: string } = {
    file: null,
    altText: '',
    path: '',
  };

  confirmBool = false;
  formSubmitted = false;
  constructor(private newsService: NewsService, public dialog: MatDialog) {}

  openDialog(): boolean {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed. Result:', result);
      this.confirmBool = result;
    });
    return this.confirmBool;
  }

  ngOnInit() {
    // Fetch video on initialization
    this.fetchVideo();
  }

  // Fetch video from API and update the video player
  fetchVideo() {
    this.newsService.getVideo().subscribe(
      (video) => {
        this.video = video;
      },
      (error) => {
        console.error('Fehler beim Video laden:', error);
      }
    );
  }

  // Submit the video upload
  uploadVideo(event: Event): void {
    this.formSubmitted = true;
    // get confirmation first
    this.confirmBool = this.openDialog();
    console.log('after - result of popup: ', this.confirmBool);
    if (this.confirmBool) {
      //proceed with upload
      event.preventDefault();
      const formData = new FormData();
      console.log(this.fileEntry.file, this.fileEntry.altText);
      if (this.fileEntry.file != null) {
        formData.append('file', this.fileEntry.file, this.fileEntry.file.name);
        formData.append('altText', this.fileEntry.altText);
        formData.append(
          'fileType',
          this.fileEntry.file.name.split('.').pop()?.toUpperCase() || ''
        );
        this.newsService.postVideos(formData).subscribe(
          (response) => {
            alert('Video erfolgreich hochgeladen');
            this.video = response;
          },
          (error) => {
            alert('Fehler beim Hochladen' + error);
          }
        );
      }
    } else {
      //do nothing
      console.log('nothing - result of popup: ', this.confirmBool);
    }
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('onfileselected event:' + event);
    if (input?.files?.[0]) {
      this.fileEntry.file = input.files[0];
    }
  }

  ngOnDestroy(): void {
    console.log('To be Implemented, currently unused');
  }
}
