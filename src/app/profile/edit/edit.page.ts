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
  NavController,
  ActionSheetController,
  ToastController,
  LoadingController
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { WpapiService } from 'src/app/services/wpapi.service';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

const STORAGE_KEY = 'my_profile_photos';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
  userData;
  userFullData;
  userToken;
  usData;
  image: any = '';
  imageData: any = '';

  photos;

  images = [];

  isLoading = true;

  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    public wpApiService: WpapiService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private camera: Camera,
    public file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private storage: Storage,
    private plt: Platform,
    private platform: Platform,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private loadingCtrl: LoadingController
  ) {
    //this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      // translucent: true,
      cssClass: 'page-loading'
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Profile Updated',
      color: 'success',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.back();
  }

  async updateProfile(thisform) {
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();
    this.wpApiService
      .updateProfile(this.authService.userToken, thisform.value)
      .subscribe(data => {
        console.log(data);
        loading.dismiss();
        this.presentToast();
        this.navCtrl.navigateBack('/tabs/profile');
        // this.getProfileData();
      });
  }

  async getProfileData() {
    this.userToken = this.authService.userToken;
    await this.wpApiService
        .getProfile(this.authService.userToken)
        .subscribe(udata => {
          this.wpApiService
            .getUserData(this.userToken, this.userToken)
            .subscribe(user_data => {
              this.usData = user_data;
              this.userFullData = this.usData.data;
              this.hideLoading();
            });
        });
  }

  ngOnInit() {
    this.getProfileData();
  }

  async presentToast2(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async presentToast1(text) {
    const toast = await this.toastController.create({
      message: text,
      color: 'success',
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
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
          this.presentToast2('Error while storing file.');
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

      this.startUpload(newEntry);

      // this.images = [newEntry, ...this.images];
      // this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  // deleteImage(imgEntry, position) {
  //   this.images.splice(position, 1);

  //   this.storage.get(STORAGE_KEY).then(images => {
  //       const arr = JSON.parse(images);
  //       const filtered = arr.filter(name => name !== imgEntry.name);
  //       this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

  //       const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

  //       this.file.removeFile(correctPath, imgEntry.name).then(res => {
  //           this.presentToast2('File removed.');
  //       });
  //   });
  // }

  startUpload(imgEntry) {
    this.file
      .resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file, imgEntry));
      })
      .catch(err => {
        this.presentToast2('Error while reading file.');
      });
  }

  readFile(file: any, imgEntry) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('page', 'profilepicture');
      formData.append('token', this.authService.userToken);
      formData.append('user_photo', imgBlob, file.name);
      console.log(this.authService.userToken);
      console.log(imgBlob);
      console.log(file.name);
      this.uploadImageData(formData, imgEntry);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData, imgEntry) {
    console.log(formData, imgEntry);
    const loading = await this.loadingController.create({
      message: 'Uploading image...'
    });
    await loading.present();

    this.http
      .post(
        'https://propertystays.com/api/user/updatepicture',
        formData
      )
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res) {
          this.presentToast1('File upload complete.');
          console.log(res);
          // this.userData.avatar_urls[96] = res['url'];
          //this.wpApiService.updateAvatar(res['url']);
          this.getProfileData();
          // this.navCtrl.navigateBack('/profile');
          // this.images[position].isUploaded = true;
        } else {
          console.log('error');
          this.presentToast2('File upload failed.');
        }
      });
  }
}
