import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WpapiService } from 'src/app/services/wpapi.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.scss']
})
export class SendmsgComponent implements OnInit {
  PropertyID;
  userToken;
  // @ViewChild('newMsgArea2') public messageInput;
  message = '';
  msgSent = false;

  constructor(
    public popoverController: PopoverController,
    public navParams: NavParams,
    private wpApiService: WpapiService,

    private loadingCtrl: LoadingController,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.PropertyID = this.navParams.get('PropertyID');
    this.userToken = this.navParams.get('user_token');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading no-mt new-loader'
    });
    return await loading.present();
  }

  async send() {
    if (this.message !== '') {
      await this.showLoading();
      await this.wpApiService
        .newMessage(this.authService.userToken, this.PropertyID, this.message)
        .subscribe(data => {
          console.log(data);
          if (data['status'] === 1) {
            this.loadingCtrl.dismiss();
            this.message = '';
            this.msgSent = true;
            setTimeout(() => {
              this.popoverController.dismiss();
            }, 1000);
          }
        });
    }
    // this.popoverController.dismiss();
  }

  cancel() {
    this.message = '';
    this.popoverController.dismiss();
  }
}
