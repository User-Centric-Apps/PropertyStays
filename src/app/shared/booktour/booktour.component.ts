import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '../../providers/booking.service';
import {
  NavParams,
  ModalController,
  IonSlides,
  ToastController,
  LoadingController
} from '@ionic/angular';
import { WpapiService } from '../../services/wpapi.service';
import { AuthService } from '../../services/auth.service';
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration
} from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-booktour',
  templateUrl: './booktour.component.html',
  styleUrls: ['./booktour.component.scss']
})
export class BooktourComponent implements OnInit {
  rental_id;
  rental_title;
  user_token;

  bookingPrice;

  userData: any = [];
  userFullData;

  specialReq;

  sliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    preventInteractionOnTransition: true,
    allowSlidePrev: false,
    allowSlideNext: false,
    loop: false
  };

  first_name;
  user_email;
  st_phone;
  st_address;

  @ViewChild('stepsSlider') slider: IonSlides;

  constructor(
    public bookingService: BookingService,
    private navParams: NavParams,
    private modalControler: ModalController,
    private wpApiService: WpapiService,
    private authService: AuthService,
    private payPal: PayPal,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  async presentToast(message, color, posision, duration) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: posision,
      duration: duration
    });
    toast.present();
  }

  async ngOnInit() {
    this.rental_id = this.navParams.get('rental_id');
    this.rental_title = this.navParams.get('rental_name');
    this.user_token = this.navParams.get('user_token');
    this.bookingPrice = this.navParams.get('rental_price');
    this.getProfileData();
  }
  async spinnerMin(obj) {
    switch (obj) {
      case 'adults':
        this.bookingService.adults = this.bookingService.adults - 1;
        break;
      case 'children':
        this.bookingService.children = this.bookingService.children - 1;
        break;
    }
  }

  async spinnerPlus(obj) {
    switch (obj) {
      case 'adults':
        this.bookingService.adults = this.bookingService.adults + 1;
        break;
      case 'children':
        this.bookingService.children = this.bookingService.children + 1;
        break;
    }
  }
  async closeModal() {
    this.modalControler.dismiss();
  }

  async getProfileData() {
    this.userData = this.authService.userData;
    this.userFullData = this.authService.userFullData;
    this.first_name = this.userData.user_display_name; 
    this.user_email = this.userData.email; 
    this.st_phone = this.userFullData.data.st_phone; 
  }

  async nextStep(step: any = null) {
    if (step !== null && step !== '') {
      switch (step) {
        case 'getPrice':
          const formData = {
            rental_id: this.rental_id,
            from: this.bookingService.dateFrom,
            to: this.bookingService.dateTo,
            adults: this.bookingService.adults,
            children: this.bookingService.children,
            type: 'tour'
          };
          const loading = await this.loadingController.create({
            message: 'Checking Availability'
          });
          await loading.present();
          this.wpApiService
            .bookingPrice(this.user_token, formData)
            .subscribe(bookPrice => {
              loading.dismiss();
              console.log(bookPrice);
              if (
                bookPrice['status'] === 0 ||
                bookPrice['status'] === 'Not Available'
              ) {
                this.presentToast(
                  'The selected dates are not available for booking, please change the dates and try again.',
                  'danger',
                  'bottom',
                  4000
                );
              } else {
                console.log(bookPrice['price']);
                this.bookingPrice = bookPrice['price'];
                this.slider.lockSwipeToNext(false).then(() => {
                  this.slider.slideNext().then(() => {
                    this.slider.lockSwipeToNext(true);
                  });
                });
              }
            });
          break;

        case 'checkOut':
          this.doPaypal();
      }
    }
  }

  async prevStep() {
    this.slider.lockSwipeToPrev(false).then(() => {
      this.slider.slidePrev().then(() => {
        this.slider.lockSwipeToPrev(true);
      });
    });
  }

  async doPaypal() {
    const formData2 = {
      rental_id: this.rental_id,
      from: this.bookingService.dateFrom,
      to: this.bookingService.dateTo,
      adults: this.bookingService.adults,
      children: this.bookingService.children,
      first_name: this.first_name,
      email: this.user_email,
      phone: this.st_phone,
      special_requirements: this.specialReq
    };
    this.wpApiService
      .doBooking(this.user_token, formData2)
      .subscribe(booking => {
        console.log(booking);
        this.slider.lockSwipeToNext(false).then(() => {
          this.slider.slideNext().then(() => {
            this.slider.lockSwipeToNext(true);
          });
        });
      });
  }
}
