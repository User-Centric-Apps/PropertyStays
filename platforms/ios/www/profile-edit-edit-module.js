(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-edit-edit-module"],{

/***/ "./src/app/profile/edit/edit.module.ts":
/*!*********************************************!*\
  !*** ./src/app/profile/edit/edit.module.ts ***!
  \*********************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.page */ "./src/app/profile/edit/edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/profile/edit/edit.page.html":
/*!*********************************************!*\
  !*** ./src/app/profile/edit/edit.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Profile - Edit\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item lines=\"none\" class=\"profile-header\">\n        <ion-label text-wrap>\n            <h2>\n                {{ userFullData?.name }}\n            </h2>\n            <ion-text>\n                <p class=\"text-second-color text-12\">\n                    <ion-icon name=\"pin\" color=\"medium\"></ion-icon>\n                    <span>{{ userFullData?.st_phone }}</span\n          >\n        </p>\n      </ion-text>\n    </ion-label>\n\n    <ion-avatar slot=\"end\">\n      <img [src]=\"userFullData?.avatar\" *ngIf=\"userFullData?.avatar\" />\n      <ion-button (click)=\"selectImage()\" color=\"primary\" class=\"camera\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-avatar>\n  </ion-item>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"updateProfile(form)\">\n    <ion-list class=\"mr-t-10\">\n      <ion-item class=\"item-input\">\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input\n          viewInput\n          type=\"text\"\n          [value]=\"userFullData?.name\"\n          name=\"name\"\n          ngModel\n          required\n        ></ion-input>\n      </ion-item>\n\n      <ion-item class=\"item-input\">\n        <ion-label position=\"floating\">Mobile</ion-label>\n        <ion-input\n          viewInput\n          type=\"tel\"\n          [value]=\"userFullData?.st_phone\"\n          name=\"st_phone\"\n          ngModel\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item class=\"item-input\">\n        <ion-label position=\"floating\">Whatsapp</ion-label>\n        <ion-input\n          viewInput\n          type=\"tel\"\n          [value]=\"userFullData?.whatsapp\"\n          name=\"whatsapp\"\n          ngModel\n          required\n        >\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button\n      expand=\"block\"\n      size=\"large\"\n      class=\"big-btn big-btn-full mr-t-20\"\n      [disabled]=\"form.invalid\"\n      type=\"submit\"\n    >\n      Update\n      <ion-icon src=\"/assets/icons/checkmark.svg\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/edit/edit.page.scss":
/*!*********************************************!*\
  !*** ./src/app/profile/edit/edit.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item.profile-header ion-label h2 {\n  font-size: 22px; }\n\nion-item.profile-header ion-label p {\n  align-items: center;\n  display: flex; }\n\nion-item.profile-header ion-label p ion-icon {\n    font-size: 20px; }\n\nion-item.profile-header ion-avatar {\n  width: 80px;\n  height: 80px; }\n\nion-item.profile-header ion-avatar img {\n    transform: scale(0.88); }\n\nion-item.profile-header ion-avatar ion-button {\n    position: absolute;\n    right: 5px;\n    width: 36px;\n    font-size: 12px;\n    height: 36px;\n    padding: 0;\n    --padding-start: 0;\n    --padding-end: 0;\n    --border-radius: 36px;\n    top: 0; }\n\nion-item.profile-header ion-avatar ion-button ion-icon {\n      font-size: 27px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9wcm9maWxlL2VkaXQvZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxlQUFlLEVBQUE7O0FBSDNCO0VBTVksbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFQekI7SUFTZ0IsZUFBZSxFQUFBOztBQVQvQjtFQWNRLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBZnBCO0lBaUJZLHNCQUFzQixFQUFBOztBQWpCbEM7SUFvQlksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2QscUJBQWdCO0lBQ2hCLE1BQU0sRUFBQTs7QUE3QmxCO01BK0JnQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5wcm9maWxlLWhlYWRlciB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg4KTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/edit/edit.page.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/edit/edit.page.ts ***!
  \*******************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var STORAGE_KEY = 'my_profile_photos';
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, authService, wpApiService, toastController, loadingController, camera, file, http, webview, actionSheetController, storage, plt, platform, ref, filePath, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.plt = plt;
        this.platform = platform;
        this.ref = ref;
        this.filePath = filePath;
        this.loadingCtrl = loadingCtrl;
        this.image = '';
        this.imageData = '';
        this.images = [];
        this.isLoading = true;
        //this.showLoading();
    }
    EditPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: 'circles',
                            // translucent: true,
                            cssClass: 'page-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isLoading) {
                    setTimeout(function () {
                        _this.isLoading = false;
                        _this.loadingCtrl.dismiss();
                    }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Profile Updated',
                            color: 'success',
                            position: 'bottom',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    EditPage.prototype.updateProfile = function (thisform) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.wpApiService
                            .updateProfile(this.authService.userToken, thisform.value)
                            .subscribe(function (data) {
                            console.log(data);
                            loading.dismiss();
                            _this.presentToast();
                            _this.navCtrl.navigateBack('/tabs/profile');
                            // this.getProfileData();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.getProfileData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userToken = this.authService.userToken;
                        return [4 /*yield*/, this.wpApiService
                                .getProfile(this.authService.userToken)
                                .subscribe(function (udata) {
                                _this.wpApiService
                                    .getUserData(_this.userToken, _this.userToken)
                                    .subscribe(function (user_data) {
                                    _this.usData = user_data;
                                    _this.userFullData = _this.usData.data;
                                    _this.hideLoading();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.ngOnInit = function () {
        this.getProfileData();
    };
    EditPage.prototype.presentToast2 = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.presentToast1 = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            color: 'success',
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    EditPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    EditPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    EditPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file
            .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
            .then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast2('Error while storing file.');
        });
    };
    EditPage.prototype.updateStoredImages = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.get(STORAGE_KEY).then(function (images) {
                    var arr = JSON.parse(images);
                    if (!arr) {
                        var newImages = [name];
                        _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
                    }
                    else {
                        arr.push(name);
                        _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
                    }
                    var filePath = _this.file.dataDirectory + name;
                    var resPath = _this.pathForImage(filePath);
                    var newEntry = {
                        name: name,
                        path: resPath,
                        filePath: filePath,
                        isUploaded: false
                    };
                    _this.startUpload(newEntry);
                    // this.images = [newEntry, ...this.images];
                    // this.ref.detectChanges(); // trigger change detection cycle
                });
                return [2 /*return*/];
            });
        });
    };
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
    EditPage.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file
            .resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file, imgEntry); });
        })
            .catch(function (err) {
            _this.presentToast2('Error while reading file.');
        });
    };
    EditPage.prototype.readFile = function (file, imgEntry) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('page', 'profilepicture');
            formData.append('token', _this.authService.userToken);
            formData.append('user_photo', imgBlob, file.name);
            console.log(_this.authService.userToken);
            console.log(imgBlob);
            console.log(file.name);
            _this.uploadImageData(formData, imgEntry);
        };
        reader.readAsArrayBuffer(file);
    };
    EditPage.prototype.uploadImageData = function (formData, imgEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(formData, imgEntry);
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Uploading image...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http
                            .post('https://propertystays.com/api/user/updatepicture', formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res) {
                                _this.presentToast1('File upload complete.');
                                console.log(res);
                                // this.userData.avatar_urls[96] = res['url'];
                                //this.wpApiService.updateAvatar(res['url']);
                                _this.getProfileData();
                                // this.navCtrl.navigateBack('/profile');
                                // this.images[position].isUploaded = true;
                            }
                            else {
                                console.log('error');
                                _this.presentToast2('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/profile/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/profile/edit/edit.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-edit-edit-module.js.map