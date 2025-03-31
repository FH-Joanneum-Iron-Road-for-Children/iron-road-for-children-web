import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
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

    const socialMediatId: number = this.socialLinks.length;

    this.socialLinks.push({ socialMediatId, title, link });
  }
}
