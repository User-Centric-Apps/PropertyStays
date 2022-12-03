import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss']
})
export class PrivacyPage implements OnInit {
  privacy: any = '';
  pdata: any = '';
  constructor(
    private navCtrl: NavController,
    private wpApiService: WpapiService
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.wpApiService.getPrivacy().subscribe(rszlt => {
      this.pdata = rszlt;
      this.privacy = this.pdata.data;
    });
  }
}
