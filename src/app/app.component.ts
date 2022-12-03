import { async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { WpapiService } from './services/wpapi.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Environment } from '@ionic-native/google-maps';
import { environment } from './../environments/environment';
import { MessagesService } from './services/messages.service';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public menuPages = [
    /*{
      title: 'Payments',
      url: '/tabs/payments',
      icon: 'payment_white.svg'
    },*/
    {
      title: 'Inbox',
      url: '/tabs/tab2',
      icon: 'inbox.svg'
    },
    /*{
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications_white.svg'
    },*/
    {
      title: 'Become a host',
      url: '/property/add',
      icon: 'host_white.svg'
    },
    {
      title: 'Host your property',
      url: '/property/add',
      icon: 'add-property.svg'
    },
    {
      title: 'App Tips',
      url: '/tips',
      icon: 'app-tips.svg'
    },
    {
      title: 'Get help',
      url: '/help',
      icon: 'question.svg'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings.svg'
    },
    {
      title: 'Give us some feedback',
      url: '/feedback',
      icon: 'feedback.svg'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms',
      icon: 'legal.svg'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'privacy-policy.svg'
    },
    {
      title: 'About us',
      url: '/tabs/about',
      icon: 'logo_icon.svg'
    }
  ];
  public menuNotLogged = [
    // {
    //   title: 'Payments',
    //   url: '/tabs/payments',
    //   icon: 'payment_white.svg'
    // },
    {
      title: 'Inbox',
      url: '/tabs/tab2',
      icon: 'inbox.svg'
    },
    /*{
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications_white.svg'
    },*/
    {
      title: 'Become a host',
      url: '/property/add',
      icon: 'host_white.svg'
    },
    {
      title: 'Host your property',
      url: '/property/add',
      icon: 'add-property.svg'
    },
    {
      title: 'App Tips',
      url: '/tips',
      icon: 'app-tips.svg'
    },
    {
      title: 'Get help',
      url: '/help',
      icon: 'question.svg'
    },
    /*{
      title: 'Settings',
      url: '/settings',
      icon: 'settings.svg'
    },*/
    {
      title: 'Give us some feedback',
      url: '/feedback',
      icon: 'feedback.svg'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms',
      icon: 'legal.svg'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'privacy-policy.svg'
    },
    {
      title: 'About us',
      url: '/tabs/about',
      icon: 'logo_icon.svg'
    }
  ];

  userName = 'Guest';
  userToken;
  msgCount;
  logedIn = false;
  userData;
  userFullData;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private androidPermissions: AndroidPermissions,
    public wpApiService: WpapiService,
    public msgService: MessagesService,
    public notificationsService: NotificationsService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(async () => {
      /*Environment.setEnv({
        // api key for server
        API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCW9BR86ziSgCdEzPRAb2MjpU86WRwPGy4',

        // api key for local development
        API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCW9BR86ziSgCdEzPRAb2MjpU86WRwPGy4'
      });*/
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
      /*setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);*/
      // this.statusBar.hide();
      if (this.platform.is('android')) {
        await this.androidPermissions
          .checkPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            result => console.log('Has permission?', result.hasPermission),
            err =>
              this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
              )
          );
        await this.androidPermissions.requestPermissions([
          this.androidPermissions.PERMISSION.CAMERA,
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
          this.androidPermissions.PERMISSION.LOCATION_HARDWARE,
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]);
      }
      await this.authService.checkFirstTime().then(() => {
        this.authService.isFirstTime.subscribe(async isFirst => {
          if (isFirst === true) {
            console.log('First Time', isFirst);
            await this.router.navigateByUrl('/tips');
          } else {
            await this.router.navigateByUrl('/tabs/tab1');
          }
        });
      });
      await this.authService.authenticationState.subscribe(async state => {
        if (state) {
          await this.authService.getUserData2().then(async udata => {
            const userData = udata;
            this.userData = userData;
            this.authService.userData = userData;
            // console.log(this.userData);
            this.userToken = userData['token'];
            this.authService.userToken = userData['token'];
            this.userName = this.userData['name'];
            await this.wpApiService
              .getProfile(this.authService.userToken)
              .subscribe(async udata2 => {
                this.authService.userID = udata2['id'];
                await this.wpApiService
                  .getUserData(userData['token'], userData['token'])
                  .subscribe(user_data => {
                    this.userFullData = user_data;
                    this.authService.userFullData = user_data;
                  });
              });
            await this.msgService.getMessages();
            await this.notificationsService.getNotifications();
          });
          this.logedIn = true;
        }
      });
    });
  }
  pushPage(page) {
    this.router.navigateByUrl(page);
  }
  openProfile() {
    this.router.navigateByUrl('/tabs/profile');
  }
  logOut() {
    this.authService.logOut().then(() => {
      this.logedIn = false;
      this.router.navigateByUrl('/tips');
    });
  }
}
