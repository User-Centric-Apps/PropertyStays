(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locations-locations-module"],{

/***/ "./src/app/locations/locations.module.ts":
/*!***********************************************!*\
  !*** ./src/app/locations/locations.module.ts ***!
  \***********************************************/
/*! exports provided: LocationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPageModule", function() { return LocationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locations.page */ "./src/app/locations/locations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _locations_page__WEBPACK_IMPORTED_MODULE_5__["LocationsPage"]
    }
];
var LocationsPageModule = /** @class */ (function () {
    function LocationsPageModule() {
    }
    LocationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_locations_page__WEBPACK_IMPORTED_MODULE_5__["LocationsPage"]]
        })
    ], LocationsPageModule);
    return LocationsPageModule;
}());



/***/ }),

/***/ "./src/app/locations/locations.page.html":
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            All Locations\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor=\"let city of allLocations\" class=\"city-card\" [ngStyle]=\"{'background-image':'url('+city.image+')', 'background-position':'center'}\" (click)=\"cityDetail(city.id)\">\n        <ion-card-content>\n            <div class=\"text\">\n                <h2 class=\"title\">{{city.title}}</h2>\n                <p class=\"desc\">{{city.average}}</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/locations/locations.page.scss":
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".city-card {\n  width: 100%;\n  height: 180px;\n  margin: 25px 0;\n  background-size: cover;\n  border-radius: 10px; }\n  .city-card ion-card-content {\n    padding: 16px;\n    height: 100%;\n    background: rgba(56, 56, 56, 0.6); }\n  .city-card ion-card-content .text {\n      transform: translateY(180%);\n      color: #ffffff; }\n  .city-card ion-card-content .text h2 {\n        font-size: 22px;\n        font-weight: 600; }\n  .city-card ion-card-content .text p {\n        font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL0Q6XFxtb2JpbGVcXGNlbnRyaWNGaW5hbC9zcmNcXGFwcFxcbG9jYXRpb25zXFxsb2NhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBTHZCO0lBT1EsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUMsRUFBQTtFQVR6QztNQVdZLDJCQUEyQjtNQUMzQixjQUFjLEVBQUE7RUFaMUI7UUFjZ0IsZUFBZTtRQUNmLGdCQUFnQixFQUFBO0VBZmhDO1FBa0JnQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbnMvbG9jYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXR5LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTYsIDU2LCA1NiwgMC42KTtcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4MCUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/locations/locations.page.ts":
/*!*********************************************!*\
  !*** ./src/app/locations/locations.page.ts ***!
  \*********************************************/
/*! exports provided: LocationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPage", function() { return LocationsPage; });
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




var LocationsPage = /** @class */ (function () {
    function LocationsPage(navCtrl, authService, wpApiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.allLocations = [];
        this.loc = [];
        this.isLoading = true;
    }
    LocationsPage.prototype.showLoading = function () {
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
    LocationsPage.prototype.hideLoading = function () {
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
    LocationsPage.prototype.ngOnInit = function () {
        this.getAllLocations();
    };
    LocationsPage.prototype.cityDetail = function (city_id) {
        // this.router.navigateByUrl('/tabs/tab1/city-detail');
        this.navCtrl.navigateForward('/tabs/tab1/city-detail/' + city_id);
    };
    LocationsPage.prototype.getAllLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showLoading();
                        // Get Recomended Locations
                        return [4 /*yield*/, this.wpApiService.getAllLocations().subscribe(function (locations) {
                                _this.loc = locations;
                                _this.allLocations = _this.loc.data;
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
    LocationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.page.html */ "./src/app/locations/locations.page.html"),
            styles: [__webpack_require__(/*! ./locations.page.scss */ "./src/app/locations/locations.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], LocationsPage);
    return LocationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=locations-locations-module.js.map