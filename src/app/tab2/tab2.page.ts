import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { MessagesService } from '../services/messages.service';
import { NavController } from '@ionic/angular';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  isLoading = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public wpApiService: WpapiService,
    public msgService: MessagesService,
    public uiService: UiService
  ) {
    this.uiService.showPageLoading();
  }

  ngOnInit() {
    this.getMessages();
  }

  ionViewWillEnter() {
    this.getMessages();
  }

  async getMessages() {
    // Get User Token
    this.authService.authenticationState.subscribe(async (state: any) => {
      if (state) {
        await this.msgService.getMessages().finally(async () => {
          if (this.isLoading) {
            setTimeout(() => {
              this.isLoading = false;
              this.uiService.hidePageLoading();
            }, 1000);
          }
        });
      }
    });
  }

  goTo(page) {
    this.navCtrl.navigateForward(page);
  }
}
