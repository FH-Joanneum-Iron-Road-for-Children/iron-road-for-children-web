import { Component } from '@angular/core';
import { NewsService } from '../../../news-page.service';
import { VideoDto } from '../../../../models/models';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent {
  public video: VideoDto | undefined;
  isLoading = true;

  constructor(private videoService: NewsService) {}

  ngOnInit(): void {
    this.videoService.getVideo().subscribe((video) => {
      this.video = video;

      this.isLoading = false;
    });

    this.videoService.getVideo().subscribe((video) => (this.video = video));
  }
}
