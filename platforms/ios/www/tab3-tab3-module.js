(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            My saved properties/location\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"savedCount < 1 ? 'empty' : ''\" padding *ngIf=\"!isLoading\">\n    <!-- <ion-item>\n        <ion-label>Likes View</ion-label>\n        <ion-note slot=\"end\">For Demonstration Use only</ion-note>\n        <ion-toggle [(ngModel)]=\"hasLikes\"></ion-toggle>\n    </ion-item> -->\n\n    <div class=\"liked\" *ngIf=\"savedCount > 0; else noLikes\">\n        <p class=\"likes-count\">{{ savedCount }} places saved</p>\n        <ion-card class=\"property-item\" *ngFor=\"let item of savedRentals; let i = index\">\n            <ion-card-header (click)=\"viewDetai(item.id)\">\n                <ion-card-title>\n                    <ion-item lines=\"none\">\n                        <ion-label>{{ item.title }}</ion-label>\n                    </ion-item>\n                </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <ion-button class=\"like-me\" fill=\"clear\" slot=\"end\" (click)=\"removeLike(i, item.id)\">\n                    <ion-icon name=\"heart\" slot=\"icon-only\" color=\"primary\"></ion-icon>\n                </ion-button>\n                <img [src]=\"\n            item.image !== null\n              ? item.image\n              : '/assets/img/property/no_image.png'\n          \" class=\"prop-images\" (click)=\"viewDetai(item.id)\" />\n                <!-- <ion-grid class=\"prop-details\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h3 class=\"price\">{{ item.price }}</h3>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"noPadding-col\">\n                        <ion-col size=\"7\" align-self-center noPadding>\n                            <h5 class=\"reviews\">{{ item.reviews }}</h5>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid> -->\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <ng-template #noLikes>\n        <div class=\"no-likes\">\n            <h1>hmm, nothing here…</h1>\n            <h6>Start planning your first adventure!</h6>\n            <ion-button color=\"primary\" fill=\"outline\" size=\"large\" expand=\"full\" shape=\"round\" class=\"explore\" (click)=\"backHome()\">\n                Explore where!\n            </ion-button>\n        </div>\n    </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.empty {\n  background-image: url(\"/assets/img/no-likes.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: contain;\n  --background: auto;\n  background-position: bottom;\n  background-color: #fff; }\n\n.property-item ion-card-title ion-item {\n  --background: transparent;\n  background: transparent;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  font-size: 16px;\n  color: #333333;\n  font-weight: 600; }\n\n.property-item ion-card-content ion-img {\n  max-height: 200px;\n  overflow: hidden; }\n\n.no-likes h1 {\n  text-align: center; }\n\n.no-likes h6 {\n  text-align: center;\n  color: var(--ion-text-color2);\n  margin: 30px 0;\n  font-weight: 300; }\n\n.no-likes ion-button.explore {\n  --border-radius: 100px;\n  font-size: 17px;\n  height: 54px;\n  text-transform: inherit; }\n\n.liked p.likes-count {\n  color: var(--ion-text-color2);\n  font-size: 14px;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQTREO0VBQzVELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBR1kseUJBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsc0JBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQVg1QjtFQWlCWSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSzVCO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1Esa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBUnhCO0VBV1Esc0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBSS9CO0VBRVEsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuZW1wdHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL25vLWxpa2VzLnN2Z1wiKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIC0tYmFja2dyb3VuZDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnByb3BlcnR5LWl0ZW0ge1xuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5vLWxpa2VzIHtcbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcjIpO1xuICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbi5leHBsb3JlIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIH1cbn1cblxuLmxpa2VkIHtcbiAgICBwLmxpa2VzLWNvdW50IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yMik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var Tab3Page = /** @class */ (function () {
    function Tab3Page(router, authService, wpApiService, loadingCtrl) {
        this.router = router;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.hasLikes = false;
        this.dRentals = [];
        this.ImageSliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            loop: true
        };
        this.isLoading = true;
        this.showLoading();
    }
    Tab3Page.prototype.showLoading = function () {
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
    Tab3Page.prototype.hideLoading = function () {
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
    Tab3Page.prototype.getUserData = function () {
        var _this = this;
        // Get User Token
        this.authService.getUserData2().then(function (data) {
            var userData = data;
            _this.userToken = userData['token'];
            _this.wpApiService
                .getSavedRentals(_this.authService.userToken)
                .subscribe(function (rentals) {
                _this.dRentals = rentals;
                _this.savedRentals = _this.dRentals.data;
                _this.savedCount = Object.keys(_this.savedRentals).length;
                if (Object.keys(_this.savedRentals).length > 0) {
                    _this.hasLikes = true;
                }
                _this.hideLoading();
            });
        });
    };
    Tab3Page.prototype.ngOnInit = function () {
        this.getUserData();
    };
    Tab3Page.prototype.ionViewDidEnter = function () {
        this.getUserData();
    };
    Tab3Page.prototype.calcClasses = function () {
        if (!this.hasLikes) {
            return {
                empty: true
            };
        }
    };
    Tab3Page.prototype.removeLike = function (index, rental_id) {
        var _this = this;
        this.wpApiService
            .setFav(this.authService.userToken, rental_id, 0)
            .subscribe(function (data) {
            if (data['status'] === 1) {
                if (index !== -1) {
                    _this.savedRentals.splice(index, 1);
                    _this.savedCount = Object.keys(_this.savedRentals).length;
                }
            }
        });
    };
    Tab3Page.prototype.backHome = function () {
        this.router.navigateByUrl('/tabs/tab1');
    };
    Tab3Page.prototype.viewDetai = function (rental_id) {
        this.router.navigateByUrl('/tabs/tab3/rentaldetail/' + rental_id);
    };
    Tab3Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map