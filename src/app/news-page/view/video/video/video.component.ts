import { NewsService } from '../../../news-page.service';
import { VideoDto } from '../../../../models/models';
import { OnDestroy, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() video: VideoDto = {
    videoId: 0,
    altText: '',
    path: '',
  };
  @Input() videoPath = '';
  @Input() videoId = 0;
  isLoading = true;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private videoService: NewsService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  videoFormGroup = new FormGroup({
    videoId: new FormControl(0, Validators.required),
    altText: new FormControl('', Validators.required),
    path: new FormControl('', Validators.nullValidator),
  });

  receivedVideo: VideoDto = this.video;

  ngOnInit(): void {
    this.videoService.getVideo().subscribe((video) => {
      this.video = video;

      this.isLoading = false;
    });

    this.videoService.getVideo().subscribe((video) => (this.video = video));

    if (this.videoId != undefined) {
      this.videoService.getVideo().subscribe((video: VideoDto) => {
        this.video = video;

        if (this.video) {
          // edit video
          this.videoFormGroup.patchValue({
            videoId: this.videoId,
            altText: this.video.altText,
            path: this.video.path,
          });

          this.path = this.video?.path ?? null;
          this.altText = this.video?.altText ?? null;

          this.receivedVideo = this.video;
          this.receivedVideo = this.video;
          console.log(this.receivedVideo);
        }
      });
    }
  }

  uploadedFile: File | null = null;
  addVideoList: (File | null)[] = Array(4).fill(null);
  filePreviews: (string | ArrayBuffer | null)[] = Array(4).fill(null);

  subscription: Subscription = new Subscription();
  private altText = '';
  private path = '';

  openFileSelectDialog(index: number) {
    document.getElementById('file-input' + index)?.click();
  }

  onFileSelected(video: VideoDto, index: number) {
    this.uploadedFile = video as unknown as File;

    if (this.isValidVideoFile()) {
      this.addVideoList[index] = this.uploadedFile;
      this.path = '';
      this.altText = '';
      this.videoId = 0;

      // preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreviews[index] = e.target.result;
      };
      reader.readAsDataURL(this.uploadedFile);
    }
  }

  isValidVideoFile(): boolean {
    if (this.uploadedFile) {
      const allowedFormat = 'video/mp4';
      const maxFileSize = 2 * 1024 * 1024; // 2MB

      return (
        allowedFormat.includes(this.uploadedFile.type) &&
        this.uploadedFile.size <= maxFileSize
      );
    }
    return false;
  }

  submit() {
    let titleVideo: VideoDto;
    const sentVideo: VideoDto[] = [];
    let sentVideoCounter = 0;

    for (const addVideo of this.addVideoList) {
      if (addVideo !== null) {
        let fileType = '';
        if (addVideo.type == 'video/mp4') {
          fileType = 'MP4';
        }

        const addedVideo: VideoDto = this.video;
        titleVideo = addedVideo;
        this.subscription.add(
          this.videoService.postVideos(addedVideo).subscribe({
            next: (response: any) => {
              sentVideoCounter++;
              if (sentVideoCounter === 1) {
                titleVideo = response;
              } else {
                sentVideo.push(response);
              }
            },
            error: (error: any) => {
              console.log(error);
            },
            complete: () => {
              // if video is uploaded
              let videoId = this.videoId;
              if (videoId == null || videoId == 0) {
                videoId = 0;
              }
              if (sentVideo) {
                const video: VideoDto = {
                  videoId: this.videoId,
                  altText: this.altText,
                  path: this.path,
                };
                console.log(video);
                this.videoService.createVideo(video).subscribe((video: any) => {
                  if (video) {
                    this.router.navigate(['news-page']);
                  }
                });
              }
            },
          })
        );
      }
    }
  }
}
