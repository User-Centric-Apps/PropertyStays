import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { WpapiService } from 'src/app/services/wpapi.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-reviewpost',
  templateUrl: './reviewpost.component.html',
  styleUrls: ['./reviewpost.component.scss']
})
export class ReviewpostComponent implements OnInit {
  reviewData: any = {
    content: '',
    rating: 1
  };

  user_token;
  rental_id;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private wpApiService: WpapiService,
    public toastController: ToastController,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.user_token = this.navParams.get('token');
    this.rental_id = this.navParams.get('rental_id');
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async addStars(field, num) {
    this.reviewData[field] = num;
  }

  async submitReview() {
    this.wpApiService
      .postReview(this.authService.userToken, this.rental_id, this.reviewData)
      .subscribe(reviewRes => {
        if (reviewRes['status'] === 1) {
          this.presentToast(
            'Your review has been submitted successefully',
            'success'
          );
          this.modalCtrl.dismiss();
        } else {
          this.presentToast(
            'Error submitting review, please try again',
            'danger'
          );
        }
      });
  }
}
