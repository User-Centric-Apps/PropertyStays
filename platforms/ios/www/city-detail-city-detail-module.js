(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-detail-city-detail-module"],{

/***/ "./src/app/city-detail/city-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/city-detail/city-detail.module.ts ***!
  \***************************************************/
/*! exports provided: CityDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailPageModule", function() { return CityDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-detail.page */ "./src/app/city-detail/city-detail.page.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ImagesViewerPage } from '../shared/images-viewer/images-viewer.page';

var routes = [
    {
        path: '',
        component: _city_detail_page__WEBPACK_IMPORTED_MODULE_5__["CityDetailPage"]
    }
];
var CityDetailPageModule = /** @class */ (function () {
    function CityDetailPageModule() {
    }
    CityDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            entryComponents: [],
            declarations: [_city_detail_page__WEBPACK_IMPORTED_MODULE_5__["CityDetailPage"]]
        })
    ], CityDetailPageModule);
    return CityDetailPageModule;
}());



/***/ }),

/***/ "./src/app/city-detail/city-detail.page.html":
/*!***************************************************!*\
  !*** ./src/app/city-detail/city-detail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"transparent over-slider\" [ngClass]=\"{'header-white': scrollPosition > 220}\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [color]=\"scrollPosition > 220 ? 'primary' : 'light'\"></ion-back-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"scrollPosition > 220\">{{locationData?.title}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\">\n                    <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\n                </ion-button> -->\n            <!-- <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"toggleFav()\">\n                <ion-icon [name]=\"locationData?.isInFavorite === 0 ? 'heart-empty' : 'heart'\" slot=\"icon-only\"></ion-icon>\n            </ion-button> -->\n            <ion-button fill=\"clear\" [color]=\"scrollPosition > 220 ? 'primary' : 'light'\" (click)=\"imagesViewer()\">\n                <ion-icon name=\"photos\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"under-header\" (ionScroll)=\"scroll($event)\" [scrollEvents]=\"true\">\n    <ion-slides pager=\"true\" class=\"prop-images has-overlay\" [options]=\"ImageSliderOpts\">\n        <ion-slide *ngFor=\"let image of locationData?.images\" [ngStyle]=\"image.image !== null ? {'background-image': 'url('+image.image+')'} : {'background-image':'url(/assets/img/property/no_image.png)'}\">\n            <!-- <img [src]=\"image !== null || image !== '' ? image : './assets/img/property/no_image.png'\"> -->\n        </ion-slide>\n    </ion-slides>\n    <div class=\"slide-data\">\n        <h3>{{locationData?.title}}</h3>\n        <!-- <div class=\"rating\">\n            <ion-icon *ngIf=\"locationData.rate_review > 0\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"locationData.rate_review > 1\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"locationData.rate_review > 2\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"locationData.rate_review > 3\" name=\"star\" color=\"warning\"></ion-icon>\n            <ion-icon *ngIf=\"locationData.rate_review > 4\" name=\"star\" color=\"warning\"></ion-icon>\n        </div> -->\n    </div>\n    <div class=\"description\">\n        <h3>{{locationData?.title}}</h3>\n        <div [innerHTML]=\"locationData?.content\"></div>\n    </div>\n\n    <div class=\"top-exp\" *ngIf=\"locationData?.places && locationData?.places != null && locationData?.places !=''\">\n        <ion-item class=\"cat-row mr-t-30\">\n            <ion-label>Places to stay</ion-label>\n            <!--<ion-button slot=\"end\" color=\"primary\" fill=\"clear\">See All\n                <ion-icon name=\"arrow-forward\" align-self-center></ion-icon>\n            </ion-button>-->\n        </ion-item>\n        <ion-list lines=\"none\" class=\"top-city-view\">\n            <ion-item *ngFor=\"let hotel of locationData?.places\">\n                <ion-grid class=\"top-prop\">\n                    <ion-row align-items-center>\n                        <ion-col size=\"5\" class=\"no-padding\">\n                            <ion-img (click)=\"rentalDetail(hotel.id)\" src=\"{{hotel.image}}\"></ion-img>\n                        </ion-col>\n                        <ion-col size=\"\n                                7\" class=\"padding-left\">\n                            <ion-row>\n                                <ion-col size=\"8\" class=\"no-padding\">\n                                    <h3 class=\"title\">{{hotel.title}}</h3>\n                                </ion-col>\n                                <ion-col size=\"4\" class=\"no-padding\">\n                                    <h3 class=\"title price\">{{hotel.price}}</h3>\n                                </ion-col>\n                            </ion-row>\n\n                            <p class=\"desc\">{{hotel.details}}</p>\n\n                            <ion-row align-items-end>\n                                <ion-col size=\"8\" class=\"no-padding\">\n                                    <ion-text color=\"danger\">\n                                        <!-- <p class=\"text-10\">{{hotel.roomsLeft}}</p> -->\n                                    </ion-text>\n                                </ion-col>\n                                <ion-col size=\"4\" class=\"no-padding\">\n                                    <ion-button class=\"book-now\" (click)=\"rentalDetail(hotel.id)\">Book</ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-list>\n    </div>\n    <div class=\"hotels-map\" *ngIf=\"cityLocation?.lat !== '' && cityLocation?.lng !== '' && cityLocation?.lat && cityLocation?.lng\">\n        <ion-item class=\"cat-row\">\n            <ion-label>Listing on the map</ion-label>\n        </ion-item>\n        <div *ngIf=\"cityLocation?.lat !== '' && cityLocation?.lng !== ''\" id=\"map_canvas\"></div>\n    </div>\n    <div class=\"top-exp\" *ngIf=\"locationData?.tours && locationData?.tours != null && locationData?.tours !=''\">\n        <ion-item class=\"cat-row mr-t-10\">\n            <ion-label>Top experiences</ion-label>\n            <!--<ion-button slot=\"end\" color=\"primary\" fill=\"clear\">See All\n                <ion-icon name=\"arrow-forward\" align-self-center></ion-icon>\n            </ion-button>-->\n        </ion-item>\n        <div class=\"flex-gallery\">\n            <div class=\"pin\" *ngFor=\"let exp of locationData?.tours\" (click)=\"tourDetail(exp.id)\">\n                <ion-img src=\"{{exp.image}}\"></ion-img>\n                <span>{{exp.title}}</span>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<!-- <ion-footer class=\"has-submit\">\n    <ion-button color=\"primary\" expand=\"full\" class=\"white-text\">\n        Book a trip\n    </ion-button>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/city-detail/city-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/city-detail/city-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.top-city-view ion-item {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --background: #F5F5F5;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --border-radius: 8px;\n  margin-bottom: 10px; }\n  ion-list.top-city-view ion-item ion-grid {\n    padding: 0; }\n  ion-list.top-city-view ion-item ion-grid ion-row ion-col ion-img {\n      height: 110px;\n      border-radius: 8px 0px 0 8px; }\n  ion-list.top-city-view ion-item ion-grid ion-row ion-col h3 {\n      margin-top: 4px; }\n  ion-list.top-city-view ion-item ion-grid ion-row ion-col h3.price {\n        text-align: right; }\n  ion-list.top-city-view ion-item ion-grid ion-row ion-col ion-button.book-now {\n      margin-top: 0px;\n      margin-bottom: -3px; }\n  ion-list.top-city-view ion-item ion-grid ion-col.no-padding {\n      padding: 0; }\n  ion-list.top-city-view ion-item ion-grid ion-col.padding-left {\n      padding: 0 0 0 10px; }\n  .description h3 {\n  font-size: 17px;\n  color: #24253D;\n  line-height: 23px; }\n  .description p {\n  font-size: 13px;\n  color: #24263D;\n  line-height: 17px; }\n  .cat-row {\n  --padding-start: 0;\n  --padding-end: 0; }\n  .flex-gallery {\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  -webkit-column-fill: balance;\n     -moz-column-fill: balance;\n          column-fill: balance; }\n  .flex-gallery .pin {\n    margin: 0;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n  .flex-gallery .pin span {\n      font-size: 0.7em;\n      display: flex;\n      position: absolute;\n      max-width: 100px;\n      overflow: hidden;\n      transform: translateY(-25px) translateX(10px);\n      text-align: center;\n      color: #fff;\n      max-height: 15px;\n      text-shadow: 0px 1px 5px #000;\n      box-shadow: inset 0px 0px 20px 6px #0000009c; }\n  #map_canvas {\n  width: 100%;\n  height: 250px; }\n  .prop-images ion-slide {\n  min-height: 264px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9jaXR5LWRldGFpbC9jaXR5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBRVEsa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsc0JBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixxQkFBYTtFQUNiLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLG9CQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQVYzQjtJQThCWSxVQUFVLEVBQUE7RUE5QnRCO01BZXdCLGFBQWE7TUFDYiw0QkFBNEIsRUFBQTtFQWhCcEQ7TUFtQndCLGVBQWUsRUFBQTtFQW5CdkM7UUFxQjRCLGlCQUFpQixFQUFBO0VBckI3QztNQXlCd0IsZUFBZTtNQUNmLG1CQUFtQixFQUFBO0VBMUIzQztNQWdDZ0IsVUFBVSxFQUFBO0VBaEMxQjtNQW1DZ0IsbUJBQW1CLEVBQUE7RUFNbkM7RUFFUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBSnpCO0VBT1EsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYyxFQUFBO0VBR2xCO0VBQ0ksdUJBQWU7S0FBZixvQkFBZTtVQUFmLGVBQWU7RUFDZiw0QkFBb0I7S0FBcEIseUJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBRnhCO0lBSVEsU0FBUztJQUNULDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBRWxCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CLEVBQUE7RUFQM0I7TUFTWSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLDZDQUE2QztNQUM3QyxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQiw2QkFBNkI7TUFDN0IsNENBQTRDLEVBQUE7RUFLeEQ7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaXR5LWRldGFpbC9jaXR5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XG4vLyAgICAgLS1vZmZzZXQtYm90dG9tOiAtNnZoICFpbXBvcnRhbnQ7XG4vLyAgICAgaW9uLWZvb3RlciB7XG4vLyAgICAgICAgIG1hcmdpbjogMCAtMTZweCAwO1xuLy8gICAgICAgICB3aWR0aDogMTAwdnc7XG4vLyAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgICBpb24tYnV0dG9uIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICAgIGhlaWdodDogMTJ2dztcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4vLyAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbmlvbi1saXN0LnRvcC1jaXR5LXZpZXcge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24uYm9vay1ub3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBpb24tY29sLm5vLXBhZGRpbmcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY29sLnBhZGRpbmctbGVmdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgY29sb3I6ICMyNDI1M0Q7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzI0MjYzRDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgfVxufVxuXG4uY2F0LXJvdyB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5mbGV4LWdhbGxlcnkge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgICAucGluIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIC8vIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCkgdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDVweCAjMDAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDZweCAjMDAwMDAwOWM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ucHJvcC1pbWFnZXMgaW9uLXNsaWRlIHtcbiAgICBtaW4taGVpZ2h0OiAyNjRweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/city-detail/city-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/city-detail/city-detail.page.ts ***!
  \*************************************************/
/*! exports provided: CityDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailPage", function() { return CityDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/image-viewer/image-viewer.component */ "./src/app/shared/image-viewer/image-viewer.component.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
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





// import { ImagesViewerPage } from '../shared/images-viewer/images-viewer.page';


var CityDetailPage = /** @class */ (function () {
    function CityDetailPage(activatedRoute, wpApiService, authService, loadingCtrl, platform, navCtrl, modalController, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.ImageSliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            loop: true
        };
        this.passedId = null;
        this.isLoading = true;
        this.scrollPosition = 0;
        this.locDataA = [];
        this.locDataAA = [];
        this.showLoading();
    }
    CityDetailPage.prototype.showLoading = function () {
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
    CityDetailPage.prototype.hideLoading = function () {
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
    // strip(html: string) {
    //   return html.replace(/<(?:.|\n)*?>/gm, '');
    // }
    CityDetailPage.prototype.scroll = function (ev) {
        this.scrollPosition = ev.detail.scrollTop;
    };
    CityDetailPage.prototype.rentalDetail = function (rental_id) {
        this.navCtrl.navigateForward('/tabs/tab1/rentaldetail/' + rental_id);
    };
    CityDetailPage.prototype.tourDetail = function (tour_id) {
        this.navCtrl.navigateForward('/tabs/tab1/tour/' + tour_id);
    };
    CityDetailPage.prototype.getLocData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Get User Token
                    return [4 /*yield*/, this.authService.getUserData2().then(function (data) {
                            var userData = data;
                            // this.userToken = userData['token'];
                            if (data && userData['token'] !== null) {
                                _this.userToken = userData['token'];
                            }
                            else {
                                _this.userToken = 0;
                            }
                        })];
                    case 1:
                        // Get User Token
                        _a.sent();
                        return [4 /*yield*/, this.wpApiService
                                .getLocation(this.authService.userToken ? this.authService.userToken : 0, this.passedId)
                                .subscribe(function (locData) {
                                _this.locDataAA = locData;
                                _this.locDataA = _this.locDataAA.data;
                                console.log(_this.locDataA);
                                _this.locationData = _this.locDataA[0];
                                _this.cityLocation = _this.locationData['locations'][0];
                                _this.hotelsLocations = _this.locationData['locations'];
                                _this.loadMap(_this.cityLocation, _this.hotelsLocations);
                                _this.hideLoading();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CityDetailPage.prototype.imagesViewer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
                            componentProps: { images: this.locationData.images },
                            backdropDismiss: true,
                            cssClass: 'images-viewer'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CityDetailPage.prototype.toggleFav = function () {
        var _this = this;
        if (this.locationData.isInFavorite === 0) {
            this.wpApiService
                .setFav(this.authService.userToken, this.passedId, 1)
                .subscribe(function (data) {
                if (data[0]['status'] === 1) {
                    _this.locationData.isInFavorite = 1;
                }
            });
        }
        else {
            this.wpApiService
                .setFav(this.authService.userToken, this.passedId, 0)
                .subscribe(function (data) {
                if (data[0]['status'] === 1) {
                    _this.locationData.isInFavorite = 0;
                }
            });
        }
    };
    CityDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.passedId = this.activatedRoute.snapshot.paramMap.get('city_id');
                        return [4 /*yield*/, this.getLocData()];
                    case 1:
                        _a.sent();
                        this.platform.ready();
                        return [2 /*return*/];
                }
            });
        });
    };
    CityDetailPage.prototype.loadMap = function (city_location, markers) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (city_location &&
                    city_location['lat'] !== null &&
                    city_location['lat'] !== '') {
                    this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create('map_canvas', {
                        camera: {
                            target: {
                                lat: parseFloat(city_location['lat']),
                                lng: parseFloat(city_location['lng'])
                            },
                            zoom: 10,
                            tilt: 30
                        }
                    });
                    markers.forEach(function (hotel) {
                        var marker = _this.map.addMarkerSync({
                            title: 'Property',
                            icon: 'red',
                            animation: 'DROP',
                            position: {
                                lat: parseFloat(hotel['lat']),
                                lng: parseFloat(hotel['lng'])
                            }
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    CityDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-detail',
            template: __webpack_require__(/*! ./city-detail.page.html */ "./src/app/city-detail/city-detail.page.html"),
            styles: [__webpack_require__(/*! ./city-detail.page.scss */ "./src/app/city-detail/city-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], CityDetailPage);
    return CityDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=city-detail-city-detail-module.js.map