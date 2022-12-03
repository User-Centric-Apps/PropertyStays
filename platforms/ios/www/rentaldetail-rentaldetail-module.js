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

module.exports = "div.send-message ion-textarea {\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9jb21wb25lbnRzL3NlbmRtc2cvc2VuZG1zZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbmRtc2cvc2VuZG1zZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zZW5kLW1lc3NhZ2Uge1xuICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59Il19 */"

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
        this.ownerID = this.navParams.get('ownerID');
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
                                .newMessage(this.authService.userToken, this.ownerID, this.message)
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

module.exports = "<ion-header class=\"transparent over-slider\" [ngClass]=\"{ 'header-white': scrollPosition > 220 }\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [color]=\"scrollPosition > 220 ? 'primary' : 'light'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"scrollPosition > 220\">{{ rentalData?.title }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"shareThis()\">\n                <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" (click)=\"toggleFav()\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\">\n                <ion-icon [name]=\"rentalData?.isInFavorite === 0 ? 'heart-empty' : 'heart'\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"imagesViewer()\">\n                <ion-icon name=\"photos\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"under-header\" >\n    <ion-slides pager=\"true\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\" *ngIf=\"rentalData?.images !== null; else noImages\">\n        <ion-slide *ngFor=\"let image of rentalData?.images\" [ngStyle]=\"image.image !== null ? {'background-image': 'url('+image.image+')'} : {'background-image':'url(/assets/img/property/no_image.png)'}\">\n            <!-- <img [src]=\"\n          image !== null || image !== ''\n            ? image\n            : './assets/img/property/no_image2.png'\n        \" /> -->\n        </ion-slide>\n    </ion-slides>\n    <ng-template #noImages>\n        <ion-slides pager=\"false\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\">\n            <ion-slide>\n                <img src=\"./assets/img/property/no_image2.png\" />\n            </ion-slide>\n        </ion-slides>\n    </ng-template>\n    <div class=\"slide-data\">\n        <h3>{{ rentalData?.title }}</h3>\n\n        <div class=\"rating\">\n            <ion-icon *ngIf=\"rentalData?.rating > 0\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 1\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 2\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 3\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"rentalData?.rating > 4\" name=\"star\" color=\"warning\"></ion-icon>\n        </div>\n    </div>\n\n    <div class=\"prop-detail\">\n        <ion-row>\n            <ion-col size=\"9\" class=\"prop-data\">\n                <ion-item lines=\"none\">\n                    <ion-label text-wrap>\n                        <p class=\"location\">{{ rentalData?.location }}</p>\n                        <ion-text>\n                            <p class=\"price\">{{ rentalData?.price }}</p>\n                        </ion-text>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"owner\">\n                <ion-item lines=\"none\" class=\"contact\">\n                    <ion-icon name=\"chatboxes\" color=\"primary\" (click)=\"sendMessage($event)\"></ion-icon>\n                    <ion-avatar class=\"owner-img\" *ngIf=\"(rentalData?.owner)['image']\">\n                        <img src=\"{{ (rentalData?.owner)['image'] }}\" />\n                    </ion-avatar>\n                </ion-item>\n                <p class=\"owner-name\">{{ (rentalData?.owner)['name'] }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"features\">\n        <ion-row>\n            <ion-col size=\"6\" class=\"sydd\" *ngIf=\"rentalData?.bedrooms\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/rooms.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Bedrooms:\n                        <span class=\"heavy\">{{ rentalData?.bedrooms }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"sydd\" *ngIf=\"rentalData?.bath\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/rooms.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Bathroom:\n                        <span class=\"heavy\">{{ rentalData?.bath }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"sydd\" *ngIf=\"rentalData?.maximum_days\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/min-stay.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Maximum Days:\n                        <span class=\"heavy\">{{ rentalData?.maximum_days }}</span></ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"aminities\" [ngClass]=\"expand ? 'expanded' : 'collapsed'\" *ngIf=\"rentalData?.amenities\">\n        <div class=\"aminities-toggle\" (click)=\"toggleExpand()\" *ngIf=\"aminiteisCount > 6\">\n            <p>+{{ aminiteisCount - 5 }}</p>\n        </div>\n        <ion-row>\n            <ion-col size=\"2\" *ngFor=\"let aminity of rentalData?.amenities\" class=\"aminity\">\n                <img [src]=\"aminity.icon !== '' ? aminity.icon : '/assets/icon/bed.svg'\" />\n                <p class=\"name\">{{ aminity.name }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"reviews\">\n        <ion-item class=\"nopadding\" lines=\"none\" detail>\n            <ion-badge slot=\"start\" color=\"primary\">{{ rentalData?.rating }}\n            </ion-badge>\n            <ion-label>{{ rentalData?.review_desc }}</ion-label>\n            <ion-note slot=\"end\" color=\"primary\" (click)=\"presentReviews()\">{{ rentalData?.reviews_count }} reviews\n            </ion-note>\n        </ion-item>\n    </div>\n\n    <div class=\"description\">\n        <div class=\"content\" [innerHTML]=\"rentalData?.content\" [ngClass]=\"descMore ? 'expanded' : 'collapsed'\"></div>\n        <div class=\"more\" (click)=\"toggleDesc()\">\n            <span>{{ descMoreText }}</span>\n        </div>\n    </div>\n\n    <div *ngIf=\"rentalLocation?.lat !== '' && rentalLocation?.lng !== ''\" id=\"map_canvas\" #map_canvas class=\"map-canvas\"></div>\n\n    <!--<div class=\"featured\" *ngIf=\"rentalData?.tours.length > 0\">\n        <ion-item class=\"cat-row\">\n            <ion-label>Things to do near this home</ion-label>\n        </ion-item>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let tour of rentalData?.tours\">\n                    <ion-card class=\"prop-grid-item\">\n                        <ion-card-content>\n                            <ion-img src=\"{{ tour.image }}\"></ion-img>\n                            <h3 class=\"title\">{{ tour.title }}</h3>\n                            <h4 class=\"price\">{{ tour.price }}</h4>\n                            <div class=\"rating\">\n                                {{ tour.reviews }}\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>-->\n</ion-content>\n\n<ion-footer>\n    <ion-button color=\"primary\" size=\"large\" class=\"big-btn white-text\" expand=\"block\" round (click)=\"bookNow()\">\n        Book\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/rentaldetail/rentaldetail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/rentaldetail/rentaldetail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  width: 100%;\n  height: 250px;\n  border-radius: 10px;\n  margin-bottom: 20px; }\n\nion-item.nopadding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0; }\n\n.prop-detail {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n\n.prop-detail ion-item {\n    --padding-start: 0;\n    --padding-end: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0; }\n\n.prop-detail .prop-data h3.type {\n    color: #627790;\n    font-size: 12px;\n    line-height: 14px;\n    font-weight: 700;\n    margin-bottom: 10px; }\n\n.prop-detail .prop-data p.location {\n    color: #263646;\n    font-size: 14px;\n    line-height: 17px;\n    margin-bottom: 10px; }\n\n.prop-detail .prop-data p.price {\n    color: var(--ion-color-primary);\n    font-size: 17px;\n    line-height: 20px; }\n\n.prop-detail .owner {\n    text-align: center; }\n\n.prop-detail .owner ion-item {\n      display: inline-block;\n      margin-top: 5px;\n      --padding-start: 15px;\n      --padding-end: 15px; }\n\n.prop-detail .owner ion-item ion-avatar.owner-img {\n        margin: 10px 0 0;\n        align-self: center;\n        justify-self: center;\n        width: 50px;\n        height: 50px; }\n\n.prop-detail .owner p.owner-name {\n      color: #999999;\n      font-size: 8.8px;\n      line-height: 11px;\n      font-weight: 700; }\n\n.features {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n\n.features ion-item ion-icon {\n    margin: 0 5px 0 0; }\n\n.features ion-item ion-label {\n    margin: 0; }\n\n.features ion-item ion-label span.heavy {\n      font-weight: 700; }\n\n.aminities {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px;\n  transition: height 2s; }\n\n.aminities ion-col {\n    text-align: center; }\n\n.aminities ion-col img {\n      max-width: 50%; }\n\n.aminities p.name {\n    font-size: 8px;\n    opacity: 0.8;\n    margin: 0; }\n\n.aminities .aminities-toggle {\n    position: absolute;\n    right: 16px;\n    background: #fff;\n    display: flex;\n    width: 52px;\n    height: 65px;\n    z-index: 1;\n    align-items: center;\n    margin-top: -5px; }\n\n.aminities .aminities-toggle p {\n      display: block;\n      text-align: center;\n      background: #fff;\n      margin: 0;\n      width: 100%;\n      z-index: 1;\n      font-size: 20px;\n      color: #627790; }\n\n.aminities.collapsed {\n    height: 65px;\n    transition: height 2s;\n    overflow: hidden; }\n\n.aminities.expanded {\n    height: auto;\n    transition: height 2s; }\n\n.aminities.expanded .aminities-toggle {\n      position: inherit;\n      float: right;\n      display: none; }\n\n.reviews {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n\n.reviews ion-item {\n    --detail-icon-color: var(--ion-color-primary);\n    --detail-icon-opacity: 1; }\n\n.reviews ion-item ion-badge {\n      --ion-color-base: #0084B1 !important;\n      --ion-color-contrast: #fff !important;\n      font-size: 13px;\n      margin-right: 5px; }\n\n.reviews ion-item ion-note {\n      font-size: 15px; }\n\n.description {\n  padding-bottom: 15px; }\n\n.description .content.collapsed {\n    height: 55px;\n    overflow: hidden; }\n\n.description .content.expanded {\n    height: auto; }\n\n.description .more {\n    color: var(--ion-color-primary);\n    text-align: right;\n    font-size: 13px;\n    line-height: 16px; }\n\n.contact ion-icon {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 14px;\n  background: var(--ion-color-primary);\n  --ion-color-base: #fff !important;\n  border-radius: 20px;\n  padding: 2px;\n  width: 20px;\n  height: 20px; }\n\n.sydd {\n  border-bottom: 1px solid #f5f5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9yZW50YWxkZXRhaWwvcmVudGFsZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLHdCQUFzQjtFQUN0QixzQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2Qsd0JBQXNCO0lBQ3RCLHNCQUFvQixFQUFBOztBQVA1QjtJQVdZLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFmL0I7SUFrQlksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBckIvQjtJQXdCWSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQTFCN0I7SUE4QlEsa0JBQWtCLEVBQUE7O0FBOUIxQjtNQWdDWSxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLHFCQUFnQjtNQUNoQixtQkFBYyxFQUFBOztBQW5DMUI7UUFxQ2dCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBekM1QjtNQTZDWSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTs7QUFLNUI7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBRnRCO0lBS1ksaUJBQWlCLEVBQUE7O0FBTDdCO0lBUVksU0FBUyxFQUFBOztBQVJyQjtNQVVnQixnQkFBZ0IsRUFBQTs7QUFNaEM7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUh6QjtJQUtRLGtCQUFrQixFQUFBOztBQUwxQjtNQU9ZLGNBQWMsRUFBQTs7QUFQMUI7SUFXUSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVMsRUFBQTs7QUFiakI7SUFnQlEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUF4QnhCO01BMEJZLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxXQUFXO01BQ1gsVUFBVTtNQUNWLGVBQWU7TUFDZixjQUFjLEVBQUE7O0FBakMxQjtJQXFDUSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBOztBQXZDeEI7SUEwQ1EsWUFBWTtJQUNaLHFCQUFxQixFQUFBOztBQTNDN0I7TUE2Q1ksaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixhQUFhLEVBQUE7O0FBS3pCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLDZDQUFvQjtJQUNwQix3QkFBc0IsRUFBQTs7QUFMOUI7TUFPWSxvQ0FBaUI7TUFDakIscUNBQXFCO01BQ3JCLGVBQWU7TUFDZixpQkFBaUIsRUFBQTs7QUFWN0I7TUFhWSxlQUFlLEVBQUE7O0FBSzNCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRHhCO0lBSVksWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQUw1QjtJQVFZLFlBQVksRUFBQTs7QUFSeEI7SUFZUSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFJekI7RUFFUSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGlDQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBRUksZ0NBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZW50YWxkZXRhaWwvcmVudGFsZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWl0ZW0ubm9wYWRkaW5nIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnByb3AtZGV0YWlsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICB9XG4gICAgLnByb3AtZGF0YSB7XG4gICAgICAgIGgzLnR5cGUge1xuICAgICAgICAgICAgY29sb3I6ICM2Mjc3OTA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAubG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICMyNjM2NDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcC5wcmljZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm93bmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgICAgICAgICAgaW9uLWF2YXRhci5vd25lci1pbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwLm93bmVyLW5hbWUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDguOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmVhdHVyZXMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBzcGFuLmhlYXZ5IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW1pbml0aWVzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5hbWluaXRpZXMtdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzYyNzc5MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gICAgICAgIC5hbWluaXRpZXMtdG9nZ2xlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJldmlld3Mge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwODRCMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAuY29udGVudCB7XG4gICAgICAgICYuY29sbGFwc2VkIHtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vcmUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB9XG59XG5cbi5jb250YWN0IHtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5zeWRkXG57XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2Y1ZjVmNTtcbn0iXX0= */"

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
    function RentaldetailPage(activatedRoute, wpApiService, authService, navCtrl, modalController, loadingCtrl, popoverController, sanitizer, shareService) {
        this.activatedRoute = activatedRoute;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.popoverController = popoverController;
        this.sanitizer = sanitizer;
        this.shareService = shareService;
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
        this.shareService.shareWithOptions(this.rentalData.title, this.rentalData.title, null, this.rentalData.url);
    };
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
                                    ownerID: this.ownerID,
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
            _services_share_service__WEBPACK_IMPORTED_MODULE_11__["ShareService"]])
    ], RentaldetailPage);
    return RentaldetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=rentaldetail-rentaldetail-module.js.map