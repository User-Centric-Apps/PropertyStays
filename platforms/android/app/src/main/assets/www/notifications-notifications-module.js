(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"dark\" icon=\"/assets/icons/close.svg\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Notifications\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-item>\n        <ion-label>Notifications View</ion-label>\n        <ion-note slot=\"end\">For Demonstration Use only</ion-note>\n        <ion-toggle [(ngModel)]=\"hasNotifications\"></ion-toggle>\n    </ion-item> -->\n\n    <div class=\"notifications\" *ngIf=\"notificationsService.notifications.length > 0; else noNotifications\">\n        <ion-list lines=\"none\">\n            <ion-item class=\"notification\" *ngFor=\"let item of notificationsService.notifications; let i = index\">\n                <ion-icon src=\"/assets/icons/house_black.svg\" slot=\"start\" color=\"primary\"></ion-icon>\n                <ion-label class=\"ion-text-wrap\" [innerHTML]=\"item.content\">\n                </ion-label>\n                <ion-button color=\"primary\" fill=\"clear\" shape=\"round\" class=\"remove\" slot=\"end\" (click)=\"removeItem(i, item.id)\">\n                    <ion-icon src=\"/assets/icons/close_black.svg\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-list>\n    </div>\n    <ng-template #noNotifications>\n        <div class=\"no-notifications\">\n            <div class=\"centered\">\n                <ion-img src=\"/assets/img/undraw_order_confirmed.svg\"></ion-img>\n                <h5 text-center>You’re all caught up!</h5>\n                <p text-center>You have no notifications.</p>\n            </div>\n        </div>\n    </ng-template>\n</ion-content>\n<ion-footer>\n    <ion-img src=\"/assets/logo.svg\"></ion-img>\n</ion-footer>"

/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-notifications {\n  display: flex;\n  align-items: center;\n  height: 80vh; }\n  .no-notifications div.centered {\n    width: 100%; }\n  .no-notifications div.centered ion-img {\n      width: 265px;\n      margin: 0 auto; }\n  .no-notifications div.centered h5 {\n      color: var(--ion-color-primary);\n      text-align: center; }\n  .no-notifications div.centered p {\n      color: var(--ion-text-color2);\n      font-size: 14px;\n      line-height: 17px; }\n  .notifications ion-list ion-item.notification {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  overflow: hidden;\n  background: transparent;\n  --background: transparent;\n  margin-bottom: 10px; }\n  .notifications ion-list ion-item.notification ion-icon {\n    margin-right: 10px;\n    font-size: 27px; }\n  .notifications ion-list ion-item.notification ion-label {\n    color: var(--ion-text-color2);\n    --color: var(--ion-text-color2);\n    font-size: 14px;\n    line-height: 17px; }\n  .notifications ion-list ion-item.notification ion-button.remove {\n    margin: auto 5px;\n    --padding-start: 0;\n    --padding-end: 0;\n    margin-right: -10px; }\n  .notifications ion-list ion-item.notification ion-button.remove ion-icon {\n      margin: 0; }\n  ion-footer {\n  padding-bottom: 10px;\n  background: #fff;\n  text-align: center;\n  align-items: center; }\n  ion-footer:before {\n    display: none; }\n  ion-footer ion-img {\n    width: 170px;\n    align-self: center;\n    display: block;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9EOlxcbW9iaWxlXFxjZW50cmljRmluYWwvc3JjXFxhcHBcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxXQUFXLEVBQUE7RUFMbkI7TUFPWSxZQUFZO01BQ1osY0FBYyxFQUFBO0VBUjFCO01BV1ksK0JBQStCO01BQy9CLGtCQUFrQixFQUFBO0VBWjlCO01BZVksNkJBQTZCO01BQzdCLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUs3QjtFQUdZLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5QkFBYTtFQUNiLG1CQUFtQixFQUFBO0VBUi9CO0lBVWdCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUFYL0I7SUFjZ0IsNkJBQTZCO0lBQzdCLCtCQUFRO0lBQ1IsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBakJqQztJQW9CZ0IsZ0JBQWdCO0lBQ2hCLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLG1CQUFtQixFQUFBO0VBdkJuQztNQXlCb0IsU0FBUyxFQUFBO0VBTzdCO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFKdkI7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFTUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLW5vdGlmaWNhdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZGl2LmNlbnRlcmVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDI2NXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcjIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1pdGVtLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcjIpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ucmVtb3ZlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gNXB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(notificationsService, authService) {
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.hasNotifications = true;
        this.notifList = [
            {
                text: 'Earn from your property by adding it to PropertyStays, we will handle the rest!',
                icon: 'home'
            },
            {
                text: 'Invite your fields to join you on your trip to Bali!',
                icon: 'person-add'
            },
            {
                text: 'Rahim has just booked your house for 14nts from 1/02/2019 to 14/02/2019',
                icon: 'flag'
            }
        ];
    }
    NotificationsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.authenticationState.subscribe(function (state) {
                            console.log(state);
                            if (state) {
                                console.log(_this.authService.userToken);
                                _this.notificationsService.getNotifications();
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.removeItem = function (index, notificationID) {
        this.notificationsService.notificationRead(index, notificationID);
    };
    NotificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map