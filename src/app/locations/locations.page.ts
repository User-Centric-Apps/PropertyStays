import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss']
})
export class LocationsPage implements OnInit {
  allLocations: any = [];
  loc: any = [];
  isLoading = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private wpApiService: WpapiService,
    private loadingCtrl: LoadingController
  ) {}

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

  ngOnInit() {
    this.getAllLocations();
  }

  cityDetail(city_id) {
    // this.router.navigateByUrl('/tabs/tab1/city-detail');
    this.navCtrl.navigateForward('/tabs/tab1/city-detail/' + city_id);
  }

  async getAllLocations() {
    this.showLoading();
    // Get Recomended Locations
    await this.wpApiService.getAllLocations().subscribe(locations => {
      this.loc = locations;
      this.allLocations = this.loc.data;
      this.hideLoading();
    });
  }
}
