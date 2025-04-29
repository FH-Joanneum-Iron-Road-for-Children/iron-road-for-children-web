import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NewsService } from '../../../news-page.service';
import { VideoDto, VideoFileUploadDTO } from '../../../../models/models';

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

  constructor(private newsService: NewsService) {}

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
        console.error('Error fetching video:', error);
      }
    );
  }

  // Submit the video upload
  uploadVideo(event: Event): void {
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
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('onfileselected event:' + event);
    if (input?.files?.[0]) {
      this.fileEntry.file = input.files[0];
    }
  }

  ngOnDestroy(): void {}
}
