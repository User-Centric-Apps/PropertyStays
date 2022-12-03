import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public hasLikes = false;

  userToken;
  savedRentals;
  savedCount;
  dRentals: any = [];
  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: true
  };

  isLoading = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private wpApiService: WpapiService,
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

  getUserData() {
    // Get User Token
    this.authService.getUserData2().then(data => {
      const userData = data;
      this.userToken = userData['token'];
      this.wpApiService
        .getSavedRentals(this.authService.userToken)
        .subscribe(rentals => {
          this.dRentals = rentals;
          this.savedRentals = this.dRentals.data;
          this.savedCount = Object.keys(this.savedRentals).length;
          if (Object.keys(this.savedRentals).length > 0) {
            this.hasLikes = true;
          }
          this.hideLoading();
        });
    });
  }

  ngOnInit() {
    this.getUserData();
  }

  ionViewDidEnter() {
    this.getUserData();
  }

  calcClasses() {
    if (!this.hasLikes) {
      return {
        empty: true
      };
    }
  }

  removeLike(index, rental_id) {
    this.wpApiService
      .setFav(this.authService.userToken, rental_id, 0)
      .subscribe(data => {
        console.log(data);
        if (data['status'] === 1) {
          if (index !== -1) {
            this.savedRentals.splice(index, 1);
            this.savedCount = Object.keys(this.savedRentals).length;
          }
        }
      });
  }

  backHome() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  viewDetai(rental_id) {
    this.router.navigateByUrl('/tabs/tab3/rentaldetail/' + rental_id);
  }
}
