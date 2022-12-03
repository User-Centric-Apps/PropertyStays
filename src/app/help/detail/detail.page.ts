import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WpapiService } from '../../services/wpapi.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  passedId = null;
  topicdata: any = [];
  topic: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private wpApiService: WpapiService
  ) { }

  async getTopic() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('id');
    await this.wpApiService.getHelp(this.passedId).subscribe(data => {
      this.topicdata = data;
      this.topic = this.topicdata.data;
    });
  }

  goToContact() {
    // this.navCtrl.navigateBack('/feedback');
    this.router.navigateByUrl('/feedback');
  }
  ngOnInit() {
    this.getTopic();
  }

}
