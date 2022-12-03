import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { ModalController,IonSelect } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TourReviewsComponent } from '../components/tour-reviews/tour-reviews.component';
import { ImageViewerComponent } from '../shared/image-viewer/image-viewer.component';
// import { BooknowComponent } from '../shared/booknow/booknow.component';
import { BooktourComponent } from '../shared/booktour/booktour.component';
import { ShareService } from '../services/share.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss']
})
export class TourPage implements OnInit {
  @ViewChild('mySelect') selectRef: IonSelect;
  map: GoogleMap;
  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: true
  };

  passedId = null;
  userToken;
  tourData;
  tourLocation;
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
    public shareService: ShareService,
    public socialSharing: SocialSharing
  ) {
    console.log('Tour Page')
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading no-mt new-loader'
    });
    return await loading.present();
  }
  async hideLoading() {
    if (this.isLoading) {
      setTimeout(async () => {
        this.isLoading = false;
        await this.loadingCtrl.dismiss();
      }, 500);
    }
  }

  strip(html: string) {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }

  scroll(ev) {
    this.scrollPosition = ev.detail.scrollTop;
  }

  async presentReviews() {
    const modal = await this.modalController.create({
      component: TourReviewsComponent,
      componentProps: {
        id: this.passedId,
        user_token: this.authService.userToken
      }
    });
    return await modal.present();
  }

  async imagesViewer() {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: { images: this.tourData.images },
      backdropDismiss: true,
      cssClass: 'images-viewer'
    });
    return await modal.present();
  }

  async bookNow() {
    if (this.authService.authenticationState.value) {
      const modal = await this.modalController.create({
        component: BooktourComponent,
        componentProps: {
          rental_id: this.passedId,
          rental_name: this.tourData.title,
          user_token: this.authService.userToken,
          rental_price: this.tourData.price,
          rental_type: 'tour'
        },
        backdropDismiss: true,
        cssClass: 'book-now'
      });
      return await modal.present();
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

  async toggleFav() {
    if (this.authService.authenticationState.value) {
      if (this.tourData.isInFavorite === 0) {
        this.wpApiService
          .setFav(this.authService.userToken, this.passedId, 1)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.tourData.isInFavorite = 1;
            }
          });
      } else {
        this.wpApiService
          .setFav(this.authService.userToken, this.passedId, 0)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.tourData.isInFavorite = 0;
            }
          });
      }
    } else {
      await this.authService.presentLoginAlert();
    }
  }

  async getTour() {
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
      .getTour(
        this.authService.userToken ? this.authService.userToken : 0,
        this.passedId
      )
      .subscribe(async tourData => {
        this.tourData = tourData;
        console.log(this.tourData);
        this.tourLocation = this.tourData['positions'];
        //this.aminities = this.tourData['amenities'];
        //this.aminiteisCount = this.aminities.length - 3;
        if (
          this.tourData.positions.lat !== '' &&
          this.tourData.positions.lng !== ''
        ) {
          this.loadMap(this.tourLocation);
        }
        await this.hideLoading();
      });
  }

  async loadMap(city_location) {
    if (city_location['lat'] !== null && city_location['lat'] !== '') {
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: parseFloat(city_location['lat']),
            lng: parseFloat(city_location['lng'])
          },
          zoom: 10,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      const marker: Marker = this.map.addMarkerSync({
        title: 'Property',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: parseFloat(city_location['lat']),
          lng: parseFloat(city_location['lng'])
        }
      });
    }
  }

  shareThis() {
    this.shareService.shareWithOptions(
      this.tourData.title,
      this.tourData.images[0].image,
      this.tourData.images[0].image,
      this.tourData.url
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
      this.socialSharing.shareViaEmail(this.tourData.url, this.tourData.title, ['info@propertystays.com']).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaFacebook()
    {
      this.socialSharing.shareViaFacebookWithPasteMessageHint(this.tourData.title, this.tourData.images[0].image, this.tourData.url, this.tourData.title).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaWhatsApp()
    {
      this.socialSharing.shareViaWhatsApp(this.tourData.url, this.tourData.images[0].image, this.tourData.url).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaTwitter()
    {
      this.socialSharing.shareViaTwitter(this.tourData.title, null, this.tourData.url).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }

    shareViaInstagram()
    {
      this.socialSharing.shareViaInstagram(this.tourData.url, this.tourData.images[0].image).then(() => {
       
      }).catch(() => {
       // Error!
      });
    }


  //New Function

  async ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('tour_id');
    await this.showLoading();
    await this.getTour();
  }
}
