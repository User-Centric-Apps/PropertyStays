import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CityDetailPage } from './city-detail.page';
// import { ImagesViewerPage } from '../shared/images-viewer/images-viewer.page';
import { SharedModule } from '../shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CityDetailPage
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
  entryComponents: [],
  declarations: [CityDetailPage]
})
export class CityDetailPageModule {}
