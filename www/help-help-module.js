(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/help/help.page.html":
/*!*************************************!*\
  !*** ./src/app/help/help.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Help\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icon/atoms/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-searchbar mode=\"md\" type=\"search\" placeholder=\"Help Search\" animated class=\"topSearch\" (ionInput)=\"filterTopics($event.target.value)\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-segment mode=\"md\" value=\"host\" class=\"tabs\" [(ngModel)]=\"tabValue\">\n        <ion-segment-button mode=\"md\" value=\"host\">\n            <ion-label>Hosting help</ion-label>\n        </ion-segment-button>\n        <ion-segment-button mode=\"md\" value=\"travel\">\n            <ion-label>Traveling help</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"host-topics\" *ngIf=\"tabValue === 'host'; else elseTemplate\">\n        <ion-list lines=\"full\" class=\"topics-list\">\n            <ion-list-header>Browse help topics</ion-list-header>\n            <ion-item detail *ngFor=\"let topic of vhTopics\" (click)=\"viewDetailPage('helpdetail/' + topic.id)\" class=\"has-detail\">\n                <ion-label>{{ topic.sub_name }}</ion-label>\n            </ion-item>\n        </ion-list>\n        <!-- <ion-list lines=\"full\" class=\"topics-list\">\n            <ion-list-header>All topics</ion-list-header>\n            <ion-item detail *ngFor=\"let topic of allTopics\" (click)=\"viewDetailPage('detail')\">\n                <ion-label>{{topic.title}}</ion-label>\n            </ion-item>\n        </ion-list> -->\n    </div>\n\n    <ng-template #elseTemplate>\n        <div class=\"travel-topics\">\n            <ion-list lines=\"full\" class=\"topics-list\">\n                <ion-list-header>Browse help topics</ion-list-header>\n                <ion-item detail *ngFor=\"let topic of vtTopics\" (click)=\"viewDetailPage('helpdetail/' + topic.id)\" class=\"has-detail\">\n                    <ion-label>{{ topic.sub_name }}</ion-label>\n                </ion-item>\n            </ion-list>\n            <!-- <ion-list lines=\"full\" class=\"topics-list\">\n                <ion-list-header>All topics</ion-list-header>\n                <ion-item detail *ngFor=\"let topic of allTopics\" (click)=\"viewDetailPage('detail')\">\n                    <ion-label>{{topic.title}}</ion-label>\n                </ion-item>\n            </ion-list> -->\n        </div>\n    </ng-template>\n</ion-content>\n\n<ion-footer class=\"contact\">\n    <ion-item lines=\"none\">\n        <ion-label>Still need help?</ion-label>\n        <ion-button color=\"primary\" slot=\"end\" class=\"white-text normal-text no-radius no-shadow\" (click)=\"goToFeedback()\">\n            Contact Us\n        </ion-button>\n    </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar.topSearch {\n  padding: 0 20px; }\n  ion-searchbar.topSearch input.searchbar-input,\n  ion-searchbar.topSearch .searchbar-input,\n  ion-searchbar.topSearch .searchbar-input.sc-ion-searchbar-md {\n    border-radius: 20px;\n    box-shadow: none;\n    border: 1px solid var(--ion-color-light-shade); }\n  .header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n  ion-item.has-detail {\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n  ion-list-header {\n  text-transform: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9EOlxcbW9iaWxlXFxjZW50cmljRmluYWwvc3JjXFxhcHBcXGhlbHBcXGhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5COzs7SUFLUSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDhDQUE4QyxFQUFBO0VBSXREO0VBRVEsaUJBQWUsRUFBQTtFQUl2QjtFQUNJLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTtFQUcxQjtFQUNJLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIudG9wU2VhcmNoIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgaW5wdXQuc2VhcmNoYmFyLWlucHV0LFxuICAgIC5zZWFyY2hiYXItaW5wdXQsXG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICB9XG59XG5cbi5oZWFkZXItaW9zIHtcbiAgICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgfVxufVxuXG5pb24taXRlbS5oYXMtZGV0YWlsIHtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, wpApiService, router) {
        this.navCtrl = navCtrl;
        this.wpApiService = wpApiService;
        this.router = router;
        this.tabValue = 'host';
        this.hTdata = [];
        this.tTdata = [];
        this.hTopics = [];
        this.tTopics = [];
    }
    HelpPage.prototype.getTopicsHost = function () {
        var _this = this;
        this.wpApiService.getHelps('2').subscribe(function (hTopics) {
            _this.hTdata = hTopics;
            _this.hTopics = _this.hTdata.data;
            _this.vhTopics = _this.hTdata.data;
        });
    };
    HelpPage.prototype.getTopicsTravel = function () {
        var _this = this;
        this.wpApiService.getHelps('1').subscribe(function (tTopics) {
            _this.tTdata = tTopics;
            _this.tTopics = _this.tTdata.data;
            _this.vtTopics = _this.tTdata.data;
        });
    };
    HelpPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    HelpPage.prototype.goToFeedback = function () {
        this.router.navigateByUrl('/feedback');
    };
    HelpPage.prototype.ngOnInit = function () {
        this.getTopicsHost();
        this.getTopicsTravel();
    };
    HelpPage.prototype.viewDetailPage = function (page) {
        this.navCtrl.navigateForward(page);
    };
    HelpPage.prototype.filterTopics = function (param) {
        var val = param;
        // const tempH = this.hTopics;
        // const tempT = this.tTopics;
        // DON'T filter the technologies IF the supplied input is an empty string
        if (val.trim() !== '') {
            this.vhTopics = this.hTopics.filter(function (item) {
                return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            this.vtTopics = this.tTopics.filter(function (item) {
                return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            // this.allTopics = this.allTopics.filter((item) => {
            //   return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            //   item.desc.toLowerCase().indexOf(val.toLowerCase()) > -1;
            // });
        }
        else {
            this.vhTopics = this.hTopics;
            this.vtTopics = this.tTopics;
        }
    };
    HelpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.page.html */ "./src/app/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map