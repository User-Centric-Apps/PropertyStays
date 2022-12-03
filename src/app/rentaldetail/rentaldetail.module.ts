import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentaldetailPage } from './rentaldetail.page';
// import { ReviewsComponent } from '../components/reviews/reviews.component';
import { SendmsgComponent } from '../components/sendmsg/sendmsg.component';
// import { ImagesViewer2Page } from '../shared/images-viewer2/images-viewer2.page';
import { SharedModule } from '../shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RentaldetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [SendmsgComponent],
  declarations: [RentaldetailPage, SendmsgComponent]
})
export class RentaldetailPageModule {}
