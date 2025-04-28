import { Component, Inject, Input } from '@angular/core';
import { SocialMediaService } from '../../../services/social-media.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
  constructor(private socialMediaService: SocialMediaService) {}

  socialLinks = [
    {
      socialMediatId: 0,
      title: 'Facebook',
      link: 'https://www.facebook.com/irfcfestival/',
    },
    {
      socialMediatId: 1,
      title: 'Instagram',
      link: 'https://www.instagram.com/irfc_festival/',
    },
  ];

  addSocialLink(title: string, link: string) {
    //get /api/socialMedias with id title link
    //http://localhost:4200/api/socialMedias but returns 404

    const socialMediatId: number = this.socialLinks.length;

    this.socialLinks.push({ socialMediatId, title, link });

    this.socialMediaService
      .addSocialMedia({ socialMediatId, title, link })
      .subscribe(
        (response: any) => {
          console.log('Social media added:', response);
        },
        (error: any) => {
          console.error('Error adding social media:', error);
        }
      );
  }
}
