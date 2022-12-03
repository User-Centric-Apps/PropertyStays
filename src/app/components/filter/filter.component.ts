import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { WpapiService } from 'src/app/services/wpapi.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private wpApiService: WpapiService,
    private loadingCtrl: LoadingController
  ) {}

  optionsSlider = {
    spaceBetween: 8,
    effect: 'flip',
    slidesPerView: 'auto',
    freeMode: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 16,
    resistance: false
  };

  propTypeVal = new Array();
  propSuitableVal = new Array();
  propAmenitiesVal = new Array();

  propTypeArr;
  propSuitable;
  propAmenities;

  knobValues: any = {
    lower: 1000,
    upper: 7500
  };

  isLoading = true;

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader'
    });
    return await loading.present();
  }
  async hideLoading() {
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
      }, 500);
    }
  }

  async getPropTypes() {
    this.wpApiService.getPropertyTypes().subscribe((prop_types:any) => {
      // console.log(prop_types);
      let pt = prop_types;
      this.propTypeArr = pt.data;
    });
  }

  async getSuitableFor() {
    this.wpApiService.getSuitableFor().subscribe((prop_suitable:any) => {
      let ps = prop_suitable;
      this.propSuitable = ps.data;
    });
  }

  async getAmenities() {
    this.wpApiService.getAmenities().subscribe((prop_amenities:any) => {
      let pa = prop_amenities;
      this.propAmenities = pa.data;
      this.hideLoading();
    });
  }

  ngOnInit() {
    this.showLoading();
    this.getPropTypes();
    this.getSuitableFor();
    this.getAmenities();
  }

  setPropType(value, e) {
    if (e.target.checked) {
      this.propTypeVal.push(value);
    }
    if (!e.target.checked) {
      const index = this.propTypeVal.indexOf(value, 0);
      if (index > -1) {
        this.propTypeVal.splice(index, 1);
      }
    }
  }

  setSuitableFor(value, e) {
    if (e.target.checked) {
      this.propSuitableVal.push(value);
    }
    if (!e.target.checked) {
      const index = this.propSuitableVal.indexOf(value, 0);
      if (index > -1) {
        this.propSuitableVal.splice(index, 1);
      }
    }
  }

  addAmenity(obj, e) {
    if (e.target.checked) {
      this.propAmenitiesVal.push(obj);
    }
    if (!e.target.checked) {
      const index = this.propAmenitiesVal.indexOf(obj, 0);
      if (index > -1) {
        this.propAmenitiesVal.splice(index, 1);
      }
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  applyFilters() {
    this.modalCtrl.dismiss({
      propType: this.propTypeVal,
      propSuitable: this.propSuitableVal,
      propAmenities: this.propAmenitiesVal
    });
  }
}
