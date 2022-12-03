import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';

import * as moment from 'moment';
import { WpapiService } from '../services/wpapi.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  userData;
  userToken;
  usData;
  isLoading = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public wpApiService: WpapiService,
    private loadingCtrl: LoadingController
  ) {
    this.showLoading();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader'
    });
    return await loading.present();
  }
  async hideLoading() {
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
      }, 500);
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  async getProfile() {
    await this.wpApiService
      .getProfile(this.authService.userToken)
      .subscribe(uData => {
        this.usData = uData;
        this.userData = this.usData.data;
        console.log('this.userData');
        console.log(this.userData);
        this.hideLoading();
      });
  }

  editProfile() {
    this.showLoading();
    this.navCtrl.navigateForward('edit');
  }

  ngOnInit() {
    this.getProfile();
  }
}
