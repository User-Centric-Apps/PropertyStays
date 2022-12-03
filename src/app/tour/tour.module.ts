import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TourPage } from './tour.page';
import { TourReviewsComponent } from '../components/tour-reviews/tour-reviews.component';
// import { ImagesViewer3Page } from '../shared/images-viewer3/images-viewer3.page';
// import { Book2Page } from '../booking/book2/book2.page';
import { SharedModule } from '../shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TourPage
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
  entryComponents: [TourReviewsComponent],
  declarations: [TourPage, TourReviewsComponent]
})
export class TourPageModule {}
