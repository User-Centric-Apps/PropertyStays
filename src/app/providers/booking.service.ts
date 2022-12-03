import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  dateFrom: any = moment(new Date()).format('YYYY-MM-DD');
  dateTo: any = moment(new Date(Date() + 24 * 60 * 60 * 1000 * 1)).format(
    'YYYY-MM-DD'
  );
  adults: any = 1;
  children: any = 0;

  dateFromMin: any = moment(new Date()).format('YYYY-MM-DD');
  dateToMin: any = moment(new Date(Date() + 24 * 60 * 60 * 1000 * 1)).format(
    'YYYY-MM-DD'
  );

  dateFromMax: any = moment(this.dateFrom)
    .add(2, 'year')
    .format('YYYY-MM-DD');
  dateToMax: any = moment(this.dateTo)
    .add(2, 'year')
    .format('YYYY-MM-DD');

  constructor() {
    this.dateFrom = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.dateFrom);
    this.dateTo = moment(this.dateFrom)
      .add(1, 'days')
      .format('YYYY-MM-DD');
    this.dateFromMax = moment(this.dateFrom)
      .add(2, 'year')
      .format('YYYY-MM-DD');
    this.dateToMax = moment(this.dateTo)
      .add(2, 'year')
      .format('YYYY-MM-DD');
    console.log(this.dateTo);
  }

  async setDate(from, to) {
    this.dateFrom = from;
    this.dateTo = to;
  }

  async setTravellers(adults, children) {
    this.adults = adults;
    this.children = children;
  }

  async fromChanged(getFired?) {
    if (getFired && getFired === true) {
      console.log('form Change Function Fired');
      this.dateTo = moment(this.dateFrom)
        .add(1, 'days')
        .format('YYYY-MM-DD');
      this.dateToMin = moment(this.dateFrom)
        .add(1, 'days')
        .format('YYYY-MM-DD');
      this.dateFromMax = moment(this.dateFrom)
        .add(2, 'year')
        .format('YYYY-MM-DD');
      this.dateToMax = moment(this.dateTo)
        .add(2, 'year')
        .format('YYYY-MM-DD');
    }
  }
}
