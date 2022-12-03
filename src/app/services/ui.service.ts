import { Injectable } from '@angular/core';
import {
  LoadingController,
  NavController,
  AlertController
} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(
    private loadingCtrl: LoadingController,
    public toastController: ToastController,
    private router: Router,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  async showPageLoading() {
    const pageLoading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader'
    });
    return await pageLoading.present();
  }
  async hidePageLoading() {
    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 500);
  }

  async notificationToast(nTitle, nBody) {
    const nToast = await this.toastController.create({
      header: nTitle,
      message: nBody,
      position: 'top',
      color: 'primary',
      buttons: [
        {
          text: 'View',
          side: 'end',
          icon: 'notification',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('/notifications');
          }
        }
      ]
    });
    nToast.present();
  }

  async loginAlert() {
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
