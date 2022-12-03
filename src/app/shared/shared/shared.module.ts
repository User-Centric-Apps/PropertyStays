import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BooknowComponent } from '../booknow/booknow.component';
import { BooktourComponent } from '../booktour/booktour.component';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { ReviewpostComponent } from '../reviewpost/reviewpost.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    BooknowComponent,
    BooktourComponent,
    ReviewsComponent,
    ImageViewerComponent,
    ReviewpostComponent
  ],
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  exports: [
    BooknowComponent,
    BooktourComponent,
    ReviewsComponent,
    ImageViewerComponent,
    ReviewpostComponent
  ],
  entryComponents: [
    BooknowComponent,
    BooktourComponent,
    ReviewsComponent,
    ImageViewerComponent,
    ReviewpostComponent
  ]
})
export class SharedModule {}
