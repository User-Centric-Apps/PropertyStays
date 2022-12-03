(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback.page */ "./src/app/feedback/feedback.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.page.html":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" text=\"\" color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Feedback\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icon/atoms/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"feedForm\" *ngIf=\"!hasSent; else sended\">\n        <p class=\"text-second-color text-14\">\n            We’re always working to improve the PropertyStays experience, so we’d love to hear what’s working and how we can do better.\n        </p>\n        <p class=\"text-second-color text-14\">\n            You can also get help by visiting the FAQ page, or talk to us using Live Chat feature.\n        </p>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Full Name</ion-label>\n            <ion-input clearInput type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input viewInput type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Feedback is about</ion-label>\n            <ion-select interface=\"popover\" formControlName=\"subject\">\n                <ion-select-option value=\"Issue\">Issue</ion-select-option>\n                <ion-select-option value=\"App Error\">App Error</ion-select-option>\n                <ion-select-option value=\"Suggestion\">Suggestion</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Your Message</ion-label>\n            <ion-textarea formControlName=\"message\"></ion-textarea>\n        </ion-item>\n    </form>\n    <ng-template #sended>\n        <p class=\"text-second-color text-16\" text-center>\n            Thank you for your feedback, we will contact you back soon.\n        </p>\n        <ion-button color=\"primary\" class=\"big-btn white-text\" size=\"large\" expand=\"block\" (click)=\"goBack()\">\n            Go Back\n        </ion-button>\n    </ng-template>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"block\" size=\"large\" class=\"big-btn white-text\" round strong (click)=\"sendFeedback()\" [disabled]=\"feedForm.invalid\">Send my feedback\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/feedback/feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-input ion-select {\n  --padding-end: 16px; }\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxtQkFBYyxFQUFBOztBQUl0QjtFQUVRLGlCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbnB1dCB7XG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgfVxufVxuXG4uaGVhZGVyLWlvcyB7XG4gICAgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/feedback/feedback.page.ts":
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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





var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(wpApiService, navCtrl, authService, formBuilder) {
        this.wpApiService = wpApiService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.hasSent = false;
        this.name = '';
        this.email = '';
        this.feedbacks = '';
    }
    FeedbackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogin();
        this.feedForm = this.formBuilder.group({
            name: [this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.authService.authenticationState.subscribe(function (state) {
            console.log(state);
            if (state) {
                console.log('User Data', _this.authService.userData);
                _this.feedForm.patchValue({
                    name: _this.authService.userData.user_display_name,
                    email: _this.authService.userData.email
                });
            }
        });
    };
    FeedbackPage.prototype.checkLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkToken().then(function () {
                            if (_this.authService.authenticationState.value) {
                                _this.authService.getUserData2().then(function (data) {
                                    var userData = data;
                                    console.log('any');
                                    console.log(userData);
                                    _this.name = userData['user_display_name'];
                                    _this.email = userData['email'];
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedbackPage.prototype.sendFeedback = function () {
        var _this = this;
        var formData = this.feedForm.value;
        console.log(formData);
        // this.wpApiService.sendFeedback(formData).subscribe(res => {
        //   console.log(res);
        // });
        this.wpApiService.sendFeedback(formData).subscribe(function (data) {
            var sdata = data;
            _this.feedbacks = sdata.data;
            if (_this.feedbacks.status === 1) {
                _this.hasSent = true;
            }
            console.log(data.data.status);
        });
    };
    FeedbackPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    FeedbackPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/feedback/feedback.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map