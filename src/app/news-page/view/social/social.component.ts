import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/irfcfestival/',
      icon: '../../../../assets/facebook-icon.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/irfc_festival/',
      icon: '../../../../assets/instagram-icon.png',
    },
  ];

  addSocialLink(name: string, url: string, icon: string) {
    this.socialLinks.push({ name, url, icon });
  }
}
