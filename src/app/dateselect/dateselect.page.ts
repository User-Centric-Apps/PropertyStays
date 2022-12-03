import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions } from '../../ion2-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-dateselect',
  templateUrl: './dateselect.page.html',
  styleUrls: ['./dateselect.page.scss'],
})
export class DateselectPage implements OnInit {

  // dateRange: { from: string; to: string; };
  // type: 'object'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range',
  // };
  // address: Object;

  dateRange: {
    from: Date;
    to: Date;
  } = {
    from: new Date(),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 5),
  };

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select Your Dates',
      defaultDateRange: this.dateRange,
      defaultScrollTo: this.dateRange.from,
      color: 'primary',
      cssClass: 'custom-calendar',
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekStart: 1
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
      this.dateRange = Object.assign(
        {},
        {
          from: date.from.dateObj,
          to: date.to.dateObj,
        }
      );
    }
    console.log(date);
    console.log(this.dateRange.from);
    console.log(this.dateRange.to);
    console.log('role', role);
  }

  // onChange($event) {
  //   console.log($event);
  //   console.log(
  //   '1- ' + moment(this.dateRange.from).format('DD/MM/YYYY') + '\n',
  //   '2- ' + moment(this.dateRange.from).format('DD MMM YYYY') + '\n'
  //   );
  //   console.log(this.dateRange.to);
  // }

}
