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
      icon: 'src/assets/facebook-icon.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/irfc_festival/',
      icon: 'src/assets/instagram-icon.png',
    },
  ];
}
