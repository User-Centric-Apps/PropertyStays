import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {
  hasNotifications = true;

  notifList = [
    {
      text:
        'Earn from your property by adding it to PropertyStays, we will handle the rest!',
      icon: 'home'
    },
    {
      text: 'Invite your fields to join you on your trip to Bali!',
      icon: 'person-add'
    },
    {
      text:
        'Rahim has just booked your house for 14nts from 1/02/2019 to 14/02/2019',
      icon: 'flag'
    }
  ];

  constructor(
    public notificationsService: NotificationsService,
    public authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.authenticationState.subscribe((state: any) => {
      console.log(state);
      if (state) {
        console.log(this.authService.userToken);
        this.notificationsService.getNotifications();
      }
    });
  }

  removeItem(index, notificationID) {
    this.notificationsService.notificationRead(index, notificationID);
  }
}
