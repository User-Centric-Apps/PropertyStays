import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
} from '@ionic-native/google-maps';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { ModalController, IonSelect } from '@ionic/angular';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { PopoverController } from '@ionic/angular';
import { SendmsgComponent } from '../components/sendmsg/sendmsg.component';
import { LoadingController } from '@ionic/angular';
// import { ImagesViewer2Page } from '../shared/images-viewer2/images-viewer2.page';
// import { BookPage } from '../booking/book/book.page';
import { BooknowComponent } from '../shared/booknow/booknow.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageViewerComponent } from '../shared/image-viewer/image-viewer.component';
import { ShareService } from '../services/share.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.page.html',
  styleUrls: ['./rentaldetail.page.scss'],
})
export class RentaldetailPage implements OnInit {
  @ViewChild('mySelect') selectRef: IonSelect;
  map: GoogleMap;
  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: true,
  };

  passedId = null;
  userToken;
  rentalData;
  ownerID;
  rentalLocation;
  aminities: Array<any>;
  aminiteisCount;

  expand = false;
  descMore = false;
  descMoreText = 'more';

  isLoading = true;

  scrollPosition = 0;
  social : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wpApiService: WpapiService,
    private authService: AuthService,
    private navCtrl: NavController,
    public modalController: ModalController,
    private loadingCtrl: LoadingController,
    public popoverController: PopoverController,
    public sanitizer: DomSanitizer,
    public shareService: ShareService,
    public socialSharing: SocialSharing
  ) {}
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader',
    });
    return await loading.present();
  }

  async ngOnInit() {
    await this.showLoading();
    this.passedId = this.activatedRoute.snapshot.paramMap.get('rental_id');
    await this.getRental().then(async () => {
      await this.hideLoading();
    });
  }

  shareThis() {
    this.shareService.shareWithOptions(
      this.rentalData.title,
      this.rentalData.images[0].image,
      this.rentalData.images[0].image,
      this.rentalData.url
    );
  }

  //New Function

  openSelect() {
      this.selectRef.open()
    }

async shareSocialNw() {
      if(this.social == 1)
        {
          this.shareViaFacebook();
        }
        else if(this.social == 2)
        {
          this.shareViaTwitter();
        }
        else if(this.social == 3)
        {
          this.shareViaWhatsApp();
        }
        else if(this.social == 4)
        {
          this.shareViaInstagram();
        }
        else if(this.social == 5)
        {
          this.shareViaEmail();
        }
        else
        {
          this.shareViaFacebook();
        }
    }

    shareViaEmail()
    {
      this.socialSharing.shareViaEmail(this.rentalData.url, this.rentalData.title, ['info@propertystays.com']).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaFacebook()
    {
      this.socialSharing.shareViaFacebookWithPasteMessageHint(this.rentalData.title, this.rentalData.images[0].image, this.rentalData.url, this.rentalData.title).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaWhatsApp()
    {
      this.socialSharing.shareViaWhatsApp(this.rentalData.url, this.rentalData.images[0].image, this.rentalData.url).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaTwitter()
    {
      this.socialSharing.shareViaTwitter(this.rentalData.title, null, this.rentalData.url).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaInstagram()
    {
      this.socialSharing.shareViaInstagram(this.rentalData.url, this.rentalData.images[0].image).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }


  //New Function
  async hideLoading() {
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
      }, 1000);
    }
  }

  async favLoading(message) {
    const favLoading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: message,
      // translucent: true,
    });
    return await favLoading.present();
  }

  strip(html: string) {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }

  scroll(ev) {
    this.scrollPosition = ev.detail.scrollTop;
  }

  async presentReviews() {
    const modal = await this.modalController.create({
      component: ReviewsComponent,
      componentProps: {
        toId: this.passedId,
        user_token: this.authService.userToken,
      },
    });
    return await modal.present();
  }

  async imagesViewer() {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: { images: this.rentalData.images },
      backdropDismiss: true,
      cssClass: 'images-viewer',
    });
    return await modal.present();
  }

  async bookNow() {
    if (this.authService.authenticationState.value) {
      const modal = await this.modalController.create({
        component: BooknowComponent,
        componentProps: {
          rental_id: this.passedId,
          rental_name: this.rentalData.title,
          user_token: this.authService.userToken,
          rental_price: this.rentalData.original_price,
          ready_to_pay: this.rentalData.ready_to_pay,
          rental_type: 'rental',
        },
        backdropDismiss: true,
        cssClass: 'book-now',
      });
      await modal.present();
    } else {
      this.authService.presentLoginAlert();
    }
  }

  async sendMessage(ev: any) {
    if (this.authService.authenticationState.value) {
      const popover = await this.popoverController.create({
        component: SendmsgComponent,
        event: ev,
        translucent: true,
        componentProps: {
          PropertyID: this.passedId,
          user_token: this.authService.userToken,
        },
        cssClass: 'msg-popup',
      });
      return await popover.present();
    } else {
      this.authService.presentLoginAlert();
    }
  }

  toggleExpand() {
    this.expand = !this.expand;
  }

  toggleDesc() {
    this.descMore = !this.descMore;
    if (this.descMore) {
      this.descMoreText = 'less';
    } else {
      this.descMoreText = 'more';
    }
  }

  toggleFav() {
    if (this.authService.authenticationState.value) {
      if (this.rentalData.isInFavorite === 0) {
        this.favLoading('Adding to Saved');
        this.wpApiService
          .setFav(this.authService.userToken, this.passedId, 1)
          .subscribe((data) => {
            console.log(data);
            this.loadingCtrl.dismiss();
            if (data['status'] === 1) {
              this.rentalData.isInFavorite = 1;
            }
          });
      } else {
        this.favLoading('Removing from Saved');
        this.wpApiService
          .setFav(this.authService.userToken, this.passedId, 0)
          .subscribe((data) => {
            this.loadingCtrl.dismiss();
            if (data['status'] === 1) {
              this.rentalData.isInFavorite = 0;
            }
          });
      }
    } else {
      this.authService.presentLoginAlert();
    }
  }

  async getRental() {
    // Get User Token
    // await this.authService.getUserData2().then(data => {
    //   const userData = JSON.parse(data);
    //   // this.userToken = userData['token'];
    //   if (data && userData['token'] !== null) {
    //     this.userToken = userData['token'];
    //   } else {
    //     this.userToken = 0;
    //   }
    // });
    await this.wpApiService
      .getRental(
        this.authService.userToken ? this.authService.userToken : 0,
        this.passedId
      )
      .subscribe(async (rentData) => {
        this.rentalData = rentData;
        console.log(rentData);
        this.rentalLocation = this.rentalData['positions'];
        this.aminities = this.rentalData['amenities'];
        this.aminiteisCount = this.aminities.length;
        this.ownerID = this.rentalData.owner.id;
        await this.loadMap(this.rentalLocation);
        await this.hideLoading();
      });
  }

  async loadMap(city_location) {
    if (city_location['lat'] !== null && city_location['lat'] !== '') {
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: parseFloat(city_location['lat']),
            lng: parseFloat(city_location['lng']),
          },
          zoom: 10,
          tilt: 30,
        },
      });
      const marker: Marker = this.map.addMarkerSync({
        title: 'Property',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: parseFloat(city_location['lat']),
          lng: parseFloat(city_location['lng']),
        },
      });
    }
  }
}
