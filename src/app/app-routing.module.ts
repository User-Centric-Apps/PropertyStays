import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { path: 'tips', loadChildren: './tips/tips.module#TipsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  {
    path: 'dateselect',
    loadChildren: './dateselect/dateselect.module#DateselectPageModule'
  },
  {
    path: 'city-detail/:city_id',
    loadChildren: './city-detail/city-detail.module#CityDetailPageModule'
  },
  {
    path: 'forget-pass',
    loadChildren: './forget-pass/forget-pass.module#ForgetPassPageModule'
  },
  {
    path: 'message/:msg_id',
    loadChildren: './message/message.module#MessagePageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'notifications',
    loadChildren:
      './notifications/notifications.module#NotificationsPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'trips',
    loadChildren: './trips/trips.module#TripsPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'host',
    loadChildren: './host/host.module#HostPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
    // canActivate: [LoginGuard]
  },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#FeedbackPageModule'
  },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  {
    path: 'helpdetail/:id',
    loadChildren: './help/detail/detail.module#DetailPageModule'
  },
  {
    path: 'bank',
    loadChildren: './payments/bank/bank.module#BankPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'edit',
    loadChildren: './profile/edit/edit.module#EditPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'property/add',
    loadChildren: './property/add/add.module#AddPageModule',
    canActivate: [LoginGuard]
  },
  { path: 'init', loadChildren: './init/init.module#InitPageModule' },
  // {
  //   path: 'images-viewer',
  //   loadChildren:
  //     './shared/images-viewer/images-viewer.module#ImagesViewerPageModule'
  // },
  // {
  //   path: 'images-viewer2',
  //   loadChildren:
  //     './shared/images-viewer2/images-viewer2.module#ImagesViewer2PageModule'
  // },
  // {
  //   path: 'images-viewer3',
  //   loadChildren:
  //     './shared/images-viewer3/images-viewer3.module#ImagesViewer3PageModule'
  // },
  // {
  //   path: 'book',
  //   loadChildren: './booking/book/book.module#BookPageModule',
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: 'book2',
  //   loadChildren: './booking/book2/book2.module#Book2PageModule',
  //   canActivate: [LoginGuard]
  // },
  {
    path: 'property/edit/:id',
    loadChildren: './property/edit/edit.module#EditPageModule',
    canActivate: [LoginGuard]
  },
  // {
  //   path: 'reviewpost',
  //   loadChildren: './reviewpost/reviewpost.module#ReviewpostPageModule',
  //   canActivate: [LoginGuard]
  // },
  {
    path: 'privacy',
    loadChildren: './privacy/privacy.module#PrivacyPageModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
