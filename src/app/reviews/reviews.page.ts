import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpapiService } from '../services/wpapi.service';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  passedId = null;
  constructor(private activatedRoute: ActivatedRoute,
    private wpApiService: WpapiService,
    private authService: AuthService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
