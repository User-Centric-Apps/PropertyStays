import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { WpapiService } from 'src/app/services/wpapi.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tour-reviews',
  templateUrl: './tour-reviews.component.html',
  styleUrls: ['./tour-reviews.component.scss']
})
export class TourReviewsComponent implements OnInit {
  rental_id;
  user_token;
  reviewsData;

  isLoading = true;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private wpApiService: WpapiService,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {}

  async getReviewsData() {
    this.showLoading();
    this.wpApiService
      .getReviews(this.authService.userToken, this.rental_id)
      .subscribe(data => {
        this.reviewsData = data[0];
        this.hideLoading();
      });
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

  ngOnInit() {
    this.rental_id = this.navParams.get('id');
    this.user_token = this.navParams.get('user_token');
    this.getReviewsData();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
