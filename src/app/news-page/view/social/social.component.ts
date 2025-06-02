import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../../services/social-media.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  socialLinks: { socialMediaId: number; title: string; link: string }[] = [];

  givenSocialLinks: { socialMediaId: number; title: string; link: string }[] = [
    { socialMediaId: 0, title: 'Instagram', link: '' },
    { socialMediaId: 1, title: 'Facebook', link: '' },
    { socialMediaId: 2, title: 'LinkedIn', link: '' },
    { socialMediaId: 3, title: 'Snapchat', link: '' },
  ];

  constructor(private socialMediaService: SocialMediaService) {}

  ngOnInit() {
    // Load all social media links when the component initializes
    this.loadSocialLinks();
  }

  // Load all social media links from the backend
  loadSocialLinks() {
    this.socialMediaService.getAllSocialMedias().subscribe(
      (data) => {
        this.socialLinks = data; // Update the socialLinks array with fetched data
        this.givenSocialLinks = this.givenSocialLinks.filter(
          (given) =>
            !this.socialLinks.some((existing) => existing.title === given.title)
        );

        console.log('Sozial Links geladen:', this.socialLinks);
      },
      (error) => {
        console.error('Fehler beim Laden der Sozial Links:', error);
      }
    );
  }

  // Add new social media link
  addSocialLink(title: string, link: string) {
    const newSocialMedia = {
      socialMediaId: 0,
      title,
      link,
    };

    this.socialMediaService.addSocialMedia(newSocialMedia).subscribe(
      (response: any) => {
        console.log('Sozial Links hinzugefügt:', response);
        this.socialLinks.push(response); // Update the list with the newly added social media
        this.givenSocialLinks = this.givenSocialLinks.filter(
          (given) =>
            !this.socialLinks.some((existing) => existing.title === given.title)
        );
      },
      (error: any) => {
        console.error('Fehler beim Hinzufügen der Sozial Links:', error);
      }
    );
  }

  // delete social media link
  removeFileEntry(index: number): void {
    this.socialMediaService
      .deleteSocialMedia(this.socialLinks[index].socialMediaId)
      .subscribe(
        (response) => {
          alert('Datei erfolgreich gelöscht!');
          const removedItem = this.socialLinks.splice(index, 1)[0]; // Remove and capture the item

          if (
            !this.givenSocialLinks.some(
              (given) => given.title === removedItem.title
            )
          ) {
            this.givenSocialLinks.push(removedItem);
          }
        },
        (error) => {
          alert('Fehler beim Löschen der Datei!');
        }
      );
  }
}
