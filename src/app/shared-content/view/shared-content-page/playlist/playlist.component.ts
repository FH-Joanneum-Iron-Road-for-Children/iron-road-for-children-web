import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PlaylistService } from 'src/app/services/playlist.service';
import { PlaylistDto } from 'src/app/models/models';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  playlists: PlaylistDto[] = []; // List of playlist objects
  newPlaylistUrl: string = ''; // URL for the new playlist
  newPlaylistTitle: string = ''; // Title for the new playlist

  constructor(
    private playlistService: PlaylistService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.fetchPlaylists();
  }

  fetchPlaylists(): void {
    this.playlistService.getPlaylist().subscribe({
      next: (fetchedPlaylist) => {
        if (fetchedPlaylist) {
          this.playlists = [fetchedPlaylist]; // Add the single playlist to the array
          console.log('Playlist fetched successfully:', fetchedPlaylist);
        }
      },
      error: (err) => console.error('Error fetching playlist', err),
    });
  }

  addPlaylist() {
    if (this.newPlaylistUrl.trim() && this.newPlaylistTitle.trim()) {
      const spotifyPlaylistId = this.extractPlaylistId(
        this.newPlaylistUrl.trim()
      );
      const newPlaylist: PlaylistDto = {
        title: this.newPlaylistTitle.trim(),
        spotifyPlaylistId: spotifyPlaylistId,
      };

      // Send the new playlist to the backend
      this.playlistService.savePlaylist(newPlaylist).subscribe({
        next: (savedPlaylist) => {
          // Add the saved playlist (with its ID) to the local list
          this.playlists.push(savedPlaylist);
          console.log('Playlist saved successfully:', savedPlaylist);
        },
        error: (err) => console.error('Error saving playlist', err),
      });

      // Clear the input fields
      this.newPlaylistUrl = '';
      this.newPlaylistTitle = '';
    }
  }

  deletePlaylist(index: number) {
    const playlistId = this.playlists[index].playlistId;

    if (playlistId) {
      this.playlistService.deletePlaylist(playlistId).subscribe({
        next: () => {
          // Remove the playlist from the local list
          this.playlists.splice(index, 1);
          console.log(`Playlist with ID ${playlistId} deleted successfully.`);
        },
        error: (err) =>
          console.error(`Error deleting playlist with ID ${playlistId}`, err),
      });
    } else {
      console.error('Cannot delete playlist: Missing playlistId');
    }
  }

  // savePlaylists() {
  //   this.playlistService.savePlaylists(this.playlists).subscribe({
  //     next: (updatedPlaylists) => {
  //       this.playlists = updatedPlaylists; // Update with the response from the backend
  //       console.log('Playlists saved successfully');
  //     },
  //     error: (err) => console.error('Error saving playlists', err),
  //   });
  // }

  private extractPlaylistId(url: string): string {
    const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
    return match ? match[1] : url; // Extract the playlist ID from the URL
  }
}
