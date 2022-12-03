import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

  @ViewChild('inputsSlider') slider: IonSlides;

  slideOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    loop: false,
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  goBack() {
    this.navCtrl.back();
  }

  continue() {
    this.slider.lockSwipes(false);
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }

  save() {
    this.goBack();
  }

}
