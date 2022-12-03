import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { AuthService } from '../services/auth.service';
import {
  LoadingController,
  Platform,
  ToastController,
  NavController,
  ModalController
} from '@ionic/angular';
// import { ImagesViewerPage } from '../shared/images-viewer/images-viewer.page';
import { ImageViewerComponent } from '../shared/image-viewer/image-viewer.component';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.page.html',
  styleUrls: ['./city-detail.page.scss']
})
export class CityDetailPage implements OnInit {
  map: GoogleMap;
  address: string;
  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: true
  };

  passedId = null;
  locationData;

  userToken;

  cityLocation;

  hotelsLocations;

  isLoading = true;

  scrollPosition = 0;

  locDataA: any = [];

  locDataAA: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private wpApiService: WpapiService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private navCtrl: NavController,
    private modalController: ModalController,
    public toastCtrl: ToastController
  ) {
    this.showLoading();
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
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
      }, 500);
    }
  }

  // strip(html: string) {
  //   return html.replace(/<(?:.|\n)*?>/gm, '');
  // }

  scroll(ev) {
    this.scrollPosition = ev.detail.scrollTop;
  }

  rentalDetail(rental_id) {
    this.navCtrl.navigateForward('/tabs/tab1/rentaldetail/' + rental_id);
  }

  tourDetail(tour_id) {
    this.navCtrl.navigateForward('/tabs/tab1/tour/' + tour_id);
  }

  async getLocData() {
    // Get User Token
    await this.authService.getUserData2().then(data => {
      const userData = data;
      // this.userToken = userData['token'];
      if (data && userData['token'] !== null) {
        this.userToken = userData['token'];
      } else {
        this.userToken = 0;
      }
    });
    await this.wpApiService
      .getLocation(
        this.authService.userToken ? this.authService.userToken : 0,
        this.passedId
      )
      .subscribe(locData => {
        this.locDataAA = locData;
        this.locDataA = this.locDataAA;
        console.log('this.locData');
        console.log(locData);
        this.locationData = this.locDataA[0];
        this.cityLocation = this.locationData['locations'][0];
        this.hotelsLocations = this.locationData['locations'];
        this.loadMap(this.cityLocation, this.hotelsLocations);
        this.hideLoading();
      });
  }

  async imagesViewer() {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: { images: this.locationData.images },
      backdropDismiss: true,
      cssClass: 'images-viewer'
    });
    return await modal.present();
  }

  toggleFav() {
    if (this.locationData.isInFavorite === 0) {
      this.wpApiService
        .setFav(this.authService.userToken, this.passedId, 1)
        .subscribe(data => {
          if (data[0]['status'] === 1) {
            this.locationData.isInFavorite = 1;
          }
        });
    } else {
      this.wpApiService
        .setFav(this.authService.userToken, this.passedId, 0)
        .subscribe(data => {
          if (data[0]['status'] === 1) {
            this.locationData.isInFavorite = 0;
          }
        });
    }
  }

  async ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('city_id');
    await this.getLocData();
    this.platform.ready();
    // this.loadMap(this.cityLocation, this.hotelsLocations);
  }

  async loadMap(city_location, markers) {
    if (
      city_location &&
      city_location['lat'] !== null &&
      city_location['lat'] !== ''
    ) {
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: parseFloat(city_location['lat']),
            lng: parseFloat(city_location['lng'])
          },
          zoom: 10,
          tilt: 30
        }
      });

      markers.forEach(hotel => {
        const marker: Marker = this.map.addMarkerSync({
          title: 'Property',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: parseFloat(hotel['lat']),
            lng: parseFloat(hotel['lng'])
          }
        });
      });
    }
  }

  toggleFavProp(e, rental_id, i) {
    if (this.authService.authenticationState.value) {
      if (this.locationData.places[i].isInFavorite === 0) {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 1)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.locationData.places[i].isInFavorite = 1;
            }
          });
      } else {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 0)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.locationData.places[i].isInFavorite = 0;
            }
          });
      }
    } else {
      this.authService.presentLoginAlert();
    }
  }
}
