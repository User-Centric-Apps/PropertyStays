import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  options = {
    message: 'share this', // not supported on some apps (Facebook, Instagram)
    subject: 'the subject', // fi. for email
    files: [
      'https://propertystays.com/wp-content/uploads/2019/04/Barcelona-city-breaks-400x400.jpg',
    ], // an array of filenames either locally or remotely
    url: 'https://www.website.com',
    chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
  };
  constructor(private socialSharing: SocialSharing) {}

  shareApp() {
    this.socialSharing
      .share(
        'Whey not try PropertyStays.com app!',
        'Share PropertyStays.com with your friends',
        'https://propertystays.com/wp-content/uploads/2019/04/Barcelona-city-breaks-400x400.jpg',
        'http://PropertyStays.com'
      )
      .then(() => {
        console.log('Shared');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  shareAppWithOptions(options?) {
    this.socialSharing
      .shareWithOptions(options ? options : this.options)
      .then((result) => {
        this.onSuccess(result);
      })
      .catch((msg) => {
        this.onError(msg);
      });
  }
  shareWithOptions(msg?, subj?, file?, link?) {
    const options = {
      message: msg ? msg : null, // not supported on some apps (Facebook, Instagram)
      subject: subj ? subj : null, // fi. for email
      url: link ? link : null,
    };
    console.log(options);
    this.socialSharing
      .shareWithOptions(options)
      .then((result) => {
        this.onSuccess(result);
      })
      .catch((message) => {
        this.onError(message);
      });
  }

  onSuccess(result) {
    console.log('success func');
    console.log('Share completed? ' + result.completed); // On Android apps mostly return false even while it's true
    console.log('Shared to app: ' + result.app);
  }

  onError(msg) {
    console.log('error func');
    console.log('Sharing failed with message: ' + msg);
  }
}
