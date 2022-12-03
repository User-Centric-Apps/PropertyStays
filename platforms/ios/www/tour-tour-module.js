(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-tour-module"],{

/***/ "./src/app/components/tour-reviews/tour-reviews.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/tour-reviews/tour-reviews.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title class=\"no-margin\">Tour reviews</ion-title>\n\n        <ion-buttons slot=\"start\">\n            <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"closeModal()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <div class=\"ratings\">\n        <ion-item lines=\"none\" detail>\n            <ion-label>Rating</ion-label>\n            <ion-note *ngIf=\"reviewsData?.canwrite !== 1\" color=\"danger\" slot=\"end\">Write a review</ion-note>\n        </ion-item>\n        <ion-row align-items-center>\n            <ion-col size=\"4\" class=\"rating-num\">\n                <h2 class=\"rate\" color=\"primary\">\n                    {{ reviewsData?.rating }}\n                </h2>\n                <p>out of 5</p>\n            </ion-col>\n            <ion-col size=\"8\">\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n                <ion-row align-items-center>\n                    <ion-col size=\"4\" class=\"stars\" align-items-end text-end>\n                        <ion-icon name=\"star\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"8\" class=\"progress\">\n                        <ion-progress-bar color=\"primary\" value=\"0\"></ion-progress-bar>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"comments\">\n        <ion-list lines=\"none\">\n            <div *ngFor=\"let comment of reviewsData?.comments\" class=\"comment\">\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"title\">{{ comment.title }}</p>\n                        <div class=\"stars\">\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 0 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 1 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 2 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 3 ? 'primary' : 'medium'\"></ion-icon>\n                            <ion-icon name=\"star\" [color]=\"comment.rate > 4 ? 'primary' : 'medium'\"></ion-icon>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"6\" text-right>\n                        <p class=\"author\">{{ comment.author }}</p>\n                        <p class=\"date\">{{ comment.date }}</p>\n                    </ion-col>\n                </ion-row>\n                <p [innerHtml]=\"comment.content\" class=\"content\"></p>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/tour-reviews/tour-reviews.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tour-reviews/tour-reviews.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ratings .rating-num {\n  text-align: center; }\n  .ratings .rating-num h2.rate {\n    text-align: center;\n    color: var(--ion-color-primary);\n    font-size: 60px;\n    line-height: 72px; }\n  .ratings .rating-num p {\n    font-size: 15px;\n    line-height: 20px; }\n  .ratings .stars {\n  padding: 0 5px; }\n  .ratings .stars ion-icon {\n    width: 10px;\n    height: 10px;\n    opacity: 0.6; }\n  .ratings .progress {\n  padding: 0 5px; }\n  .comments .comment {\n  background: #F5F5F5;\n  border-radius: 8px;\n  padding: 2px 10px;\n  margin: 10px 0; }\n  .comments .comment ion-icon.star {\n    width: 14px;\n    height: 14px; }\n  .comments .comment p.title {\n    font-size: 17px;\n    line-height: 20px;\n    margin: 5px 0; }\n  .comments .comment p.author,\n  .comments .comment p.content,\n  .comments .comment p.date {\n    font-size: 13px;\n    line-height: 16px;\n    margin: 5px 0; }\n  .comments .comment p.date {\n    opacity: 0.6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9jb21wb25lbnRzL3RvdXItcmV2aWV3cy90b3VyLXJldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTtFQUYxQjtJQUlZLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBUDdCO0lBVVksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBWDdCO0VBZVEsY0FBYyxFQUFBO0VBZnRCO0lBaUJZLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWSxFQUFBO0VBbkJ4QjtFQXVCUSxjQUFjLEVBQUE7RUFJdEI7RUFFUSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFMdEI7SUFPWSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBUnhCO0lBV1ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7RUFiekI7OztJQWtCWSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBQTtFQXBCekI7SUF1QlksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3VyLXJldmlld3MvdG91ci1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZ3Mge1xuICAgIC5yYXRpbmctbnVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoMi5yYXRlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNzJweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zdGFycyB7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB9XG59XG5cbi5jb21tZW50cyB7XG4gICAgLmNvbW1lbnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgaW9uLWljb24uc3RhciB7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBwLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgICBwLmF1dGhvcixcbiAgICAgICAgcC5jb250ZW50LFxuICAgICAgICBwLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICAgIHAuZGF0ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/tour-reviews/tour-reviews.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tour-reviews/tour-reviews.component.ts ***!
  \*******************************************************************/
/*! exports provided: TourReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourReviewsComponent", function() { return TourReviewsComponent; });
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




var TourReviewsComponent = /** @class */ (function () {
    function TourReviewsComponent(modalCtrl, navParams, wpApiService, loadingCtrl, authService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.isLoading = true;
    }
    TourReviewsComponent.prototype.getReviewsData = function () {
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
    TourReviewsComponent.prototype.showLoading = function () {
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
    TourReviewsComponent.prototype.hideLoading = function () {
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
    TourReviewsComponent.prototype.ngOnInit = function () {
        this.rental_id = this.navParams.get('id');
        this.user_token = this.navParams.get('user_token');
        this.getReviewsData();
    };
    TourReviewsComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    TourReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tour-reviews',
            template: __webpack_require__(/*! ./tour-reviews.component.html */ "./src/app/components/tour-reviews/tour-reviews.component.html"),
            styles: [__webpack_require__(/*! ./tour-reviews.component.scss */ "./src/app/components/tour-reviews/tour-reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TourReviewsComponent);
    return TourReviewsComponent;
}());



/***/ }),

/***/ "./src/app/tour/tour.module.ts":
/*!*************************************!*\
  !*** ./src/app/tour/tour.module.ts ***!
  \*************************************/
/*! exports provided: TourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourPageModule", function() { return TourPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tour.page */ "./src/app/tour/tour.page.ts");
/* harmony import */ var _components_tour_reviews_tour_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tour-reviews/tour-reviews.component */ "./src/app/components/tour-reviews/tour-reviews.component.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ImagesViewer3Page } from '../shared/images-viewer3/images-viewer3.page';
// import { Book2Page } from '../booking/book2/book2.page';

var routes = [
    {
        path: '',
        component: _tour_page__WEBPACK_IMPORTED_MODULE_5__["TourPage"]
    }
];
var TourPageModule = /** @class */ (function () {
    function TourPageModule() {
    }
    TourPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            entryComponents: [_components_tour_reviews_tour_reviews_component__WEBPACK_IMPORTED_MODULE_6__["TourReviewsComponent"]],
            declarations: [_tour_page__WEBPACK_IMPORTED_MODULE_5__["TourPage"], _components_tour_reviews_tour_reviews_component__WEBPACK_IMPORTED_MODULE_6__["TourReviewsComponent"]]
        })
    ], TourPageModule);
    return TourPageModule;
}());



/***/ }),

/***/ "./src/app/tour/tour.page.html":
/*!*************************************!*\
  !*** ./src/app/tour/tour.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"transparent over-slider\" [ngClass]=\"{'header-white': scrollPosition > 220}\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [color]=\"scrollPosition > 220 ? 'primary' : 'light'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"scrollPosition > 220\">{{tourData?.title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\">\n                <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\n            </ion-button> -->\n            <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"toggleFav()\">\n                <ion-icon [name]=\"tourData?.isInFavorite === 0 ? 'heart-empty' : 'heart'\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"imagesViewer()\">\n                <ion-icon name=\"photos\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"under-header\" (ionScroll)=\"scroll($event)\" [scrollEvents]=\"true\">\n    <ion-slides pager=\"true\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\">\n        <ion-slide *ngFor=\"let image of tourData?.images\" [ngStyle]=\"image.image !== null ? {'background-image': 'url('+image.image+')'} : {'background-image':'url(/assets/img/property/no_image.png)'}\">\n            <!-- <img [src]=\"image !== null || image !== '' ? image : './assets/img/property/no_image.png'\"> -->\n        </ion-slide>\n    </ion-slides>\n    <div class=\"slide-data\">\n        <h3>{{tourData?.title}}</h3>\n\n        <div class=\"rating\">\n            <ion-icon *ngIf=\"tourData?.rating > 0\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"tourData?.rating > 1\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"tourData?.rating > 2\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"tourData?.rating > 3\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"tourData?.rating > 4\" name=\"star\" color=\"warning\"></ion-icon>\n        </div>\n    </div>\n\n    <div class=\"prop-detail\">\n        <ion-row>\n            <ion-col size=\"9\" class=\"prop-data\">\n                <ion-item lines=\"none\">\n                    <ion-label text-wrap>\n                        <ion-text>\n                            <h3 class=\"type\">\n                                <span *ngIf=\"tourData?.tour_type\"> \n                                    Type : {{ tourData?.tour_type }}\n                                </span>\n                                <span>\n                                    | Area : {{ tourData?.cityname }}\n                                </span>\n                            </h3>\n                        </ion-text>\n                        <ion-text >\n                            <h3 class=\"type\" *ngIf=\"tourData?.adults\">\n                                <span *ngIf=\"tourData?.adults\"> \n                                    Adults : {{ tourData?.adults }}\n                                </span>  \n                                <span *ngIf=\"tourData?.children\">\n                                    | Children : {{ tourData?.children }}\n                                </span>  \n                                <span *ngIf=\"tourData?.infant\">\n                                    | Infant : {{ tourData?.infant }}\n                                </span>\n                            </h3>\n                        </ion-text>\n                        <ion-text>\n                            <h3 class=\"type\">\n                                <span *ngIf=\"tourData?.duration\"> \n                                    Duration : {{ tourData?.duration }}\n                                </span>\n                            </h3>\n                        </ion-text>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"owner\">\n                <ion-item lines=\"none\">\n                    <ion-avatar class=\"owner-img\" *ngIf=\"tourData?.owner['image']\">\n                        <img src=\"{{ tourData?.owner['image'] }}\" />\n                    </ion-avatar>\n                </ion-item>\n                <p class=\"owner-name\">By {{tourData?.owner['name']}}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <!-- <div class=\"features\">\n        <ion-row>\n            <ion-col size=\"7\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/house.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap><span class=\"heavy\">{{tourData?.type}}</span> {{tourData?.size}} sq. ft.</ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"5\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/rooms.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Bedrooms: <span class=\"heavy\">{{tourData?.bedrooms}}</span></ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row> \n        <ion-row>\n            <ion-col size=\"7\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/people.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap>Beds: <span class=\"heavy\">{{tourData?.beds}}</span></ion-label>\n                </ion-item>\n            </ion-col> \n            <ion-col size=\"12\">\n                <ion-item lines=\"none\" class=\"nopadding\">\n                    <ion-icon src=\"/assets/icon/min-stay.svg\" slot=\"start\"></ion-icon>\n                    <ion-label text-wrap><span class=\"heavy\">{{tourData?.minimum}}</span></ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </div>-->\n\n    <!--<div class=\"aminities\" *ngIf=\"tourData?.amenities.lenght > 0\" [ngClass]=\"expand ? 'expanded' : 'collapsed'\">\n        <div class=\"aminities-toggle\" (click)=\"toggleExpand()\">\n            <p>+{{aminiteisCount}}</p>\n        </div>\n        <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let aminity of tourData?.amenities\" class=\"aminity\">\n                <ion-icon src=\"/assets/icon/bed.svg\"></ion-icon>\n                <p class=\"name\">{{aminity.name}}</p>\n            </ion-col>\n        </ion-row>\n    </div>-->\n\n    <div class=\"reviews\">\n        <ion-item class=\"nopadding\" lines=\"none\" detail>\n            <ion-badge slot=\"start\" color=\"primary\">{{tourData?.rating}}</ion-badge>\n            <ion-label>{{tourData?.reviews}}</ion-label>\n            <ion-note slot=\"end\" color=\"primary\" (click)=\"presentReviews()\">{{tourData?.reviews}}</ion-note>\n        </ion-item>\n    </div>\n\n    <div class=\"description\">\n        <div class=\"content\" [innerHTML]=\"tourData?.content\" [ngClass]=\"descMore ? 'expanded' : 'collapsed'\"></div>\n        <div class=\"more\" (click)=\"toggleDesc()\">\n            <span>{{descMoreText}}</span>\n        </div>\n    </div>\n\n    <div class=\"description\" *ngIf=\"tourData?.tour_included\">\n        <strong>Tour Included :</strong>\n        <div class=\"content\" [innerHTML]=\"tourData?.tour_included\" ></div>\n    </div>\n\n    <div class=\"description\" *ngIf=\"tourData?.tour_excluded\">\n        <strong>Tour Excluded :</strong>\n        <div class=\"content\" [innerHTML]=\"tourData?.tour_excluded\" ></div>\n    </div>\n\n    <div class=\"description\" *ngIf=\"tourData?.tour_highlight\">\n        <strong>Tour Highlight :</strong>\n        <div class=\"content\" [innerHTML]=\"tourData?.tour_highlight\" ></div>\n    </div>\n\n    <div *ngIf=\"tourData?.positions.lat !== '' && tourData?.positions.lng !== ''\" id=\"map_canvas\" #map_canvas class=\"map-canvas\"></div>\n\n    <ion-button color=\"primary\" size=\"large\" class=\"big-btn\" expand=\"block\" round (click)=\"bookNow()\">\n        Book\n    </ion-button>\n\n    <!--<div class=\"featured\" *ngIf=\"tourData?.tours.length > 0\">\n        <ion-item class=\"cat-row\">\n            <ion-label>Things to do near this home</ion-label>\n        </ion-item>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let tour of tourData?.tours\">\n                    <ion-card class=\"prop-grid-item\">\n                        <ion-card-content>\n                            <ion-img src=\"{{tour.image}}\"></ion-img>\n                            <h3 class=\"title\">{{tour.title}}</h3>\n                            <h4 class=\"price\">{{tour.price}}</h4>\n                            <div class=\"rating\">\n                                <ion-icon *ngIf=\"rental.rate_review > 0\" name=\"star\" size=\"small\" color=\"primary\"></ion-icon>\n                                    <ion-icon *ngIf=\"rental.rate_review > 1\" name=\"star\" size=\"small\" color=\"primary\"></ion-icon>\n                                    <ion-icon *ngIf=\"rental.rate_review > 2\" name=\"star\" size=\"small\" color=\"primary\"></ion-icon>\n                                    <ion-icon *ngIf=\"rental.rate_review > 3\" name=\"star\" size=\"small\" color=\"primary\"></ion-icon>\n                                    <ion-icon *ngIf=\"rental.rate_review > 4\" name=\"star\" size=\"small\" color=\"primary\"></ion-icon>\n                                {{tour.reviews}}\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>-->\n</ion-content>"

/***/ }),

/***/ "./src/app/tour/tour.page.scss":
/*!*************************************!*\
  !*** ./src/app/tour/tour.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  width: 100%;\n  height: 250px;\n  border-radius: 10px;\n  margin-bottom: 20px; }\n  .map-canvas ion-img {\n    opacity: 0;\n    display: none; }\n  ion-item.nopadding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0; }\n  .prop-detail {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n  .prop-detail ion-item {\n    --padding-start: 0;\n    --padding-end: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0; }\n  .prop-detail .prop-data h3.type {\n    color: #627790;\n    font-size: 12px;\n    line-height: 14px;\n    font-weight: 700;\n    margin-bottom: 10px; }\n  .prop-detail .prop-data p.location {\n    color: #263646;\n    font-size: 14px;\n    line-height: 17px;\n    margin-bottom: 10px; }\n  .prop-detail .prop-data p.price {\n    color: var(--ion-color-primary);\n    font-size: 17px;\n    line-height: 20px; }\n  .prop-detail .owner {\n    text-align: center; }\n  .prop-detail .owner ion-item {\n      display: inline-block;\n      margin-top: 5px; }\n  .prop-detail .owner ion-item ion-avatar.owner-image {\n        margin: 15px 0 0;\n        align-self: center;\n        justify-self: center; }\n  .prop-detail .owner p.owner-name {\n      color: #999999;\n      font-size: 8.8px;\n      line-height: 11px;\n      font-weight: 700; }\n  .features {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n  .features ion-item ion-icon {\n    margin: 0 5px 0 0; }\n  .features ion-item ion-label {\n    margin: 0; }\n  .features ion-item ion-label span.heavy {\n      font-weight: 700; }\n  .aminities {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px;\n  transition: height 2s; }\n  .aminities ion-col {\n    text-align: center; }\n  .aminities ion-col ion-icon {\n      width: 27px;\n      height: 27px; }\n  .aminities p.name {\n    font-size: 8px;\n    opacity: 0.8;\n    margin: 0; }\n  .aminities .aminities-toggle {\n    position: absolute;\n    right: 16px;\n    background: #fff;\n    display: flex;\n    width: 80px;\n    height: 64px;\n    z-index: 1;\n    align-items: center;\n    margin-top: -5px; }\n  .aminities .aminities-toggle p {\n      display: block;\n      text-align: center;\n      background: #fff;\n      margin: 0;\n      width: 100%;\n      z-index: 1;\n      font-size: 20px;\n      color: #627790; }\n  .aminities.collapsed {\n    height: 60px;\n    transition: height 2s;\n    overflow: hidden; }\n  .aminities.expanded {\n    height: auto;\n    transition: height 2s; }\n  .aminities.expanded .aminities-toggle {\n      bottom: -16px; }\n  .reviews {\n  border-bottom: 1px solid #E0E0E1;\n  margin-bottom: 5px; }\n  .reviews ion-item {\n    --detail-icon-color: var(--ion-color-primary);\n    --detail-icon-opacity: 1; }\n  .reviews ion-item ion-badge {\n      --ion-color-base: #0084B1 !important;\n      --ion-color-contrast: #fff !important;\n      font-size: 13px;\n      margin-right: 5px; }\n  .reviews ion-item ion-note {\n      font-size: 13px;\n      padding-top: 16px; }\n  .description {\n  padding-bottom: 15px; }\n  .description .content.collapsed {\n    height: 55px;\n    overflow: hidden; }\n  .description .content.expanded {\n    height: auto; }\n  .description .more {\n    color: var(--ion-color-primary);\n    text-align: right;\n    font-size: 13px;\n    line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC90b3VyL3RvdXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7RUFKdkI7SUFNUSxVQUFVO0lBQ1YsYUFBYSxFQUFBO0VBSXJCO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsd0JBQXNCO0VBQ3RCLHNCQUFvQixFQUFBO0VBR3hCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBO0VBRnRCO0lBSVEsa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2Qsd0JBQXNCO0lBQ3RCLHNCQUFvQixFQUFBO0VBUDVCO0lBV1ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBZi9CO0lBa0JZLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBckIvQjtJQXdCWSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBMUI3QjtJQThCUSxrQkFBa0IsRUFBQTtFQTlCMUI7TUFnQ1kscUJBQXFCO01BQ3JCLGVBQWUsRUFBQTtFQWpDM0I7UUFtQ2dCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsb0JBQW9CLEVBQUE7RUFyQ3BDO01BeUNZLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBO0VBSzVCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQixFQUFBO0VBRnRCO0lBS1ksaUJBQWlCLEVBQUE7RUFMN0I7SUFRWSxTQUFTLEVBQUE7RUFSckI7TUFVZ0IsZ0JBQWdCLEVBQUE7RUFNaEM7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBSHpCO0lBS1Esa0JBQWtCLEVBQUE7RUFMMUI7TUFPWSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBUnhCO0lBWVEsY0FBYztJQUNkLFlBQVk7SUFDWixTQUFTLEVBQUE7RUFkakI7SUFpQlEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtFQXpCeEI7TUEyQlksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsU0FBUztNQUNULFdBQVc7TUFDWCxVQUFVO01BQ1YsZUFBZTtNQUNmLGNBQWMsRUFBQTtFQWxDMUI7SUFzQ1EsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtFQXhDeEI7SUEyQ1EsWUFBWTtJQUNaLHFCQUFxQixFQUFBO0VBNUM3QjtNQThDWSxhQUFhLEVBQUE7RUFLekI7RUFDSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7RUFGdEI7SUFJUSw2Q0FBb0I7SUFDcEIsd0JBQXNCLEVBQUE7RUFMOUI7TUFPWSxvQ0FBaUI7TUFDakIscUNBQXFCO01BQ3JCLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQVY3QjtNQWFZLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUs3QjtFQUNJLG9CQUFvQixFQUFBO0VBRHhCO0lBSVksWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBTDVCO0lBUVksWUFBWSxFQUFBO0VBUnhCO0lBWVEsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b3VyL3RvdXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlvbi1pbWcge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ubm9wYWRkaW5nIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnByb3AtZGV0YWlsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICB9XG4gICAgLnByb3AtZGF0YSB7XG4gICAgICAgIGgzLnR5cGUge1xuICAgICAgICAgICAgY29sb3I6ICM2Mjc3OTA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAubG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICMyNjM2NDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcC5wcmljZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm93bmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBpb24tYXZhdGFyLm93bmVyLWltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMCAwO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwLm93bmVyLW5hbWUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDguOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmVhdHVyZXMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBzcGFuLmhlYXZ5IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW1pbml0aWVzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmFtaW5pdGllcy10b2dnbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjI3NzkwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICYuZXhwYW5kZWQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcbiAgICAgICAgLmFtaW5pdGllcy10b2dnbGUge1xuICAgICAgICAgICAgYm90dG9tOiAtMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJldmlld3Mge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUxO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogIzAwODRCMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubW9yZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tour/tour.page.ts":
/*!***********************************!*\
  !*** ./src/app/tour/tour.page.ts ***!
  \***********************************/
/*! exports provided: TourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourPage", function() { return TourPage; });
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_tour_reviews_tour_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tour-reviews/tour-reviews.component */ "./src/app/components/tour-reviews/tour-reviews.component.ts");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/image-viewer/image-viewer.component */ "./src/app/shared/image-viewer/image-viewer.component.ts");
/* harmony import */ var _shared_booktour_booktour_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/booktour/booktour.component */ "./src/app/shared/booktour/booktour.component.ts");
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










// import { BooknowComponent } from '../shared/booknow/booknow.component';

var TourPage = /** @class */ (function () {
    function TourPage(activatedRoute, wpApiService, authService, navCtrl, modalController, loadingCtrl) {
        this.activatedRoute = activatedRoute;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.ImageSliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            loop: true
        };
        this.passedId = null;
        this.expand = false;
        this.descMore = false;
        this.descMoreText = 'more';
        this.isLoading = true;
        this.scrollPosition = 0;
        console.log('Tour Page');
    }
    TourPage.prototype.showLoading = function () {
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
    TourPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isLoading) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.isLoading = false;
                                    return [4 /*yield*/, this.loadingCtrl.dismiss()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    TourPage.prototype.strip = function (html) {
        return html.replace(/<(?:.|\n)*?>/gm, '');
    };
    TourPage.prototype.scroll = function (ev) {
        this.scrollPosition = ev.detail.scrollTop;
    };
    TourPage.prototype.presentReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_tour_reviews_tour_reviews_component__WEBPACK_IMPORTED_MODULE_6__["TourReviewsComponent"],
                            componentProps: {
                                id: this.passedId,
                                user_token: this.authService.userToken
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
    TourPage.prototype.imagesViewer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_7__["ImageViewerComponent"],
                            componentProps: { images: this.tourData.images },
                            backdropDismiss: true,
                            cssClass: 'images-viewer'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TourPage.prototype.bookNow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authService.authenticationState.value) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _shared_booktour_booktour_component__WEBPACK_IMPORTED_MODULE_8__["BooktourComponent"],
                                componentProps: {
                                    rental_id: this.passedId,
                                    rental_name: this.tourData.title,
                                    user_token: this.authService.userToken,
                                    rental_price: this.tourData.price,
                                    rental_type: 'tour'
                                },
                                backdropDismiss: true,
                                cssClass: 'book-now'
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.authService.presentLoginAlert();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TourPage.prototype.toggleExpand = function () {
        this.expand = !this.expand;
    };
    TourPage.prototype.toggleDesc = function () {
        this.descMore = !this.descMore;
        if (this.descMore) {
            this.descMoreText = 'less';
        }
        else {
            this.descMoreText = 'more';
        }
    };
    TourPage.prototype.toggleFav = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authService.authenticationState.value) return [3 /*break*/, 1];
                        if (this.tourData.isInFavorite === 0) {
                            this.wpApiService
                                .setFav(this.authService.userToken, this.passedId, 1)
                                .subscribe(function (data) {
                                if (data['status'] === 1) {
                                    _this.tourData.isInFavorite = 1;
                                }
                            });
                        }
                        else {
                            this.wpApiService
                                .setFav(this.authService.userToken, this.passedId, 0)
                                .subscribe(function (data) {
                                if (data['status'] === 1) {
                                    _this.tourData.isInFavorite = 0;
                                }
                            });
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.authService.presentLoginAlert()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TourPage.prototype.getTour = function () {
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
                            .getTour(this.authService.userToken ? this.authService.userToken : 0, this.passedId)
                            .subscribe(function (tourData) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.tourData = tourData;
                                        console.log(this.tourData);
                                        this.tourLocation = this.tourData['positions'];
                                        //this.aminities = this.tourData['amenities'];
                                        //this.aminiteisCount = this.aminities.length - 3;
                                        if (this.tourData.positions.lat !== '' &&
                                            this.tourData.positions.lng !== '') {
                                            //await this.loadMap(this.tourLocation);
                                        }
                                        return [4 /*yield*/, this.hideLoading()];
                                    case 1:
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
    TourPage.prototype.loadMap = function (city_location) {
        return __awaiter(this, void 0, void 0, function () {
            var mapOptions, marker;
            return __generator(this, function (_a) {
                if (city_location['lat'] !== null && city_location['lat'] !== '') {
                    mapOptions = {
                        camera: {
                            target: {
                                lat: parseFloat(city_location['lat']),
                                lng: parseFloat(city_location['lng'])
                            },
                            zoom: 10,
                            tilt: 30
                        }
                    };
                    this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMaps"].create('map_canvas', mapOptions);
                    marker = this.map.addMarkerSync({
                        title: 'Property',
                        icon: 'red',
                        animation: 'DROP',
                        position: {
                            lat: parseFloat(city_location['lat']),
                            lng: parseFloat(city_location['lng'])
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TourPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.passedId = this.activatedRoute.snapshot.paramMap.get('tour_id');
                        return [4 /*yield*/, this.showLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getTour()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TourPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tour',
            template: __webpack_require__(/*! ./tour.page.html */ "./src/app/tour/tour.page.html"),
            styles: [__webpack_require__(/*! ./tour.page.scss */ "./src/app/tour/tour.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], TourPage);
    return TourPage;
}());



/***/ })

}]);
//# sourceMappingURL=tour-tour-module.js.map