import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';
const USER_DATA_KEY = environment.userDataKey;

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private router: Router,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const logedIn = await this.storage.get(USER_DATA_KEY).then(res => {
      if (res) {
        return true;
      } else {
        this.presentAlert();
        return false;
      }
    });
    // if (!logedIn) {
    //   this.router.navigateByUrl('/signup');
    // }
    
    return logedIn;
  }

  async presentAlert() {
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
