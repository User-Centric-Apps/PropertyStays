(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["host-host-module"],{

/***/ "./src/app/host/host.module.ts":
/*!*************************************!*\
  !*** ./src/app/host/host.module.ts ***!
  \*************************************/
/*! exports provided: HostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostPageModule", function() { return HostPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _host_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./host.page */ "./src/app/host/host.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _host_page__WEBPACK_IMPORTED_MODULE_5__["HostPage"]
    }
];
var HostPageModule = /** @class */ (function () {
    function HostPageModule() {
    }
    HostPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_host_page__WEBPACK_IMPORTED_MODULE_5__["HostPage"]]
        })
    ], HostPageModule);
    return HostPageModule;
}());



/***/ }),

/***/ "./src/app/host/host.page.html":
/*!*************************************!*\
  !*** ./src/app/host/host.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            My listed properties\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"calcClasses()\" padding>\n    <!-- <ion-item>\n        <ion-label>Prop View</ion-label>\n        <ion-note slot=\"end\">For Demonstration Use only</ion-note>\n        <ion-toggle [(ngModel)]=\"hasProp\"></ion-toggle>\n    </ion-item> -->\n\n    <div class=\"prop\" *ngIf=\"hasProp; else noProps\">\n        <ion-list lines=\"none\">\n            <ion-item-sliding *ngFor=\"let item of propItems; let i = index\" [disabled]=\"item.rule == 1\" [ngClass]=\"item.rule == 1 ? 'disabled' : ''\">\n                <ion-item>\n                    <ion-card class=\"property-item\" [ngClass]=\"item.rule == 1 ? 'disabled' : ''\">\n                        <ion-card-header>\n                            <ion-card-title>{{ item.title }}</ion-card-title>\n                        </ion-card-header>\n\n                        <ion-card-content>\n                            <img [src]=\"item.image !== null ? item.image : noImage\" class=\"image\" />\n                            <ion-text color=\"danger\" *ngIf=\"item.rule == 1\" class=\"text-center\">\n                                allowed days has been exceeded\n                            </ion-text>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-item>\n\n                <ion-item-options side=\"end\">\n                    <ion-item-option expandable=\"true\" (click)=\"editProperty(item.id)\">\n                        <div class=\"option-inner\">\n                            <ion-icon src=\"/assets/icons/edit-profile.svg\"></ion-icon>\n                            <p>Edit</p>\n                        </div>\n                    </ion-item-option>\n                    <ion-item-option expandable=\"true\" (click)=\"deleteProperty(item.id)\">\n                        <div class=\"option-inner\">\n                            <ion-icon src=\"/assets/icons/close-light.svg\"></ion-icon>\n                            <p>Delete</p>\n                        </div>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <ng-template #noProps>\n        <div class=\"no-prop\">\n            <h1>hmm, no properties listed</h1>\n            <h6>\n                It's quite simple to add a property to your listing, press the button below and we will walk you through it.\n            </h6>\n            <ion-button color=\"primary\" fill=\"solid\" size=\"large\" expand=\"full\" shape=\"round\" class=\"explore\" (click)=\"goTo('/property/add')\">\n                Get Started\n            </ion-button>\n        </div>\n    </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/host/host.page.scss":
/*!*************************************!*\
  !*** ./src/app/host/host.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.empty {\n  background-image: url(\"/assets/img/no-prop.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: contain;\n  --background: auto;\n  background-position: bottom;\n  background-color: #fff; }\n\n.no-prop h1 {\n  text-align: center; }\n\n.no-prop h6 {\n  text-align: center;\n  color: var(--ion-text-color2);\n  margin: 30px 0;\n  font-weight: 300; }\n\n.no-prop ion-button.explore {\n  --border-radius: 100px;\n  font-size: 17px;\n  height: 54px;\n  text-transform: inherit;\n  --ion-color-contrast: #fff !important; }\n\n.prop p.likes-count {\n  color: var(--ion-text-color2);\n  font-size: 14px;\n  margin: 15px; }\n\n.prop ion-list ion-item-sliding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --border-radius: 20px;\n  border-radius: 20px; }\n\n.prop ion-list ion-item-sliding ion-item {\n    --padding-start: 0;\n    --padding-end: 0;\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    border-radius: 20px;\n    --border-radius: 20px;\n    --background: transparent; }\n\n.prop ion-list ion-item-sliding ion-item ion-card {\n      width: 100%; }\n\n.prop ion-list ion-item-sliding ion-item ion-card ion-img {\n        margin-bottom: -8px; }\n\n.prop ion-list ion-item-sliding ion-item ion-card.disabled {\n      --background: rgba(255, 0, 0, 0.1); }\n\n.prop ion-list ion-item-sliding ion-item ion-card.disabled ion-card-content {\n        text-align: center; }\n\n.prop ion-list ion-item-sliding ion-item ion-card.disabled ion-card-content ion-img {\n          opacity: 0.3; }\n\n.prop ion-list ion-item-sliding ion-item ion-card.disabled ion-card-content ion-text {\n          text-align: center; }\n\n.prop ion-list ion-item-sliding ion-item-options {\n    padding: 0;\n    flex-direction: column;\n    align-items: flex-end;\n    background: #F1F7FB;\n    border-radius: 20px;\n    transform: scale(1) translateX(0);\n    opacity: 0; }\n\n.prop ion-list ion-item-sliding ion-item-options ion-item-option {\n      flex-grow: 1;\n      justify-items: center;\n      display: flex;\n      width: 25vw;\n      padding: 0;\n      align-items: center;\n      --background: transparent;\n      padding-right: 15px; }\n\n.prop ion-list ion-item-sliding ion-item-options ion-item-option button {\n        display: flex; }\n\n.prop ion-list ion-item-sliding ion-item-options ion-item-option div.option-inner {\n        width: 100%;\n        align-items: center;\n        transform: scale(1.15);\n        text-align: center; }\n\n.prop ion-list ion-item-sliding ion-item-options ion-item-option div.option-inner ion-icon {\n          font-size: 28px;\n          color: #A1BCCF; }\n\n.prop ion-list ion-item-sliding ion-item-options ion-item-option:first-child {\n        border-bottom: 1px solid #fff; }\n\n.prop ion-list ion-item-sliding.item-sliding-active-slide ion-item-options {\n    transform: scale(0.87) translateX(25px);\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC9EOlxcbW9iaWxlXFxjZW50cmljRmluYWwvc3JjXFxhcHBcXGhvc3RcXGhvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQTJEO0VBQzNELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1Esa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBUnhCO0VBV1Esc0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFDQUFxQixFQUFBOztBQUk3QjtFQUVRLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUpwQjtFQVFZLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQVovQjtJQWNnQixrQkFBZ0I7SUFDaEIsZ0JBQWM7SUFDZCxnQkFBYztJQUNkLG1CQUFpQjtJQUNqQix3QkFBc0I7SUFDdEIsc0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBZ0I7SUFDaEIseUJBQWEsRUFBQTs7QUF0QjdCO01Bd0JvQixXQUFXLEVBQUE7O0FBeEIvQjtRQTBCd0IsbUJBQW1CLEVBQUE7O0FBMUIzQztNQThCb0Isa0NBQWEsRUFBQTs7QUE5QmpDO1FBZ0N3QixrQkFBa0IsRUFBQTs7QUFoQzFDO1VBa0M0QixZQUFZLEVBQUE7O0FBbEN4QztVQXFDNEIsa0JBQWtCLEVBQUE7O0FBckM5QztJQTJDZ0IsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsVUFBVSxFQUFBOztBQWpEMUI7TUFtRG9CLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsYUFBYTtNQUNiLFdBQVc7TUFDWCxVQUFVO01BQ1YsbUJBQW1CO01BQ25CLHlCQUFhO01BQ2IsbUJBQW1CLEVBQUE7O0FBMUR2QztRQTREd0IsYUFBYSxFQUFBOztBQTVEckM7UUErRHdCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGtCQUFrQixFQUFBOztBQWxFMUM7VUFvRTRCLGVBQWU7VUFDZixjQUFjLEVBQUE7O0FBckUxQztRQXlFd0IsNkJBQTZCLEVBQUE7O0FBekVyRDtJQStFb0IsdUNBQXVDO0lBQ3ZDLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5lbXB0eSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbm8tcHJvcC5zdmdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAtLWJhY2tncm91bmQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uby1wcm9wIHtcbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcjIpO1xuICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbi5leHBsb3JlIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnByb3Age1xuICAgIHAubGlrZXMtY291bnQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWl0ZW0tb3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjFGN0ZCO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXZ3O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXYub3B0aW9uLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTFCQ0NGO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUge1xuICAgICAgICAgICAgICAgIGlvbi1pdGVtLW9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpIHRyYW5zbGF0ZVgoMjVweCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/host/host.page.ts":
/*!***********************************!*\
  !*** ./src/app/host/host.page.ts ***!
  \***********************************/
/*! exports provided: HostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostPage", function() { return HostPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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





var HostPage = /** @class */ (function () {
    function HostPage(router, wpApiService, authService, loadingCtrl) {
        this.router = router;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.hasProp = false;
        this.propis = [];
        this.propItems = [];
        this.mpData = [];
        this.isLoading = true;
        this.noImage = '/assets/img/noimage.png';
        this.showLoading();
    }
    HostPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading no-mt new-loader'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HostPage.prototype.hideLoading = function () {
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
    HostPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserToken()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserToken()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostPage.prototype.getUserToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUserData2().then(function (data) {
                            var userData = data;
                            _this.userToken = userData['token'];
                            console.log('getUserData2');
                            console.log(_this.userToken);
                            _this.getMyProperties(_this.userToken);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostPage.prototype.getMyProperties = function (userToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.myProperties(userToken).subscribe(function (myProp) {
                    console.log('My Props: ', myProp);
                    _this.mpData = myProp;
                    _this.propis = _this.mpData.data;
                    _this.hideLoading();
                    if (Object.keys(_this.propis).length > 0) {
                        _this.hasProp = true;
                        _this.propItems = _this.propis;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HostPage.prototype.editProperty = function (propID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateByUrl('/property/edit/' + propID);
                return [2 /*return*/];
            });
        });
    };
    HostPage.prototype.deleteProperty = function (propID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService
                    .deleteProperty(this.authService.userToken, propID)
                    .subscribe(function (delData) {
                    console.log(delData);
                    _this.getMyProperties(_this.authService.userToken);
                });
                return [2 /*return*/];
            });
        });
    };
    HostPage.prototype.calcClasses = function () {
        if (!this.hasProp) {
            return {
                empty: true
            };
        }
    };
    HostPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    HostPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! ./host.page.html */ "./src/app/host/host.page.html"),
            styles: [__webpack_require__(/*! ./host.page.scss */ "./src/app/host/host.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], HostPage);
    return HostPage;
}());



/***/ })

}]);
//# sourceMappingURL=host-host-module.js.map