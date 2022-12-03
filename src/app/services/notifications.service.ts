import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications = [];

  getFCM = true;

  constructor(
    private authService: AuthService,
    public wpApiService: WpapiService,
    public ui: UiService,
    private fcm: FCM
  ) {}

  async getNotifications() {
    await this.wpApiService
      .getNotifications(this.authService.userToken)
      .subscribe(
        (notifications: any) => {
          console.log(notifications);
          this.notifications = notifications;
        },
        error => {
          console.log(error);
        }
      );
  }

  async notificationRead(index, notificationID) {
    this.notifications.splice(index, 1);
    this.wpApiService
      .setNotification(this.authService.userToken, notificationID)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  fcmReceived(data) {
    if (data.wasTapped) {
      console.log('Received in background');
      this.ui.notificationToast(data.title, data.body);
    } else {
      console.log('Received in foreground');
      this.ui.notificationToast(data.title, data.body);
    }
  }
}
