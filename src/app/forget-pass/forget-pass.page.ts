import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {

  constructor(private router: Router, private wpApiService: WpapiService, public toastController: ToastController) { }

  ngOnInit() {
  }

  goTo(page) {
    this.router.navigateByUrl(page);
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

  // Do forget
  doForget(form) {
    this.wpApiService.forgetPass(form.value).subscribe( data => {
      if (data['status'] === 1) {
        this.presentToast('Password reseted successfully, please check your email for resset link', 'success', 'bottom', 3000);
        form.value.password = '';
      } else {
        this.presentToast('Email not found, please try again', 'danger', 'bottom', 3000);
      }
    });
  }

}
