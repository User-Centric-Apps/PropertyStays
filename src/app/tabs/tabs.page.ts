import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public msgService: MessagesService) {}
}
