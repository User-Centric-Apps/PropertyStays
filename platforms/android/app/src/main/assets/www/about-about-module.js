(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-start\">\n            About PropertyStays\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"app-info\">\n        <img src=\"/assets/logo.svg\" class=\"logo\" />\n        <p class=\"version\">Version 1.0</p>\n        <p class=\"update\">\n            Your app version is up to date\n            <ion-icon name=\"checkmark-circle\" color=\"primary\"></ion-icon>\n        </p>\n    </div>\n    <div class=\"app-actions\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row>\n                <ion-col class=\"ion-no-padding\" size=\"6\">\n                    <ion-button fill=\"clear\" expand=\"full\" color=\"dark\">\n                        <ion-icon name=\"star\" slot=\"start\" color=\"warning\"></ion-icon>\n                        Rate this app\n                    </ion-button>\n                </ion-col>\n                <ion-col class=\"ion-no-padding\" size=\"6\">\n                    <ion-button fill=\"clear\" expand=\"full\" color=\"dark\" (click)=\"shareApp()\">\n                        <ion-icon name=\"share\" slot=\"start\" color=\"dark\"></ion-icon>\n                        Share this app\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div class=\"desc ion-padding-horizontal\">\n        <div *ngIf=\"appAbout?.image\" style=\"margin-top:30px;\">\n            <img [src]=\"appAbout?.image\" width=\"100%\" >\n        </div>\n        <p [innerHtml]=\"appAbout?.description\"></p>\n    </div>\n    <div class=\"social ion-padding-horizontal\">\n        <h6 class=\"follow\">Follow us</h6>\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row>\n                <ion-col *ngFor=\"let social of socialNetworks\">\n                    <ion-button fill=\"clear\" expand=\"full\" [href]=\"social.url\">\n                        <ion-icon src=\"{{social.icon}}\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-info {\n  background: #F1F7FB;\n  text-align: center;\n  padding: 15px; }\n  .app-info img {\n    max-width: 60%; }\n  .app-info p {\n    margin: 5px 0;\n    font-size: 14px; }\n  .app-info p.update {\n      color: #627790; }\n  .app-actions {\n  background: #d5e1ea; }\n  .desc {\n  color: #627790; }\n  .desc p {\n    color: #627790;\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFIakI7SUFLUSxjQUFjLEVBQUE7RUFMdEI7SUFRUSxhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBVHZCO01BWVksY0FBYyxFQUFBO0VBTTFCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxjQUFjLEVBQUE7RUFEbEI7SUFHUSxjQUFjO0lBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGN0ZCO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAmLnZlcnNpb24ge31cbiAgICAgICAgJi51cGRhdGUge1xuICAgICAgICAgICAgY29sb3I6ICM2Mjc3OTA7XG4gICAgICAgICAgICBpb24taWNvbiB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYXBwLWFjdGlvbnMge1xuICAgIGJhY2tncm91bmQ6ICNkNWUxZWE7XG59XG5cbi5kZXNjIHtcbiAgICBjb2xvcjogIzYyNzc5MDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2Mjc3OTA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(shareService, wpApiService) {
        this.shareService = shareService;
        this.wpApiService = wpApiService;
        this.socialNetworks = [
            {
                title: 'Instagram',
                icon: '/assets/icons/social/instagram.svg',
                url: 'https://www.instagram.com/propertystays.com7/',
            },
            {
                title: 'Facebook',
                icon: '/assets/icons/social/facebook.svg',
                url: 'https://www.facebook.com/propertystays',
            },
            {
                title: 'Twitter',
                icon: '/assets/icons/social/twitter.svg',
                url: 'https://twitter.com/propertystays',
            },
            {
                title: 'Pinterest',
                icon: '/assets/icons/social/pinterest.svg',
                url: 'https://www.pinterest.com/propertystays/',
            },
        ];
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wpApiService.getAbout().subscribe(function (about) {
            var ab = about.data;
            _this.appAbout = ab;
            console.log(_this.appAbout);
        }, function (error) {
            console.log(error);
        });
    };
    AboutPage.prototype.shareApp = function () {
        var options = {
            message: this.appAbout.title ? this.appAbout.title : null,
            subject: this.appAbout.title ? this.appAbout.title : null,
            files: [
                this.appAbout.image,
            ],
            url: this.appAbout.url ? this.appAbout.url : null,
            chooserTitle: 'Pick an app to share',
        };
        this.shareService.shareAppWithOptions(options);
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map