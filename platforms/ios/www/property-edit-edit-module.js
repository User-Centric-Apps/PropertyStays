(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-edit-edit-module"],{

/***/ "./src/app/property/edit/edit.module.ts":
/*!**********************************************!*\
  !*** ./src/app/property/edit/edit.module.ts ***!
  \**********************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.page */ "./src/app/property/edit/edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/property/edit/edit.page.html":
/*!**********************************************!*\
  !*** ./src/app/property/edit/edit.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"dark\" icon=\"close\" text=\"\" *ngIf=\"step == 1 || step == 5 || step == 6 || step == 7 || step > 7\">\n                <!-- <ion-icon name=\"close\"></ion-icon> -->\n            </ion-back-button>\n            <!-- <ion-button color=\"dark\" (click)=\"prevStep()\" *ngIf=\"step != 1 && step != 5 && step != 7 && step != 8\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button> -->\n            <ion-button color=\"dark\" (click)=\"prevStep(true)\" *ngIf=\"step == 2 || step == 3 || step == 4\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"step == 1\">\n            Host your property\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button> -->\n            <ion-button color=\"dark\" fill=\"clear\" *ngIf=\"step == 4 || step == 5 || step == 6 || step == 7 || step > 7\" (click)=\"saveExit()\">\n                Save and exit\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-slides pager=\"false\" [options]=\"sliderOpts\" #stepsSlider>\n        <ion-slide>\n            <h1>Which of these sounds most like your place?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\" [ngClass]=\"propData.rental_type !== null && propData.rental_type !== '' ? 'ion-item-hasvalue item-has-value' : ''\">\n                        <ion-label position=\"floating\">Choose your property type</ion-label>\n                        <ion-select interface=\"popover\" [(ngModel)]=\"propData.rental_type\">\n                            <ion-select-option *ngFor=\"let item of propTypeArr\" value=\"{{item.id}}\" [selected]=\"item.id == propData.rental_type ? 'true' : 'false'\">{{item.title}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-text color=\"medium\">\n                            <p>\n                                Houses are residential buildings that are often stand-alone structures.Some houses, duplexes, may share walls or outdoor areas with other houses\n                            </p>\n                        </ion-text>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n        <ion-slide>\n            <h1>How many guests can stay?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('rental_max_adult')\" [disabled]=\"propData.rental_max_adult == 1\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('rental_max_adult')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Adults</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"adults\" value=\"1\" [(ngModel)]=\"propData.rental_max_adult\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('rental_max_children')\" [disabled]=\"propData.rental_max_children == 0\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('rental_max_children')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Childrens</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"childrens\" value=\"0\" [(ngModel)]=\"propData.rental_max_children\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('st_custom_beds')\" [disabled]=\"propData.st_custom_beds == 1\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('st_custom_beds')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Beds for guests</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"adults\" value=\"1\" [(ngModel)]=\"propData.st_custom_beds\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('st_custom_private_bath')\" [disabled]=\"propData.st_custom_private_bath == 0\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('st_custom_private_bath')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Bathrooms</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"adults\" value=\"0\" [(ngModel)]=\"propData.st_custom_private_bath\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Where's your place located?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\" [ngClass]=\"propData.location_id !== null && propData.location_id !== '' ? 'ion-item-hasvalue item-has-value' : ''\">\n                        <ion-label position=\"floating\">Country / Region</ion-label>\n                        <ion-select interface=\"popover\" [(ngModel)]=\"propData.location_id\">\n                            <ion-select-option *ngFor=\"let item of allLocations\" value=\"{{item.id}}\" [selected]=\"item.id == propData.location_id ? 'true' : 'false'\">{{item.title}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Street</ion-label>\n                        <ion-input clearInput type=\"search\" name=\"street\" [(ngModel)]=\"propData.address\" (ionChange)=\"searchPlaces()\" debounce=\"500\" value=\"\"></ion-input>\n                    </ion-item>\n                    <ion-list *ngIf=\"hasPlaces && !placeDone\" class=\"places-result\">\n                        <ion-item *ngFor=\"let place of placesArray\" (click)=\"selectPlace(place.place_id, place.description)\">\n                            <ion-label>\n                                {{place.description}}\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep(true)\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Is the pin in the right place?</h1>\n            <p color=\"medium\" class=\"sub-heading\">Drag the map to place the pin</p>\n            <div id=\"map_canvas\" #map_canvas *ngIf=\"!hideMap\"></div>\n            <div class=\"v-marker\" #vMarker>\n                <img src=\"./assets/img/v_marker.svg\" [ngStyle]=\"{'transform': mapMoving ? 'scale(0.7)' : 'scale(1)'}\" />\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>What amenities will you offer?</h1>\n            <p color=\"medium\" class=\"sub-heading\">\n                You'll be able to add more amenities after you publish your listing.\n            </p>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item *ngFor=\"let option of propAmenities; let i = index\">\n                        <ion-label>{{option.title}}</ion-label>\n                        <ion-checkbox value=\"{{option.id}}\" (click)=\"setAmenity(option.id, $event)\" [(ngModel)]=\"option.isChecked\" mode=\"ios\"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Suitable for?</h1>\n            <!-- <p color=\"medium\" class=\"sub-heading\">You'll be able to add more amenities after you publish your listing.</p> -->\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item *ngFor=\"let option of propSuitable; let i = index\">\n                        <ion-label>{{option.title}}</ion-label>\n                        <ion-checkbox value=\"{{option.id}}\" (click)=\"setSuitableFor(option.id, $event)\" [(ngModel)]=\"option.isChecked\" mode=\"ios\"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Add photos to your listing</h1>\n            <p color=\"medium\" class=\"description\">\n                Help guests imagine staying in your place. More photos are better, but you can always start with tow and add more after you complete your listing\n            </p>\n            <ion-button expand=\"block\" color=\"primary\" class=\"white-text big-btn select-photo\" (click)=\"selectImage()\">\n                <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                Select Photo\n            </ion-button>\n            <div class=\"content-container\">\n                <ion-list>\n                    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n                        <ion-thumbnail slot=\"start\">\n                            <ion-img [src]=\"img.path\"></ion-img>\n                        </ion-thumbnail>\n                        <ion-label>\n                            {{ img.name }}\n                        </ion-label>\n                        <ion-button slot=\"end\" fill=\"clear\" [disabled]=\"img.isUploaded\" (click)=\"startUpload(img, pos)\">\n                            <ion-icon slot=\"icon-only\" [name]=\"img.isUploaded ? 'checkmark-circle-outline' : 'cloud-upload'\"></ion-icon>\n                        </ion-button>\n                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <h1>Describe your place to guests</h1>\n                    <ion-item class=\"item-input\">\n                        <!-- <ion-label position=\"floating\">Street</ion-label> -->\n                        <ion-textarea type=\"search\" [(ngModel)]=\"propData.st_content\" rows=\"4\" class=\"desc\" placeholder=\"Type your description\"></ion-textarea>\n                    </ion-item>\n                    <h1>Want to add more info? (optional)</h1>\n                    <ion-item class=\"item-input\">\n                        <!-- <ion-label position=\"floating\">Add other details that help set guest's expectations for their stay</ion-label> -->\n                        <ion-textarea type=\"search\" [(ngModel)]=\"propData.st_desc\" rows=\"4\" class=\"desc\" placeholder=\"Other details that help set guest's expectations for their stay\"></ion-textarea>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>Name Your Place</h1>\n                <p color=\"medium\" class=\"description\">\n                    Attract guests with a listing title that highlights what makes your place special.\n                </p>\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Your Place Name</ion-label>\n                        <ion-input clearInput type=\"text\" [(ngModel)]=\"propData.st_title\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>How long can guests stay?</h1>\n                <!-- <p color=\"medium\" class=\"description\">\n                      Attract guests with a listing title that highlights what makes your place special.\n                  </p> -->\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Minimum stay</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"propData.rentals_booking_min_day\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Booking Period (day)</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"propData.rentals_booking_period\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>Price Your Space</h1>\n                <!-- <p color=\"medium\" class=\"description\">\n                          Attract guests with a listing title that highlights what makes your place special.\n                      </p> -->\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Base Price (GBP £)</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"propData.price\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>You’re ready to publish!</h1>\n                <p color=\"medium\" class=\"description\">\n                    Awesome brand service website Ever Forward emblem marketing launch logo. Strategic collateral Ever Forward Head Honcho strategic accessible, publications partner RPS word nerd.\n                </p>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"finishEdit()\">\n                Save\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/property/edit/edit.page.scss":
/*!**********************************************!*\
  !*** ./src/app/property/edit/edit.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n  ion-slides ion-slide {\n    flex-direction: column;\n    justify-content: flex-start; }\n  ion-slides ion-slide .content-container {\n      overflow-y: scroll;\n      width: 100%;\n      padding-bottom: 70px; }\n  ion-slides ion-slide h1 {\n      text-align: left;\n      align-self: baseline;\n      font-weight: 800;\n      font-size: 34px;\n      margin-top: 0; }\n  ion-slides ion-slide p.sub-heading {\n      align-self: baseline;\n      text-align: left;\n      font-size: 16px;\n      margin: 0 0 15px; }\n  ion-slides ion-slide p.description {\n      align-self: baseline;\n      text-align: left; }\n  ion-slides ion-slide ion-button.select-photo {\n      margin: 30px 0 20px; }\n  ion-slides ion-slide ion-button.select-photo ion-icon {\n        margin-right: 0;\n        position: relative;\n        left: auto; }\n  ion-slides ion-slide ion-button {\n      margin: 16px 0; }\n  ion-slides ion-slide ion-button.next {\n        position: absolute;\n        width: 50%;\n        bottom: 0;\n        right: 0; }\n  ion-slides ion-slide ion-button.next ion-icon {\n          margin-right: 0;\n          position: relative;\n          left: auto; }\n  ion-slides ion-slide ion-button.prev {\n        margin-left: -5px;\n        margin-right: 10px; }\n  ion-slides ion-slide ion-list {\n      width: 100%; }\n  ion-slides ion-slide ion-list ion-item {\n        width: 100%;\n        --padding-top: 16px;\n        --padding-bottom: 16px; }\n  ion-slides ion-slide ion-list ion-item p {\n          font-weight: 300;\n          margin: 0; }\n  ion-slides ion-slide ion-list ion-item ion-checkbox {\n          --checkmark-color: #fff; }\n  ion-slides ion-slide ion-list ion-item ion-button.spinner-btn {\n          margin: 19px 5px 0;\n          height: 40px;\n          width: 40px;\n          border-radius: 50%;\n          --border-radius: 50%; }\n  ion-slides ion-slide ion-list ion-item ion-textarea.desc {\n          min-height: auto; }\n  ion-slides ion-slide ion-list ion-list.places-result {\n        max-height: 100px;\n        overflow-x: scroll;\n        margin-top: -20px;\n        background: #fff;\n        border: 1px solid #e6e6e6;\n        border-radius: 0 0 8px 8px; }\n  ion-slides ion-slide ion-list ion-list.places-result ion-item {\n          --padding-bottom: 0;\n          --padding-top: 0;\n          font-size: 14px;\n          --inner-padding-bottom: 0;\n          --inner-padding-top: 0;\n          --min-height: 30px;\n          --border-color: #efefef; }\n  ion-slides ion-slide ion-list ion-list.places-result ion-item ion-label {\n            margin: 0; }\n  ion-slides ion-slide .v-marker {\n      position: absolute;\n      transition: all 0.1s;\n      transform: scale(1);\n      align-self: center;\n      top: 50%; }\n  ion-slides ion-slide .v-marker.moving {\n        transform: scale(0.7); }\n  ion-slides ion-slide .v-marker img {\n        width: 53px;\n        height: 64px; }\n  ion-slides ion-slide ion-row {\n      width: 100%; }\n  #map_canvas {\n  width: 100%;\n  height: 100%;\n  margin: 0 -16px;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9wcm9wZXJ0eS9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBO0VBRGhCO0lBR1Esc0JBQXNCO0lBQ3RCLDJCQUEyQixFQUFBO0VBSm5DO01BTVksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxvQkFBb0IsRUFBQTtFQVJoQztNQVdZLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixhQUFhLEVBQUE7RUFmekI7TUFrQlksb0JBQW9CO01BQ3BCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFyQjVCO01Bd0JZLG9CQUFvQjtNQUNwQixnQkFBZ0IsRUFBQTtFQXpCNUI7TUE0QlksbUJBQW1CLEVBQUE7RUE1Qi9CO1FBOEJnQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVUsRUFBQTtFQWhDMUI7TUFvQ1ksY0FBYyxFQUFBO0VBcEMxQjtRQXNDZ0Isa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsUUFBUSxFQUFBO0VBekN4QjtVQTJDb0IsZUFBZTtVQUNmLGtCQUFrQjtVQUNsQixVQUFVLEVBQUE7RUE3QzlCO1FBaURnQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUFsRGxDO01Bc0RZLFdBQVcsRUFBQTtFQXREdkI7UUF3RGdCLFdBQVc7UUFDWCxtQkFBYztRQUNkLHNCQUFpQixFQUFBO0VBMURqQztVQTREb0IsZ0JBQWdCO1VBQ2hCLFNBQVMsRUFBQTtFQTdEN0I7VUFnRW9CLHVCQUFrQixFQUFBO0VBaEV0QztVQW1Fb0Isa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLG9CQUFnQixFQUFBO0VBdkVwQztVQTBFb0IsZ0JBQWdCLEVBQUE7RUExRXBDO1FBOEVnQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLDBCQUEwQixFQUFBO0VBbkYxQztVQXFGb0IsbUJBQWlCO1VBQ2pCLGdCQUFjO1VBQ2QsZUFBZTtVQUNmLHlCQUF1QjtVQUN2QixzQkFBb0I7VUFDcEIsa0JBQWE7VUFDYix1QkFBZSxFQUFBO0VBM0ZuQztZQTZGd0IsU0FBUyxFQUFBO0VBN0ZqQztNQW1HWSxrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsUUFBUSxFQUFBO0VBdkdwQjtRQXlHZ0IscUJBQXFCLEVBQUE7RUF6R3JDO1FBNEdnQixXQUFXO1FBQ1gsWUFBWSxFQUFBO0VBN0c1QjtNQWlIWSxXQUFXLEVBQUE7RUFNdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBwLnN1Yi1oZWFkaW5nIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbi5zZWxlY3QtcGhvdG8ge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMjBweDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICAgICYubmV4dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wcmV2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uLnNwaW5uZXItYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxOXB4IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tdGV4dGFyZWEuZGVzYyB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxpc3QucGxhY2VzLXJlc3VsdCB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudi1tYXJrZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAmLm1vdmluZyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1jb2wge31cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgLTE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/property/edit/edit.page.ts":
/*!********************************************!*\
  !*** ./src/app/property/edit/edit.page.ts ***!
  \********************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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













var STORAGE_KEY = 'my_images';
var STORAGE_PROP_KEY = 'prop_temp';
var EditPage = /** @class */ (function () {
    function EditPage(wpApiService, authService, platform, renderer, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath, activatedRoute, router) {
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.platform = platform;
        this.renderer = renderer;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.step = 1;
        this.sliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            preventInteractionOnTransition: true,
            allowSlidePrev: false,
            allowSlideNext: false,
            loop: false
        };
        this.hideMap = true;
        this.isLoading = true;
        this.propData = {
            st_post_id: null,
            st_title: '',
            st_content: '',
            st_desc: '',
            rental_type: '',
            location_id: null,
            address: '',
            rental_max_adult: 1,
            rental_max_children: 0,
            price: null,
            id_gallery: null,
            st_custom_private_bath: 0,
            st_custom_beds: 1,
            st_custom_bedrooms: 1,
            st_custom_size: '',
            amenities: [],
            suitablefor: [],
            rentals_booking_min_day: 1,
            rentals_booking_period: 1,
            lat: '',
            lng: ''
        };
        this.isSaved = false;
        this.propSuitableVal = new Array();
        this.propAmenitiesVal = new Array();
        this.mapCenter = {
            lat: 31.0310556,
            lng: 31.359881
        };
        this.streetInput = '';
        this.tempStreet = '';
        this.placesArray = [];
        this.hasPlaces = false;
        this.placeDone = false;
        this.mapMoving = false;
        this.images = [];
    }
    EditPage.prototype.getUserToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUserData2().then(function (data) {
                            var userData = data;
                            _this.userToken = userData['token'];
                            console.log(_this.userToken);
                            _this.showLoading();
                            _this.wpApiService
                                .editProperty(_this.authService.userToken, _this.propData.st_post_id)
                                .subscribe(function (pdata) {
                                console.log('Prop Data:', pdata);
                                _this.isSaved = true;
                                _this.propData = pdata[0];
                                _this.getPropTypes();
                                _this.getAmenities();
                                _this.getSuitableFor();
                                _this.getAllLocs();
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader'
                        })];
                    case 1:
                        loadingPage = _a.sent();
                        return [4 /*yield*/, loadingPage.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.isLoading = false;
                    _this.loadingController.dismiss();
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plt.ready().then(function () {
                            _this.propData.st_post_id = _this.activatedRoute.snapshot.paramMap.get('id');
                            _this.loadStoredImages();
                            // this.checkTemp();
                        });
                        return [4 /*yield*/, this.getUserToken()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.getPropTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getPropertyTypes().subscribe(function (prop_types) {
                    // console.log(prop_types);
                    _this.propTypeArr = prop_types;
                });
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.getSuitableFor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getSuitableFor().subscribe(function (prop_suitable) {
                    // console.log(prop_suitable);
                    _this.propSuitable = prop_suitable;
                    _this.setSuitChecks();
                });
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.getAllLocs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getAllLocations().subscribe(function (locations) {
                    // console.log(locations);
                    _this.allLocations = locations;
                });
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.getAmenities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wpApiService.getAmenities().subscribe(function (prop_amenities) {
                            // console.log(prop_amenities);
                            _this.propAmenities = prop_amenities;
                            _this.setAmenChecks();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // setPropType(value, e) {
    //   if (e.target.checked) {
    //     this.propTypeVal.push(value);
    // }
    // if (!e.target.checked) {
    //   const index = this.propTypeVal.indexOf(value, 0);
    //   if (index > -1) {
    //     this.propTypeVal.splice(index, 1);
    //   }
    // }
    // }
    EditPage.prototype.finishEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.remove(STORAGE_PROP_KEY);
                this.storage.remove(STORAGE_KEY);
                this.isSaved = false;
                this.checkTemp();
                // this.slider.slideTo(1);
                this.slider.lockSwipeToNext(false).then(function () {
                    _this.slider.slideNext().then(function () {
                        _this.slider.lockSwipeToNext(true);
                    });
                });
                this.presentSuccess('Your Changes has been Saved Successfully.');
                this.router.navigateByUrl('/tabs/host');
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.setAmenChecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.propAmenities.forEach(function (element) {
                            var index = _this.propData.amenities.indexOf(element.id, 0);
                            if (index > -1) {
                                element.isChecked = true;
                                _this.propAmenitiesVal.push(element.id);
                            }
                            else {
                                element.isChecked = false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.setSuitChecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.propSuitable.forEach(function (element) {
                            var index = _this.propData.suitablefor.indexOf(element.id, 0);
                            if (index > -1) {
                                element.isChecked = true;
                                _this.propSuitableVal.push(element.id);
                            }
                            else {
                                element.isChecked = false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        this.hideLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.setAmenity = function (obj, e) {
        if (!e.target.checked) {
            this.propAmenitiesVal.push(obj);
            this.propData.amenities = this.propAmenitiesVal;
        }
        if (e.target.checked) {
            var index = this.propAmenitiesVal.indexOf(obj, 0);
            if (index > -1) {
                this.propAmenitiesVal.splice(index, 1);
                this.propData.amenities = this.propAmenitiesVal;
            }
        }
    };
    EditPage.prototype.setSuitableFor = function (obj, e) {
        if (!e.target.checked) {
            this.propSuitableVal.push(obj);
            this.propData.suitablefor = this.propSuitableVal;
        }
        if (e.target.checked) {
            var index = this.propData.suitablefor.indexOf(obj, 0);
            if (index > -1) {
                this.propSuitableVal.splice(index, 1);
                this.propData.suitablefor = this.propSuitableVal;
            }
        }
    };
    // isCheckedAm(amID) {
    //   const tempArr = this.propData.amenities;
    //   const index = tempArr.indexOf(amID, 0);
    //   if (index > -1) {
    //     console.log(this.propData.amenities);
    //     return true;
    //   }
    // }
    EditPage.prototype.checkTemp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.nextStep = function (showMap) {
        if (showMap === void 0) { showMap = false; }
        return __awaiter(this, void 0, void 0, function () {
            var mapLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(showMap === true)) return [3 /*break*/, 5];
                        this.hideMap = false;
                        if (!(this.propData.lat !== null && this.propData.lat !== '')) return [3 /*break*/, 2];
                        mapLocation = {
                            lat: this.propData.lat,
                            lng: this.propData.lng
                        };
                        return [4 /*yield*/, this.loadMap(mapLocation)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadMap(this.mapCenter)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.hideMap = true;
                        _a.label = 6;
                    case 6:
                        if (this.isSaved && this.propData.st_post_id !== null) {
                            // this.propData.lat = this.mapLocation.lat;
                            // this.propData.lng = this.mapLocation.lng;
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, false, this.propData.st_post_id)
                                .subscribe(function (data) {
                                console.log('Property Updated');
                                console.log(_this.propData);
                                console.log(data);
                                // this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
                            });
                        }
                        // } else {
                        //   this.wpApiService.addProperty(this.userToken, this.propData, true, null).subscribe(data => {
                        //     console.log('Property Added');
                        //     console.log(this.propData);
                        //     this.isSaved = true;
                        //     this.propData.st_post_id = data['status'];
                        //     this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
                        //   });
                        // }
                        this.slider.lockSwipeToNext(false).then(function () {
                            _this.slider.slideNext().then(function () {
                                _this.slider.lockSwipeToNext(true);
                            });
                        });
                        this.step = this.step + 1;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.prevStep = function (showMap) {
        if (showMap === void 0) { showMap = false; }
        return __awaiter(this, void 0, void 0, function () {
            var mapLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.step = this.step - 1;
                        if (!(showMap === true)) return [3 /*break*/, 5];
                        this.hideMap = false;
                        if (!(this.propData.lat !== null && this.propData.lat !== '')) return [3 /*break*/, 2];
                        mapLocation = {
                            lat: this.propData.lat,
                            lng: this.propData.lng
                        };
                        return [4 /*yield*/, this.loadMap(mapLocation)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadMap(this.mapCenter)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.hideMap = true;
                        _a.label = 6;
                    case 6:
                        if (this.isSaved) {
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, false, this.propData.st_post_id)
                                .subscribe(function (data) {
                                console.log('Property Updated');
                                console.log(_this.propData);
                                console.log(data);
                                // this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
                            });
                        }
                        // } else {
                        //   this.wpApiService.addProperty(this.userToken, this.propData, true, null).subscribe(data => {
                        //     console.log('Property Added');
                        //     console.log(this.propData);
                        //     this.isSaved = true;
                        //     this.propData.st_post_id = data['status'];
                        //     this.storage.set(STORAGE_PROP_KEY, JSON.stringify(this.propData));
                        //   });
                        // }
                        this.slider.lockSwipeToPrev(false).then(function () {
                            _this.slider.slidePrev().then(function () {
                                _this.slider.lockSwipeToPrev(true);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.saveExit = function () {
        this.presentSuccess('Your property has been saved successfully.');
        this.router.navigateByUrl('/tabs/host');
    };
    EditPage.prototype.spinnerMin = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'rental_max_adult':
                        this.propData.rental_max_adult = this.propData.rental_max_adult - 1;
                        break;
                    case 'rental_max_children':
                        this.propData.rental_max_children =
                            this.propData.rental_max_children - 1;
                        break;
                    case 'st_custom_beds':
                        this.propData.st_custom_beds = this.propData.st_custom_beds - 1;
                        break;
                    case 'st_custom_private_bath':
                        this.propData.st_custom_private_bath =
                            this.propData.st_custom_private_bath - 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.spinnerPlus = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'rental_max_adult':
                        this.propData.rental_max_adult = this.propData.rental_max_adult + 1;
                        break;
                    case 'rental_max_children':
                        this.propData.rental_max_children =
                            this.propData.rental_max_children + 1;
                        break;
                    case 'st_custom_beds':
                        this.propData.st_custom_beds = this.propData.st_custom_beds + 1;
                        break;
                    case 'st_custom_private_bath':
                        this.propData.st_custom_private_bath =
                            this.propData.st_custom_private_bath + 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.loadMap = function (city_location) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (city_location['lat'] !== null && city_location['lat'] !== '') {
                    this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"].create('map_canvas', {
                        camera: {
                            target: {
                                lat: parseFloat(city_location['lat']),
                                lng: parseFloat(city_location['lng'])
                            },
                            zoom: 20,
                            tilt: 0
                        }
                    });
                    this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsEvent"].MAP_DRAG_START).subscribe(function (newCenter) {
                        _this.mapMoving = true;
                        _this.renderer.setStyle(_this.vMarker.nativeElement, 'transform', 'scale(1.2)');
                        _this.renderer.setStyle(_this.vMarker.nativeElement, 'opacity', '0.7');
                    });
                    this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsEvent"].CAMERA_MOVE_END).subscribe(function (newCenter) {
                        _this.mapLocation = newCenter[0].target;
                        _this.propData.lat = newCenter[0].target.lat;
                        _this.propData.lng = newCenter[0].target.lng;
                        _this.mapMoving = false;
                        _this.renderer.setStyle(_this.vMarker.nativeElement, 'transform', 'scale(1)');
                        _this.renderer.setStyle(_this.vMarker.nativeElement, 'opacity', '1');
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.searchPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.propData.address !== this.tempStreet) {
                    if (this.propData.address !== '' && this.authService.userToken !== null) {
                        this.wpApiService
                            .googlePlacesAutoComplete(this.propData.address, this.authService.userToken)
                            .then(function (resData) {
                            var searchData = JSON.parse(resData.data);
                            if (Object.keys(searchData['predictions'] > 0)) {
                                _this.hasPlaces = true;
                                _this.placeDone = false;
                                _this.placesArray = searchData['predictions'];
                            }
                            else {
                                _this.hasPlaces = false;
                                _this.placesArray = [];
                            }
                        });
                    }
                    else {
                        this.hasPlaces = false;
                        this.placesArray = [];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.selectPlace = function (place_id, place_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.propData.address = place_name;
                this.tempStreet = place_name;
                this.hasPlaces = false;
                this.placeDone = true;
                this.placesArray = [];
                this.wpApiService.googlePlacesByID(place_id).then(function (place) {
                    var placehData = JSON.parse(place.data);
                    var newPlace = placehData.result.geometry.location;
                    _this.propData.lat = newPlace.lat;
                    _this.propData.lng = newPlace.lng;
                    // this.relocateMap({lat: this.propData.lat, lng: this.propData.lng});
                });
                return [2 /*return*/];
            });
        });
    };
    // async relocateMap(new_lat_lng) {
    //   this.map.animateCamera({
    //     target: new_lat_lng,
    //     zoom: 18,
    //     tilt: 0
    //   });
    // }
    EditPage.prototype.setPhotos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.photos);
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({
                        name: img,
                        path: resPath,
                        filePath: filePath,
                        isUploaded: false
                    });
                }
            }
        });
    };
    EditPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    EditPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.presentSuccess = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            color: 'success',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    EditPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    EditPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file
            .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
            .then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    EditPage.prototype.updateStoredImages = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.get(STORAGE_KEY).then(function (images) {
                    var arr = JSON.parse(images);
                    if (!arr) {
                        var newImages = [name];
                        _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
                    }
                    else {
                        arr.push(name);
                        _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
                    }
                    var filePath = _this.file.dataDirectory + name;
                    var resPath = _this.pathForImage(filePath);
                    var newEntry = {
                        name: name,
                        path: resPath,
                        filePath: filePath,
                        isUploaded: false
                    };
                    _this.images = [newEntry].concat(_this.images);
                    _this.ref.detectChanges(); // trigger change detection cycle
                });
                return [2 /*return*/];
            });
        });
    };
    EditPage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name !== imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
    };
    EditPage.prototype.startUpload = function (imgEntry, position) {
        var _this = this;
        this.file
            .resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) {
                return _this.readFile(file, imgEntry, position);
            });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    EditPage.prototype.readFile = function (file, imgEntry, position) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('page', 'propertyimages');
            formData.append('token', _this.authService.userToken);
            formData.append('user_photo', imgBlob, file.name);
            formData.append('rental', _this.propData.st_post_id);
            _this.uploadImageData(formData, imgEntry, position);
        };
        reader.readAsArrayBuffer(file);
    };
    EditPage.prototype.uploadImageData = function (formData, imgEntry, position) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http
                            .post('http://propertystays.com/beta/webservice/jsones/webservice.php', formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res['success']) {
                                _this.presentToast('File upload complete.');
                                _this.images[position].isUploaded = true;
                                _this.storage.set(STORAGE_KEY, JSON.stringify(_this.images));
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], EditPage.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vMarker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditPage.prototype, "vMarker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map_canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditPage.prototype, "mapCanvas", void 0);
    EditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/property/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/property/edit/edit.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_wpapi_service__WEBPACK_IMPORTED_MODULE_8__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=property-edit-edit-module.js.map