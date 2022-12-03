import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.scss']
})
export class TravellersComponent implements OnInit {


  adultsNum = this.navParams.data.travellers.adults;
  teensNum = this.navParams.data.travellers.teens;
  childsNum = this.navParams.data.travellers.childs;
  infantsNum = this.navParams.data.travellers.infants;


  constructor(public modalCtrl: ModalController, public navParams: NavParams) { }

  ngOnInit() {
    
  }

  increase(traveller) {
    switch (traveller) {
      case 'adult':
        this.adultsNum = this.adultsNum + 1;
        break;
      case 'teen':
        this.teensNum = this.teensNum + 1;
        break;
      case 'child':
        this.childsNum = this.childsNum + 1;
        break;
      case 'infant':
        this.infantsNum = this.infantsNum + 1;
        break;

      default:
        break;
    }
  }

  decrease(traveller) {
    switch (traveller) {
      case 'adult':
        this.adultsNum = this.adultsNum - 1;
        break;
      case 'teen':
        this.teensNum = this.teensNum - 1;
        break;
      case 'child':
        this.childsNum = this.childsNum - 1;
        break;
      case 'infant':
        this.infantsNum = this.infantsNum - 1;
        break;

      default:
        break;
    }
  }

  clearTravellers() {
    this.adultsNum = 1;
    this.teensNum = 0;
    this.childsNum = 0;
    this.infantsNum = 0;
  }

  confirmTravellers() {
    this.modalCtrl.dismiss({
      'travellers': {
        adults: this.adultsNum,
        teens: this.teensNum,
        childs: this.childsNum,
        infants: this.infantsNum
      }
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
