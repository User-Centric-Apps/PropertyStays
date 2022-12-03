import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username;
  password;

  showPass = false;

  canFPA = false;

  userDataTest = {
    name: 'Syed Danish',
    email: 'danishah7288@gmail.com',
    avatar: 'http://i.pravatar.cc/150?img=14',
    address: 'Pakistan',
  };

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private wpApiService: WpapiService,
    private toastController: ToastController,
    private navCtrl: NavController,
    public authService: AuthService,
    private fb: Facebook,
    private faio: FingerprintAIO,
    private platform: Platform,
    public alertController: AlertController,
    private UDID: UniqueDeviceID
  ) {}

  goTo(page) {
    this.router.navigateByUrl(page);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Logging in...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    return await loading.present();
  }

  async togglePass() {
    if (this.showPass) {
      this.showPass = false;
    } else {
      this.showPass = true;
    }
  }

  async successToast(user) {
    const toast = await this.toastController.create({
      message: 'You have loged in Successfully - Welcome ' + user,
      duration: 500,
      position: 'bottom',
      color: 'success',
    });
    // toast.onDidDismiss().then(() => {
    //   this.navCtrl.navigateRoot('/tabs/tab1');
    // });
    toast.present();
  }

  async failedToast() {
    const toast2 = await this.toastController.create({
      message: 'Wrong Username and/or Password, Please try again!',
      duration: 4000,
      position: 'bottom',
      color: 'danger',
    });
    toast2.present();
  }

  async presentToast(message, color, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: position,
      duration: duration,
    });
    toast.present();
  }

  async FPAlert(userToken) {
    const alert = await this.alertController.create({
      header: 'Fingerprint Authorization!',
      message:
        'Do you want to save you login credentials with your <strong>Fingerprint</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.navCtrl.navigateRoot('/tabs/tab1');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.FPAuth(userToken);
          },
        },
      ],
    });

    await alert.present();
  }

  async FPLogin() {
    this.faio
      .show({
        title: 'Authentication',
        description: 'Access to all the possible functions of the app.',
      })
      .then((result: any) => {
        console.log(result);
        this.UDID.get()
          .then((uuid: any) => {
            console.log(uuid);
            this.presentLoading();
            this.wpApiService.logInByUDID(uuid).subscribe(
              (userData: any) => {
                this.loadingController.dismiss();
                if (userData.userToken) {
                  this.authService.logIn(userData);
                  setTimeout(() => {
                    this.navCtrl.navigateRoot('/tabs/tab1');
                  }, 500);
                } else {
                  this.presentToast(
                    'User with this authentication cannot be found!',
                    'danger',
                    'bottom',
                    3000
                  );
                }
              },
              (error) => {
                this.loadingController.dismiss();
                console.log(error);
                this.presentToast(error.message, 'danger', 'bottom', 3000);
              }
            );
          })
          .catch((error: any) => console.log(error));
      })
      .catch((error: any) => {
        console.log(error);
        this.presentToast(error.message, 'danger', 'bottom', 3000);
      });
  }

  async FPAuth(userToken) {
    this.faio
      .show({
        title: 'Authentication',
        description: 'Access to all the possible functions of the app.',
      })
      .then((result: any) => {
        console.log(result);
        // this.getUDID();
        this.UDID.get()
          .then((uuid: any) => {
            console.log(uuid);
            this.wpApiService.setDeviceUDID(userToken, uuid).subscribe(
              (response: any) => {
                if (response.status === 1) {
                  this.presentToast(
                    'Authentication Succeeded',
                    'success',
                    'bottom',
                    2000
                  );
                  this.navCtrl.navigateRoot('/tabs/tab1');
                }
              },
              (error) => {
                console.log(error);
                this.presentToast('Your finger not authorized', 'danger', 'bottom', 3000);
              }
            );
          })
          .catch((error: any) => {
            console.log(error);
          });
        // this.navCtrl.navigateRoot('/tabs/tab1');
      })
      .catch((error: any) => {
        console.log(error);
        this.presentToast(error.message, 'danger', 'bottom', 3000);
        this.navCtrl.navigateRoot('/tabs/tab1');
      });
  }

  async getUDID() {
    this.UDID.get()
      .then((uuid: any) => {
        console.log(uuid);
      })
      .catch((error: any) => console.log(error));
  }

  doLogin(form) {
    console.log(this.username);
    console.log(this.password.toString());
    this.presentLoading();
    this.wpApiService
      .postAuth(this.username, this.password.toString())
      .subscribe(
        (data) => {
          this.authService.logIn(data);
          this.loadingController.dismiss();
          console.log(data);
          this.successToast(data.user_display_name);
          this.navCtrl.navigateRoot('/tabs/tab1');
          if (this.faio.isAvailable()) {
            //this.FPAlert(data.token);
          }
        },
        (error) => {
          console.log('error');
          console.log(error);
          console.log('Username Or Password is not correct, Please Try Again');
          this.loadingController.dismiss();
          this.failedToast();
        }
      );
  }

  async facebookLogin() {
    await this.fb
      .login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        const userID = res.authResponse.userID;
        this.fb
          .api(userID + '?fields=id,email,first_name,last_name,address,name', [
            'email',
          ])
          .then((fbUser) => {
            console.log(fbUser);
            const formData = {
              name: fbUser.name,
              username: 'FBuser_' + fbUser.id,
              email: fbUser.email,
              password: 'FBuserPS_' + fbUser.id,
            };
            console.log(formData);
            this.wpApiService
              .postAuth(formData.username, formData.password)
              .subscribe(
                (udata) => {
                  this.authService.logIn(udata);
                  this.presentToast(
                    'Welcome, ' + udata.user_display_name,
                    'success',
                    'bottom',
                    2000
                  );
                  setTimeout(() => {
                    this.router.navigateByUrl('/');
                  }, 2000);
                },
                (error) => {
                  console.log(
                    'Username Or Password is not correct, Please Try Again'
                  );
                  this.presentToast(
                    'Failed to login, Please try again.',
                    'danger',
                    'bottom',
                    3000
                  );
                }
              );
          })
          .catch((error) => {
            console.log(error);
            this.presentToast(
              'Error logging into Facebook' + error,
              'danger',
              'bottom',
              3000
            );
          });
      })
      .catch((e) => {
        console.log('Error logging into Facebook', e);
        this.presentToast(
          'Error logging into Facebook' + e,
          'danger',
          'bottom',
          3000
        );
      });
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.faio.isAvailable()) {
        // this.ha
        this.canFPA = true;
      }
    });
  }
}
