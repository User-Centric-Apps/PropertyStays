import { RouterModule, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  ModalController,
  NavController,
  ToastController,
  Platform
} from '@ionic/angular';
import { CalendarModal, CalendarModalOptions } from '../../ion2-calendar';
import { TravellersComponent } from './../components/travellers/travellers.component';
import { FilterComponent } from './../components/filter/filter.component';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { BookingService } from '../providers/booking.service';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { UiService } from '../services/ui.service';
// import { injectStyles } from 'shadow-dom-inject-styles';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('searchComponent') selectComponent: IonicSelectableComponent;
  @ViewChild('mainSlider') mainSlider: ElementRef;

  dateRange: {
    from: Date;
    to: Date;
  } = {
    from: new Date(),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 1)
  };

  constructor(
    public plt: Platform,
    public modalCtrl: ModalController,
    private routerModule: RouterModule,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private wpApiService: WpapiService,
    public bookingService: BookingService,
    private geolocation: Geolocation,
    public toastController: ToastController,
    private androidPermissions: AndroidPermissions,
    private loadingCtrl: LoadingController,
    public uiService: UiService
  ) {
    this.showLoading();
  }

  RecSliderOpts = {
    spaceBetween: 5,
    effect: 'flip',
    slidesPerView: 3.5,
    slidesPerGroup: 2,
    slidesOffsetBefore: 8,
    slidesOffsetAfter: 8,
    resistance: false
  };

  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: true
  };

  travellers = {
    adults: 0,
    teens: 0,
    childs: 0,
    infants: 0
  };

  filters = {
    propType: [],
    propSuitable: [],
    propAmenities: []
  };

  rlData: any = [];
  lData: any = [];
  rllData: any = [];
  rntData: any = [];
  trData: any = [];
  sdData: any = [];

  userToken;
  deviceLat;
  deviceLong;

  locSearch;

  locations;

  loc_id;

  recomendedLocs;

  allLocs;

  lastMinRent;

  fromArround;

  topExp;

  nearByRentals;

  fromWorldRentals;

  topTours;

  isSearching = false;

  dateSelected = false;
  travellersSelected = false;
  filtersSelected = false;

  searchItems;

  isLoading = true;

  sections = {
    recc: false,
    last: false,
    world: false,
    top: false
  };

  scrollTop = 0;
  currentScroll = 0;
  hideSearch = false;
  lastseen: any;

  url = 'https://propertystays.com/listing-properties';

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
  secLoaded() {
    if (
      this.sections.last &&
      this.sections.recc &&
      this.sections.top &&
      this.sections.world
    ) {
      this.hideLoading();
    }
  }

  strip(html: string) {
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }

  scroll(ev) {
    this.scrollTop = ev.detail.scrollTop;
    //(this.scrollTop > this.currentScroll && this.scrollTop > 50)
    if (this.scrollTop > 50) {
      this.hideSearch = true;
      this.currentScroll = this.scrollTop;
    } else {
      this.hideSearch = false;
      this.currentScroll = this.scrollTop;
    }
  }

  locChange(event: { component: IonicSelectableComponent; value: any }) {
    this.loc_id = event.value.id;
    if (this.selectComponent.hasValue()) {
      this.doSearch('');
    } else {
      this.isSearching = false;
    }
  }

  searchClear(event: { component: IonicSelectableComponent; items: any[] }) {
    this.selectComponent.clear();
    this.isSearching = false;
    this.searchItems = '';
  }

  clearSearch() {
    this.isSearching = false;
    this.searchItems = '';
    this.dateSelected = false;
    this.travellersSelected = false;
    this.filtersSelected = false;
  }

  doSearch(val = null) 
  {
    this.lastseen = val;
    console.log('doSearch :'+this.lastseen);
    const dateFrom = moment(this.dateRange.from).format('DD-MM-YYYY');
    const dateTo = moment(this.dateRange.to).format('DD-MM-YYYY');
    const sData = {
      type: this.filters.propType,
      suit: this.filters.propSuitable,
      amenit: this.filters.propAmenities,
      date_from: dateFrom,
      date_to: dateTo,
      adults: this.travellers.adults,
      childs: this.travellers.childs,
      loc_id: this.loc_id
    };
    this.showLoading();
    this.wpApiService
      .doSearchRental(this.authService.userToken, sData)
      .subscribe(searchData => {
        this.sdData = searchData;
        this.searchItems = this.sdData.data;
        this.isSearching = true;
        console.log('this.searchItems');
        console.log(this.searchItems);
        this.loadingCtrl.dismiss();
      });
  }

  async getAllLocs() {
    // Get All Locations
    await this.wpApiService.getAllLocations().subscribe(locations => {
      this.lData = locations;
      this.allLocs = this.lData.data;
      this.sections.recc = true;
    });
  }

  async getRecommended() {
    // Get Recomended Locations
    await this.wpApiService.getRecommendedLoc().subscribe(locations => {
      this.rlData = locations;
      this.recomendedLocs = this.rlData.data;
      this.sections.recc = true;
    });
  }

  async getLastMin() {
    // Get User Token
    // await this.authService.getUserData2().then(data => {
    //   const userData = JSON.parse(data);
    //   // this.userToken = userData['token'];
    //   if (data && userData['token'] !== null) {
    //     this.userToken = userData['token'];
    //   } else {
    //     this.userToken = 0;
    //   }
    //   // if (this.userToken === null || this.userToken === '') {
    //   //   this.userToken = 0;
    //   // }
    // });
    if (this.authService.userToken && this.authService.userToken !== null) {
      this.userToken = this.authService.userToken;
    } else {
      this.userToken = 0;
    }
    
    await this.plt.ready().then(async () => {
      await this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.deviceLat = resp.coords.latitude;
        this.deviceLong = resp.coords.longitude;
      })
      .catch(error => {
        console.log('Error getting location', error);
      });
      // Get Device Location (lat, lng)
    });
    // Get LastMin Rentals

    await this.wpApiService
      .getLastMin(
        this.authService.userToken ? this.authService.userToken : 0,
        this.deviceLat,
        this.deviceLong
      )
      .subscribe(rentals => {
        this.rntData = rentals;
        this.lastMinRent = this.rntData.data;
        console.log('this.lastMinRent');
        console.log(this.lastMinRent);
        this.sections.last = true;
        this.secLoaded();
      });
  }

  async presentToast(message, color, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: position,
      duration: duration
    });
    toast.present();
  }

  async getFromAround() {
    // Get Recomended Locations
    this.wpApiService.getFromArround().subscribe(rentals => {
      this.rllData = rentals;
      this.fromArround = this.rllData.data;
      this.sections.world = true;
      this.secLoaded();
    });
  }

  async getTopExp() {
    // Get Top Exp
    this.wpApiService.getTopExp().subscribe(tours => {
      this.trData = tours;
      this.topExp = this.trData.data;
      this.sections.top = true;
      this.secLoaded();
    });
  }

  toggleFav(e, rental_id, i) {
    if (this.authService.authenticationState.value) {
      if (this.lastMinRent[i].isInFavorite === 0) {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 1)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.lastMinRent[i].isInFavorite = 1;
            }
          });
      } else {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 0)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.lastMinRent[i].isInFavorite = 0;
            }
          });
      }
    } else {
      this.authService.presentLoginAlert();
    }
  }

  toggleFavProp(e, rental_id, i) {
    if (this.authService.authenticationState.value) {
      if (this.searchItems[i].isInFavorite === 0) {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 1)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.searchItems[i].isInFavorite = 1;
            }
          });
      } else {
        this.wpApiService
          .setFav(this.authService.userToken, rental_id, 0)
          .subscribe(data => {
            if (data['status'] === 1) {
              this.searchItems[i].isInFavorite = 0;
            }
          });
      }
    } else {
      this.authService.presentLoginAlert();
    }
  }

  async ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.deviceLat = resp.coords.latitude;
        this.deviceLong = resp.coords.longitude;
      })
      .catch(error => {
        console.log('Error getting location', error);
      });
    // Check if user Authenticated
    // if (this.authService.isAuthenticated() === false) {
    //   this.router.navigateByUrl('/tips');
    // }
    //     const styles = `
    //   .toolbar-background {
    //     background: red !important;;
    //   }
    // `;
    //     const toolbar = document.querySelector(
    //       'ion-header > ion-toolbar'
    //     ) as HTMLElement;
    //     injectStyles(toolbar, '.toolbar-background', styles);
    //     console.log(toolbar);

    await this.getRecommended();
    await this.getAllLocs();
    // Get LastMin Rentals
    await this.getLastMin();

    // Get From World
    await this.getFromAround();

    // Get Top
    await this.getTopExp();
  }

  ionViewDidEnter() {
    this.getLastMin();
  }

  async travellersModal() {
    const travellersmodal = await this.modalCtrl.create({
      component: TravellersComponent,
      cssClass: 'page-custom-bg',
      componentProps: { travellers: this.travellers }
    });
    travellersmodal.present();
    const { data } = await travellersmodal.onDidDismiss();
    if (data) {
      this.travellers = data.travellers;
      console.log(this.travellers);
      this.travellersSelected = true;
      this.doSearch('');
      this.bookingService.setTravellers(
        this.travellers.adults,
        this.travellers.childs
      );
    }
  }

  async filtersModal() {
    const filtersmodal = await this.modalCtrl.create({
      component: FilterComponent,
      cssClass: 'page-custom-bg',
      componentProps: { travellers: this.travellers }
    });
    filtersmodal.present();
    const { data } = await filtersmodal.onDidDismiss();
    if (data) {
      console.log(data);
      this.filters = data;
      this.filtersSelected = true;
      this.doSearch('');
    }
  }

  cityDetail(city_id) {
    // this.router.navigateByUrl('/tabs/tab1/city-detail');
    this.navCtrl.navigateForward('/tabs/tab1/city-detail/' + city_id);
  }

  rentalDetail(rental_id) {
    this.navCtrl.navigateForward('/tabs/tab1/rentaldetail/' + rental_id);
  }

  tourDetail(tour_id) {
    this.navCtrl.navigateForward('/tabs/tab1/tour/' + tour_id);
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select Your Dates',
      defaultDateRange: this.dateRange,
      defaultScrollTo: this.dateRange.from,
      color: 'primary',
      cssClass: 'custom-calendar',
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekStart: 1,
      monthFormat: 'MMMM YYYY',
      doneLabel: 'Confirm dates selected'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
      this.dateRange = Object.assign(
        {},
        {
          from: date.from.dateObj,
          to: date.to.dateObj
        }
      );
      this.dateSelected = true;
      this.doSearch('');
      const dateFrom = moment(this.dateRange.from).format('YYYY-MM-DD');
      const dateTo = moment(this.dateRange.to).format('YYYY-MM-DD');
      this.bookingService.setDate(dateFrom, dateTo);
    }
    // const testDmo = moment(this.dateRange.from).format('DD-MM-YYYY');
    // console.log(this.dateRange.from);
    // console.log(this.dateRange.to);
  }

  goTo(page) {
    this.navCtrl.navigateForward(page);
  }
}
