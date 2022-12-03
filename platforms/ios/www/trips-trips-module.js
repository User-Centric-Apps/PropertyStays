(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trips-trips-module"],{

/***/ "./src/app/trips/trips.module.ts":
/*!***************************************!*\
  !*** ./src/app/trips/trips.module.ts ***!
  \***************************************/
/*! exports provided: TripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trips.page */ "./src/app/trips/trips.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_5__["TripsPage"]
    }
];
var TripsPageModule = /** @class */ (function () {
    function TripsPageModule() {
    }
    TripsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_5__["TripsPage"]]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());



/***/ }),

/***/ "./src/app/trips/trips.page.html":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            My trips\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"calcClasses()\" padding>\n    <!-- <ion-item>\n        <ion-label>Trips View</ion-label>\n        <ion-note slot=\"end\">For Demonstration Use only</ion-note>\n        <ion-toggle [(ngModel)]=\"hasTrips\"></ion-toggle>\n    </ion-item> -->\n\n    <div class=\"trips\" *ngIf=\"savedTrips && hasTrips; else noTrips\">\n        <p class=\"likes-count\">upcoming trips</p>\n        <ion-card class=\"property-item\" *ngFor=\"let item of savedTrips; let i = index\">\n            <ion-card-header>\n                <ion-card-title (click)=\"tourDetail(item.id, item.order_details.st_booking_post_type)\">{{ item.title }} - {{ item.check_in }} - {{ item.nights }}\n                </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <!-- <div class=\"order-status {{ item.status }}\">\n                    Order Status: <span>{{ item.status }}</span>\n                </div> -->\n                <ion-img [src]=\"item.image ? item.image : './assets/img/property/no_image.png'\" class=\"image\" (click)=\"tourDetail(item.id, item.order_details.st_booking_post_type)\"></ion-img>\n                <!-- <ion-row>\n                    <ion-col size=\"6\" text-center>\n                        Order Date: <span class=\"heavy\">{{ item.order_date }}</span>\n                    </ion-col>\n                    <ion-col size=\"6\" text-center>\n                        Order Price: <span class=\"heavy\">{{ item.cost }}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\" text-center>\n                        Check-in Date:\n                        <span class=\"heavy\">{{ item.order_details.check_in }}</span>\n                    </ion-col>\n                    <ion-col size=\"6\" text-center>\n                        Check-Out Date:\n                        <span class=\"heavy\">{{ item.order_details.check_out }}</span>\n                    </ion-col>\n                </ion-row> -->\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <ng-template #noTrips>\n        <div class=\"no-trips\">\n            <h1>hmm, no bookings…</h1>\n            <h6>Start planning your first adventure!</h6>\n            <ion-button color=\"primary\" fill=\"outline\" size=\"large\" expand=\"full\" shape=\"round\" class=\"explore\" (click)=\"goTo('/tabs/tab1')\">\n                Explore where!\n            </ion-button>\n        </div>\n    </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/trips/trips.page.scss":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.empty {\n  background-image: url(\"/assets/img/no-trips.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: contain;\n  --background: auto;\n  background-position: bottom;\n  background-color: #fff; }\n\n.no-trips h1 {\n  text-align: center; }\n\n.no-trips h6 {\n  text-align: center;\n  color: var(--ion-text-color2);\n  margin: 30px 0;\n  font-weight: 300; }\n\n.no-trips ion-button.explore {\n  --border-radius: 100px;\n  font-size: 17px;\n  height: 54px;\n  text-transform: inherit; }\n\n.trips p.likes-count {\n  color: var(--ion-text-color2);\n  font-size: 14px;\n  margin: 15px; }\n\n.trips .order-status {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  padding: 10px;\n  font-size: 0.8em;\n  border-radius: 5px 0 0 5px;\n  color: #fff;\n  margin-top: 10px;\n  opacity: 0.75; }\n\n.trips .order-status span {\n    font-weight: 700; }\n\n.trips .order-status.Completed {\n    background: var(--ion-color-success); }\n\n.trips .order-status.Incomplete {\n    background: var(--ion-color-dark); }\n\n.trips ion-img.image {\n  margin-bottom: 0px; }\n\n.trips span.heavy {\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC90cmlwcy90cmlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBNEQ7RUFDNUQsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixrQkFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFSeEI7RUFXUSxzQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFJL0I7RUFFUSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFKcEI7RUFPUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFmckI7SUFpQlksZ0JBQWdCLEVBQUE7O0FBakI1QjtJQW9CWSxvQ0FBb0MsRUFBQTs7QUFwQmhEO0lBdUJZLGlDQUFpQyxFQUFBOztBQXZCN0M7RUEyQlEsa0JBQWtCLEVBQUE7O0FBM0IxQjtFQThCUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyaXBzL3RyaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9uby10cmlwcy5zdmdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAtLWJhY2tncm91bmQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uby10cmlwcyB7XG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIGlvbi1idXR0b24uZXhwbG9yZSB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICB9XG59XG5cbi50cmlwcyB7XG4gICAgcC5saWtlcy1jb3VudCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcjIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMTVweDtcbiAgICB9XG4gICAgLm9yZGVyLXN0YXR1cyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgICAgICAmLkNvbXBsZXRlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5JbmNvbXBsZXRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nLmltYWdlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICBzcGFuLmhlYXZ5IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/trips/trips.page.ts":
/*!*************************************!*\
  !*** ./src/app/trips/trips.page.ts ***!
  \*************************************/
/*! exports provided: TripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPage", function() { return TripsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var TripsPage = /** @class */ (function () {
    function TripsPage(router, authService, wpApiService, loadingCtrl) {
        this.router = router;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.hasTrips = false;
        this.tripsItems = [
            {
                title: 'Location name - 12/12/2019 - 14nts',
                image: '/assets/img/property/prop1_1.png'
            },
            {
                title: 'Location name - 12/12/2019 - 14nts',
                image: '/assets/img/property/prop1_2.png'
            }
        ];
        this.isLoading = true;
        this.tdata = [];
        this.showLoading();
    }
    TripsPage.prototype.showLoading = function () {
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
    TripsPage.prototype.hideLoading = function () {
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
    TripsPage.prototype.ngOnInit = function () {
        this.getUserData();
    };
    TripsPage.prototype.ionViewDidEnter = function () {
        this.getUserData();
    };
    TripsPage.prototype.getUserData = function () {
        var _this = this;
        // Get User Token
        this.authService.getUserData2().then(function (data) {
            var userData = data;
            _this.userToken = userData['token'];
            _this.wpApiService
                .getUserTrips(_this.authService.userToken)
                .subscribe(function (trips) {
                console.log(trips);
                _this.tdata = trips;
                if (Object.keys(_this.tdata.data).length > 0) {
                    _this.savedTrips = _this.tdata.data;
                    _this.hasTrips = true;
                }
                _this.hideLoading();
            });
        });
    };
    TripsPage.prototype.getUserTrips = function (user_token) {
        this.wpApiService.getUserTrips(user_token).subscribe(function (user_trips) {
            console.log(user_trips);
        });
    };
    TripsPage.prototype.calcClasses = function () {
        if (!this.hasTrips) {
            return {
                empty: true
            };
        }
    };
    TripsPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    TripsPage.prototype.tourDetail = function (id, type) {
        switch (type) {
            case 'st_rental':
                this.router.navigateByUrl('/tabs/tab1/rentaldetail/' + id);
                break;
            case 'st_tour':
                this.router.navigateByUrl('/tabs/tab1/tour/' + id);
                break;
            default:
                break;
        }
    };
    TripsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.page.html */ "./src/app/trips/trips.page.html"),
            styles: [__webpack_require__(/*! ./trips.page.scss */ "./src/app/trips/trips.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], TripsPage);
    return TripsPage;
}());



/***/ })

}]);
//# sourceMappingURL=trips-trips-module.js.map