(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tips-tips-module"],{

/***/ "./src/app/tips/tips.module.ts":
/*!*************************************!*\
  !*** ./src/app/tips/tips.module.ts ***!
  \*************************************/
/*! exports provided: TipsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsPageModule", function() { return TipsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tips_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tips.page */ "./src/app/tips/tips.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tips_page__WEBPACK_IMPORTED_MODULE_5__["TipsPage"]
    }
];
var TipsPageModule = /** @class */ (function () {
    function TipsPageModule() {
    }
    TipsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tips_page__WEBPACK_IMPORTED_MODULE_5__["TipsPage"]]
        })
    ], TipsPageModule);
    return TipsPageModule;
}());



/***/ }),

/***/ "./src/app/tips/tips.page.html":
/*!*************************************!*\
  !*** ./src/app/tips/tips.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"safe-area-x-top\">\n    <ion-img src=\"/assets/logo.svg\" class=\"logo\"></ion-img>\n</ion-header>\n<ion-content padding>\n    <ion-slides pager=\"true\" class=\"tips-slider\">\n        <ion-slide class=\"tips-slide\">\n            <img src=\"/assets/slider/tips/slide_1.png\" />\n            <h2 class=\"slide-text\">Do you you dream big? we do, we can help you.</h2>\n        </ion-slide>\n\n        <ion-slide class=\"tips-slide\">\n            <img src=\"/assets/slider/tips/slide_2.png\" />\n            <h2 class=\"slide-text\">Global hospitality standards.</h2>\n        </ion-slide>\n\n        <ion-slide class=\"tips-slide\">\n            <img src=\"/assets/slider/tips/slide_3.png\" />\n            <h2 class=\"slide-text\">Millions of global guests.</h2>\n        </ion-slide>\n        <ion-slide class=\"tips-slide\">\n            <img src=\"/assets/slider/tips/slide_4.png\" />\n            <h2 class=\"slide-text\">Step-by-step hosting guide.</h2>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n<ion-footer class=\"safe-area-x\">\n    <ion-row>\n        <ion-col size=\"3\">\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" expand=\"block\" class=\"big-btn mt-5\" routerDirection=\"forward\" (click)=\"goTo('/tabs/tab1')\">\n                Skip\n            </ion-button>\n        </ion-col>\n        <ion-col size=\"9\">\n            <ion-button size=\"large\" expand=\"block\" class=\"big-btn mt-5 tipsBtn\" routerDirection=\"forward\" (click)=\"goTo('/signup')\">\n                <ion-icon slot=\"start\" src=\"/assets/icons/checkmark.svg\"></ion-icon>\n                Create an account\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n    <p class=\"after-btn\">\n        Already on PropertyStays?\n        <ion-text color=\"primary\" (click)=\"goTo('/login')\">Log In</ion-text>\n    </p>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tips/tips.page.scss":
/*!*************************************!*\
  !*** ./src/app/tips/tips.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  margin: 10px 50px; }\n\nion-content {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0px; }\n\nion-content .tips-slider {\n    --bullet-background: #000000;\n    margin-bottom: 4vh;\n    margin-top: 4vh; }\n\nion-content .tips-slider .swiper-container-horizontal > .swiper-pagination-bullets {\n      bottom: 0px !important; }\n\nion-content .tips-slider .tips-slide {\n      flex-direction: column;\n      padding: 0 18px; }\n\nion-content .tips-slider .tips-slide img {\n        display: block;\n        max-height: 40vh; }\n\nion-content .tips-slider .tips-slide .swiper-pagination-bullets {\n        bottom: 0; }\n\nion-content .tips-slider .tips-slide .slide-text {\n        margin-top: 3vh;\n        margin-bottom: 6vh;\n        font-size: 1.2em;\n        font-weight: 400;\n        color: var(--ion-color-dark); }\n\nion-content p.after-btn {\n    color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlwcy9EOlxcbW9iaWxlXFxjZW50cmljRmluYWwvc3JjXFxhcHBcXHRpcHNcXHRpcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2QsZ0JBQWM7RUFDZCxxQkFBaUIsRUFBQTs7QUFKckI7SUFNUSw0QkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFSdkI7TUFVWSxzQkFBc0IsRUFBQTs7QUFWbEM7TUFhWSxzQkFBc0I7TUFDdEIsZUFBZSxFQUFBOztBQWQzQjtRQWdCZ0IsY0FBYztRQUNkLGdCQUFnQixFQUFBOztBQWpCaEM7UUFvQmdCLFNBQVMsRUFBQTs7QUFwQnpCO1FBdUJnQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsNEJBQTRCLEVBQUE7O0FBM0I1QztJQWdDUSwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpcHMvdGlwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgbWFyZ2luOiAxMHB4IDUwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAudGlwcy1zbGlkZXIge1xuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gICAgICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICAgICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC50aXBzLXNsaWRlIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlLXRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2dmg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcC5hZnRlci1idG4ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tips/tips.page.ts":
/*!***********************************!*\
  !*** ./src/app/tips/tips.page.ts ***!
  \***********************************/
/*! exports provided: TipsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsPage", function() { return TipsPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipsPage = /** @class */ (function () {
    function TipsPage(router) {
        this.router = router;
    }
    TipsPage.prototype.ngOnInit = function () {
    };
    TipsPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    TipsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tips',
            template: __webpack_require__(/*! ./tips.page.html */ "./src/app/tips/tips.page.html"),
            styles: [__webpack_require__(/*! ./tips.page.scss */ "./src/app/tips/tips.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], TipsPage);
    return TipsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tips-tips-module.js.map