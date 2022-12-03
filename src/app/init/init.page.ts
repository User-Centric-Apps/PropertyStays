import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  locationStatus = false;

  constructor(
    public loadingController: LoadingController,
    private geolocation: Geolocation,
    private authService: AuthService,
    private wpApiService: WpapiService,
  ) { }

  ngOnInit() {
    this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Loading, please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async checkLocation() {
    // Get Device Location (lat, lng)
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.locationStatus = true;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  async checkLogin() {
    
  }

}
