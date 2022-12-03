import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  socialNetworks = [
    {
      title: 'Instagram',
      icon: '/assets/icons/social/instagram.svg',
      url: 'https://www.instagram.com/propertystays.com7/',
    },
    {
      title: 'Facebook',
      icon: '/assets/icons/social/facebook.svg',
      url: 'https://www.facebook.com/propertystays',
    },
    {
      title: 'Twitter',
      icon: '/assets/icons/social/twitter.svg',
      url: 'https://twitter.com/propertystays',
    },
    {
      title: 'Pinterest',
      icon: '/assets/icons/social/pinterest.svg',
      url: 'https://www.pinterest.com/propertystays/',
    },
  ];
  appAbout;
  constructor(
    public shareService: ShareService,
    public wpApiService: WpapiService
  ) {}

  ngOnInit() {
    this.wpApiService.getAbout().subscribe(
      (about: any) => {
        let ab = about.data;
        this.appAbout = ab;
        console.log(this.appAbout);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  shareApp() {
    const options = {
      message: this.appAbout.title ? this.appAbout.title : null, // not supported on some apps (Facebook, Instagram)
      subject: this.appAbout.title ? this.appAbout.title : null, // fi. for email
      files: [
        this.appAbout.image,
      ], // an array of filenames either locally or remotely
      url: this.appAbout.url ? this.appAbout.url : null,
      chooserTitle: 'Pick an app to share', // Android only, you can override the default share sheet title
    };
    this.shareService.shareAppWithOptions(options);
  }
}
