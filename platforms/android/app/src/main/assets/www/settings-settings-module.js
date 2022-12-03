(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"goBack()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Settings\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list lines=\"full\">\n        <ion-item *ngIf=\"authService.authenticationState.value\">\n            <ion-label>Notifications</ion-label>\n            <ion-toggle slot=\"end\" (ionChange)=\"changeNotify($event)\" [(ngModel)]=\"notifyStatus\"></ion-toggle>\n        </ion-item>\n        <ion-item detail class=\"has-detail\" *ngIf=\"!authService.authenticationState.value\" (click)=\"ui.loginAlert()\">\n            <ion-label>Currency</ion-label>\n            <ion-note color=\"medium\" slot=\"end\"> GPB </ion-note>\n            <!-- <ion-select interface=\"action-sheet\">\n                <ion-select-option value=\"GPB\" selected>GPB</ion-select-option>\n                <ion-select-option value=\"EGP\">EGP</ion-select-option>\n            </!-->\n        </ion-item>\n        <!--<ion-item *ngIf=\"authService.authenticationState.value\">\n            <ion-label>Currency</ion-label>\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"selectedCurrency\" (ionChange)=\"changeCurrency($event, selectedCurrency)\">\n                <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.name\">{{currency.title}} ({{currency.symbol}})</ion-select-option>\n            </ion-select>\n        </ion-item>-->\n        <ion-item detail class=\"has-detail\">\n            <ion-label>Currency</ion-label>\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"selectedCurrency\" (ionChange)=\"changeCurrency($event, selectedCurrency)\">\n                <ion-select-option value=\"gbp\" selected>GPB</ion-select-option>\n                <ion-select-option value=\"eur\">EGP</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-img src=\"/assets/logo.svg\"></ion-img>\n    <ion-button expand=\"full\" color=\"light\" (click)=\"logOut()\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        <ion-label>\n            Log Out\n        </ion-label>\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select .select-text {\n  font-size: 16px;\n  --color: var(--ion-text-color2);\n  font-weight: 300; }\n\nion-select .select-icon {\n  --color: #00BDBB; }\n\nion-footer {\n  padding-bottom: 0;\n  background: #fff;\n  text-align: center;\n  align-items: center; }\n\nion-footer:before {\n    display: none; }\n\nion-footer ion-img {\n    width: 190px;\n    align-self: center;\n    display: block;\n    margin: 0 auto; }\n\nion-footer ion-button {\n    margin: 10px 0 0;\n    color: var(--ion-color-primary);\n    --ion-color-contrast: var(--ion-color-primary) !important;\n    text-transform: inherit; }\n\nion-item.has-detail {\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBZTtFQUNmLCtCQUFRO0VBQ1IsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EsZ0JBQVEsRUFBQTs7QUFJaEI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFKdkI7SUFNUSxhQUFhLEVBQUE7O0FBTnJCO0lBU1EsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQVp0QjtJQWVRLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IseURBQXFCO0lBQ3JCLHVCQUF1QixFQUFBOztBQUkvQjtFQUNJLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge1xuICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgLnNlbGVjdC1pY29uIHtcbiAgICAgICAgLS1jb2xvcjogIzAwQkRCQjtcbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgfVxufVxuXG5pb24taXRlbS5oYXMtZGV0YWlsIHtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ui.service */ "./src/app/services/ui.service.ts");
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






var SettingsPage = /** @class */ (function () {
    function SettingsPage(authService, wpApiService, router, navCtrl, ui) {
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.ui = ui;
        this.currencies = [];
        this.notifyStatus = true;
        this.uNotifyStatus = true;
        this.currencyLoaded = false;
        this.notifyLoaded = false;
    }
    SettingsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    SettingsPage.prototype.goPrivacy = function () {
        this.navCtrl.navigateForward('/privacy');
    };
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authenticationState.subscribe(function (state) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(state);
                        if (!state) return [3 /*break*/, 3];
                        this.ui.showPageLoading();
                        return [4 /*yield*/, this.wpApiService
                                .notificationStatus(this.authService.userToken)
                                .subscribe(function (response) {
                                console.log('User Notify: ', response.data);
                                _this.notifyStatus = response.data.status;
                                _this.notifyLoaded = true;
                                _this.uNotifyStatus = response.data.status;
                            }, function (error) {
                                console.log(error);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wpApiService
                                .getCurrencies(this.authService.userToken)
                                .subscribe(function (currencies) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log(currencies);
                                            this.currencies = currencies.data;
                                            return [4 /*yield*/, this.wpApiService
                                                    .getUserCurrency(this.authService.userToken)
                                                    .subscribe(function (selected) {
                                                    console.log('User Currency: ', selected.data);
                                                    _this.selectedCurrency = selected.data.name;
                                                    _this.userCurrency = selected.data.name;
                                                    _this.currencyLoaded = true;
                                                    _this.ui.hidePageLoading();
                                                }, function (error) {
                                                    console.log(error);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                console.log(error);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    SettingsPage.prototype.logOut = function () {
        var _this = this;
        this.authService.logOut().then(function () {
            _this.navCtrl.navigateRoot('/tips');
        });
    };
    SettingsPage.prototype.changeCurrency = function (event, currencyName) {
        var _this = this;
        console.log(event);
        console.log(currencyName);
        if (this.userCurrency && event.detail.value !== this.userCurrency) {
            console.log('Currency Changed By User');
            this.wpApiService
                .setCurrency(this.authService.userToken, currencyName)
                .subscribe(function (response) {
                console.log(response);
                _this.selectedCurrency = currencyName;
                _this.userCurrency = currencyName;
            });
        }
        // if (this.currencyLoaded) {
        //   this.wpApiService
        //     .setCurrency(this.authService.userToken, currencyName)
        //     .subscribe((response: any) => {
        //       console.log(response);
        //     });
        // }
    };
    SettingsPage.prototype.changeNotify = function (event) {
        var _this = this;
        // this.sNotifyStatus = !this.sNotifyStatus;
        // this.notifyStatus = this.sNotifyStatus;
        console.log('this.notify:', this.notifyStatus);
        console.log('this.uNotify:', this.uNotifyStatus);
        if (this.notifyStatus !== this.uNotifyStatus) {
            console.log(event.detail.checked);
            console.log('Notify Changed by');
            console.log('this.notify after:', this.notifyStatus);
            console.log('this.uNotify after:', this.uNotifyStatus);
            this.wpApiService
                .changeNotification(this.authService.userToken, event.detail.checked ? 1 : 0)
                .subscribe(function (response) {
                console.log(response.data);
                _this.uNotifyStatus = event.detail.checked;
                console.log('this.notify after api:', _this.notifyStatus);
                console.log('this.uNotify after api:', _this.uNotifyStatus);
            }, function (error) {
                console.log(error);
            });
        }
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__["WpapiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map