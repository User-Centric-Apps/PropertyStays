import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { HTTP } from '@ionic-native/http/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { BookingService } from './providers/booking.service';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { SafeHtmlPipe } from './safe-html.pipe';
import { Stripe } from '@ionic-native/stripe/ngx';


@NgModule({
  declarations: [AppComponent, SafeHtmlPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    Geolocation,
    Camera,
    File,
    WebView,
    FilePath,
    BookingService,
    AndroidPermissions,
    HTTP,
    Facebook,
    PayPal,
    SocialSharing,
    FCM,
    FingerprintAIO,
    UniqueDeviceID,
    Stripe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
