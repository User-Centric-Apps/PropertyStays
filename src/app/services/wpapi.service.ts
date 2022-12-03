import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { catchError, tap, map, filter } from 'rxjs/operators';
import get from 'lodash/get';
import { AlertController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8100', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT', 'Accept' : 'application/json' }),
};

const GOOGLE_API_KEY = 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs';

// const httpOptions2 = {
//   headers: new HttpHeaders({
//   'content': 'application/json',
//   'content-type': 'application/x-www-form-urlencoded'
//   })
// };

@Injectable({
  providedIn: 'root',
})
export class WpapiService {
  apiHost = 'https://propertystays.com/api';

  webServiceURL =
    'https://propertystays.com/api';

  placesApiUrl = 'https://maps.googleapis.com/maps/api/place/';

  userFullDataServ: any = [];

  userProfile: any = [];

  // userAvatar : new Observable = '';

  constructor(
    private http: HttpClient,
    private ahttp: HTTP,
    private platform: Platform,
    public alertController: AlertController
  ) {}

  async citiesAlert(message) {
    const cityAlert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['Accept'],
    });

    await cityAlert.present();
  }

  async cityCheck(cityID) {
    this.getCityCheck(cityID).subscribe((res) => {
      if (res['rule'] === 1) {
        this.citiesAlert(res['alert']);
      }
    });
  }

  getCityCheck(cityID) {
    return this.http.get(
      `${this.webServiceURL}/user/add-property-cityrule?city_id=${cityID}`
    );
  }

  // Return Recommended Locations (Cities)
  getRecommendedLoc() {
    return this.http.get(`${this.webServiceURL}/fetch-toploc`);
  }

  // Return All Locations (Cities)
  getAllLocations() {
    return this.http.get(`${this.webServiceURL}/fetch-allloc`);
  }
  
  getLocations() {
    return this.http.get(`${this.webServiceURL}/fetch-location`);
  }

  // Return Last Minute Rentals based on user's device location
  getLastMin(user_token, device_lat, device_lng) {
    return this.http.get(`${this.webServiceURL}/fetch-lastminute?token=${user_token}&lat=${device_lat}&lng=${device_lng}`);
  }

  // Return Random Rentals
  getFromArround() {
    return this.http.get(`${this.webServiceURL}/fetch-homes`);
  }

  // Return Top Tours
  getTopExp() {
    return this.http.get(`${this.webServiceURL}/fetch-tour`);
  }

  // Return All Tours
  getAllTours() {
    return this.http.get(`${this.webServiceURL}/fetch-tours`);
  }

  // Return one loacation's data
  getLocation(user_token, loc_id) {
    const data = {
      token: user_token,
      loc_id: loc_id,
    };
    return this.http.post(`${this.webServiceURL}/find-city`, data, httpOptions);
  }

  // Return one Rental's data
  getRental(user_token, rental_id) {
    const data = {
      token: user_token,
      id: rental_id
    };
    return this.http.post(`${this.webServiceURL}/property-detail`, data);
  }

  // Return one Tour's data
  getTour(user_token, tour_id) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('tour_id', tour_id);
    return this.http.post(`${this.webServiceURL}/tour-detail`, formData);
  }

  // Add or remove rental, tour, location to favorite
  setFav(user_token, rental_id, p_status) {
    const data = {
      token: user_token,
      id: rental_id,
      status: p_status,
    };
    return this.http.post(`${this.webServiceURL}/user/setpropertyfavorite`, data);
  }

  // Return Post's reviews data
  getReviews(user_token, post_id) {
    const data = {
      token: user_token,
      id: post_id
    };
    return this.http.post(`${this.webServiceURL}/user/reviews`, data, httpOptions);
  }

  // Add Post's review data
  postReview(user_token, post_id, reviewData) {
    const data = {
      token: user_token,
      id: post_id,
      rating: reviewData['rating'],
      content: reviewData['content']
    };
    return this.http.post(`${this.webServiceURL}/user/submit-review`, data, httpOptions);
  }

  // Return User's favorite Rentals
  getSavedRentals(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/user/getfavoriterentals`, formData);
  }

  // Return User's Orders
  getSavedTrips(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('type', 'trips');
    return this.http.post(`${this.webServiceURL}/user/getfavoritetrips`, formData);
  }

  newMessage(user_token, property_id, message) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('property_id', property_id);
    formData.append('message', message);
    return this.http.post(`${this.webServiceURL}/user/get-new-messages`, formData);
  }

  // Return Rentals Search
  doSearchRental(user_token, data) {

    const formData = {
      'token': user_token,
      'property_type': data['type'],
      'suitablefor': data['suit'],
      'amenities': data['amenit'],
      'date_from': data['date_from'],
      'date_to': data['date_to'],
      'loc_id': data['loc_id'],
      'adults': data['adults'],
      'childs': data['childs'],
    };

    console.log(data['adults']);
    console.log(data['loc_id']);
    console.log(data['childs']);
    console.log("data['adults']");
    
    return this.http.post(`${this.webServiceURL}/properties/search`, formData, httpOptions);
  }

  // Do user's authentication and return user's data if user exist
  postAuth(user, pass): Observable<any> {
    const data = {
      email: user,
      password: pass,
    };
    console.log(data);
    return this.http.post(
      this.webServiceURL + '/login',
      data, httpOptions
    );
  }

  // Return All Property's types
  getPropertyTypes() {
    return this.http.get(`${this.webServiceURL}/fetch-rental-types`);
  }

  // Return All Property's suitable types
  getSuitableFor() {
    return this.http.get(`${this.webServiceURL}/fetch-suitables-for`);
  }

  // Return All Property's amenities
  getAmenities() {
    return this.http.get(`${this.webServiceURL}/fetch-amenities`);
  }

  // Return All User's data by user_id
  getUserData(user_id, user_token) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${user_token}` });
    // const udata = this.http.get(`${this.apiHost}/wp/v2/users/${user_id}`, {
    //   headers
    // });
    // // console.log(udata);
    // udata.subscribe(udataFull => {
    //   // console.log(udataFull);
    //   this.userFullDataServ = udataFull;
    // });

    return this.http.get(`${this.webServiceURL}/user/getprofile?token=${user_id}`, { headers });
  }

  // =============================================
  // Messages Services
  // =============================================

  // Return all user's messages
  getMessages(user_token) {
    const formData = new FormData();
    formData.append('page', 'messages');
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/user/get-messages`, formData);
  }

  // Return message
  getMessage(user_token, msg_id) {
    const formData = new FormData();
    formData.append('page', 'message');
    formData.append('token', user_token);
    formData.append('id', msg_id);
    return this.http.post(`${this.webServiceURL}/user/get-messages`, formData);
  }

  // Send message
  sendMessage(user_token, msg_id, msg_text) {
    const formData = new FormData();
    formData.append('page', 'sendmessage');
    formData.append('token', user_token);
    formData.append('id', msg_id);
    formData.append('message', msg_text);
    return this.http.post(`${this.webServiceURL}/user/send-message`, formData);
  }

  // Return Help Topics
  getHelps(h_type) {
    return this.http.get(`${this.webServiceURL}/fetch-help-sub-category?type=${h_type}`);
  }
  // Return Help Topics
  getHelp(sub_category_id) {
    return this.http.get(`${this.webServiceURL}/fetch-help-detail?sub_category_id=${sub_category_id}`);
  }

  getAbout() {
    return this.http.get(`${this.webServiceURL}/fetch-pages?slug=about-us`);
  }

  // Send Feedback
  sendFeedback(form) {
    const formData = new FormData();
    formData.append('name', form['name']);
    formData.append('email', form['email']);
    formData.append('subject', form['subject']);
    formData.append('message', form['message']);
    return this.http.post(`${this.webServiceURL}/contact-message`, formData);
  }

  // Return Terms
  getTerms() {
    return this.http.get(`${this.webServiceURL}/fetch-pages?slug=terms-and-conditions`);
  }
  // Return Terms
  getPrivacy() {
    return this.http.get(`${this.webServiceURL}/fetch-pages?slug=privacy-policy`);
  }

  // Return Profile
  getProfile(user_token) 
  {
    const uprofile = this.http.get(
      `${this.webServiceURL}/user/getprofile?token=${user_token}`
    );
    uprofile.subscribe((user_profile) => {
      this.userProfile = user_profile;
    });
    return this.http.get(
      `${this.webServiceURL}/user/getprofile?token=${user_token}`
    );
  }

  // Update Profile
  updateProfile(user_token, form) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('name', form['name']);
    formData.append('whatsapp', form['whatsapp']);
    formData.append('st_phone', form['st_phone']);
    console.log(formData);
    return this.http.post(`${this.webServiceURL}/user/updateprofile`, formData);
  }

  getNotifications(user_token) {
    const formData = new FormData();
    formData.append('page', 'notifications');
    formData.append('token', user_token);
    return this.http.post(this.webServiceURL, formData);
  }
  setNotification(user_token, notificationID) {
    const formData = new FormData();
    formData.append('page', 'set_notification');
    formData.append('token', user_token);
    formData.append('notification_id', notificationID);
    return this.http.post(this.webServiceURL, formData);
  }

  setDeviceToken(user_token, deviceToken) {
    const formData = new FormData();
    formData.append('page', 'set_token');
    formData.append('token', user_token);
    formData.append('device_token', deviceToken);
    return this.http.post(this.webServiceURL, formData);
  }

  setDeviceUDID(user_token, udid) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('user_udid', udid);
    return this.http.post(`${this.webServiceURL}/user/set-udid`, formData);
  }

  logInByUDID(udid) {
    const formData = new FormData();
    formData.append('user_udid', udid);
    return this.http.post(`${this.webServiceURL}/login-udid`, formData);
  }

  changeNotification(user_token, notify) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('notify', notify);
    return this.http.post(`${this.webServiceURL}/user/change_notification`, formData);
  }

  notificationStatus(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/user/notification_status`, formData);
  }

  getCurrencies(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/currency`, formData);
  }
  getUserCurrency(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/user/currency`, formData);
  }
  setCurrency(user_token, userCurrency) {
    const formData = new FormData();
    formData.append('page', 'set_currency');
    formData.append('token', user_token);
    formData.append('currency', userCurrency);
    return this.http.post(`${this.webServiceURL}/user/set-currency`, formData);
  }

  updateAvatar(new_url) {
    this.userProfile.avatar = new_url;
  }

  // Register
  register(form) {
    const formData = new FormData();
    formData.append('page', 'register');
    formData.append('name', form['name']);
    formData.append('username', form['username']);
    formData.append('email', form['email']);
    formData.append('password', form['password']);
    return this.http.post(`${this.webServiceURL}/register`, formData);
  }

  // Register
  forgetPass(form) {
    const formData = new FormData();
    formData.append('page', 'forget');
    formData.append('email', form['email']);
    return this.http.post(`${this.webServiceURL}/forget-password`, formData);
  }

  // Add Property First

  // Add Preperty
  addProperty(user_token, form, is_first: boolean = false, property_id: null) {
    if (is_first === false && property_id !== null) {
      property_id = property_id;
    }

    const data = {
      token: user_token,
      title: form['title'],
      property_id: property_id,
      description: form['description'],
      renttype_id: form['renttype_id'],
      city_id: form['city_id'],
      area: form['area'],
      adults: form['adults'],
      children: form['children'],
      price: form['price'],
      bath: form['bath'],
      bed: form['bed'],
      sqft: form['sqft'],
      maximum_days: form['maximum_days'],
      amenities: form['amenities'],
      suitablefor: form['suitablefor'],
      lat: form['lat'],
      lng: form['lng'],
    };

    console.log('Following Add PRoperty');
    console.log(data);

    return this.http.post(`${this.webServiceURL}/user/add-property`, data);
  }

  editProperty(user_token, rental_id) {
    const formData = new FormData();
    formData.append('page', 'edit');
    formData.append('token', user_token);
    formData.append('id', rental_id);
    // console.log(user_token);
    // console.log(rental_id);
    return this.http.post(`${this.webServiceURL}/user/edit-property`, formData);
  }

  myProperties(user_token) {
    return this.http.get(
      `${this.webServiceURL}/user/my-properties?token=${user_token}`
    );
  }

  deleteProperty(user_token, rental_id) {
    const formData = new FormData();
    formData.append('page', 'delete');
    formData.append('token', user_token);
    formData.append('id', rental_id);
    return this.http.post(`${this.webServiceURL}/user/delete-property`, formData);
  }

  // Google Places AutoComplete
  googlePlacesAutoComplete(query, user_token) {
    const data = {
      input: query,
      key: GOOGLE_API_KEY,
      sessiontoken: user_token,
    };
    // if (!this.platform.is('android') && !this.platform.is('ios')) {
    //   console.log('browser');
    //   return this.http.get(`${this.placesApiUrl}autocomplete/json?input=${query}&key=${GOOGLE_API_KEY}&sessiontoken=${user_token}`);
    // } else {
    return this.ahttp.get(this.placesApiUrl + 'autocomplete/json', data, {});
    // }
  }

  // Get Place Details By ID
  googlePlacesByID(place_id) {
    const data = {
      placeid: place_id,
      key: GOOGLE_API_KEY,
      fields: 'geometry',
    };
    return this.ahttp.get(this.placesApiUrl + 'details/json', data, {});
  }

  bookingPrice(user_token, form) {

    const data = {
      token: user_token,
      type: form['type'],
      rental_id: form['rental_id'],
      from: form['from'],
      to: form['to'],
      adults: form['adults'],
      children: form['children'],
    };

    // return [{'price': 180}];
    // console.log(formData);
    return this.http.post(`${this.webServiceURL}/user/bookingdates`, data, httpOptions);
  }

  doBooking(user_token, form) {
    const formData = new FormData();
    formData.append('page', 'booking');
    formData.append('token', user_token);
    formData.append('rental_id', form['rental_id']);
    formData.append('from', form['dateFrom']);
    formData.append('to', form['dateTo']);
    formData.append('adults', form['adults']);
    formData.append('children', form['children']);
    formData.append('first_name', form['first_name']);
    formData.append('email', form['email']);
    formData.append('phone', form['phone']);
    formData.append('special_requirements', form['special_requirements']);
    formData.append('status', 'paid');
    formData.append('total_bill', form['total_bill']);
    return this.http.post(`${this.webServiceURL}/user/booktour`, formData);
  }

  getUserTrips(user_token) {
    const formData = new FormData();
    formData.append('token', user_token);
    return this.http.post(`${this.webServiceURL}/user/my-trips`, formData);
  }

  postBookingReq(user_token, id) {
    const formData = new FormData();
    formData.append('token', user_token);
    formData.append('id', id);
    return this.http.post(`${this.webServiceURL}/user/bookingrequest`, formData);
  }

  postBookingReqDetails(user_token, rental_id, from_date, to_date, adults, children) {

    const data = {
      token: user_token,
      type: 'rental',
      rental_id: rental_id,
      from: from_date,
      to: to_date,
      adults: adults,
      children: children,
    };

    return this.http.post(`${this.webServiceURL}/user/bookingrequestdetails`, data, httpOptions);
  }
}
