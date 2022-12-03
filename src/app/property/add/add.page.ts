import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import {
  Camera,
  CameraOptions,
  PictureSourceType
} from '@ionic-native/Camera/ngx';
import {
  Platform,
  IonSlides,
  ActionSheetController,
  ToastController,
  LoadingController
} from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
import { WpapiService } from '../../services/wpapi.service';
import { AuthService } from '../../services/auth.service';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  CameraPosition,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare const google: any;
const STORAGE_KEY = 'my_property_images';
const STORAGE_PROP_KEY = 'prop_temp';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage implements OnInit {
  @ViewChild('stepsSlider') slider: IonSlides;
  @ViewChild('vMarker') vMarker: ElementRef;

  @ViewChild('map_canvas') mapCanvas: ElementRef;

  step = 1;

  sliderOpts = {
    effect: 'slide',
    slidesPerView: 1,
    resistance: false,
    preventInteractionOnTransition: true,
    allowSlidePrev: false,
    allowSlideNext: false,
    loop: true
  };
  map: any;
  apiKey;
  autoComplete;
  address: string;
  hideMap = true;

  userToken;

  isLoading = true;

  propData = {
    property_id: null,
    title: '',
    description: '',
    renttype_id: '',
    city_id: null,
    area: '',
    adults: 1,
    children: 0,
    price: null,
    discount_price: null,
    id_gallery: null,
    bath: 0,
    bed: 1,
    sqft: '',
    maximum_days: 60,
    lat: '',
    lng: '',
    ready_to_pay:0
  };

  property_id: null;
  title: '';
  description: '';
  renttype_id: '';
  city_id: null;
  area: '';
  adults = 1;
  children = 0;
  price: null;
  discount_price: null;
  id_gallery: null;
  bath = 0;
  bed = 1;
  sqft: '';
  maximum_days: 60;
  lat: any;
  lng: any;
  ready_to_pay: any = 0;

  dData = '';

  isSaved = false;

  propTypeVal;
  propSuitableVal = new Array();
  propAmenitiesVal = new Array();
  amenities: any = [];
  suitablefor: any = [];

  ptData: any = [];
  psData: any = [];
  lcntData: any = [];
  paData: any = [];

  propTypeArr;
  propSuitable;
  propAmenities;
  allLocations;

  mapCenter = {
    lat: 31.0310556,
    lng: 31.359881
  };
  streetInput = '';
  tempStreet = '';
  placesArray = [];
  hasPlaces = false;
  placeDone = false;
  mapMoving = false;

  mapLocation;

  photos;

  images = [];

  citylatlng: '';
  lati: any;
  lngi: any;

  constructor(
    public wpApiService: WpapiService,
    private authService: AuthService,
    private platform: Platform,
    private renderer: Renderer2,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private router: Router
  ) {}

  async getUserToken() {
    await this.authService.getUserData2().then(data => {
      const userData = data;
      this.userToken = userData['token'];
      console.log(this.userToken);
    });
  }

  async showLoading() {
    const loadingPage = await this.loadingController.create({
      spinner: null,
      message: '<img src="/assets/img/loading.gif" />',
      // translucent: true,
      cssClass: 'page-loading new-loader'
    });
    return await loadingPage.present();
  }
  async hideLoading() {
    setTimeout(() => {
      this.isLoading = false;
      this.loadingController.dismiss();
    }, 500);
  }

  async ngOnInit() {
    this.plt.ready().then(() => {
      //this.checkTemp();
      //this.loadStoredImages();
    });
    await this.getUserToken();
    await this.getPropTypes();
    await this.getAmenities();
    await this.getSuitableFor();
    await this.getAllLocs();
    // await this.loadMap(this.mapCenter);
  }

  async ionViewDidEnter() {
    this.plt.ready().then(() => {
      //this.loadStoredImages();
      //this.checkTemp();
    });
    await this.getUserToken();
    await this.getPropTypes();
    await this.getAmenities();
    await this.getSuitableFor();
    await this.getAllLocs();
  }

  async getPropTypes() {
    //this.showLoading();
    this.wpApiService.getPropertyTypes().subscribe(prop_types => {
      this.hideLoading();
      this.ptData = prop_types;
      this.propTypeArr = this.ptData.data;
    });
  }

  async getSuitableFor() {
    this.wpApiService.getSuitableFor().subscribe(prop_suitable => {
      this.psData = prop_suitable;
      this.propSuitable = this.psData.data;
      this.setSuitChecks();
    });
  }

  async getAllLocs() {
    this.wpApiService.getLocations().subscribe(locations => {
      this.lcntData = locations;
      this.allLocations = this.lcntData.data;
    });
  }

  async getAmenities() {
    this.wpApiService.getAmenities().subscribe(prop_amenities => {
      this.paData = prop_amenities;
      this.propAmenities = this.paData.data;
      this.setAmenChecks();
    });
  }

  // setPropType(value, e) {
  //   if (e.target.checked) {
  //     this.propTypeVal.push(value);
  // }
  // if (!e.target.checked) {
  //   const index = this.propTypeVal.indexOf(value, 0);
  //   if (index > -1) {
  //     this.propTypeVal.splice(index, 1);
  //   }
  // }
  // }

  async setAmenChecks() {
    await this.propAmenities.forEach(element => {
      const index = this.amenities.indexOf(element.id, 0);
      if (index > -1) {
        element.isChecked = true;
        this.propAmenitiesVal.push(element.id);
      } else {
        element.isChecked = false;
      }
    });
  }

  async setSuitChecks() {
    await this.propSuitable.forEach(element => {
      const index = this.suitablefor.indexOf(element.id, 0);
      if (index > -1) {
        element.isChecked = true;
        this.propSuitableVal.push(element.id);
      } else {
        element.isChecked = false;
      }
    });
  }

  setAmenity(obj, e) {
    if (!e.target.checked) {
      this.propAmenitiesVal.push(obj);
      this.amenities = this.propAmenitiesVal;
    }
    if (e.target.checked) {
      const index = this.propAmenitiesVal.indexOf(obj, 0);
      if (index > -1) {
        this.propAmenitiesVal.splice(index, 1);
        this.amenities = this.propAmenitiesVal;
      }
    }
  }

  setSuitableFor(obj, e) {
    if (!e.target.checked) {
      this.propSuitableVal.push(obj);
      this.suitablefor = this.propSuitableVal;
    }
    if (e.target.checked) {
      const index = this.suitablefor.indexOf(obj, 0);
      if (index > -1) {
        this.propSuitableVal.splice(index, 1);
        this.suitablefor = this.propSuitableVal;
      }
    }
  }

  // isCheckedAm(amID) {
  //   const tempArr = this.amenities;
  //   const index = tempArr.indexOf(amID, 0);
  //   if (index > -1) {
  //     console.log(this.amenities);
  //     return true;
  //   }
  // }

  checkTemp() {
    this.storage.get(STORAGE_PROP_KEY).then(pData => {
      const pArr = pData;
      if (pArr) {
        this.propData = pArr;
        this.isSaved = true;
        this.tempStreet = this.area;
        console.log(this.propData);
        // if (this.lat !== '' && this.lng !== '') {
        //   this.relocateMap({lat: this.lat, lng: this.lng});
        // }
      } else {
        this.isSaved = false;
      }
    });
  }

  async nextStep(showMap: boolean = false) 
  {
    if(this.property_id)
    {
      this.propData.property_id = this.property_id
    }
    if(this.title)
    {
      this.propData.title = this.title;
    }
    if(this.description)
    {
      this.propData.description = this.description;
    }
    if(this.renttype_id)
    {
      this.propData.renttype_id = this.renttype_id;
    }
    if(this.city_id)
    {
      this.propData.city_id = this.city_id;
    }
    if(this.area)
    {
      this.propData.area = this.area;
    }
    if(this.adults)
    {
      this.propData.adults = this.adults;
    }
    if(this.children)
    {
      this.propData.children = this.children;
    }
    if(this.price)
    {
      this.propData.price = this.price;
    }
    if(this.bath)
    {
      this.propData.bath = this.bath;
    }
    if(this.bed)
    {
      this.propData.bed = this.bed;
    }
    if(this.sqft)
    {
      this.propData.sqft = this.sqft;
    }
    if(this.lat)
    {
      this.propData.lat = this.lat;
    }
    if(this.lng)
    {
      this.propData.lng = this.lng;
    }
    if(this.maximum_days)
    {
      this.propData.maximum_days = this.maximum_days;
    }
    if(this.ready_to_pay)
    {
      this.propData.ready_to_pay = this.ready_to_pay;
    }
    if (showMap === true) {
      this.hideMap = false;
      if (this.lat !== null && this.lat !== '') {
        const mapLocation = {
          lat: this.lat,
          lng: this.lng
        };
        await this.loadMap(mapLocation);
      } else {
        await this.loadMap(this.mapCenter);
      }
    } else 
    {
      this.hideMap = true;
    }
    if (this.isSaved && this.property_id !== null) 
    {
      STORAGE_KEY.replace(
        'my_property_images',
        'my_property_' + this.property_id + '_images'
      );
      this.wpApiService
        .addProperty(
          this.authService.userToken,
          this.propData,
          false,
          this.property_id
        )
        .subscribe(data => {
          console.log('Property Updated');
          console.log(this.propData);
          this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    } 
    else 
    {
      this.wpApiService
        .addProperty(this.authService.userToken, this.propData, true, null)
        .subscribe(data => {
          console.log('Property Added');
          console.log(this.propData);
          this.isSaved = true;
          this.property_id = data['status'];
          console.log(data);
          this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    }

    this.slider.lockSwipeToNext(false).then(() => 
    {
      this.slider.slideNext().then(() => {
        this.slider.lockSwipeToNext(true);
      });
    });

    this.step = this.step + 1;
    console.log('Step:', this.step);
  }

  async publish() {
    if (this.isSaved && this.property_id !== null) {
      const loading = await this.loadingController.create({
        message: 'Publishing...'
      });
      await loading.present();
      this.wpApiService
        .addProperty(
          this.authService.userToken,
          this.propData,
          false,
          this.property_id
        )
        .subscribe(data => {
          console.log(data);
          loading.dismiss();
          console.log('Published');
          this.storage.remove(STORAGE_PROP_KEY);
          this.storage.remove(STORAGE_KEY);
          //this.propData = this.propDataInit;
          this.isSaved = false;
          this.checkTemp();
          // this.slider.slideTo(1);
          this.slider.lockSwipeToNext(false).then(() => {
            this.slider.slideNext().then(() => {
              this.slider.lockSwipeToNext(true);
            });
          });
          this.presentSuccess(
            'Your property has been saved successfully, and waiting for admin approval'
          );
          this.router.navigateByUrl('/tabs/tab1');
        });
    }
  }

  async prevStep(showMap: boolean = false) {
    this.step = this.step - 1;
    if (showMap === true) {
      this.hideMap = false;
      if (this.lat !== null && this.lat !== '') {
        const mapLocation = {
          lat: this.lat,
          lng: this.lng
        };
        await this.loadMap(mapLocation);
      } else {
        await this.loadMap(this.mapCenter);
      }
    } else {
      this.hideMap = true;
    }
    if (this.isSaved) {
      this.wpApiService
        .addProperty(
          this.authService.userToken,
          this.propData,
          false,
          this.property_id
        )
        .subscribe(data => {
          console.log('Property Updated');
          console.log(this.propData);
          this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    } else {
      this.wpApiService
        .addProperty(this.authService.userToken, this.propData, true, null)
        .subscribe(data => {
          console.log('Property Added');
          console.log(this.propData);
          this.isSaved = true;
          this.property_id = data['status'];
          this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    }
    this.slider.lockSwipeToPrev(false).then(() => {
      this.slider.slidePrev().then(() => {
        this.slider.lockSwipeToPrev(true);
      });
    });
  }

  saveExit() {
    this.presentSuccess('Your property has been saved successfully.');
    this.router.navigateByUrl('/tabs/host');
  }

  async spinnerMin(obj) {
    switch (obj) {
      case 'adults':
        this.adults = this.adults - 1;
        break;
      case 'children':
        this.children =
          this.children - 1;
        break;
      case 'bed':
        this.bed = this.bed - 1;
        break;
      case 'bath':
        this.bath = this.bath - 1;
        break;
    }
  }

  async spinnerPlus(obj) {
    switch (obj) {
      case 'adults':
        this.adults = this.adults + 1;
        break;
      case 'children':
        this.children = this.children + 1;
        break;
      case 'bed':
        this.bed = this.bed + 1;
        break;
      case 'bath':
        this.bath = this.bath + 1;
        break;
    }
  }

  /*async loadMap(city_location) {
    if (city_location['lat'] !== null && city_location['lat'] !== '') {
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: parseFloat(city_location['lat']),
            lng: parseFloat(city_location['lng'])
          },
          zoom: 20,
          tilt: 0
        }
      });
      this.map.on(GoogleMapsEvent.MAP_DRAG_START).subscribe(newCenter => {
        this.mapMoving = true;
        this.renderer.setStyle(
          this.vMarker.nativeElement,
          'transform',
          'scale(1.2)'
        );
        this.renderer.setStyle(this.vMarker.nativeElement, 'opacity', '0.7');
      });
      this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(newCenter => {
        this.mapLocation = newCenter[0].target;
        this.lat = this.mapLocation.lat;
        this.lng = this.mapLocation.lng;
        this.mapMoving = false;
        this.renderer.setStyle(
          this.vMarker.nativeElement,
          'transform',
          'scale(1)'
        );
        this.renderer.setStyle(this.vMarker.nativeElement, 'opacity', '1');
      });
    }
  }*/

  async loadMap(city_location) 
  {
    let latlngi;
    latlngi = { lat: this.lat, lng: this.lng };

      this.map = new google.maps.Map(this.mapCanvas.nativeElement, {
        zoom: 10,
        center: latlngi,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: 'roadmap'
      });

      let marker = new google.maps.Marker({
          position: latlngi,
          map: this.map,
          draggable: true
        });
      this.map.setCenter(latlngi);
      google.maps.event.addListener(marker, 'dragend', (event) => {
        this.lat = marker.position.lat();
        this.lng = marker.position.lng();
        console.log(this.lat);
      });
  }

  async searchPlaces() {
    if (this.area !== this.tempStreet) {
      if (this.area !== '' && this.authService.userToken !== null) {
        this.wpApiService
          .googlePlacesAutoComplete(
            this.area,
            this.authService.userToken
          )
          .then(resData => {
            const searchData = JSON.parse(resData.data);
            if (Object.keys(searchData['predictions'] > 0)) {
              this.hasPlaces = true;
              this.placeDone = false;
              this.placesArray = searchData['predictions'];
            } else {
              this.hasPlaces = false;
              this.placesArray = [];
            }
          });
      } else {
        this.hasPlaces = false;
        this.placesArray = [];
      }
    }
  }

  async selectPlace(place_id, place_name) {
    this.area = place_name;
    this.tempStreet = place_name;
    this.hasPlaces = false;
    this.placeDone = true;
    this.placesArray = [];
    this.wpApiService.googlePlacesByID(place_id).then(place => {
      const placehData = JSON.parse(place.data);
      const newPlace = placehData.result.geometry.location;
      this.lat = newPlace.lat;
      this.lng = newPlace.lng;
      // this.relocateMap({lat: this.lat, lng: this.lng});
    });
  }

  // async relocateMap(new_lat_lng) {
  //   this.map.animateCamera({
  //     target: new_lat_lng,
  //     zoom: 18,
  //     tilt: 0
  //   });
  // }

  async setPhotos() {
    console.log(this.photos);
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        console.log(images);
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img.name;
          const resPath = this.pathForImage(filePath);
          this.images.push({
            name: img.name,
            path: resPath,
            filePath: filePath,
            isUploaded: img.isUploaded
          });
        }
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async presentSuccess(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (
        this.platform.is('android') &&
        sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
      ) {
        this.filePath.resolveNativePath(imagePath).then(filePath => {
          const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          const currentName = imagePath.substring(
            imagePath.lastIndexOf('/') + 1,
            imagePath.lastIndexOf('?')
          );
          this.copyFileToLocalDir(
            correctPath,
            currentName,
            this.createFileName()
          );
        });
      } else {
        const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(
          correctPath,
          currentName,
          this.createFileName()
        );
      }
    });
  }

  createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file
      .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
      .then(
        success => {
          this.updateStoredImages(newFileName, false);
        },
        error => {
          this.presentToast('Error while storing file.');
        }
      );
  }

  async updateStoredImages(name, isUploaded) {
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      if (!arr) {
        const newImages = [{ name: name, isUploaded: isUploaded }];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push({ name: name, isUploaded: isUploaded });
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      const filePath = this.file.dataDirectory + name;
      const resPath = this.pathForImage(filePath);

      const newEntry = {
        name: name,
        path: resPath,
        filePath: filePath,
        isUploaded: false
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      const filtered = arr.filter(name => name !== imgEntry.name);

      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      const correctPath = imgEntry.filePath.substr(
        0,
        imgEntry.filePath.lastIndexOf('/') + 1
      );

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
      });
    });
  }

  startUpload(imgEntry, position) {
    this.file
      .resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file =>
          this.readFile(file, imgEntry, position)
        );
      })
      .catch(err => {
        this.presentToast('Error while reading file.');
      });
  }

  readFile(file: any, imgEntry, position) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('page', 'propertyimages');
      formData.append('token', this.authService.userToken);
      formData.append('user_photo', imgBlob, file.name);
      formData.append('rental', this.property_id);
      this.uploadImageData(formData, imgEntry, position);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData, imgEntry, position) {
    const loading = await this.loadingController.create({
      message: 'Uploading image...'
    });
    await loading.present();

    this.http
      .post(
        'https://propertystays.com/api/user/add-property-propertyimages',
        formData
      )
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res) {
          this.presentToast('File upload complete.');
          this.images[position].isUploaded = true;
          this.storage.set(STORAGE_KEY, JSON.stringify(this.images));
        } else {
          this.presentToast('File upload failed.');
        }
      });
  }

  getCityLatLng(loc_id) {
    this.wpApiService.getCityCheck(loc_id).subscribe(data => {
      console.log(data);
      this.lat = parseFloat(data['lati']);
      this.lng = parseFloat(data['lngg']);
    });
  }
}
