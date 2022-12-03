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

module.exports = "ion-footer {\n  padding-bottom: 10px;\n  background: #fff;\n  text-align: center;\n  align-items: center; }\n  ion-footer:before {\n    display: none; }\n  ion-footer ion-img {\n    width: 170px;\n    align-self: center;\n    display: block;\n    margin: 0 auto 30px; }\n  ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n  ion-item.payment-method {\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n  ion-item.payment-method ion-badge {\n    font-size: 25px;\n    padding: 0;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px; }\n  ion-item.payment-method ion-badge ion-icon {\n      color: #fff;\n      --color: #fff; }\n  ion-item.payment-method ion-icon.payment-icon {\n    font-size: 40px;\n    margin: 0;\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFxwYXltZW50c1xccGF5bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFKdkI7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFTUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQUkzQjtFQUNJLGtCQUFnQjtFQUNoQixzQkFBb0IsRUFBQTtFQUd4QjtFQUNJLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTtFQUYxQjtJQUlRLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFScEI7TUFVWSxXQUFXO01BQ1gsYUFBUSxFQUFBO0VBWHBCO0lBZVEsZUFBZTtJQUNmLFNBQVM7SUFDVCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taXRlbS5wYXltZW50LW1ldGhvZCB7XG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgICBpb24tYmFkZ2Uge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pY29uLnBheW1lbnQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufSJdfQ== */"

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