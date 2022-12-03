import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';
const USER_DATA_KEY = 'PS_USER_DATA';
const APP_DATA_KEY = 'PS_APP_DATA';
const APP_AFPA_KEY = 'PS_USER_AFPA';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  userFullDataServ;

  userData;
  userFullData;

  userToken;

  userID;

  hasAFPA = new BehaviorSubject(false);
  userAFPA;

  isFirstTime = new BehaviorSubject(true);
  constructor(
    private storage: Storage,
    private plt: Platform,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    this.plt.ready().then(() => {
      this.checkFirstTime();
      this.checkToken();
    });
  }

  logIn(userDataArray) {
    return this.storage.set(USER_DATA_KEY, userDataArray).then(() => {
      this.authenticationState.next(true);
      console.log(JSON.stringify(userDataArray));
    });
  }

  saveAFPA(data) {
    return this.storage.set(APP_AFPA_KEY, data).then(response => {
      this.hasAFPA.next(true);
      this.userAFPA = data;
      return response;
      // console.log(JSON.stringify(userDataArray));
    });
  }

  getAFPA() {
    return this.storage.get(APP_AFPA_KEY).then(stAFPA => {
      console.log(stAFPA);
      this.hasAFPA.next(true);
      this.userAFPA = stAFPA;
      // console.log(JSON.stringify(userDataArray));
    });
  }

  logOut() {
    return this.storage.remove(USER_DATA_KEY).then(() => {
      this.authenticationState.next(false);
      this.storage.remove(APP_DATA_KEY);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(USER_DATA_KEY).then(res => {
      if (res) {
        // console.log(res);
        this.authenticationState.next(true);
        // console.log(this.authenticationState.value);
      }
    });
  }

  async checkFirstTime() {
    await this.storage.get(APP_DATA_KEY).then(res => {
      if (res) {
        console.log(res);
        const appData = res;
        console.log(appData.isFirstTime);
        if (!appData.isFirstTime) {
          console.log(appData);
          this.isFirstTime.next(false);
        }
      } else {
        this.storage
          .set(APP_DATA_KEY, {
            isFirstTime: false
          })
          .then(() => {
            console.log('Not First Time Set');
            // this.isFirstTime.next(false);
          });
      }
    });
  }

  getUserData() {
    this.storage.get(USER_DATA_KEY).then(res => {
      if (res) {
        // environment.userData = JSON.parse(res);
        // console.log(res);
        return res;
      } else {
      }
    });
  }

  getUserData2() {
    // this.storage.get(USER_DATA_KEY).then(res => {
    //   if (res) {
    //     environment.userData = JSON.parse(res);
    //     return JSON.parse(res[0]);
    //   } else {

    //   }
    // });
    if (this.isAuthenticated) {
      return this.storage.get(USER_DATA_KEY);
    }
  }

  async presentLoginAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Log In Required',
      subHeader: 'You are not Logged-in!',
      message: 'Please Login / Register',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        // {
        //   text: 'Register',
        //   handler: () => {
        //     this.navCtrl.navigateForward('/signup');
        //   }
        // },
        {
          text: 'Log In',
          handler: () => {
            this.navCtrl.navigateForward('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}
