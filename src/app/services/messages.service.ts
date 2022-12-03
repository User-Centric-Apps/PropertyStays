import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WpapiService } from '../services/wpapi.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  allMessages: any = [];
  msgCount;
  constructor(
    private authService: AuthService,
    public wpApiService: WpapiService
  ) {}

  async getMessages() {
    await this.wpApiService
      .getMessages(this.authService.userToken)
      .subscribe((messages: any) => {
        this.allMessages = messages;
        // if (this.allMessages.length !== messages.length) {
        //   this.allMessages = messages;
        //   console.log('Messages Rebuild');
        // }
      });
  }
}
