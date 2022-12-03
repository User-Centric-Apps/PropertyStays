import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: 'city-detail/:city_id',
            loadChildren:
              '../city-detail/city-detail.module#CityDetailPageModule'
          },
          {
            path: 'rentaldetail/:rental_id',
            loadChildren:
              '../rentaldetail/rentaldetail.module#RentaldetailPageModule'
          },
          {
            path: 'tour/:tour_id',
            loadChildren: '../tour/tour.module#TourPageModule'
          },
          {
            path: 'locations',
            loadChildren: '../locations/locations.module#LocationsPageModule'
          },
          {
            path: 'alltours',
            loadChildren: '../alltours/alltours.module#AlltoursPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule',
            canActivate: [LoginGuard]
          }
          // {
          //   path: 'message',
          //   loadChildren: '../tab2/message/message.module#MessagePageModule'
          // }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule',
            canActivate: [LoginGuard]
          },
          {
            path: 'rentaldetail/:rental_id',
            loadChildren:
              '../rentaldetail/rentaldetail.module#RentaldetailPageModule'
          }
        ]
      },
      {
        path: 'trips',
        children: [
          {
            path: '',
            loadChildren: '../trips/trips.module#TripsPageModule',
            canActivate: [LoginGuard]
          }
        ]
      },
      {
        path: 'host',
        children: [
          {
            path: '',
            loadChildren: '../host/host.module#HostPageModule',
            canActivate: [LoginGuard]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule',
            canActivate: [LoginGuard]
          }
        ]
      },
      {
        path: 'payments',
        loadChildren: '../payments/payments.module#PaymentsPageModule',
        canActivate: [LoginGuard]
      },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
