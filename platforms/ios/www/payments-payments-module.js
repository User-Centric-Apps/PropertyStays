(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./src/app/payments/payments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_5__["PaymentsPage"]
    }
];
var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_5__["PaymentsPage"]]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());



/***/ }),

/***/ "./src/app/payments/payments.page.html":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"dark\" icon=\"close-circle-outline\" (click)=\"goBack()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Payments\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <p class=\"text-14 text-second-color\">\n        We will use the host payment methods for all bookings for your listings.\n    </p>\n    <ion-list lines=\"full\">\n        <ion-item>\n            <ion-label>Payment Currency</ion-label>\n            <ion-note color=\"medium\"> GPB </ion-note>\n        </ion-item>\n        <ion-item detail (click)=\"openPayPal()\" class=\"payment-method\">\n            <ion-icon src=\"/assets/icon/atoms/payment/paypal.svg\" slot=\"start\" class=\"payment-icon\"></ion-icon>\n            <ion-label>PayPal</ion-label>\n            <ion-badge color=\"primary\" slot=\"end\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n            </ion-badge>\n        </ion-item>\n        <ion-item detail disabled=\"true\" class=\"payment-method\">\n            <ion-icon src=\"/assets/icon/atoms/payment/applepay-white.svg\" slot=\"start\" class=\"payment-icon\"></ion-icon>\n            <ion-label>ApplePay</ion-label>\n        </ion-item>\n        <ion-item detail (click)=\"openBank()\" disabled=\"true\" class=\"payment-method\">\n            <ion-icon src=\"/assets/icon/atoms/payment/BankTransfer.svg\" slot=\"start\" class=\"payment-icon\"></ion-icon>\n            <ion-label>Bank Transfer</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-img src=\"/assets/logo.svg\"></ion-img>\n</ion-footer>"

/***/ }),

/***/ "./src/app/payments/payments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  padding-bottom: 10px;\n  background: #fff;\n  text-align: center;\n  align-items: center; }\n  ion-footer:before {\n    display: none; }\n  ion-footer ion-img {\n    width: 170px;\n    align-self: center;\n    display: block;\n    margin: 0 auto 30px; }\n  ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n  ion-item.payment-method {\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n  ion-item.payment-method ion-badge {\n    font-size: 25px;\n    padding: 0;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px; }\n  ion-item.payment-method ion-badge ion-icon {\n      color: #fff;\n      --color: #fff; }\n  ion-item.payment-method ion-icon.payment-icon {\n    font-size: 40px;\n    margin: 0;\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUp2QjtJQU1RLGFBQWEsRUFBQTtFQU5yQjtJQVNRLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQixFQUFBO0VBSTNCO0VBQ0ksa0JBQWdCO0VBQ2hCLHNCQUFvQixFQUFBO0VBR3hCO0VBQ0ksNkNBQW9CO0VBQ3BCLHdCQUFzQixFQUFBO0VBRjFCO0lBSVEsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVksRUFBQTtFQVJwQjtNQVVZLFdBQVc7TUFDWCxhQUFRLEVBQUE7RUFYcEI7SUFlUSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gICAgfVxufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1pdGVtLnBheW1lbnQtbWV0aG9kIHtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWljb24ucGF5bWVudC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/payments/payments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/payments/payments.page.ts ***!
  \*******************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(iab, navCtrl) {
        this.iab = iab;
        this.navCtrl = navCtrl;
    }
    PaymentsPage.prototype.ngOnInit = function () {
    };
    PaymentsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    PaymentsPage.prototype.openPayPal = function () {
        var options = {
            zoom: 'no',
        };
        var browser = this.iab.create('https://www.paypal.com/signin', '_self', options);
        // browser.show();
    };
    PaymentsPage.prototype.openBank = function () {
        this.navCtrl.navigateForward('bank');
    };
    PaymentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.page.html */ "./src/app/payments/payments.page.html"),
            styles: [__webpack_require__(/*! ./payments.page.scss */ "./src/app/payments/payments.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PaymentsPage);
    return PaymentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=payments-payments-module.js.map