import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WpapiService } from '../services/wpapi.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  tabValue = 'host';
  hTdata: any = [];
  tTdata: any = [];
  hTopics: any = [];
  tTopics: any = [];
  allTopics;

  vhTopics;
  vtTopics;


  constructor(
    private navCtrl: NavController,
    private wpApiService: WpapiService,
    private router: Router
    ) { }


  getTopicsHost() {
    this.wpApiService.getHelps('2').subscribe( hTopics => {
      this.hTdata = hTopics;
      this.hTopics = this.hTdata.data;
      this.vhTopics = this.hTdata.data;
    });
  }

  getTopicsTravel() {
    this.wpApiService.getHelps('1').subscribe( tTopics => {
      this.tTdata = tTopics;
      this.tTopics = this.tTdata.data;
      this.vtTopics = this.tTdata.data;
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  goToFeedback() {
    this.router.navigateByUrl('/feedback');
  }

  ngOnInit() {
    this.getTopicsHost();
    this.getTopicsTravel();
  }

  viewDetailPage(page) {
    this.navCtrl.navigateForward(page);
  }


  filterTopics(param: any): void {
      const val: string 	= param;
      // const tempH = this.hTopics;
      // const tempT = this.tTopics;

      // DON'T filter the technologies IF the supplied input is an empty string
      if (val.trim() !== '') {
         this.vhTopics = this.hTopics.filter((item) => {
           return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
         });
         this.vtTopics = this.tTopics.filter((item) => {
          return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        // this.allTopics = this.allTopics.filter((item) => {
        //   return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        //   item.desc.toLowerCase().indexOf(val.toLowerCase()) > -1;
        // });
      } else {
        this.vhTopics = this.hTopics;
        this.vtTopics = this.tTopics;
      }
   }

}
