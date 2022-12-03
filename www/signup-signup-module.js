(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Register</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-back-button text=\"\" icon=\"/assets/icons/close.svg\" color=\"dark\" class=\"close-icon\">\n            </ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Full Name</ion-label>\n            <ion-input clearInput type=\"text\" name=\"name\" ngModel required></ion-input>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Email Address</ion-label>\n            <ion-input clearInput type=\"email\" name=\"email\" ngModel required></ion-input>\n        </ion-item>\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input viewInput [type]=\"showPass ? 'text' : 'password'\" name=\"password\" ngModel required minlength=\"4\">\n            </ion-input>\n            <ion-icon [name]=\"showPass ? 'eye' : 'eye-off'\" slot=\"end\" class=\"show-pass\" [ngClass]=\"showPass ? 'active' : ''\" (click)=\"togglePass()\"></ion-icon>\n        </ion-item>\n        <ion-grid class=\"ion-no-padding terms-grid mr-top\">\n            <ion-row class=\"input-row\">\n                <ion-col size=\"1\" class=\"ion-no-padding\">\n                    <ion-item class=\"item-input has-check\">\n                        <ion-checkbox slot=\"start\" name=\"acceptTerms\" [(ngModel)]=\"acceptTerms\" required></ion-checkbox>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"11\" class=\"ion-no-padding\">\n                    <p class=\"label\">\n                        I accept Property Stays's\n                        <ion-text color=\"primary\" routerLink=\"/terms\" routerDirection=\"forward\">\n                            Terms & Conditions\n                        </ion-text>\n                    </p>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"input-row\">\n                <ion-col size=\"1\" class=\"ion-no-padding\">\n                    <ion-item class=\"item-input has-check\">\n                        <ion-checkbox slot=\"start\" name=\"acceptPrivacy\" [(ngModel)]=\"acceptPrivacy\" required></ion-checkbox>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"11\" class=\"ion-no-padding\">\n                    <p class=\"label\">\n                        I accept Property Stays's\n                        <ion-text color=\"primary\" routerLink=\"/privacy\" routerDirection=\"forward\">\n                            Privacy Policy\n                        </ion-text>\n                    </p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!-- <ion-item class=\"item-input has-check\">\n            <ion-label class=\"ion-text-wrap fill-width\">\n                Accept\n                <ion-text color=\"primary\" routerLink=\"/terms\" routerDirection=\"forward\">\n                    Terms & Conditions\n                </ion-text>\n                &\n                <ion-text color=\"primary\"> Privacy Policy </ion-text>\n            </ion-label>\n            <ion-checkbox slot=\"start\" name=\"acceptTerms\" [(ngModel)]=\"acceptTerms\" required></ion-checkbox>\n        </ion-item> -->\n\n        <ion-button expand=\"block\" size=\"large\" class=\"big-btn\" [disabled]=\"form.invalid || !acceptTerms || !acceptPrivacy\" type=\"submit\">\n            <ion-icon src=\"/assets/icons/checkmark.svg\" slot=\"start\"></ion-icon>\n            Register\n        </ion-button>\n    </form>\n    <div class=\"divider\">\n        <span>OR</span>\n    </div>\n    <p text-center>Link your account</p>\n    <ion-button expand=\"block\" size=\"large\" class=\"big-btn facebook\" (click)=\"facebookLogin()\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        Facebook\n    </ion-button>\n    <!-- <ion-button expand=\"block\" size=\"large\" class=\"big-btn google\" routerDirection=\"forward\">\n        <ion-icon name=\"logo-google\"></ion-icon>\n        Google\n    </ion-button> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-btn {\n  margin: 25px 0px; }\n  .big-btn.facebook {\n    --background: #3a559f;\n    --background-activated: #2c4484; }\n  .big-btn.google {\n    --background: #a1bccf;\n    --background-activated: #7f9eb3; }\n  .big-btn ion-icon {\n    margin-right: 20px; }\n  ion-item ion-icon.show-pass {\n  position: absolute;\n  z-index: 99;\n  right: 10px;\n  margin-top: 10px;\n  opacity: 0;\n  display: none;\n  top: 50%;\n  transform: translateY(-50%); }\n  ion-item.item-has-value ion-icon.show-pass {\n  opacity: 0.5;\n  display: block; }\n  ion-item.item-has-value ion-icon.show-pass.active {\n    opacity: 0.9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxtb2JpbGVcXGNlbnRyaWNGaW5hbC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxxQkFBYTtJQUNiLCtCQUF1QixFQUFBO0VBSi9CO0lBT1EscUJBQWE7SUFDYiwrQkFBdUIsRUFBQTtFQVIvQjtJQVdRLGtCQUFrQixFQUFBO0VBSTFCO0VBRVEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsUUFBUTtFQUNSLDJCQUEyQixFQUFBO0VBVG5DO0VBYVksWUFBWTtFQUNaLGNBQWMsRUFBQTtFQWQxQjtJQWdCZ0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWJ0biB7XG4gICAgbWFyZ2luOiAyNXB4IDBweDtcbiAgICAmLmZhY2Vib29rIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjM2E1NTlmO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMmM0NDg0O1xuICAgIH1cbiAgICAmLmdvb2dsZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ExYmNjZjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzdmOWViMztcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5pb24taXRlbSB7XG4gICAgaW9uLWljb24uc2hvdy1wYXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgICYuaXRlbS1oYXMtdmFsdWUge1xuICAgICAgICBpb24taWNvbi5zaG93LXBhc3Mge1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
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






var SignupPage = /** @class */ (function () {
    function SignupPage(router, wpApiService, authService, toastController, fb) {
        this.router = router;
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.toastController = toastController;
        this.fb = fb;
        this.acceptTerms = false;
        this.acceptPrivacy = false;
        this.showPass = false;
    }
    SignupPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    SignupPage.prototype.togglePass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.showPass) {
                    this.showPass = false;
                }
                else {
                    this.showPass = true;
                }
                return [2 /*return*/];
            });
        });
    };
    SignupPage.prototype.presentToast = function (message, color, position, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            color: color,
                            position: position,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SignupPage.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fb
                            .login(['public_profile', 'email'])
                            .then(function (res) {
                            var userID = res.authResponse.userID;
                            _this.fb
                                .api(userID + '?fields=id,email,first_name,last_name,address,name', [
                                'email'
                            ])
                                .then(function (fbUser) {
                                console.log(fbUser);
                                var formData = {
                                    name: fbUser.name,
                                    email: fbUser.email,
                                    password: 'FBuserPS_' + fbUser.id
                                };
                                console.log(formData);
                                _this.wpApiService.register(formData).subscribe(function (data) {
                                    console.log(data);
                                    if (data['status'] === 0) {
                                        _this.presentToast(data['msg'] + ', Please try again', 'danger', 'top', 3000);
                                    }
                                    else {
                                        _this.wpApiService
                                            .postAuth(formData.email, formData.password)
                                            .subscribe(function (udata) {
                                            _this.authService.logIn(udata);
                                            _this.presentToast('Welcome, ' + udata.user_display_name, 'success', 'bottom', 2000);
                                            setTimeout(function () {
                                                _this.router.navigateByUrl('/');
                                            }, 2000);
                                        }, function (error) {
                                            console.log('Username Or Password is not correct, Please Try Again');
                                            _this.presentToast('Failed to login, Please try again.', 'danger', 'bottom', 3000);
                                        });
                                    }
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                                _this.presentToast('Error logging into Facebook' + error, 'danger', 'bottom', 3000);
                            });
                        })
                            .catch(function (e) {
                            console.log('Error logging into Facebook', e);
                            _this.presentToast('Error logging into Facebook' + e, 'danger', 'bottom', 3000);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.register = function (form) {
        var _this = this;
        this.wpApiService.register(form.value).subscribe(function (data) {
            console.log(data);
            if (data['status'] === 0) {
                _this.presentToast(data['msg'] + ', Please try again', 'danger', 'top', 3000);
            }
            else {
                _this.presentToast('Your Account have been created successfully, we will take you to login.', 'success', 'top', 3000);
                setTimeout(function () {
                    _this.router.navigateByUrl('/login');
                }, 3200);
            }
        });
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map