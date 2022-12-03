import { IonContent, NavController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss']
})
export class MessagePage implements OnInit {
  @ViewChild(IonContent)
  content: IonContent;
  @ViewChild('newMsgArea') public messageInput;
  userToken;
  userData;
  oUserData;
  oUserName;
  userAvatar;
  passedId = null;
  allMessages;
  msgCotent = '';

  isLoading = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthService,
    private wpApiService: WpapiService,
    private loadingCtrl: LoadingController
  ) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader'
    });
    return await loading.present();
  }
  async hideLoading() {
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
      }, 500);
    }
  }

  async getMessages() {
    // Get User Token
    this.showLoading();
    await this.authService.getUserData2().then(data => {
      const userData = data;
      console.log(userData);
      console.log(this.authService.userFullData);
      this.userToken = userData['token'];
      this.userAvatar = this.wpApiService.userProfile.avatar;
      this.userData = userData;
      this.passedId = this.activatedRoute.snapshot.paramMap.get('msg_id');
    });
    await this.wpApiService
      .getMessage(this.authService.userToken, this.passedId)
      .subscribe(messages => {
        this.hideLoading();
        this.allMessages = messages['messages'];
        this.oUserName = messages['contact'];
        console.log(messages);
        setTimeout(() => {
          this.content.scrollToBottom();
        }, 500);
      });
  }

  // msgRefreash() {
  //   this.wpApiService.getMessage(this.userToken, this.passedId).subscribe(messages => {
  //     this.allMessages = messages;
  //     this.content.scrollToBottom();
  //   });
  // }

  async sendMessage(msg_txt) {
    await this.wpApiService
      .sendMessage(this.authService.userToken, this.passedId, msg_txt)
      .subscribe(data => {
        console.log(data);
      });
  }

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    this.getMessages();
  }

  async addNewMessage() {
    if (this.msgCotent !== '') {
      const newMsg = {
        content: this.msgCotent,
        sender_id: this.userData['user_id'],
        sender_name: this.userData['user_display_name'],
        sender_avatar: this.userAvatar,
        date: Date.now(),
        avatar: '',
        me: 1
      };
      console.log(newMsg);
      this.sendMessage(this.msgCotent);
      this.allMessages.push(newMsg);
      this.msgCotent = '';
      // this.messageInput.setFocus();
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 100);
    }
  }
}
