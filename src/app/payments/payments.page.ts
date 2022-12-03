import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {


  constructor(private iab: InAppBrowser, private navCtrl: NavController) { }


  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  openPayPal() {
    const options: InAppBrowserOptions = {
      zoom: 'no',

    };
    const browser = this.iab.create('https://www.paypal.com/signin', '_self', options);
    // browser.show();
  }

  openBank() {
    this.navCtrl.navigateForward('bank');
  }

}
