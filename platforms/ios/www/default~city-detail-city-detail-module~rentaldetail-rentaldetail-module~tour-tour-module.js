(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~city-detail-city-detail-module~rentaldetail-rentaldetail-module~tour-tour-module"],{

/***/ "./src/app/components/reviews/reviews.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title class=\"no-margin\">Property reviews</ion-title>\n\n        <ion-buttons slot=\"start\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <div class=\"ratings\">\n        <ion-item lines=\"none\" detail>\n            <ion-label>Rating</ion-label>\n            <ion-note *ngIf=\"reviewsData?.canwrite !== 1\" (click)=\"addReview()\" color=\"danger\" slot=\"end\">Write a review\n            </ion-note>\n        </ion-item>\n        <ion-row align-items-center>\n            <ion-col size=\"4\" class=\"rating-num\">\n                <h2 class=\"rate\" color=\"primary\">\n                    {{ reviewsData?.rating }}\n                </h2>\n                <p>out of 5</p>\n            </ion-col>\n            <ion-col size=\"8\">\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"comments\">\n        <ion-list lines=\"none\">\n            <div *ngFor=\"let comment of reviewsData?.comments\" class=\"comment\">\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"title\">{{ comment.title }}</p>\n                        <div class=\"stars\">\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 0 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 1 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 2 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 3 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 4 ? 'primary' : 'medium'\"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"6\" text-right>\n                        <p class=\"author\">{{ comment.author }}</p>\n                        <p class=\"date\">{{ comment.date }}</p>\n                    </ion-col>\n                </ion-row>\n                <p [innerHtml]=\"comment.content\" class=\"content\"></p>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ratings .rating-num {\n  text-align: center; }\n  .ratings .rating-num h2.rate {\n    text-align: center;\n    color: var(--ion-color-primary);\n    font-size: 60px;\n    line-height: 72px; }\n  .ratings .rating-num p {\n    font-size: 15px;\n    line-height: 20px; }\n  .ratings .stars {\n  padding: 0 5px; }\n  .ratings .stars ion-icon {\n    width: 10px;\n    height: 10px;\n    opacity: 0.6; }\n  .ratings .progress {\n  padding: 0 5px; }\n  .comments .comment {\n  background: #F5F5F5;\n  border-radius: 8px;\n  padding: 2px 10px;\n  margin: 10px 0; }\n  .comments .comment ion-icon.star {\n    width: 14px;\n    height: 14px; }\n  .comments .comment p.title {\n    font-size: 17px;\n    line-height: 20px;\n    margin: 5px 0; }\n  .comments .comment p.author,\n  .comments .comment p.content,\n  .comments .comment p.date {\n    font-size: 13px;\n    line-height: 16px;\n    margin: 5px 0; }\n  .comments .comment p.date {\n    opacity: 0.6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBO0VBRjFCO0lBSVksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFQN0I7SUFVWSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFYN0I7RUFlUSxjQUFjLEVBQUE7RUFmdEI7SUFpQlksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFuQnhCO0VBdUJRLGNBQWMsRUFBQTtFQUl0QjtFQUVRLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtFQUx0QjtJQU9ZLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFSeEI7SUFXWSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBQTtFQWJ6Qjs7O0lBa0JZLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYSxFQUFBO0VBcEJ6QjtJQXVCWSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRpbmdzIHtcbiAgICAucmF0aW5nLW51bSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDIucmF0ZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcycHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3RhcnMge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2dyZXNzIHtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxufVxuXG4uY29tbWVudHMge1xuICAgIC5jb21tZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGlvbi1pY29uLnN0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgcC5hdXRob3IsXG4gICAgICAgIHAuY29udGVudCxcbiAgICAgICAgcC5kYXRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgICBwLmRhdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/reviewpost/reviewpost.component */ "./src/app/shared/reviewpost/reviewpost.component.ts");
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




// import { ReviewpostPage } from './../../reviewpost/reviewpost.page';

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(modalCtrl, navParams, wpApiService, loadingCtrl, authService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.isLoading = true;
    }
    ReviewsComponent.prototype.getReviewsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.showLoading();
                this.wpApiService
                    .getReviews(this.authService.userToken, this.rental_id)
                    .subscribe(function (data) {
                    _this.reviewsData = data[0];
                    _this.hideLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    ReviewsComponent.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReviewsComponent.prototype.hideLoading = function () {
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
    ReviewsComponent.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _shared_reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_4__["ReviewpostComponent"],
                            componentProps: {
                                token: this.authService.userToken,
                                rental_id: this.rental_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReviewsComponent.prototype.ngOnInit = function () {
        this.rental_id = this.navParams.get('toId');
        console.log(this.rental_id);
        this.user_token = this.navParams.get('user_token');
        this.getReviewsData();
    };
    ReviewsComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    ReviewsComponent.prototype.addReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.presentModal();
                return [2 /*return*/];
            });
        });
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/components/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.scss */ "./src/app/components/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/shared/booknow/booknow.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/booknow/booknow.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"screenClass\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\" [color]=\"screenClass == 'done' ? 'light' : 'primary'\" *ngIf=\"screenClass != 'done'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Request a booking</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon [src]=\"\n            screenClass == 'done'\n              ? '/assets/icons/close_white.svg'\n              : '/assets/icons/close.svg'\n          \" class=\"transparent\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding [ngClass]=\"screenClass\">\n    <ion-slides pager=\"false\" [options]=\"sliderOpts\" #stepsSlider>\n        <ion-slide class=\"first-req\">\n            <!-- <h1>Booking Details for </h1> -->\n\n            <div class=\"rent-details\">\n                <ion-row>\n                    <ion-col size=\"8\">\n                        <div class=\"rent-data\">\n                            <h6>{{ rentalDetails?.title | slice: 0:20 }}...</h6>\n                            <ion-text color=\"primary\" *ngIf=\"currencySymbol\">{{ currencySymbol }} {{ rentalDetails?.price }}\n                            </ion-text>\n                            <div class=\"rating\">\n                                <ion-icon *ngIf=\"rentalDetails?.rating > 0\" name=\"star\" color=\"primary\"></ion-icon>\n                                <ion-icon *ngIf=\"rentalDetails?.rating > 1\" name=\"star\" color=\"primary\"></ion-icon>\n                                <ion-icon *ngIf=\"rentalDetails?.rating > 2\" name=\"star\" color=\"primary\"></ion-icon>\n                                <ion-icon *ngIf=\"rentalDetails?.rating > 3\" name=\"star\" color=\"primary\"></ion-icon>\n                                <ion-icon *ngIf=\"rentalDetails?.rating > 4\" name=\"star\" color=\"primary\"></ion-icon>\n                            </div>\n                            <div class=\"reviews\">\n                                {{ rentalDetails?.reviews_count }}\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-img [src]=\"\n                rentalDetails?.image !== null || rentalDetails?.image !== ''\n                  ? rentalDetails?.image\n                  : '/assets/img/property/no_image2.png'\n              \" alt=\"\"></ion-img>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <div class=\"book-data\">\n                <ion-row>\n                    <ion-col size=\"4\" class=\"ion-no-padding\">\n                        <ion-item class=\"item-input\">\n                            <ion-label position=\"floating\">Check in</ion-label>\n                            <ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMMM-YYYY\" [(ngModel)]=\"bookingService.dateFrom\" value=\"{{ bookingService.dateFrom }}\" min=\"{{ bookingService.dateFromMin }}\" [max]=\"bookingService.dateFromMax\" (ionChange)=\"\n                  bookingService.fromChanged(firedBefore); updateBookingReq()\n                \">\n                            </ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"ion-no-padding\">\n                        <ion-item class=\"item-input\">\n                            <ion-label position=\"floating\">Check out</ion-label>\n                            <ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMMM-YYYY\" [(ngModel)]=\"bookingService.dateTo\" value=\"{{ bookingService.dateTo }}\" min=\"{{ bookingService.dateToMin }}\" [max]=\"bookingService.dateToMax\" (ionChange)=\"updateBookingReq()\"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"ion-no-padding\">\n                        <ion-item class=\"item-input travellers\">\n                            <ion-label position=\"floating\">Travellers</ion-label>\n                            <ion-text color=\"primary\" (click)=\"toggleTravelers()\" class=\"travellersCount\">{{ bookingService.adults + bookingService.children }}\n                                <span [textContent]=\"\n                    bookingService.adults + bookingService.children == 1\n                      ? 'Traveller'\n                      : 'Travellers'\n                  \"></span\n              ></ion-text>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"showTravelers\">\n          <ion-col size=\"6\">\n            <ion-item class=\"item-input\">\n              <ion-button\n                color=\"primary\"\n                slot=\"start\"\n                class=\"spinner-btn white-text\"\n                (click)=\"spinnerMin('adults')\"\n                [disabled]=\"this.bookingService.adults <= 1\"\n              >\n                <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-button\n                color=\"primary\"\n                slot=\"end\"\n                class=\"spinner-btn white-text\"\n                (click)=\"spinnerPlus('adults')\"\n              >\n                <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-label position=\"floating\">Adults</ion-label>\n              <ion-input\n                [(ngModel)]=\"bookingService.adults\"\n                type=\"number\"\n                min=\"1\"\n                (ionChange)=\"\n                  bookingService.adults > 0 && bookingService.adults != ''\n                    ? updateBookingReq()\n                    : false\n                \"\n                debounce=\"250\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"item-input\">\n              <ion-button\n                color=\"primary\"\n                slot=\"start\"\n                class=\"spinner-btn white-text\"\n                (click)=\"spinnerMin('children')\"\n                [disabled]=\"this.bookingService.children <= 0\"\n              >\n                <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-button\n                color=\"primary\"\n                slot=\"end\"\n                class=\"spinner-btn white-text\"\n                (click)=\"spinnerPlus('children')\"\n              >\n                <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-label position=\"floating\">Children</ion-label>\n              <ion-input\n                [(ngModel)]=\"bookingService.children\"\n                type=\"number\"\n                min=\"0\"\n                (ionChange)=\"\n                  bookingService.children > 0 && bookingService.children != ''\n                    ? updateBookingReq()\n                    : false\n                \"\n                debounce=\"250\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"book-details\">\n        <h6>Price Details</h6>\n        <ion-item class=\"full-item\">\n          <ion-label color=\"medium\">\n            {{ currencySymbol }} {{ bookDetails?.price }} x\n            {{ bookDetails?.nights }}\n            <span\n              [textContent]=\"bookDetails?.nights == 1 ? 'night' : 'nights'\"\n            ></span>\n                                </ion-label>\n                                <ion-note slot=\"end\" color=\"primary\" class=\"price-line\">{{ currencySymbol }} {{ bookDetails?.total }}</ion-note>\n                        </ion-item>\n            </div>\n\n            <div class=\"total\">\n                <ion-item class=\"full-item\">\n                    <ion-label color=\"medium\"> Total</ion-label>\n                    <ion-note slot=\"end\" color=\"primary\" class=\"price-total\">{{ currencySymbol }} {{ bookDetails?.total }}</ion-note>\n                </ion-item>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <h1>Booking Submission</h1>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">First Name</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.user_meta?.first_name)[0]\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Last Name</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.user_meta?.last_name)[0]\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Email</ion-label>\n                        <ion-input [(ngModel)]=\"userData.user_email\" type=\"email\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Phone</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.user_meta?.st_phone)[0]\" type=\"tel\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Address</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.user_meta?.st_address)[0]\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Special Requirements</ion-label>\n                        <ion-textarea [(ngModel)]=\"specialReq\" rows=\"3\" class=\"small-textarea\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n        <ion-slide [ngClass]=\"screenClass\">\n            <ion-icon src=\"/assets/icons/payment_white.svg\" class=\"done-icon\"></ion-icon>\n            <h3>\n                Your request has been sent.\n            </h3>\n            <p>\n                Once the host accepts your request, you will pay {{ currencySymbol }} {{ bookingPrice }}\n            </p>\n            <ion-button color=\"light\" size=\"large\" expand=\"block\" class=\"big-btn done\" round strong (click)=\"closeModal()\">\n                Done\n                <ion-icon name=\"checkmark\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n<ion-footer class=\"first-slide-book\">\n    <ion-item class=\"request-book\" *ngIf=\"!bookRequested\">\n        <label>Ready to book?</label>\n        <ion-button color=\"primary\" [disabled]=\"\n        bookingService?.adults < 1 ||\n        bookingService?.adults == '' ||\n        bookingService?.adults == null\n      \" class=\"big-btn white-text\" slot=\"end\" (click)=\"nextStep('getPrice')\">\n            Request a booking\n        </ion-button>\n    </ion-item>\n    <ion-grid class=\"terms-grid\" *ngIf=\"bookRequested && screenClass != 'done'\">\n        <ion-row class=\"input-row\">\n            <ion-col size=\"6\">\n                <ion-row class=\"input-row\">\n                    <ion-col size=\"3\" class=\"ion-no-padding\">\n                        <ion-item class=\"item-input has-check\">\n                            <ion-checkbox slot=\"start\" name=\"acceptTerms\" [(ngModel)]=\"acceptTerms\" required></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"ion-no-padding\">\n                        <p class=\"label\">\n                            I accept the booking\n                            <ion-text color=\"primary\" routerLink=\"/terms\" routerDirection=\"forward\">\n                                Terms & Conditions\n                            </ion-text>\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text straight\" [disabled]=\"!acceptTerms\" (click)=\"nextStep('checkOut')\">\n                    Continue\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n<ion-footer> </ion-footer>"

/***/ }),

/***/ "./src/app/shared/booknow/booknow.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/booknow/booknow.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button.spinner-btn {\n  margin: 19px 5px 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  --border-radius: 50%; }\n\nion-icon.transparent {\n  color: transparent; }\n\nion-slides ion-slide {\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  justify-content: flex-start; }\n\nion-slides ion-slide ion-row {\n    justify-content: space-evenly;\n    width: 100%; }\n\nion-slides ion-slide ion-button.next {\n    width: 100%; }\n\nion-slides ion-slide ion-icon.done-icon {\n    font-size: 72px;\n    color: transparent; }\n\nion-slides ion-slide.done {\n    align-items: flex-start;\n    text-align: left;\n    height: 80vh;\n    justify-content: flex-start; }\n\nion-slides ion-slide.done p {\n      font-size: 16px; }\n\nion-slides ion-slide.done h3 {\n      font-size: 26px; }\n\nion-slides ion-slide.done ion-button.done {\n      align-self: flex-end;\n      width: 45%;\n      --ion-color-contrast: var(--ion-color-primart) !important;\n      --color: var(--ion-color-primary);\n      justify-self: flex-end;\n      position: absolute;\n      bottom: 0;\n      right: 0; }\n\nion-slides ion-slide .rent-details {\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--ion-color-tertiary-shade);\n    width: 100%; }\n\nion-slides ion-slide .rent-details .rent-data {\n      text-align: left; }\n\nion-slides ion-slide .rent-details .rent-data h6 {\n        font-size: 0.8em;\n        margin: 0 0 5px; }\n\nion-slides ion-slide .rent-details .rent-data ion-text {\n        font-size: 0.8em;\n        display: flex; }\n\nion-slides ion-slide .rent-details .rent-data .rating {\n        display: inline-flex; }\n\nion-slides ion-slide .rent-details .rent-data .rating ion-icon {\n          font-size: 12px; }\n\nion-slides ion-slide .rent-details .rent-data .reviews {\n        display: inline-flex;\n        font-size: 0.7em;\n        margin-left: 5px;\n        color: var(--ion-color-medium); }\n\nion-slides ion-slide .book-data {\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--ion-color-tertiary-shade);\n    width: 100%; }\n\nion-slides ion-slide .book-data ion-item.item-input ion-datetime {\n      border: 0;\n      color: var(--ion-color-primary);\n      padding-left: 6px; }\n\nion-slides ion-slide .book-data ion-item.item-input.travellers ion-label {\n      transform: translate3d(0, 12px, 0) scale(0.8);\n      background: #fff;\n      margin-left: 6px;\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      display: inline-block;\n      padding-left: 6px;\n      padding-right: 6px;\n      border-radius: 5px 5px 0 0; }\n\nion-slides ion-slide .book-data ion-item.item-input.travellers ion-text {\n      padding: 20px 0 10px; }\n\nion-slides ion-slide .book-details {\n    padding-bottom: 10px;\n    width: 100%;\n    margin-top: 15px; }\n\nion-slides ion-slide .book-details h6 {\n      font-size: 13px;\n      margin-bottom: 0;\n      text-align: left; }\n\nion-slides ion-slide .book-details ion-item {\n      font-size: 16px; }\n\nion-slides ion-slide .total {\n    width: 100%;\n    margin-top: 10px; }\n\nion-slides ion-slide .total ion-item {\n      --inner-border-width: 0; }\n\nion-slides ion-slide ion-item.full-item {\n    --padding-start: 0; }\n\nion-slides ion-slide ion-item.full-item ion-note.price-line {\n      font-size: 16px;\n      font-weight: 600; }\n\nion-slides ion-slide ion-item.full-item ion-note.price-total {\n      font-size: 22px;\n      font-weight: 600; }\n\nion-header.done ion-toolbar {\n  background: var(--ion-color-primary);\n  --background: var(--ion-color-primary) !important; }\n\nion-header.done ion-title {\n  color: #fff;\n  display: none; }\n\nion-header.done::after {\n  display: none; }\n\nion-content.done {\n  --background: var(--ion-color-primary);\n  --color: #fff; }\n\nion-footer.first-slide-book {\n  background: #ebf8f8; }\n\nion-footer.first-slide-book ion-item {\n    --background: transparent;\n    --inner-padding-end: 0;\n    --padding-end: 16px;\n    font-size: 15px;\n    --color: var(--ion-text-color2); }\n\nion-footer.first-slide-book ion-item ion-button {\n      margin: 10px 0;\n      border-radius: 1px;\n      --border-radius: 2px;\n      height: 50px;\n      font-size: 1em;\n      --padding-start: 16px;\n      --padding-end: 16px; }\n\nion-button.straight {\n  margin: 10px 0;\n  border-radius: 1px;\n  --border-radius: 2px;\n  height: 50px;\n  font-size: 1em;\n  --padding-start: 16px;\n  --padding-end: 16px; }\n\nion-grid.terms-grid {\n  padding-top: 0;\n  padding-bottom: 0; }\n\nion-grid.terms-grid ion-col {\n    padding-top: 0;\n    padding-bottom: 0; }\n\nion-grid.terms-grid p.label {\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9zaGFyZWQvYm9va25vdy9ib29rbm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUVRLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUxuQztJQU9ZLDZCQUE2QjtJQUM3QixXQUFXLEVBQUE7O0FBUnZCO0lBV1ksV0FBVyxFQUFBOztBQVh2QjtJQWNZLGVBQWU7SUFDZixrQkFBa0IsRUFBQTs7QUFmOUI7SUFrQlksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMkJBQTJCLEVBQUE7O0FBckJ2QztNQXVCZ0IsZUFBZSxFQUFBOztBQXZCL0I7TUEwQmdCLGVBQWUsRUFBQTs7QUExQi9CO01BNkJnQixvQkFBb0I7TUFDcEIsVUFBVTtNQUNWLHlEQUFxQjtNQUNyQixpQ0FBUTtNQUNSLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVEsRUFBQTs7QUFwQ3hCO0lBd0NZLG9CQUFvQjtJQUNwQix3REFBd0Q7SUFDeEQsV0FBVyxFQUFBOztBQTFDdkI7TUE0Q2dCLGdCQUFnQixFQUFBOztBQTVDaEM7UUE4Q29CLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7O0FBL0NuQztRQWtEb0IsZ0JBQWdCO1FBQ2hCLGFBQWEsRUFBQTs7QUFuRGpDO1FBc0RvQixvQkFBb0IsRUFBQTs7QUF0RHhDO1VBd0R3QixlQUFlLEVBQUE7O0FBeER2QztRQTREb0Isb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsOEJBQThCLEVBQUE7O0FBL0RsRDtJQW9FWSxvQkFBb0I7SUFDcEIsd0RBQXdEO0lBQ3hELFdBQVcsRUFBQTs7QUF0RXZCO01BeUVvQixTQUFTO01BQ1QsK0JBQStCO01BQy9CLGlCQUFpQixFQUFBOztBQTNFckM7TUErRXdCLDZDQUE2QztNQUM3QyxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLDBCQUFrQjtNQUFsQix1QkFBa0I7TUFBbEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDBCQUEwQixFQUFBOztBQXRGbEQ7TUF5RndCLG9CQUFvQixFQUFBOztBQXpGNUM7SUErRlksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUFqRzVCO01BbUdnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBOztBQXJHaEM7TUF3R2dCLGVBQWUsRUFBQTs7QUF4Ry9CO0lBNEdZLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUE3RzVCO01BK0dnQix1QkFBcUIsRUFBQTs7QUEvR3JDO0lBbUhZLGtCQUFnQixFQUFBOztBQW5INUI7TUFxSGdCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUF0SGhDO01BeUhnQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBTWhDO0VBRVEsb0NBQW9DO0VBQ3BDLGlEQUFhLEVBQUE7O0FBSHJCO0VBTVEsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFQckI7RUFVUSxhQUFhLEVBQUE7O0FBSXJCO0VBQ0ksc0NBQWE7RUFDYixhQUFRLEVBQUE7O0FBR1o7RUFDSSxtQkFBbUIsRUFBQTs7QUFEdkI7SUFHUSx5QkFBYTtJQUNiLHNCQUFvQjtJQUNwQixtQkFBYztJQUNkLGVBQWU7SUFDZiwrQkFBUSxFQUFBOztBQVBoQjtNQVNZLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsb0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2QscUJBQWdCO01BQ2hCLG1CQUFjLEVBQUE7O0FBSzFCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRnJCO0lBSVEsY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQUx6QjtJQVFRLDBCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQXFCO1lBQXJCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jvb2tub3cvYm9va25vdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24uc3Bpbm5lci1idG4ge1xuICAgIG1hcmdpbjogMTlweCA1cHggMDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24taWNvbi50cmFuc3BhcmVudCB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBpb24tc2xpZGUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uLm5leHQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24uZG9uZS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAmLmRvbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24uZG9uZSB7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVudC1kZXRhaWxzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5yZW50LWRhdGEge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJldmlld3Mge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYm9vay1kYXRhIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1pdGVtLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYudHJhdmVsbGVycyB7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEycHgsIDApIHNjYWxlKDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2stZGV0YWlscyB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG90YWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVtLmZ1bGwtaXRlbSB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBpb24tbm90ZS5wcmljZS1saW5lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1ub3RlLnByaWNlLXRvdGFsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWhlYWRlci5kb25lIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50LmRvbmUge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1mb290ZXIuZmlyc3Qtc2xpZGUtYm9vayB7XG4gICAgYmFja2dyb3VuZDogI2ViZjhmODtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tYnV0dG9uLnN0cmFpZ2h0IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuXG5pb24tZ3JpZC50ZXJtcy1ncmlkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgICBwLmxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/booknow/booknow.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/booknow/booknow.component.ts ***!
  \*****************************************************/
/*! exports provided: BooknowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooknowComponent", function() { return BooknowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/booking.service */ "./src/app/providers/booking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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






var BooknowComponent = /** @class */ (function () {
    function BooknowComponent(bookingService, navParams, modalControler, wpApiService, authService, toastController, loadingController, alertController) {
        this.bookingService = bookingService;
        this.navParams = navParams;
        this.modalControler = modalControler;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.firedBefore = false;
        this.notAvailable = false;
        this.acceptTerms = false;
        this.userData = [];
        this.screenClass = '';
        this.sliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            preventInteractionOnTransition: true,
            allowSlidePrev: true,
            allowSlideNext: true,
            loop: false
        };
        this.showTravelers = false;
        this.bookRequested = false;
        this.canBook = true;
        this.rejectedBookingMsg = '';
        this.propLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.updatingReq = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
    }
    BooknowComponent.prototype.presentToast = function (message, color, posision, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            color: color,
                            position: posision,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            // translucent: true,
                            cssClass: 'page-loading no-mt'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.showUpdating = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updating;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                            // translucent: true,
                        })];
                    case 1:
                        updating = _a.sent();
                        return [4 /*yield*/, updating.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.showProcessing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var processing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Processing'
                            // translucent: true,
                        })];
                    case 1:
                        processing = _a.sent();
                        return [4 /*yield*/, processing.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.toggleTravelers = function () {
        if (this.showTravelers) {
            this.showTravelers = false;
        }
        else {
            this.showTravelers = true;
        }
    };
    BooknowComponent.prototype.updateBookingReq = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.propLoaded.subscribe(function (state) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(state && !this.updatingReq.value)) return [3 /*break*/, 3];
                                this.updatingReq.next(true);
                                return [4 /*yield*/, this.showUpdating()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.wpApiService
                                        .postBookingReqDetails(this.authService.userToken, this.rental_id, this.bookingService.dateFrom, this.bookingService.dateTo, this.bookingService.adults, this.bookingService.children)
                                        .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log(res);
                                                    if (res.status === 0 && res.msg === 'Not Available') {
                                                        this.notAvailable = true;
                                                    }
                                                    else {
                                                        this.bookDetails = res;
                                                        this.currencySymbol = res.current_symbol;
                                                        this.currency = res.currency;
                                                    }
                                                    return [4 /*yield*/, this.loadingController.dismiss()];
                                                case 1:
                                                    _a.sent();
                                                    this.updatingReq.next(false);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    BooknowComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.firedBefore);
                        this.rental_id = this.navParams.get('rental_id');
                        this.rental_title = this.navParams.get('rental_name');
                        this.user_token = this.authService.userToken;
                        this.bookingPrice = this.navParams.get('rental_price');
                        this.rentalType = this.navParams.get('rental_type');
                        return [4 /*yield*/, this.getProfileData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showLoading()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.wpApiService
                                .postBookingReq(this.user_token, this.rental_id)
                                .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('postBookingReq', res);
                                            this.rentalDetails = res;
                                            this.propLoaded.next(true);
                                            return [4 /*yield*/, this.loadingController.dismiss()];
                                        case 1:
                                            _a.sent();
                                            if (res.status !== 0) {
                                                this.propLoaded.subscribe(function (state) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(state && this.rentalDetails)) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, this.updateBookingReq()];
                                                            case 1:
                                                                _a.sent();
                                                                this.firedBefore = true;
                                                                this.slider.lockSwipeToNext(true);
                                                                this.slider.lockSwipeToPrev(true);
                                                                _a.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.spinnerMin = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.bookingService.adults = this.bookingService.adults - 1;
                        break;
                    case 'children':
                        this.bookingService.children = this.bookingService.children - 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BooknowComponent.prototype.spinnerPlus = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.bookingService.adults = this.bookingService.adults + 1;
                        break;
                    case 'children':
                        this.bookingService.children = this.bookingService.children + 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BooknowComponent.prototype.closeModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // await this.loadingController.dismiss();
                        this.bookRequested = false;
                        this.propLoaded.next(false);
                        this.nextStep('');
                        this.bookingPrice = null;
                        this.canBook = true;
                        this.rental_id = null;
                        this.rental_title = null;
                        this.user_token = null;
                        this.bookingPrice = null;
                        this.userData = [];
                        this.userFullData = null;
                        this.specialReq = null;
                        this.screenClass = '';
                        this.rentalDetails = null;
                        this.showTravelers = false;
                        this.bookDetails = null;
                        this.bookRequested = false;
                        this.canBook = true;
                        this.rejectedBookingMsg = '';
                        return [4 /*yield*/, this.modalControler.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.getProfileData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.userData = this.authService.userData;
                this.userFullData = this.authService.userFullData;
                console.log('user Data:', this.userData);
                console.log('userFullData: ', this.userFullData);
                return [2 /*return*/];
            });
        });
    };
    BooknowComponent.prototype.cityAlert1 = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var cityAlert1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: message,
                            buttons: [
                                {
                                    text: 'OK, Return back',
                                    handler: function () {
                                        console.log('Return Back');
                                        _this.closeModal();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        cityAlert1 = _a.sent();
                        return [4 /*yield*/, cityAlert1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.nextStep = function (step) {
        if (step === void 0) { step = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, formData, loading_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(step !== null && step !== '')) return [3 /*break*/, 8];
                        _a = step;
                        switch (_a) {
                            case 'getPrice': return [3 /*break*/, 1];
                            case 'checkOut': return [3 /*break*/, 5];
                            case 'done': return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 8];
                    case 1:
                        console.log(this.rentalType);
                        formData = {
                            rental_id: this.rental_id,
                            from: this.bookingService.dateFrom,
                            to: this.bookingService.dateTo,
                            adults: this.bookingService.adults,
                            children: this.bookingService.children,
                            type: this.rentalType
                        };
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Checking Availability'
                            })];
                    case 2:
                        loading_1 = _b.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 3:
                        _b.sent();
                        console.log(formData);
                        this.bookRequested = true;
                        return [4 /*yield*/, this.wpApiService
                                .bookingPrice(this.authService.userToken, formData)
                                .subscribe(function (bookPrice) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, loading_1.dismiss()];
                                        case 1:
                                            _a.sent();
                                            console.log(bookPrice);
                                            if (!(bookPrice['rule'] === 1)) return [3 /*break*/, 2];
                                            this.cityAlert1(bookPrice['message']);
                                            this.canBook = false;
                                            this.rejectedBookingMsg = bookPrice['message'];
                                            return [3 /*break*/, 5];
                                        case 2:
                                            if (!(bookPrice['status'] === 0 ||
                                                bookPrice['status'] === 'Not Available')) return [3 /*break*/, 4];
                                            return [4 /*yield*/, this.presentToast('The selected dates are not available for booking, please change the dates and try again.', 'danger', 'bottom', 4000)];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            console.log(bookPrice['price']);
                                            this.bookingPrice = bookPrice['price'];
                                            this.currencySymbol = bookPrice.current_symbol;
                                            this.currency = bookPrice.currency;
                                            this.slider.lockSwipeToNext(false).then(function () {
                                                _this.slider.slideNext().then(function () {
                                                    _this.slider.lockSwipeToNext(true);
                                                });
                                            });
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.doPaypal()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.screenClass = 'done-screen';
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    BooknowComponent.prototype.prevStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.slider.lockSwipeToPrev(false).then(function () {
                    _this.slider.slidePrev().then(function () {
                        _this.slider.lockSwipeToPrev(true);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    BooknowComponent.prototype.doPaypal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var description;
            return __generator(this, function (_a) {
                description = 'Booking ' + this.rental_title;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], BooknowComponent.prototype, "slider", void 0);
    BooknowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booknow',
            template: __webpack_require__(/*! ./booknow.component.html */ "./src/app/shared/booknow/booknow.component.html"),
            styles: [__webpack_require__(/*! ./booknow.component.scss */ "./src/app/shared/booknow/booknow.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], BooknowComponent);
    return BooknowComponent;
}());



/***/ }),

/***/ "./src/app/shared/booktour/booktour.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/booktour/booktour.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Book ({{ rental_title }})</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-slides pager=\"false\" [options]=\"sliderOpts\" #stepsSlider>\n        <ion-slide>\n            <h1>Booking Details for {{ rental_title }}</h1>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Date From</ion-label>\n                        <ion-datetime displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"bookingService.dateFrom\" value=\"{{ bookingService.dateFrom }}\" min=\"{{ bookingService.dateFromMin }}\" (ionChange)=\"bookingService.fromChanged()\">\n                        </ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Date To</ion-label>\n                        <ion-datetime displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"bookingService.dateTo\" value=\"{{ bookingService.dateTo }}\" min=\"{{ bookingService.dateToMin }}\"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('adults')\" [disabled]=\"this.bookingService.adults == 1\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('adults')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Adults</ion-label>\n                        <ion-input [(ngModel)]=\"bookingService.adults\" type=\"number\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('children')\" [disabled]=\"this.bookingService.children == 0\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('children')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Children</ion-label>\n                        <ion-input [(ngModel)]=\"bookingService.children\" type=\"number\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep('getPrice')\">\n                Book Now\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n        <ion-slide>\n            <h1>Booking Submission</h1>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">First Name</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.first_name)[0]\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Last Name</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.last_name)[0]\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Email</ion-label>\n                        <ion-input [(ngModel)]=\"userData.user_email\" type=\"email\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Phone</ion-label>\n                        <ion-input [(ngModel)]=\"(userFullData?.st_phone)[0]\" type=\"tel\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Special Requirements</ion-label>\n                        <ion-textarea [(ngModel)]=\"specialReq\" rows=\"3\" class=\"small-textarea\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep('checkOut')\">\n                Checkout\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n        <ion-slide>\n            <ion-icon name=\"checkmark-circle\" color=\"success\" class=\"done-icon\"></ion-icon>\n            <h3>\n                {{ (userFullData?.first_name)[0] }}, Thank you your payment was successful!\n            </h3>\n            <p>Booking details has been sent to {{ userData?.user_email }}</p>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"closeModal()\">\n                Done\n                <ion-icon name=\"checkmark\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/shared/booktour/booktour.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/booktour/booktour.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button.spinner-btn {\n  margin: 19px 5px 0;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  --border-radius: 50%; }\n\nion-slides ion-slide {\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n\nion-slides ion-slide ion-row {\n    justify-content: space-evenly;\n    width: 100%; }\n\nion-slides ion-slide ion-button.next {\n    width: 100%;\n    margin-top: 50px; }\n\nion-slides ion-slide ion-icon.done-icon {\n    font-size: 72px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9zaGFyZWQvYm9va3RvdXIvYm9va3RvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQWdCLEVBQUE7O0FBR3BCO0VBRVEsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSnBCO0lBTVksNkJBQTZCO0lBQzdCLFdBQVcsRUFBQTs7QUFQdkI7SUFVWSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBWDVCO0lBY1ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jvb2t0b3VyL2Jvb2t0b3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5zcGlubmVyLWJ0biB7XG4gICAgbWFyZ2luOiAxOXB4IDVweCAwO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uLm5leHQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uLmRvbmUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcycHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/booktour/booktour.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/booktour/booktour.component.ts ***!
  \*******************************************************/
/*! exports provided: BooktourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooktourComponent", function() { return BooktourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/booking.service */ "./src/app/providers/booking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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





var BooktourComponent = /** @class */ (function () {
    function BooktourComponent(bookingService, navParams, modalControler, wpApiService, authService, toastController, loadingController) {
        this.bookingService = bookingService;
        this.navParams = navParams;
        this.modalControler = modalControler;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userData = [];
        this.sliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            preventInteractionOnTransition: true,
            allowSlidePrev: false,
            allowSlideNext: false,
            loop: false
        };
    }
    BooktourComponent.prototype.presentToast = function (message, color, posision, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            color: color,
                            position: posision,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooktourComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rental_id = this.navParams.get('rental_id');
                this.rental_title = this.navParams.get('rental_name');
                this.user_token = this.navParams.get('user_token');
                this.bookingPrice = this.navParams.get('rental_price');
                this.getProfileData();
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.spinnerMin = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.bookingService.adults = this.bookingService.adults - 1;
                        break;
                    case 'children':
                        this.bookingService.children = this.bookingService.children - 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.spinnerPlus = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.bookingService.adults = this.bookingService.adults + 1;
                        break;
                    case 'children':
                        this.bookingService.children = this.bookingService.children + 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.closeModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalControler.dismiss();
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.getProfileData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.userData = this.authService.userData;
                this.userFullData = this.authService.userData.meta;
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.nextStep = function (step) {
        if (step === void 0) { step = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, formData, loading_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(step !== null && step !== '')) return [3 /*break*/, 5];
                        _a = step;
                        switch (_a) {
                            case 'getPrice': return [3 /*break*/, 1];
                            case 'checkOut': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        formData = {
                            rental_id: this.rental_id,
                            from: this.bookingService.dateFrom,
                            to: this.bookingService.dateTo,
                            adults: this.bookingService.adults,
                            children: this.bookingService.children,
                            type: 'tour'
                        };
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Checking Availability'
                            })];
                    case 2:
                        loading_1 = _b.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 3:
                        _b.sent();
                        this.wpApiService
                            .bookingPrice(this.user_token, formData)
                            .subscribe(function (bookPrice) {
                            loading_1.dismiss();
                            console.log(bookPrice);
                            if (bookPrice['status'] === 0 ||
                                bookPrice['status'] === 'Not Available') {
                                _this.presentToast('The selected dates are not available for booking, please change the dates and try again.', 'danger', 'bottom', 4000);
                            }
                            else {
                                console.log(bookPrice['price']);
                                _this.bookingPrice = bookPrice['price'];
                                _this.slider.lockSwipeToNext(false).then(function () {
                                    _this.slider.slideNext().then(function () {
                                        _this.slider.lockSwipeToNext(true);
                                    });
                                });
                            }
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        this.doPaypal();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BooktourComponent.prototype.prevStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.slider.lockSwipeToPrev(false).then(function () {
                    _this.slider.slidePrev().then(function () {
                        _this.slider.lockSwipeToPrev(true);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    BooktourComponent.prototype.doPaypal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], BooktourComponent.prototype, "slider", void 0);
    BooktourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booktour',
            template: __webpack_require__(/*! ./booktour.component.html */ "./src/app/shared/booktour/booktour.component.html"),
            styles: [__webpack_require__(/*! ./booktour.component.scss */ "./src/app/shared/booktour/booktour.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BooktourComponent);
    return BooktourComponent;
}());



/***/ }),

/***/ "./src/app/shared/image-viewer/image-viewer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/image-viewer/image-viewer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n    <ion-item lines=\"none\" class=\"close-fake\">\n        <ion-button color=\"light\" fill=\"clear\" (click)=\"close()\">\n            <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-item>\n    <ion-slides pager=\"false\" [options]=\"ImageSliderOpts\" *ngIf=\"sliderImages !== null\">\n        <ion-slide *ngFor=\"let image of sliderImages\">\n            <div class=\"swiper-zoom-container\">\n                <img [src]=\"image.image !== null || image.image !== '' ? image.image : './assets/img/property/no_image2.png'\" />\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/shared/image-viewer/image-viewer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/image-viewer/image-viewer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgba(0, 0, 0, 0.96); }\n\nion-slides {\n  height: 80%; }\n\n.close-fake {\n  --background: transparent;\n  margin-top: 40px; }\n\n.close-fake ion-icon {\n    font-size: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9zaGFyZWQvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45Nik7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogODAlO1xufVxuXG4uY2xvc2UtZmFrZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/image-viewer/image-viewer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/image-viewer/image-viewer.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(navParams, modalControler) {
        this.navParams = navParams;
        this.modalControler = modalControler;
        this.ImageSliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            loop: true,
            zoom: {
                maxRatio: 2
            }
        };
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sliderImages = this.navParams.get('images');
                return [2 /*return*/];
            });
        });
    };
    ImageViewerComponent.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalControler.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ImageViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/shared/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/shared/image-viewer/image-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/reviewpost/reviewpost.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/reviewpost/reviewpost.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title class=\"no-margin\">Write a review</ion-title>\n\n        <ion-buttons slot=\"start\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Review Title</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"reviewData.title\"></ion-input>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Review Description</ion-label>\n            <ion-textarea [(ngModel)]=\"reviewData.content\"> </ion-textarea>\n        </ion-item>\n        <ion-item>\n            <ion-label>Sleep Rate</ion-label>\n            <ion-icon name=\"star\" [color]=\"reviewData.sleep > 0 ? 'primary' : 'light'\" (click)=\"addStars('sleep', 1)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.sleep > 1 ? 'primary' : 'light'\" (click)=\"addStars('sleep', 2)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.sleep > 2 ? 'primary' : 'light'\" (click)=\"addStars('sleep', 3)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.sleep > 3 ? 'primary' : 'light'\" (click)=\"addStars('sleep', 4)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.sleep > 4 ? 'primary' : 'light'\" (click)=\"addStars('sleep', 5)\">\n            </ion-icon>\n        </ion-item>\n        <ion-item>\n            <ion-label>Location Rate</ion-label>\n            <ion-icon name=\"star\" [color]=\"reviewData.location > 0 ? 'primary' : 'light'\" (click)=\"addStars('location', 1)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.location > 1 ? 'primary' : 'light'\" (click)=\"addStars('location', 2)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.location > 2 ? 'primary' : 'light'\" (click)=\"addStars('location', 3)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.location > 3 ? 'primary' : 'light'\" (click)=\"addStars('location', 4)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.location > 4 ? 'primary' : 'light'\" (click)=\"addStars('location', 5)\">\n            </ion-icon>\n        </ion-item>\n        <ion-item>\n            <ion-label>Service Rate</ion-label>\n            <ion-icon name=\"star\" [color]=\"reviewData.service > 0 ? 'primary' : 'light'\" (click)=\"addStars('service', 1)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.service > 1 ? 'primary' : 'light'\" (click)=\"addStars('service', 2)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.service > 2 ? 'primary' : 'light'\" (click)=\"addStars('service', 3)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.service > 3 ? 'primary' : 'light'\" (click)=\"addStars('service', 4)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.service > 4 ? 'primary' : 'light'\" (click)=\"addStars('service', 5)\">\n            </ion-icon>\n        </ion-item>\n        <ion-item>\n            <ion-label>Clearness Rate</ion-label>\n            <ion-icon name=\"star\" [color]=\"reviewData.clearness > 0 ? 'primary' : 'light'\" (click)=\"addStars('clearness', 1)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.clearness > 1 ? 'primary' : 'light'\" (click)=\"addStars('clearness', 2)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.clearness > 2 ? 'primary' : 'light'\" (click)=\"addStars('clearness', 3)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.clearness > 3 ? 'primary' : 'light'\" (click)=\"addStars('clearness', 4)\">\n            </ion-icon>\n            <ion-icon name=\"star\" [color]=\"reviewData.clearness > 4 ? 'primary' : 'light'\" (click)=\"addStars('clearness', 5)\">\n            </ion-icon>\n        </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" size=\"large\" class=\"big-btn\" [disabled]=\"reviewData.title == '' || reviewData.content == ''\" (click)=\"submitReview()\">Submit\n    </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/shared/reviewpost/reviewpost.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/reviewpost/reviewpost.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXZpZXdwb3N0L3Jldmlld3Bvc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/reviewpost/reviewpost.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/reviewpost/reviewpost.component.ts ***!
  \***********************************************************/
/*! exports provided: ReviewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewpostComponent", function() { return ReviewpostComponent; });
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




var ReviewpostComponent = /** @class */ (function () {
    function ReviewpostComponent(modalCtrl, navParams, wpApiService, toastController, authService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.wpApiService = wpApiService;
        this.toastController = toastController;
        this.authService = authService;
        this.reviewData = {
            title: '',
            content: '',
            sleep: 1,
            location: 1,
            service: 1,
            clearness: 1
        };
    }
    ReviewpostComponent.prototype.ngOnInit = function () {
        this.user_token = this.navParams.get('token');
        this.rental_id = this.navParams.get('rental_id');
    };
    ReviewpostComponent.prototype.presentToast = function (message, color) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            color: color,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewpostComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    ReviewpostComponent.prototype.addStars = function (field, num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.reviewData[field] = num;
                return [2 /*return*/];
            });
        });
    };
    ReviewpostComponent.prototype.submitReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService
                    .postReview(this.authService.userToken, this.rental_id, this.reviewData)
                    .subscribe(function (reviewRes) {
                    if (reviewRes['status'] === 1) {
                        _this.presentToast('Your review has been submitted successefully', 'success');
                        _this.modalCtrl.dismiss();
                    }
                    else {
                        _this.presentToast('Error submitting review, please try again', 'danger');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ReviewpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewpost',
            template: __webpack_require__(/*! ./reviewpost.component.html */ "./src/app/shared/reviewpost/reviewpost.component.html"),
            styles: [__webpack_require__(/*! ./reviewpost.component.scss */ "./src/app/shared/reviewpost/reviewpost.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ReviewpostComponent);
    return ReviewpostComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booknow_booknow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booknow/booknow.component */ "./src/app/shared/booknow/booknow.component.ts");
/* harmony import */ var _booktour_booktour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../booktour/booktour.component */ "./src/app/shared/booktour/booktour.component.ts");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image-viewer/image-viewer.component */ "./src/app/shared/image-viewer/image-viewer.component.ts");
/* harmony import */ var _reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reviewpost/reviewpost.component */ "./src/app/shared/reviewpost/reviewpost.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _booknow_booknow_component__WEBPACK_IMPORTED_MODULE_4__["BooknowComponent"],
                _booktour_booktour_component__WEBPACK_IMPORTED_MODULE_5__["BooktourComponent"],
                _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__["ImageViewerComponent"],
                _reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_7__["ReviewpostComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [
                _booknow_booknow_component__WEBPACK_IMPORTED_MODULE_4__["BooknowComponent"],
                _booktour_booktour_component__WEBPACK_IMPORTED_MODULE_5__["BooktourComponent"],
                _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__["ImageViewerComponent"],
                _reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_7__["ReviewpostComponent"]
            ],
            entryComponents: [
                _booknow_booknow_component__WEBPACK_IMPORTED_MODULE_4__["BooknowComponent"],
                _booktour_booktour_component__WEBPACK_IMPORTED_MODULE_5__["BooktourComponent"],
                _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__["ImageViewerComponent"],
                _reviewpost_reviewpost_component__WEBPACK_IMPORTED_MODULE_7__["ReviewpostComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~city-detail-city-detail-module~rentaldetail-rentaldetail-module~tour-tour-module.js.map