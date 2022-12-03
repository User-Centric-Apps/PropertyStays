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
import { ActivatedRoute, Router } from '@angular/router';

const STORAGE_KEY = 'my_images';
const STORAGE_PROP_KEY = 'prop_temp';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
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
    loop: false
  };
  map: GoogleMap;
  apiKey;
  autoComplete;
  address: string;
  hideMap = true;

  userToken;

  isLoading = true;

  propData = {
    st_post_id: null,
    st_title: '',
    st_content: '',
    st_desc: '',
    rental_type: '',
    location_id: null,
    address: '',
    rental_max_adult: 1,
    rental_max_children: 0,
    price: null,
    id_gallery: null,
    st_custom_private_bath: 0,
    st_custom_beds: 1,
    st_custom_bedrooms: 1,
    st_custom_size: '',
    amenities: [],
    suitablefor: [],
    rentals_booking_min_day: 1,
    rentals_booking_period: 1,
    lat: '',
    lng: ''
  };

  isSaved = false;

  propTypeVal;
  propSuitableVal = new Array();
  propAmenitiesVal = new Array();

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

  constructor(
    private wpApiService: WpapiService,
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async getUserToken() {
    await this.authService.getUserData2().then(data => {
      const userData = data;
      this.userToken = userData['token'];
      console.log(this.userToken);
      this.showLoading();
      this.wpApiService
        .editProperty(this.authService.userToken, this.propData.st_post_id)
        .subscribe(pdata => {
          console.log('Prop Data:', pdata);
          this.isSaved = true;
          this.propData = pdata[0];
          this.getPropTypes();
          this.getAmenities();
          this.getSuitableFor();
          this.getAllLocs();
        });
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
      this.propData.st_post_id = this.activatedRoute.snapshot.paramMap.get(
        'id'
      );
      this.loadStoredImages();
      // this.checkTemp();
    });
    await this.getUserToken();
    // await this.loadMap(this.mapCenter);
  }

  async getPropTypes() {
    this.wpApiService.getPropertyTypes().subscribe(prop_types => {
      // console.log(prop_types);
      this.propTypeArr = prop_types;
    });
  }

  async getSuitableFor() {
    this.wpApiService.getSuitableFor().subscribe(prop_suitable => {
      // console.log(prop_suitable);
      this.propSuitable = prop_suitable;
      this.setSuitChecks();
    });
  }

  async getAllLocs() {
    this.wpApiService.getAllLocations().subscribe(locations => {
      // console.log(locations);
      this.allLocations = locations;
    });
  }

  async getAmenities() {
    await this.wpApiService.getAmenities().subscribe(prop_amenities => {
      // console.log(prop_amenities);
      this.propAmenities = prop_amenities;
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

  async finishEdit() {
    this.storage.remove(STORAGE_PROP_KEY);
    this.storage.remove(STORAGE_KEY);
    this.isSaved = false;
    this.checkTemp();
    // this.slider.slideTo(1);
    this.slider.lockSwipeToNext(false).then(() => {
      this.slider.slideNext().then(() => {
        this.slider.lockSwipeToNext(true);
      });
    });
    this.presentSuccess('Your Changes has been Saved Successfully.');
    this.router.navigateByUrl('/tabs/host');
  }

  async setAmenChecks() {
    await this.propAmenities.forEach(element => {
      const index = this.propData.amenities.indexOf(element.id, 0);
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
      const index = this.propData.suitablefor.indexOf(element.id, 0);
      if (index > -1) {
        element.isChecked = true;
        this.propSuitableVal.push(element.id);
      } else {
        element.isChecked = false;
      }
    });
    this.hideLoading();
  }

  setAmenity(obj, e) {
    if (!e.target.checked) {
      this.propAmenitiesVal.push(obj);
      this.propData.amenities = this.propAmenitiesVal;
    }
    if (e.target.checked) {
      const index = this.propAmenitiesVal.indexOf(obj, 0);
      if (index > -1) {
        this.propAmenitiesVal.splice(index, 1);
        this.propData.amenities = this.propAmenitiesVal;
      }
    }
  }

  setSuitableFor(obj, e) {
    if (!e.target.checked) {
      this.propSuitableVal.push(obj);
      this.propData.suitablefor = this.propSuitableVal;
    }
    if (e.target.checked) {
      const index = this.propData.suitablefor.indexOf(obj, 0);
      if (index > -1) {
        this.propSuitableVal.splice(index, 1);
        this.propData.suitablefor = this.propSuitableVal;
      }
    }
  }

  // isCheckedAm(amID) {
  //   const tempArr = this.propData.amenities;
  //   const index = tempArr.indexOf(amID, 0);
  //   if (index > -1) {
  //     console.log(this.propData.amenities);
  //     return true;
  //   }
  // }

  async checkTemp() {
    // this.storage.get(STORAGE_PROP_KEY).then(pData => {
    //   const pArr = JSON.parse(pData);
    //   if (pArr) {
    //     this.propData = pArr;
    //     this.isSaved = true;
    //     this.tempStreet = this.propData.address;
    //     console.log(this.propData);
    //     // if (this.propData.lat !== '' && this.propData.lng !== '') {
    //     //   this.relocateMap({lat: this.propData.lat, lng: this.propData.lng});
    //     // }
    //   } else {
    //     this.isSaved = false;
    //   }
    // });
  }

  async nextStep(showMap: boolean = false) {
    if (showMap === true) {
      this.hideMap = false;
      if (this.propData.lat !== null && this.propData.lat !== '') {
        const mapLocation = {
          lat: this.propData.lat,
          lng: this.propData.lng
        };
        await this.loadMap(mapLocation);
      } else {
        await this.loadMap(this.mapCenter);
      }
    } else {
      this.hideMap = true;
    }
    if (this.isSaved && this.propData.st_post_id !== null) {
      // this.propData.lat = this.mapLocation.lat;
      // this.propData.lng = this.mapLocation.lng;
      this.wpApiService
        .addProperty(
          this.authService.userToken,
          this.propData,
          false,
          this.propData.st_post_id
        )
        .subscribe(data => {
          console.log('Property Updated');
          console.log(this.propData);
          console.log(data);
          // this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    }
    // } else {
    //   this.wpApiService.addProperty(this.userToken, this.propData, true, null).subscribe(data => {
    //     console.log('Property Added');
    //     console.log(this.propData);
    //     this.isSaved = true;
    //     this.propData.st_post_id = data['status'];
    //     this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
    //   });
    // }
    this.slider.lockSwipeToNext(false).then(() => {
      this.slider.slideNext().then(() => {
        this.slider.lockSwipeToNext(true);
      });
    });
    this.step = this.step + 1;
  }

  async prevStep(showMap: boolean = false) {
    this.step = this.step - 1;
    if (showMap === true) {
      this.hideMap = false;
      if (this.propData.lat !== null && this.propData.lat !== '') {
        const mapLocation = {
          lat: this.propData.lat,
          lng: this.propData.lng
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
          this.propData.st_post_id
        )
        .subscribe(data => {
          console.log('Property Updated');
          console.log(this.propData);
          console.log(data);
          // this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
        });
    }
    // } else {
    //   this.wpApiService.addProperty(this.userToken, this.propData, true, null).subscribe(data => {
    //     console.log('Property Added');
    //     console.log(this.propData);
    //     this.isSaved = true;
    //     this.propData.st_post_id = data['status'];
    //     this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
    //   });
    // }
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
      case 'rental_max_adult':
        this.propData.rental_max_adult = this.propData.rental_max_adult - 1;
        break;
      case 'rental_max_children':
        this.propData.rental_max_children =
          this.propData.rental_max_children - 1;
        break;
      case 'st_custom_beds':
        this.propData.st_custom_beds = this.propData.st_custom_beds - 1;
        break;
      case 'st_custom_private_bath':
        this.propData.st_custom_private_bath =
          this.propData.st_custom_private_bath - 1;
        break;
    }
  }

  async spinnerPlus(obj) {
    switch (obj) {
      case 'rental_max_adult':
        this.propData.rental_max_adult = this.propData.rental_max_adult + 1;
        break;
      case 'rental_max_children':
        this.propData.rental_max_children =
          this.propData.rental_max_children + 1;
        break;
      case 'st_custom_beds':
        this.propData.st_custom_beds = this.propData.st_custom_beds + 1;
        break;
      case 'st_custom_private_bath':
        this.propData.st_custom_private_bath =
          this.propData.st_custom_private_bath + 1;
        break;
    }
  }

  async loadMap(city_location) {
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
        this.propData.lat = newCenter[0].target.lat;
        this.propData.lng = newCenter[0].target.lng;
        this.mapMoving = false;
        this.renderer.setStyle(
          this.vMarker.nativeElement,
          'transform',
          'scale(1)'
        );
        this.renderer.setStyle(this.vMarker.nativeElement, 'opacity', '1');
      });
    }
  }

  async searchPlaces() {
    if (this.propData.address !== this.tempStreet) {
      if (this.propData.address !== '' && this.authService.userToken !== null) {
        this.wpApiService
          .googlePlacesAutoComplete(
            this.propData.address,
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
    this.propData.address = place_name;
    this.tempStreet = place_name;
    this.hasPlaces = false;
    this.placeDone = true;
    this.placesArray = [];
    this.wpApiService.googlePlacesByID(place_id).then(place => {
      const placehData = JSON.parse(place.data);
      const newPlace = placehData.result.geometry.location;
      this.propData.lat = newPlace.lat;
      this.propData.lng = newPlace.lng;
      // this.relocateMap({lat: this.propData.lat, lng: this.propData.lng});
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
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          this.images.push({
            name: img,
            path: resPath,
            filePath: filePath,
            isUploaded: false
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
      duration: 2000
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
          this.updateStoredImages(newFileName);
        },
        error => {
          this.presentToast('Error while storing file.');
        }
      );
  }

  async updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      if (!arr) {
        const newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
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
      formData.append('rental', this.propData.st_post_id);
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
        'http://propertystays.com/beta/webservice/jsones/webservice.php',
        formData
      )
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res['success']) {
          this.presentToast('File upload complete.');
          this.images[position].isUploaded = true;
          this.storage.set(STORAGE_KEY, JSON.stringify(this.images));
        } else {
          this.presentToast('File upload failed.');
        }
      });
  }
}
