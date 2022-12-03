(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-bank-bank-module"],{

/***/ "./src/app/payments/bank/bank.module.ts":
/*!**********************************************!*\
  !*** ./src/app/payments/bank/bank.module.ts ***!
  \**********************************************/
/*! exports provided: BankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPageModule", function() { return BankPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bank_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank.page */ "./src/app/payments/bank/bank.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bank_page__WEBPACK_IMPORTED_MODULE_5__["BankPage"]
    }
];
var BankPageModule = /** @class */ (function () {
    function BankPageModule() {
    }
    BankPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bank_page__WEBPACK_IMPORTED_MODULE_5__["BankPage"]]
        })
    ], BankPageModule);
    return BankPageModule;
}());



/***/ }),

/***/ "./src/app/payments/bank/bank.page.html":
/*!**********************************************!*\
  !*** ./src/app/payments/bank/bank.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Your Details\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-slides pager=\"false\" [options]=\"slideOpts\" #inputsSlider>\n        <ion-slide>\n\n            <ion-list class=\"inputs-list\">\n                <ion-list-header>\n                    <p class=\"text-second-color text-14\">\n                        Enter your address details.\n                    </p>\n                </ion-list-header>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">Full Name</ion-label>\n                    <ion-input clearInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">Street Address</ion-label>\n                    <ion-input viewInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">Apt/Suite etc</ion-label>\n                    <ion-input viewInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">City</ion-label>\n                    <ion-input viewInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">Postal Code/Zip</ion-label>\n                    <ion-input viewInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">Country</ion-label>\n                    <ion-input viewInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-button expand=\"block\" size=\"large\" class=\"big-btn-full mr-t-20\" (click)=\"continue()\">Continue\n                </ion-button>\n            </ion-list>\n\n\n        </ion-slide>\n\n\n        <ion-slide>\n\n            <ion-list class=\"inputs-list\">\n                <ion-list-header>\n                    <p class=\"text-second-color text-14\">\n                        Enter information related to bank transfer payments.\n                    </p>\n                </ion-list-header>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">IBAN number</ion-label>\n                    <ion-input clearInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item class=\"item-input\">\n                    <ion-label position=\"floating\">SWIFT ID</ion-label>\n                    <ion-input clearInput type=\"text\"></ion-input>\n                </ion-item>\n                <ion-button expand=\"block\" size=\"large\" class=\"big-btn-full mr-t-20\" (click)=\"save()\">Verify account\n                </ion-button>\n            </ion-list>\n\n\n        </ion-slide>\n    </ion-slides>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/payments/bank/bank.page.scss":
/*!**********************************************!*\
  !*** ./src/app/payments/bank/bank.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.inputs-list {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvYmFuay9EOlxcbW9iaWxlXFxjZW50cmljRmluYWwvc3JjXFxhcHBcXHBheW1lbnRzXFxiYW5rXFxiYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL2JhbmsvYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5pbnB1dHMtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/payments/bank/bank.page.ts":
/*!********************************************!*\
  !*** ./src/app/payments/bank/bank.page.ts ***!
  \********************************************/
/*! exports provided: BankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPage", function() { return BankPage; });
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


var BankPage = /** @class */ (function () {
    function BankPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            loop: false,
            allowSlidePrev: false,
            allowSlideNext: false
        };
    }
    BankPage.prototype.ngOnInit = function () {
        this.slider.lockSwipes(true);
    };
    BankPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    BankPage.prototype.continue = function () {
        this.slider.lockSwipes(false);
        this.slider.slideNext();
        this.slider.lockSwipes(true);
    };
    BankPage.prototype.save = function () {
        this.goBack();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], BankPage.prototype, "slider", void 0);
    BankPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank',
            template: __webpack_require__(/*! ./bank.page.html */ "./src/app/payments/bank/bank.page.html"),
            styles: [__webpack_require__(/*! ./bank.page.scss */ "./src/app/payments/bank/bank.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], BankPage);
    return BankPage;
}());



/***/ })

}]);
//# sourceMappingURL=payments-bank-bank-module.js.map