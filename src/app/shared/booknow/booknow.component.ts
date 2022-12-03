import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '../../providers/booking.service';
import {
  NavParams,
  ModalController,
  IonSlides,
  ToastController,
  LoadingController,
  AlertController,
  NavController
} from '@ionic/angular';
import { WpapiService } from '../../services/wpapi.service';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Stripe } from '@ionic-native/stripe/ngx';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {
  firedBefore = false;
  rental_id;
  ready_to_pay;
  rental_title;
  user_token;

  bookingPrice;

  bookingResponse;

  currencySymbol;

  currency;

  notAvailable = false;

  acceptTerms = false;

  rentalType;

  userData: any = [];
  userFullData;

  specialReq;

  screenClass = '';

  sliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    preventInteractionOnTransition: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    loop: false
  };

  rentalDetails;

  showTravelers = false;

  bookDetails;

  first_name;
  user_email;
  st_phone;
  st_address;

  bookRequested = false;

  canBook = true;

  rejectedBookingMsg = '';

  number: any = '4242424242424242';
  expMonth: any = 12;
  expYear: any = 2022;
  cvc: any = '220';

  propLoaded = new BehaviorSubject(false);
  updatingReq = new BehaviorSubject(false);

  @ViewChild('stepsSlider') slider: IonSlides;
  constructor(
    public bookingService: BookingService,
    private navParams: NavParams,
    private modalControler: ModalController,
    private wpApiService: WpapiService,
    private authService: AuthService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private stripe: Stripe,
    private navCtrl: NavController
  ) {

  }

  async presentToast(message, color, posision, duration) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: posision,
      duration: duration
    });
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      // translucent: true,
      cssClass: 'page-loading no-mt'
    });
    await loading.present();
  }

  async showUpdating() {
    const updating = await this.loadingController.create({
      message: 'Loading'
      // translucent: true,
    });
    await updating.present();
  }

  async showProcessing() {
    const processing = await this.loadingController.create({
      message: 'Processing'
      // translucent: true,
    });
    await processing.present();
  }

  toggleTravelers() {
    if (this.showTravelers) {
      this.showTravelers = false;
    } else {
      this.showTravelers = true;
    }
  }

  async updateBookingReq() {
    this.propLoaded.subscribe(async state => {
      if (state && !this.updatingReq.value) {
        this.updatingReq.next(true);
        await this.showUpdating();
        await this.wpApiService
          .postBookingReqDetails(
            this.authService.userToken,
            this.rental_id,
            this.bookingService.dateFrom,
            this.bookingService.dateTo,
            this.bookingService.adults,
            this.bookingService.children
          )
          .subscribe(async (res: any) => {
            console.log(res);
            if (res.status === 0 && res.msg === 'Not Available') {
              this.notAvailable = true;
            } else {
              this.bookDetails = res;
              this.currencySymbol = res.current_symbol;
              this.currency = res.currency;
            }
            await this.loadingController.dismiss();
            this.updatingReq.next(false);
          });
      }
    });
  }

  async ngOnInit() {
    console.log(this.firedBefore);

    this.rental_id = this.navParams.get('rental_id');
    this.rental_title = this.navParams.get('rental_name');
    this.user_token = this.authService.userToken;
    this.bookingPrice = this.navParams.get('rental_price');
    this.rentalType = this.navParams.get('rental_type');
    this.ready_to_pay = this.navParams.get('ready_to_pay');
    console.log('this.ready_to_pay');
    console.log(this.ready_to_pay);
    await this.getProfileData();
    await this.showLoading();
    await this.wpApiService
      .postBookingReq(this.user_token, this.rental_id)
      .subscribe(async (res: any) => {
        console.log('postBookingReq', res);
        this.rentalDetails = res;
        this.propLoaded.next(true);
        await this.loadingController.dismiss();
        if (res.status !== 0) {
          this.propLoaded.subscribe(async state => {
            if (state && this.rentalDetails) {
              await this.updateBookingReq();
              this.firedBefore = true;
              this.slider.lockSwipeToNext(true);
              this.slider.lockSwipeToPrev(true);
            }
          });
        }
      });
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
    // await this.loadingController.dismiss();
    this.bookRequested = false;
    this.propLoaded.next(false);

    this.nextStep('');

    this.bookingPrice = null;

    this.canBook = true;
    this.rental_id = null;
    this.ready_to_pay = null;
    this.rental_title = null;
    this.user_token = null;

    this.bookingPrice = null;

    this.userData = [];
    this.userFullData = null;

    this.specialReq = null;

    this.screenClass = '';
    this.rentalDetails = null;
    this.showTravelers = false;
    this.bookDetails = null;
    this.bookRequested = false;
    this.canBook = true;
    this.rejectedBookingMsg = '';
    await this.modalControler.dismiss();
  }

  async getProfileData() {
    this.userData = this.authService.userData;
    this.userFullData = this.authService.userFullData;
    this.first_name = this.userData.user_display_name; 
    this.user_email = this.userData.email; 
    this.st_phone = this.userFullData.data.st_phone; 
  }

  async cityAlert1(message) {
    const cityAlert1 = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: [
        {
          text: 'OK, Return back',
          handler: () => {
            console.log('Return Back');
            this.closeModal();
          }
        }
      ]
    });

    await cityAlert1.present();
  }

  async nextStep(step: any = null) {
    if (step !== null && step !== '') {
      switch (step) {
        case 'getPrice':
          console.log(this.rentalType);
          const formData = {
            rental_id: this.rental_id,
            from: this.bookingService.dateFrom,
            to: this.bookingService.dateTo,
            adults: this.bookingService.adults,
            children: this.bookingService.children,
            type: this.rentalType
          };
          const loading = await this.loadingController.create({
            message: 'Checking Availability'
          });
          await loading.present();
          console.log(formData);
          this.bookRequested = true;
          await this.wpApiService
            .bookingPrice(this.authService.userToken, formData)
            .subscribe(async (bookPrice: any) => {
              await loading.dismiss();
              console.log(bookPrice);
              if (bookPrice['rule'] === 1) {
                this.cityAlert1(bookPrice['message']);
                this.canBook = false;
                this.rejectedBookingMsg = bookPrice['message'];
              } else {
                if (
                  bookPrice['status'] === 0 ||
                  bookPrice['status'] === 'Not Available'
                ) {
                  await this.presentToast(
                    'The selected dates are not available for booking, please change the dates and try again.',
                    'danger',
                    'bottom',
                    4000
                  );
                } else {
                  console.log('bookPrice');
                  console.log(bookPrice['price']);
                  this.bookingPrice = bookPrice['price'];
                  this.currencySymbol = bookPrice['current_symbol'];
                  this.currency = bookPrice['currency'];
                  this.slider.lockSwipeToNext(false).then(() => {
                    this.slider.slideNext().then(() => {
                      this.slider.lockSwipeToNext(true);
                    });
                  });
                }
              }
            });
          break;

        case 'checkOut':
          await this.doStipePay();
        break;

        case 'sendMessage':
          await this.sendMessage();
        break;

        case 'done':
          this.screenClass = 'done-screen';

          break;
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

  async doStipePay() {
    this.payWithStripe();
    
  }

  async payWithStripe() {
    this.stripe.setPublishableKey('sk_test_51JP2q5HtoAefYlJfW4PzSQTiFgvmddmLZfUIKxnNKAoOxlhmsYmxC3SYNvl1bYOitE0PwjoOk874RIrYa7DjzHoH00JmYOKDmS');

    let card = {
      number: this.number,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvc: this.cvc
    }

    this.stripe.createCardToken(card)
      .then(async token => {
        alert(token);
        
        const formData2 = {
          rental_id: this.rental_id,
          from: this.bookingService.dateFrom,
          to: this.bookingService.dateTo,
          adults: this.bookingService.adults,
          children: this.bookingService.children,
          total_bill: this.bookingPrice
        };
        await this.showProcessing();
        await this.wpApiService
          .doBooking(this.authService.userToken, formData2)
          .subscribe(async booking => {
            this.screenClass = 'done';
            this.slider.lockSwipeToNext(false).then(() => {
              this.slider.slideNext().then(async () => {
                this.slider.lockSwipeToNext(true);
                await this.loadingController.dismiss();
              });
            });
        });

      })
      .catch(async error => {
        // Error or render dialog closed without being successful
        console.log('Dialog Closed', error);
        await this.presentToast(
          'We are facing some isuues on payment right now, please try again later.',
          'danger',
          'bottom',
          4000
        );
      });
  }

  async sendMessage()
  {
    const formData2 = {
      rental_id: this.rental_id,
      from: this.bookingService.dateFrom,
      to: this.bookingService.dateTo,
      adults: this.bookingService.adults,
      children: this.bookingService.children,
      first_name: this.first_name,
      email: this.user_email,
      phone: this.st_phone,
      address: this.st_address,
      special_requirements: this.specialReq,
      total_bill: this.bookingPrice
    };
    await this.showProcessing();
    await this.wpApiService
      .doBooking(this.authService.userToken, formData2)
      .subscribe(async booking => {
        console.log(booking);
        this.screenClass = 'done';
        this.slider.lockSwipeToNext(false).then(() => {
          this.slider.slideNext().then(async () => {
            this.slider.lockSwipeToNext(true);
            await this.loadingController.dismiss();
          });
        });
    });
  }

  gotoTerms() {
    this.showLoading();
    this.navCtrl.navigateForward('terms');
  }
}
