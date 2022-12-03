import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { WpapiService } from 'src/app/services/wpapi.service';
import { AuthService } from 'src/app/services/auth.service';
// import { ReviewpostPage } from './../../reviewpost/reviewpost.page';
import { ReviewpostComponent } from '../../shared/reviewpost/reviewpost.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
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
        console.log('this.reviewsData');
        console.log(this.reviewsData);
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

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewpostComponent,
      componentProps: {
        token: this.authService.userToken,
        rental_id: this.rental_id
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.rental_id = this.navParams.get('toId');
    console.log(this.rental_id);
    this.user_token = this.navParams.get('user_token');
    this.getReviewsData();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async addReview() {
    this.presentModal();
  }
}
