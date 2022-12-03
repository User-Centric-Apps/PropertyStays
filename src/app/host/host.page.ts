import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-host',
  templateUrl: './host.page.html',
  styleUrls: ['./host.page.scss']
})
export class HostPage implements OnInit {
  hasProp = false;

  propis: any = [];
  propItems: any = [];
  mpData: any = [];

  userToken;
  isLoading = true;

  noImage = '/assets/img/noimage.png';

  constructor(
    private router: Router,
    private wpApiService: WpapiService,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {
    this.showLoading();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading no-mt new-loader'
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

  async ngOnInit() {
    await this.getUserToken();
  }

  async ionViewDidEnter() {
    await this.getUserToken();
  }

  async getUserToken() {
    await this.authService.getUserData2().then(data => {
      const userData = data;
      this.userToken = userData['token'];
      console.log('getUserData2');
      console.log(this.userToken);
      this.getMyProperties(this.userToken);
    });
  }

  async getMyProperties(userToken) {
    this.wpApiService.myProperties(userToken).subscribe(myProp => {
      console.log('My Props: ', myProp);
      this.mpData = myProp;
      this.propis = this.mpData.data;
      this.hideLoading();
      if (Object.keys(this.propis).length > 0) {
        this.hasProp = true;
        this.propItems = this.propis;
      }
    });
  }

  async editProperty(propID) {
    this.router.navigateByUrl('/property/edit/' + propID);
  }

  async deleteProperty(propID) {
    this.wpApiService
      .deleteProperty(this.authService.userToken, propID)
      .subscribe(delData => {
        console.log(delData);
        this.getMyProperties(this.authService.userToken);
      });
  }

  calcClasses() {
    if (!this.hasProp) {
      return {
        empty: true
      };
    }
  }
  goTo(page) {
    this.router.navigateByUrl(page);
  }
}
