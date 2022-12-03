(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alltours-alltours-module"],{

/***/ "./src/app/alltours/alltours.module.ts":
/*!*********************************************!*\
  !*** ./src/app/alltours/alltours.module.ts ***!
  \*********************************************/
/*! exports provided: AlltoursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlltoursPageModule", function() { return AlltoursPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alltours_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alltours.page */ "./src/app/alltours/alltours.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _alltours_page__WEBPACK_IMPORTED_MODULE_5__["AlltoursPage"]
    }
];
var AlltoursPageModule = /** @class */ (function () {
    function AlltoursPageModule() {
    }
    AlltoursPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_alltours_page__WEBPACK_IMPORTED_MODULE_5__["AlltoursPage"]]
        })
    ], AlltoursPageModule);
    return AlltoursPageModule;
}());



/***/ }),

/***/ "./src/app/alltours/alltours.page.html":
/*!*********************************************!*\
  !*** ./src/app/alltours/alltours.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            All Tours\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"top-exp\">\n        <ion-grid class=\"top-prop\">\n            <ion-row align-items-center *ngFor=\"let tour of allTours\">\n                <ion-col size=\"6\">\n                    <ion-img (click)=\"tourDetail(tour.id)\" [src]=\"\n              tour.image ? tour.image : './assets/img/property/no_image.png'\n            \"></ion-img>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <h3 class=\"title\">{{ tour.title | slice: 0:15 }}</h3>\n                    <p class=\"desc\">{{ tour.description | slice: 0:50 }}...</p>\n                    <ion-button class=\"book-now\" (click)=\"tourDetail(tour.id)\">{{ tour.price }}\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/alltours/alltours.page.scss":
/*!*********************************************!*\
  !*** ./src/app/alltours/alltours.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHRvdXJzL2FsbHRvdXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alltours/alltours.page.ts":
/*!*******************************************!*\
  !*** ./src/app/alltours/alltours.page.ts ***!
  \*******************************************/
/*! exports provided: AlltoursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlltoursPage", function() { return AlltoursPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
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




var AlltoursPage = /** @class */ (function () {
    function AlltoursPage(navCtrl, authService, wpApiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = true;
    }
    AlltoursPage.prototype.showLoading = function () {
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
    AlltoursPage.prototype.hideLoading = function () {
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
    AlltoursPage.prototype.getAllTours = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoading();
                        // Get Recomended Locations
                        return [4 /*yield*/, this.wpApiService.getAllTours().subscribe(function (tours) {
                                _this.allTours = tours;
                                _this.hideLoading();
                            })];
                    case 1:
                        // Get Recomended Locations
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlltoursPage.prototype.tourDetail = function (tour_id) {
        this.navCtrl.navigateForward('/tabs/tab1/tour/' + tour_id);
    };
    AlltoursPage.prototype.ngOnInit = function () {
        this.getAllTours();
    };
    AlltoursPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alltours',
            template: __webpack_require__(/*! ./alltours.page.html */ "./src/app/alltours/alltours.page.html"),
            styles: [__webpack_require__(/*! ./alltours.page.scss */ "./src/app/alltours/alltours.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], AlltoursPage);
    return AlltoursPage;
}());



/***/ })

}]);
//# sourceMappingURL=alltours-alltours-module.js.map