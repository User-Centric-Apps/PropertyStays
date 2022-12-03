import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-alltours',
  templateUrl: './alltours.page.html',
  styleUrls: ['./alltours.page.scss']
})
export class AlltoursPage implements OnInit {
  allTours;
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

  async getAllTours() {
    this.showLoading();
    // Get Recomended Locations
    await this.wpApiService.getAllTours().subscribe(tours => {
      this.allTours = tours;
      this.hideLoading();
    });
  }

  tourDetail(tour_id) {
    this.navCtrl.navigateForward('/tabs/tab1/tour/' + tour_id);
  }

  ngOnInit() {
    this.getAllTours();
  }
}
