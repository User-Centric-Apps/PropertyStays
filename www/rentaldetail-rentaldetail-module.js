(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rentaldetail-rentaldetail-module"],{

/***/ "./src/app/components/sendmsg/sendmsg.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sendmsg/sendmsg.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"send-message\" *ngIf=\"!msgSent; else success\">\n    <ion-textarea [(ngModel)]=\"message\" #newMsgArea2 placeholder=\"Write your message here\" autofocus=\"true\" rows=\"6\">\n    </ion-textarea>\n    <ion-item lines=\"none\">\n        <ion-button expand=\"block\" color=\"primary\" slot=\"end\" (click)=\"send()\" class=\"white-text\" [disabled]=\"message === ''\">\n            Send\n        </ion-button>\n        <ion-button color=\"medium\" fill=\"clear\" slot=\"start\" (click)=\"cancel()\"> Cancel\n        </ion-button>\n    </ion-item>\n</div>\n<ng-template #success>\n    <ion-text color=\"primary\" text-center> Message Sent </ion-text>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/sendmsg/sendmsg.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sendmsg/sendmsg.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.send-message ion-textarea {\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  height: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW5kbXNnL0Q6XFxtb2JpbGVcXGNlbnRyaWNGaW5hbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VuZG1zZ1xcc2VuZG1zZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VuZG1zZy9zZW5kbXNnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNlbmQtbWVzc2FnZSB7XG4gICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sendmsg/sendmsg.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sendmsg/sendmsg.component.ts ***!
  \*********************************************************/
/*! exports provided: SendmsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmsgComponent", function() { return SendmsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
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





var SendmsgComponent = /** @class */ (function () {
    function SendmsgComponent(popoverController, navParams, wpApiService, loadingCtrl, authService) {
        this.popoverController = popoverController;
        this.navParams = navParams;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        // @ViewChild('newMsgArea2') public messageInput;
        this.message = '';
        this.msgSent = false;
    }
    SendmsgComponent.prototype.ngOnInit = function () {
        this.PropertyID = this.navParams.get('PropertyID');
        this.userToken = this.navParams.get('user_token');
    };
    SendmsgComponent.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading no-mt new-loader'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SendmsgComponent.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.message !== '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wpApiService
                                .newMessage(this.authService.userToken, this.PropertyID, this.message)
                                .subscribe(function (data) {
                                console.log(data);
                                if (data['status'] === 1) {
                                    _this.loadingCtrl.dismiss();
                                    _this.message = '';
                                    _this.msgSent = true;
                                    setTimeout(function () {
                                        _this.popoverController.dismiss();
                                    }, 1000);
                                }
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendmsgComponent.prototype.cancel = function () {
        this.message = '';
        this.popoverController.dismiss();
    };
    SendmsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendmsg',
            template: __webpack_require__(/*! ./sendmsg.component.html */ "./src/app/components/sendmsg/sendmsg.component.html"),
            styles: [__webpack_require__(/*! ./sendmsg.component.scss */ "./src/app/components/sendmsg/sendmsg.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SendmsgComponent);
    return SendmsgComponent;
}());



/***/ }),

/***/ "./src/app/rentaldetail/rentaldetail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/rentaldetail/rentaldetail.module.ts ***!
  \*****************************************************/
/*! exports provided: RentaldetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentaldetailPageModule", function() { return RentaldetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rentaldetail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rentaldetail.page */ "./src/app/rentaldetail/rentaldetail.page.ts");
/* harmony import */ var _components_sendmsg_sendmsg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sendmsg/sendmsg.component */ "./src/app/components/sendmsg/sendmsg.component.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ReviewsComponent } from '../components/reviews/reviews.component';

// import { ImagesViewer2Page } from '../shared/images-viewer2/images-viewer2.page';

var routes = [
    {
        path: '',
        component: _rentaldetail_page__WEBPACK_IMPORTED_MODULE_5__["RentaldetailPage"]
    }
];
var RentaldetailPageModule = /** @class */ (function () {
    function RentaldetailPageModule() {
    }
    RentaldetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            entryComponents: [_components_sendmsg_sendmsg_component__WEBPACK_IMPORTED_MODULE_6__["SendmsgComponent"]],
            declarations: [_rentaldetail_page__WEBPACK_IMPORTED_MODULE_5__["RentaldetailPage"], _components_sendmsg_sendmsg_component__WEBPACK_IMPORTED_MODULE_6__["SendmsgComponent"]]
        })
    ], RentaldetailPageModule);
    return RentaldetailPageModule;
}());



/***/ }),

/***/ "./src/app/rentaldetail/rentaldetail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/rentaldetail/rentaldetail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"transparent over-slider\" [ngClass]=\"{ 'header-white': scrollPosition > 220 }\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" class=\"havy\">\n            <ion-back-button color=\"primary\" class=\"trn\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"scrollPosition > 220\" (click)=\"shareThis()\">{{ rentalData?.title }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" class=\"havy\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"openSelect()\">\n                <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\n                <ion-select interface=\"action-sheet\" class=\"sss\" [(ngModel)]=\"social\" #mySelect (ionChange)=\"shareSocialNw()\" style=\"display: none;\">\n                <ion-select-option value=\"1\">Share via Facebook</ion-select-option>\n                <ion-select-option value=\"2\">Share via Twitter</ion-select-option>\n                <ion-select-option value=\"3\">Share via Whatsapp</ion-select-option>\n                <ion-select-option value=\"4\">Share via Instagram</ion-select-option>\n                <ion-select-option value=\"5\">Share via Email</ion-select-option>\n                </ion-select>\n            </ion-button>\n            <ion-button fill=\"clear\" class=\"havy\" (click)=\"toggleFav()\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\">\n                <ion-icon [name]=\"rentalData?.isInFavorite === 0 ? 'heart-empty' : 'heart'\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" class=\"havy\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"imagesViewer()\">\n                <ion-icon name=\"photos\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"under-header\" >\n    <ion-slides pager=\"true\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\" *ngIf=\"rentalData?.images !== null; else noImages\">\n        <ion-slide *ngFor=\"let img of rentalData?.images\" [ngStyle]=\"img.image !== null ? {'background-image': 'url('+img.image+')'} : {'background-image':'url(/assets/img/property/no_image.png)'}\">\n            <img [src]=\"\n          img.image !== null || img.image !== ''\n            ? img.image\n            : './assets/img/property/no_image2.png'\n        \" />\n        </ion-slide>\n    </ion-slides>\n    <ng-template #noImages>\n        <ion-slides pager=\"false\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\">\n            <ion-slide>\n                <img src=\"./assets/img/property/no_image2.png\" />\n            </ion-slide>\n        </ion-slides>\n    </ng-template>\n    <div class=\"slide-data\">\n    <div class=\"featured\" *ngIf=\"rentalData?.featured == 1\">Featured</div>\n        <h3>{{ rentalData?.title }}</h3>\n\n        <div class=\"rating\">\n            <ion-icon *ngIf=\"rentalData?.rating > 0\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 1\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 2\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 3\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 4\" name=\"star\" color=\"warning\"></ion-icon>\n        </div>\n    </div>\n\n    <div class=\"prop-detail\">\n        <ion-row>\n            <ion-col size=\"9\" class=\"prop-data\">\n                <ion-item lines=\"none\">\n                    <ion-label text-wrap>\n                        <p class=\"location\">{{ rentalData?.location }}</p>\n                        <ion-text>\n                            <p class=\"price\">{{ rentalData?.price }} / per night</p>\n                        </ion-text>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"owner\">\n                <div class=\"avvatr\">\n                    <ion-avatar class=\"owner-img\" *ngIf=\"(rentalData?.owner)['image']\">\n                        <img src=\"{{ (rentalData?.owner)['image'] }}\" />\n                    </ion-avatar>\n                </div>\n                <div class=\"chatb\">\n                    <ion-icon name=\"chatboxes\" (click)=\"sendMessage($event)\"></ion-icon>\n                </div>\n                <p class=\"owner-name\">{{ (rentalData?.owner)['name'] }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"features\">\n        <ion-row class=\"ion-text-center\">\n            <ion-col size=\"6\" *ngIf=\"rentalData?.size\">\n                <img src=\"/assets/icons/Amenities/house.svg\" width=\"28\" style=\"float: left;\">\n                <p class=\"name\" style=\"    float: left;\n    margin-left: 10px;\n    margin-top: 8px;\">House: <strong>{{ rentalData?.size }} sq. ft.</strong></p>\n            </ion-col>\n\n            <ion-col size=\"6\" *ngIf=\"rentalData?.bedrooms\">\n                <img src=\"/assets/icons/Amenities/bed.svg\" width=\"28\" style=\"float: left;\">\n                <p class=\"name\" style=\"    float: left;\n    margin-left: 10px;\n    margin-top: 8px;\">Bedrooms: <strong>{{ rentalData?.bedrooms }}</strong></p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"rentalData?.adults\">\n                <img src=\"/assets/icons/Amenities/people.svg\" width=\"28\" style=\"float: left;\">\n                <p class=\"name\" style=\"    float: left;\n    margin-left: 10px;\n    margin-top: 8px;\">Sleeps: <strong>{{ rentalData?.adults }}</strong></p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"rentalData?.bath\">\n                <img src=\"/assets/icons/Amenities/min-stay.svg\" width=\"28\" style=\"float: left;\">\n                <p class=\"name\" style=\"    float: left;\n    margin-left: 10px;\n    margin-top: 8px;\">Minimum Stay : <strong>1 night</strong></p>\n            </ion-col>\n            <!--<ion-col size=\"3\" class=\"sydd\" *ngIf=\"rentalData?.adults\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/ppl.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>\n                        <span class=\"heavy\">{{ rentalData?.adults }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"sydd\" *ngIf=\"rentalData?.bedrooms\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/rooms.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>\n                        <span class=\"heavy\">{{ rentalData?.bedrooms }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"sydd\" *ngIf=\"rentalData?.bath\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/bath.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>\n                        <span class=\"heavy\">{{ rentalData?.bath }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"sydd\" *ngIf=\"rentalData?.maximum_days\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/min-stay.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Maximum Days:\n                        <span class=\"heavy\">{{ rentalData?.maximum_days }}</span></ion-label>\n                </ion-item>\n            </ion-col>-->\n        </ion-row>\n    </div>\n\n    <div class=\"aminities\" [ngClass]=\"expand ? 'expanded' : 'collapsed'\" *ngIf=\"rentalData?.amenities\">\n        <div class=\"aminities-toggle\" (click)=\"toggleExpand()\" *ngIf=\"aminiteisCount > 6\">\n            <p>+{{ aminiteisCount - 5 }}</p>\n        </div>\n        <ion-row>\n            <ion-col size=\"2\" *ngFor=\"let aminity of rentalData?.amenities\" class=\"aminity\">\n                <img [src]=\"aminity.icon !== '' ? aminity.icon : '/assets/icon/bed.svg'\" />\n                <p class=\"name\">{{ aminity.name }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"reviews\">\n        <ion-item class=\"nopadding\" lines=\"none\" detail>\n            <ion-badge slot=\"start\" color=\"primary\">{{ rentalData?.rating }}\n            </ion-badge>\n            <ion-label>{{ rentalData?.review_desc }}</ion-label>\n            <ion-note slot=\"end\" color=\"primary\" (click)=\"presentReviews()\">{{ rentalData?.reviews_count }} reviews\n            </ion-note>\n        </ion-item>\n    </div>\n\n    <div class=\"description\">\n        <div class=\"content\" [innerHTML]=\"rentalData?.content\" [ngClass]=\"descMore ? 'expanded' : 'collapsed'\"></div>\n        <div class=\"more\" (click)=\"toggleDesc()\">\n            <span>{{ descMoreText }}</span>\n        </div>\n    </div>\n\n    <div *ngIf=\"rentalLocation?.lat !== '' && rentalLocation?.lng !== ''\" id=\"map_canvas\" #map_canvas class=\"map-canvas\"></div>\n\n    <!--<div class=\"featured\" *ngIf=\"rentalData?.tours.length > 0\">\n        <ion-item class=\"cat-row\">\n            <ion-label>Things to do near this home</ion-label>\n        </ion-item>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let tour of rentalData?.tours\">\n                    <ion-card class=\"prop-grid-item\">\n                        <ion-card-content>\n                            <ion-img src=\"{{ tour.image }}\"></ion-img>\n                            <h3 class=\"title\">{{ tour.title }}</h3>\n                            <h4 class=\"price\">{{ tour.price }}</h4>\n                            <div class=\"rating\">\n                                {{ tour.reviews }}\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>-->\n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"primary\" size=\"large\" class=\"big-btn white-text\" expand=\"block\" round (click)=\"bookNow()\">\n        Check Availability\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/rentaldetail/rentaldetail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/rentaldetail/rentaldetail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  width: 100%;\n  height: 250px;\n  border-radius: 10px;\n  margin-bottom: 20px; }\n\nion-item.nopadding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0; }\n\n.prop-detail {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n\n.prop-detail ion-item {\n    --padding-start: 0;\n    --padding-end: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0; }\n\n.prop-detail .prop-data h3.type {\n    color: #627790;\n    font-size: 12px;\n    line-height: 14px;\n    font-weight: 700;\n    margin-bottom: 10px; }\n\n.prop-detail .prop-data p.location {\n    color: #263646;\n    font-size: 14px;\n    line-height: 17px;\n    margin-bottom: 10px; }\n\n.prop-detail .prop-data p.price {\n    color: var(--ion-color-primary);\n    font-size: 17px;\n    line-height: 20px; }\n\n.prop-detail .owner {\n    text-align: center; }\n\n.prop-detail .owner ion-item {\n      display: inline-block;\n      margin-top: 6px; }\n\n.prop-detail .owner ion-item ion-avatar.owner-img {\n        margin: 10px 0 0;\n        align-self: center;\n        justify-self: center;\n        width: 50px;\n        height: 50px; }\n\n.prop-detail .owner p.owner-name {\n      color: #999999;\n      font-size: 8.8px;\n      line-height: 11px;\n      font-weight: 700;\n      width: 100%;\n      text-align: right;\n      float: left; }\n\n.features {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n\n.features ion-item ion-icon {\n    margin: 0 5px 0 0; }\n\n.features ion-item ion-label {\n    margin: 0; }\n\n.features ion-item ion-label span.heavy {\n      font-weight: 700; }\n\n.aminities {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px;\n  transition: height 2s; }\n\n.aminities ion-col {\n    text-align: center; }\n\n.aminities ion-col img {\n      max-width: 44%; }\n\n.aminities p.name {\n    font-size: 10px;\n    margin: 0; }\n\n.aminities .aminities-toggle {\n    /*position: absolute;\n    display: flex;*/\n    float: right;\n    right: 4px;\n    width: 58px;\n    height: 124px;\n    z-index: 1;\n    align-items: center;\n    margin-top: 20px; }\n\n.aminities .aminities-toggle p {\n      display: block;\n      text-align: center;\n      background: #fff;\n      margin: 0;\n      width: 100%;\n      z-index: 1;\n      font-size: 20px;\n      color: #627790; }\n\n.aminities.collapsed {\n    height: 65px;\n    transition: height 2s;\n    overflow: hidden; }\n\n.aminities.expanded {\n    height: auto;\n    transition: height 2s; }\n\n.aminities.expanded .aminities-toggle {\n      position: inherit;\n      float: right;\n      display: none; }\n\n.reviews {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px;\n  margin-top: 24px; }\n\n.reviews ion-item {\n    --detail-icon-color: var(--ion-color-primary);\n    --detail-icon-opacity: 1; }\n\n.reviews ion-item ion-badge {\n      --ion-color-base: #0084B1 !important;\n      --ion-color-contrast: #fff !important;\n      font-size: 13px;\n      margin-right: 5px; }\n\n.reviews ion-item ion-note {\n      font-size: 15px; }\n\n.description {\n  padding-bottom: 15px; }\n\n.description .content.collapsed {\n    height: 58px;\n    overflow: hidden; }\n\n.description .content.expanded {\n    height: auto; }\n\n.description .more {\n    color: var(--ion-color-primary);\n    text-align: right;\n    font-size: 13px;\n    line-height: 16px; }\n\n.contact ion-icon {\n  background: var(--ion-color-primary);\n  --ion-color-base: #fff !important;\n  border-radius: 20px;\n  padding: 6px; }\n\n.sydd {\n  border-bottom: 1px solid #f5f5f5; }\n\n.avvatr {\n  position: absolute;\n  z-index: 9999;\n  right: -10px;\n  top: -70px; }\n\n.chatb {\n  margin-top: 4px;\n  padding: 10px;\n  background: #00bdbb;\n  border-radius: 50%;\n  width: 40px;\n  float: right; }\n\n.chatb ion-icon {\n  color: white; }\n\n.featured {\n  position: absolute;\n  left: 0rem;\n  background: #ED0925;\n  display: inline-block;\n  padding: 0 4px;\n  color: #FFF;\n  font-size: 8px;\n  font-weight: 500;\n  z-index: 99999;\n  height: 20px;\n  line-height: 20px; }\n\n.features p {\n  margin-top: 2px;\n  font-size: 12px;\n  margin-bottom: 0; }\n\n.havy {\n  background: #fff;\n  border-radius: 50%;\n  margin-right: 5px !important;\n  width: 40px !important;\n  height: 40px !important; }\n\n.havy ion-icon {\n    color: #00bdbb; }\n\nion-icon.sc-ion-back-button-md {\n  color: black !important; }\n\n.trn {\n  margin-left: -3px;\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVudGFsZGV0YWlsL0Q6XFxtb2JpbGVcXGNlbnRyaWNGaW5hbC9zcmNcXGFwcFxccmVudGFsZGV0YWlsXFxyZW50YWxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9yZW50YWxkZXRhaWwvcmVudGFsZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLHdCQUFzQjtFQUN0QixzQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2Qsd0JBQXNCO0lBQ3RCLHNCQUFvQixFQUFBOztBQVA1QjtJQVdZLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFmL0I7SUFrQlksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBckIvQjtJQXdCWSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQTFCN0I7SUE4QlEsa0JBQWtCLEVBQUE7O0FBOUIxQjtNQWdDWSxxQkFBcUI7TUFDN0IsZUFBZSxFQUFBOztBQWpDbkI7UUFtQ2dCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBdkM1QjtNQTJDWSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsV0FBVTtNQUNWLGlCQUFnQjtNQUNoQixXQUFXLEVBQUE7O0FBS3ZCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBOztBQUZ0QjtJQUtZLGlCQUFpQixFQUFBOztBQUw3QjtJQVFZLFNBQVMsRUFBQTs7QUFSckI7TUFVZ0IsZ0JBQWdCLEVBQUE7O0FBTWhDO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFIekI7SUFLUSxrQkFBa0IsRUFBQTs7QUFMMUI7TUFPWSxjQUFjLEVBQUE7O0FBUDFCO0lBV1EsZUFBZTtJQUNuQixTQUFTLEVBQUE7O0FBWmI7SUFlSTttQkNyQmU7SUR1QmYsWUFBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBdkJwQjtNQXlCWSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsV0FBVztNQUNYLFVBQVU7TUFDVixlQUFlO01BQ2YsY0FBYyxFQUFBOztBQWhDMUI7SUFvQ1EsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTs7QUF0Q3hCO0lBeUNRLFlBQVk7SUFDWixxQkFBcUIsRUFBQTs7QUExQzdCO01BNENZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osYUFBYSxFQUFBOztBQUt6QjtFQUNJLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWUsRUFBQTs7QUFIbkI7SUFLUSw2Q0FBb0I7SUFDcEIsd0JBQXNCLEVBQUE7O0FBTjlCO01BUVksb0NBQWlCO01BQ2pCLHFDQUFxQjtNQUNyQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7O0FBWDdCO01BY1ksZUFBZSxFQUFBOztBQUszQjtFQUNJLG9CQUFvQixFQUFBOztBQUR4QjtJQUlZLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFMNUI7SUFRWSxZQUFZLEVBQUE7O0FBUnhCO0lBWVEsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBSXpCO0VBRVEsb0NBQW9DO0VBQ3hDLGlDQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUloQjtFQUVJLGdDQUErQixFQUFBOztBQUVuQztFQUVJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFZDtFQUVJLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUVJLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFLckI7RUFFSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUVJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFOM0I7SUFTUSxjQUFjLEVBQUE7O0FBR3RCO0VBRUksdUJBQXFCLEVBQUE7O0FBRXpCO0VBRVEsaUJBQWlCO0VBQ3JCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlbnRhbGRldGFpbC9yZW50YWxkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24taXRlbS5ub3BhZGRpbmcge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4ucHJvcC1kZXRhaWwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIH1cbiAgICAucHJvcC1kYXRhIHtcbiAgICAgICAgaDMudHlwZSB7XG4gICAgICAgICAgICBjb2xvcjogIzYyNzc5MDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcC5sb2NhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzI2MzY0NjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwLnByaWNlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAub3duZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICBpb24tYXZhdGFyLm93bmVyLWltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAub3duZXItbmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOC44cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmVhdHVyZXMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBzcGFuLmhlYXZ5IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW1pbml0aWVzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ0JTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuYW1pbml0aWVzLXRvZ2dsZSB7XG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDsqL1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgaGVpZ2h0OiAxMjRweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzYyNzc5MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gICAgICAgIC5hbWluaXRpZXMtdG9nZ2xlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJldmlld3Mge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOjI0cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDg0QjEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tb3JlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxufVxuXG4uY29udGFjdCB7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIH1cbn1cblxuLnN5ZGRcbntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjVmNWY1O1xufVxuLmF2dmF0clxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICB0b3A6IC03MHB4O1xufVxuLmNoYXRiXG57XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwYmRiYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNoYXRiIGlvbi1pY29uXG57XG4gICAgY29sb3I6d2hpdGU7XG59XG4uZmVhdHVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcmVtO1xuICAgIGJhY2tncm91bmQ6ICNFRDA5MjU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmZlYXR1cmVkOjphZnRlciB7XG4gICAgXG59XG4uZmVhdHVyZXMgcFxue1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5oYXZ5XG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1pY29uXG4gICAge1xuICAgICAgICBjb2xvcjogIzAwYmRiYjtcbiAgICB9XG59XG5pb24taWNvbi5zYy1pb24tYmFjay1idXR0b24tbWRcbntcbiAgICBjb2xvcjpibGFjayFpbXBvcnRhbnQ7XG59XG4udHJuXG57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cbiIsIi5tYXAtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuaW9uLWl0ZW0ubm9wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7IH1cblxuLnByb3AtZGV0YWlsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTE7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAucHJvcC1kZXRhaWwgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwOyB9XG4gIC5wcm9wLWRldGFpbCAucHJvcC1kYXRhIGgzLnR5cGUge1xuICAgIGNvbG9yOiAjNjI3NzkwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLnByb3AtZGV0YWlsIC5wcm9wLWRhdGEgcC5sb2NhdGlvbiB7XG4gICAgY29sb3I6ICMyNjM2NDY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLnByb3AtZGV0YWlsIC5wcm9wLWRhdGEgcC5wcmljZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cbiAgLnByb3AtZGV0YWlsIC5vd25lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLnByb3AtZGV0YWlsIC5vd25lciBpb24taXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7IH1cbiAgICAgIC5wcm9wLWRldGFpbCAub3duZXIgaW9uLWl0ZW0gaW9uLWF2YXRhci5vd25lci1pbWcge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4OyB9XG4gICAgLnByb3AtZGV0YWlsIC5vd25lciBwLm93bmVyLW5hbWUge1xuICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICBmb250LXNpemU6IDguOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XG5cbi5mZWF0dXJlcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgLmZlYXR1cmVzIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IDAgNXB4IDAgMDsgfVxuICAuZmVhdHVyZXMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDA7IH1cbiAgICAuZmVhdHVyZXMgaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW4uaGVhdnkge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uYW1pbml0aWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTE7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzOyB9XG4gIC5hbWluaXRpZXMgaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLmFtaW5pdGllcyBpb24tY29sIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDQ0JTsgfVxuICAuYW1pbml0aWVzIHAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogMDsgfVxuICAuYW1pbml0aWVzIC5hbWluaXRpZXMtdG9nZ2xlIHtcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4OyovXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgaGVpZ2h0OiAxMjRweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxuICAgIC5hbWluaXRpZXMgLmFtaW5pdGllcy10b2dnbGUgcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzYyNzc5MDsgfVxuICAuYW1pbml0aWVzLmNvbGxhcHNlZCB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5hbWluaXRpZXMuZXhwYW5kZWQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7IH1cbiAgICAuYW1pbml0aWVzLmV4cGFuZGVkIC5hbWluaXRpZXMtdG9nZ2xlIHtcbiAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuXG4ucmV2aWV3cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7IH1cbiAgLnJldmlld3MgaW9uLWl0ZW0ge1xuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7IH1cbiAgICAucmV2aWV3cyBpb24taXRlbSBpb24tYmFkZ2Uge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwODRCMSAhaW1wb3J0YW50O1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLnJldmlld3MgaW9uLWl0ZW0gaW9uLW5vdGUge1xuICAgICAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XG4gIC5kZXNjcmlwdGlvbiAuY29udGVudC5jb2xsYXBzZWQge1xuICAgIGhlaWdodDogNThweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5kZXNjcmlwdGlvbiAuY29udGVudC5leHBhbmRlZCB7XG4gICAgaGVpZ2h0OiBhdXRvOyB9XG4gIC5kZXNjcmlwdGlvbiAubW9yZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cblxuLmNvbnRhY3QgaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNnB4OyB9XG5cbi5zeWRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7IH1cblxuLmF2dmF0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC03MHB4OyB9XG5cbi5jaGF0YiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwYmRiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5jaGF0YiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uZmVhdHVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDByZW07XG4gIGJhY2tncm91bmQ6ICNFRDA5MjU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCA0cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cblxuLmZlYXR1cmVzIHAge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uaGF2eSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmhhdnkgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDBiZGJiOyB9XG5cbmlvbi1pY29uLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XG5cbi50cm4ge1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgcGFkZGluZzogM3B4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/rentaldetail/rentaldetail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/rentaldetail/rentaldetail.page.ts ***!
  \***************************************************/
/*! exports provided: RentaldetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentaldetailPage", function() { return RentaldetailPage; });
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_sendmsg_sendmsg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sendmsg/sendmsg.component */ "./src/app/components/sendmsg/sendmsg.component.ts");
/* harmony import */ var _shared_booknow_booknow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/booknow/booknow.component */ "./src/app/shared/booknow/booknow.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/image-viewer/image-viewer.component */ "./src/app/shared/image-viewer/image-viewer.component.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
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











// import { ImagesViewer2Page } from '../shared/images-viewer2/images-viewer2.page';
// import { BookPage } from '../booking/book/book.page';





var RentaldetailPage = /** @class */ (function () {
    function RentaldetailPage(activatedRoute, wpApiService, authService, navCtrl, modalController, loadingCtrl, popoverController, sanitizer, shareService, socialSharing) {
        this.activatedRoute = activatedRoute;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.popoverController = popoverController;
        this.sanitizer = sanitizer;
        this.shareService = shareService;
        this.socialSharing = socialSharing;
        this.ImageSliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            loop: true,
        };
        this.passedId = null;
        this.expand = false;
        this.descMore = false;
        this.descMoreText = 'more';
        this.isLoading = true;
        this.scrollPosition = 0;
    }
    RentaldetailPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RentaldetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoading()];
                    case 1:
                        _a.sent();
                        this.passedId = this.activatedRoute.snapshot.paramMap.get('rental_id');
                        return [4 /*yield*/, this.getRental().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.hideLoading()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RentaldetailPage.prototype.shareThis = function () {
        this.shareService.shareWithOptions(this.rentalData.title, this.rentalData.images[0].image, this.rentalData.images[0].image, this.rentalData.url);
    };
    //New Function
    RentaldetailPage.prototype.openSelect = function () {
        this.selectRef.open();
    };
    RentaldetailPage.prototype.shareSocialNw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.social == 1) {
                    this.shareViaFacebook();
                }
                else if (this.social == 2) {
                    this.shareViaTwitter();
                }
                else if (this.social == 3) {
                    this.shareViaWhatsApp();
                }
                else if (this.social == 4) {
                    this.shareViaInstagram();
                }
                else if (this.social == 5) {
                    this.shareViaEmail();
                }
                else {
                    this.shareViaFacebook();
                }
                return [2 /*return*/];
            });
        });
    };
    RentaldetailPage.prototype.shareViaEmail = function () {
        this.socialSharing.shareViaEmail(this.rentalData.url, this.rentalData.title, ['info@propertystays.com']).then(function () {
        }).catch(function () {
            // Error!
        });
    };
    RentaldetailPage.prototype.shareViaFacebook = function () {
        this.socialSharing.shareViaFacebookWithPasteMessageHint(this.rentalData.title, this.rentalData.images[0].image, this.rentalData.url, this.rentalData.title).then(function () {
        }).catch(function () {
            // Error!
        });
    };
    RentaldetailPage.prototype.shareViaWhatsApp = function () {
        this.socialSharing.shareViaWhatsApp(this.rentalData.url, this.rentalData.images[0].image, this.rentalData.url).then(function () {
        }).catch(function () {
            // Error!
        });
    };
    RentaldetailPage.prototype.shareViaTwitter = function () {
        this.socialSharing.shareViaTwitter(this.rentalData.title, null, this.rentalData.url).then(function () {
        }).catch(function () {
            // Error!
        });
    };
    RentaldetailPage.prototype.shareViaInstagram = function () {
        this.socialSharing.shareViaInstagram(this.rentalData.url, this.rentalData.images[0].image).then(function () {
        }).catch(function () {
            // Error!
        });
    };
    //New Function
    RentaldetailPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isLoading) {
                    setTimeout(function () {
                        _this.isLoading = false;
                        _this.loadingCtrl.dismiss();
                    }, 1000);
                }
                return [2 /*return*/];
            });
        });
    };
    RentaldetailPage.prototype.favLoading = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var favLoading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: 'circles',
                            message: message,
                        })];
                    case 1:
                        favLoading = _a.sent();
                        return [4 /*yield*/, favLoading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RentaldetailPage.prototype.strip = function (html) {
        return html.replace(/<(?:.|\n)*?>/gm, '');
    };
    RentaldetailPage.prototype.scroll = function (ev) {
        this.scrollPosition = ev.detail.scrollTop;
    };
    RentaldetailPage.prototype.presentReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"],
                            componentProps: {
                                toId: this.passedId,
                                user_token: this.authService.userToken,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RentaldetailPage.prototype.imagesViewer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ImageViewerComponent"],
                            componentProps: { images: this.rentalData.images },
                            backdropDismiss: true,
                            cssClass: 'images-viewer',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RentaldetailPage.prototype.bookNow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authService.authenticationState.value) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _shared_booknow_booknow_component__WEBPACK_IMPORTED_MODULE_8__["BooknowComponent"],
                                componentProps: {
                                    rental_id: this.passedId,
                                    rental_name: this.rentalData.title,
                                    user_token: this.authService.userToken,
                                    rental_price: this.rentalData.original_price,
                                    ready_to_pay: this.rentalData.ready_to_pay,
                                    rental_type: 'rental',
                                },
                                backdropDismiss: true,
                                cssClass: 'book-now',
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.authService.presentLoginAlert();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RentaldetailPage.prototype.sendMessage = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authService.authenticationState.value) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.popoverController.create({
                                component: _components_sendmsg_sendmsg_component__WEBPACK_IMPORTED_MODULE_7__["SendmsgComponent"],
                                event: ev,
                                translucent: true,
                                componentProps: {
                                    PropertyID: this.passedId,
                                    user_token: this.authService.userToken,
                                },
                                cssClass: 'msg-popup',
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.authService.presentLoginAlert();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RentaldetailPage.prototype.toggleExpand = function () {
        this.expand = !this.expand;
    };
    RentaldetailPage.prototype.toggleDesc = function () {
        this.descMore = !this.descMore;
        if (this.descMore) {
            this.descMoreText = 'less';
        }
        else {
            this.descMoreText = 'more';
        }
    };
    RentaldetailPage.prototype.toggleFav = function () {
        var _this = this;
        if (this.authService.authenticationState.value) {
            if (this.rentalData.isInFavorite === 0) {
                this.favLoading('Adding to Saved');
                this.wpApiService
                    .setFav(this.authService.userToken, this.passedId, 1)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.loadingCtrl.dismiss();
                    if (data['status'] === 1) {
                        _this.rentalData.isInFavorite = 1;
                    }
                });
            }
            else {
                this.favLoading('Removing from Saved');
                this.wpApiService
                    .setFav(this.authService.userToken, this.passedId, 0)
                    .subscribe(function (data) {
                    _this.loadingCtrl.dismiss();
                    if (data['status'] === 1) {
                        _this.rentalData.isInFavorite = 0;
                    }
                });
            }
        }
        else {
            this.authService.presentLoginAlert();
        }
    };
    RentaldetailPage.prototype.getRental = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Get User Token
                    // await this.authService.getUserData2().then(data => {
                    //   const userData = JSON.parse(data);
                    //   // this.userToken = userData['token'];
                    //   if (data && userData['token'] !== null) {
                    //     this.userToken = userData['token'];
                    //   } else {
                    //     this.userToken = 0;
                    //   }
                    // });
                    return [4 /*yield*/, this.wpApiService
                            .getRental(this.authService.userToken ? this.authService.userToken : 0, this.passedId)
                            .subscribe(function (rentData) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.rentalData = rentData;
                                        console.log(rentData);
                                        this.rentalLocation = this.rentalData['positions'];
                                        this.aminities = this.rentalData['amenities'];
                                        this.aminiteisCount = this.aminities.length;
                                        this.ownerID = this.rentalData.owner.id;
                                        return [4 /*yield*/, this.loadMap(this.rentalLocation)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.hideLoading()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Get User Token
                        // await this.authService.getUserData2().then(data => {
                        //   const userData = JSON.parse(data);
                        //   // this.userToken = userData['token'];
                        //   if (data && userData['token'] !== null) {
                        //     this.userToken = userData['token'];
                        //   } else {
                        //     this.userToken = 0;
                        //   }
                        // });
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RentaldetailPage.prototype.loadMap = function (city_location) {
        return __awaiter(this, void 0, void 0, function () {
            var marker;
            return __generator(this, function (_a) {
                if (city_location['lat'] !== null && city_location['lat'] !== '') {
                    this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMaps"].create('map_canvas', {
                        camera: {
                            target: {
                                lat: parseFloat(city_location['lat']),
                                lng: parseFloat(city_location['lng']),
                            },
                            zoom: 10,
                            tilt: 30,
                        },
                    });
                    marker = this.map.addMarkerSync({
                        title: 'Property',
                        icon: 'red',
                        animation: 'DROP',
                        position: {
                            lat: parseFloat(city_location['lat']),
                            lng: parseFloat(city_location['lng']),
                        },
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySelect'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"])
    ], RentaldetailPage.prototype, "selectRef", void 0);
    RentaldetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rentaldetail',
            template: __webpack_require__(/*! ./rentaldetail.page.html */ "./src/app/rentaldetail/rentaldetail.page.html"),
            styles: [__webpack_require__(/*! ./rentaldetail.page.scss */ "./src/app/rentaldetail/rentaldetail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_11__["ShareService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"]])
    ], RentaldetailPage);
    return RentaldetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=rentaldetail-rentaldetail-module.js.map