import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  tdata;
  terms;
  constructor(private navCtrl: NavController, private wpApiService: WpapiService) { }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.wpApiService.getTerms().subscribe(data => {
      this.tdata = data;
      this.terms = this.tdata.data;
    });
  }

}
