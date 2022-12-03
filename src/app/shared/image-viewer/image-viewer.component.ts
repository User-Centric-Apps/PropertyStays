import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  sliderImages;
  ImageSliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    loop: true,
    zoom: {
      maxRatio: 2
    }
  };

  constructor(
    private navParams: NavParams,
    private modalControler: ModalController
  ) {}

  async ngOnInit() {
    this.sliderImages = this.navParams.get('images');
  }

  async close() {
    this.modalControler.dismiss();
  }
}
