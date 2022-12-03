import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { LoadingController } from '@ionic/angular';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss']
})
export class TripsPage implements OnInit {
  userToken;
  savedTrips;

  public hasTrips = false;

  tripsItems = [
    {
      title: 'Location name - 12/12/2019 - 14nts',
      image: '/assets/img/property/prop1_1.png'
    },
    {
      title: 'Location name - 12/12/2019 - 14nts',
      image: '/assets/img/property/prop1_2.png'
    }
  ];

  isLoading = true;
  tdata: any = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private wpApiService: WpapiService,
    private loadingCtrl: LoadingController,
    public shareService: ShareService
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

  ngOnInit() {
    this.getUserData();
  }

  ionViewDidEnter() {
    this.getUserData();
  }

  getUserData() {
    // Get User Token
    this.authService.getUserData2().then(data => {
      const userData = data;
      this.userToken = userData['token'];
      this.wpApiService
        .getUserTrips(this.authService.userToken)
        .subscribe(trips => {
          console.log('trips');
          console.log(trips);
          this.tdata = trips;
          if (Object.keys(this.tdata.data).length > 0) {
            this.savedTrips = this.tdata.data;
            this.hasTrips = true;
          }
          this.hideLoading();
        });
    });
  }

  getUserTrips(user_token) {
    this.wpApiService.getUserTrips(user_token).subscribe(user_trips => {
      console.log(user_trips);
    });
  }

  calcClasses() {
    if (!this.hasTrips) {
      return {
        empty: true
      };
    }
  }
  goTo(page) {
    this.router.navigateByUrl(page);
  }

  tourDetail(id, type) {
    switch (type) {
      case 'st_rental':
        this.router.navigateByUrl('/tabs/tab1/rentaldetail/' + id);
        break;

      case 'st_tour':
        this.router.navigateByUrl('/tabs/tab1/tour/' + id);
        break;
      default:
        break;
    }
  }
}
