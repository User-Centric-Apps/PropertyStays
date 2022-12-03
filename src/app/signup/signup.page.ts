import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpapiService } from 'src/app/services/wpapi.service';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  name;
  email;
  password;

  acceptTerms = false;
  acceptPrivacy = false;

  showPass = false;

  constructor(
    private router: Router,
    private wpApiService: WpapiService,
    private authService: AuthService,
    public toastController: ToastController,
    private fb: Facebook
  ) {}

  goTo(page) {
    this.router.navigateByUrl(page);
  }

  async togglePass() {
    if (this.showPass) {
      this.showPass = false;
    } else {
      this.showPass = true;
    }
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

  async ngOnInit() {
    // await this.facebookLogin();
  }

  async facebookLogin() {
    await this.fb
      .login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        const userID = res.authResponse.userID;
        this.fb
          .api(userID + '?fields=id,email,first_name,last_name,address,name', [
            'email'
          ])
          .then(fbUser => {
            console.log(fbUser);
            const formData = {
              name: fbUser.name,
              email: fbUser.email,
              password: 'FBuserPS_' + fbUser.id
            };
            console.log(formData);
            this.wpApiService.register(formData).subscribe(data => {
              console.log(data);
              if (data['status'] === 0) {
                this.presentToast(
                  data['msg'] + ', Please try again',
                  'danger',
                  'top',
                  3000
                );
              } else {
                this.wpApiService
                  .postAuth(formData.email, formData.password)
                  .subscribe(
                    udata => {
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
                    error => {
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
              }
            });
          })
          .catch(error => {
            console.log(error);
            this.presentToast(
              'Error logging into Facebook' + error,
              'danger',
              'bottom',
              3000
            );
          });
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.presentToast(
          'Error logging into Facebook' + e,
          'danger',
          'bottom',
          3000
        );
      });
  }

  register(form) {
    this.wpApiService.register(form.value).subscribe(data => {
      console.log(data);
      if (data['status'] === 0) {
        this.presentToast(
          data['msg'] + ', Please try again',
          'danger',
          'top',
          3000
        );
      } else {
        this.presentToast(
          'Your Account have been created successfully, we will take you to login.',
          'success',
          'top',
          3000
        );
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 3200);
      }
    });
  }

  // loginFacebook() {
  //   // this.fb.getLoginStatus().then(data => {
  //   //   console.log(data);
  //   // });
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  // .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  // .catch(e => console.log('Error logging into Facebook', e));

  // // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  // }
}
