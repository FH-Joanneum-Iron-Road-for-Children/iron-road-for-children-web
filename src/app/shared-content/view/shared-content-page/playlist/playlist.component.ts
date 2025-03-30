import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  tracks = [
    {
      title: 'Chill Vibes',
      image: 'assets/images/chill-vibes.jpg',
    },
    {
      title: 'Workout Hits',
      image: 'assets/images/workout-hits.jpg',
    },
    {
      title: 'Top 50',
      image: 'assets/images/top-50.jpg',
    },
  ];
}
