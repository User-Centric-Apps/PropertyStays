import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  currencies = [];

  selectedCurrency;

  userCurrency;

  notifyStatus = true;

  uNotifyStatus = true;

  currencyLoaded = false;
  notifyLoaded = false;
  constructor(
    public authService: AuthService,
    public wpApiService: WpapiService,
    private router: Router,
    private navCtrl: NavController,

    public ui: UiService
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  goPrivacy() {
    this.navCtrl.navigateForward('/privacy');
  }

  ngOnInit() {
    this.authService.authenticationState.subscribe(async state => {
      console.log(state);
      if (state) {
        this.ui.showPageLoading();
        await this.wpApiService
          .notificationStatus(this.authService.userToken)
          .subscribe(
            (response: any) => {
              console.log('User Notify: ', response.data);
              this.notifyStatus = response.data.status;

              this.notifyLoaded = true;
              this.uNotifyStatus = response.data.status;
            },
            error => {
              console.log(error);
            }
          );
        await this.wpApiService
          .getCurrencies(this.authService.userToken)
          .subscribe(
            async (currencies: any) => {
              console.log(currencies);
              this.currencies = currencies.data;
              await this.wpApiService
                .getUserCurrency(this.authService.userToken)
                .subscribe(
                  (selected: any) => {
                    console.log('User Currency: ', selected.data);
                    this.selectedCurrency = selected.data.name;
                    this.userCurrency = selected.data.name;
                    this.currencyLoaded = true;
                    this.ui.hidePageLoading();
                  },
                  error => {
                    console.log(error);
                  }
                );
            },
            error => {
              console.log(error);
            }
          );
      }
    });
  }

  logOut() {
    this.authService.logOut().then(() => {
      this.navCtrl.navigateRoot('/tips');
    });
  }

  changeCurrency(event, currencyName) {
    console.log(event);
    console.log(currencyName);

    if (this.userCurrency && event.detail.value !== this.userCurrency) {
      console.log('Currency Changed By User');
      this.wpApiService
        .setCurrency(this.authService.userToken, currencyName)
        .subscribe((response: any) => {
          console.log(response);
          this.selectedCurrency = currencyName;
          this.userCurrency = currencyName;
        });
    }
    // if (this.currencyLoaded) {
    //   this.wpApiService
    //     .setCurrency(this.authService.userToken, currencyName)
    //     .subscribe((response: any) => {
    //       console.log(response);
    //     });
    // }
  }

  changeNotify(event) {
    // this.sNotifyStatus = !this.sNotifyStatus;
    // this.notifyStatus = this.sNotifyStatus;
    console.log('this.notify:', this.notifyStatus);
    console.log('this.uNotify:', this.uNotifyStatus);

    if (this.notifyStatus !== this.uNotifyStatus) {
      console.log(event.detail.checked);
      console.log('Notify Changed by');
      console.log('this.notify after:', this.notifyStatus);
      console.log('this.uNotify after:', this.uNotifyStatus);
      this.wpApiService
        .changeNotification(
          this.authService.userToken,
          event.detail.checked ? 1 : 0
        )
        .subscribe(
          (response: any) => {
            console.log(response.data);
            this.uNotifyStatus = event.detail.checked;
            console.log('this.notify after api:', this.notifyStatus);
            console.log('this.uNotify after api:', this.uNotifyStatus);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
}
