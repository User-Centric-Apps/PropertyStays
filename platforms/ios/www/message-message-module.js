(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_5__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_5__["MessagePage"]]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/message/message.page.html":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> Message with {{ oUserName }} </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button router-direction=\"back\" (click)=\"goBack()\">\n                <ion-icon src=\"/assets/icons/close.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding [scrollEvents]=\"true\" #content>\n    <ion-list class=\"messages\">\n        <div *ngFor=\"let msg of allMessages\" class=\"single\" [ngClass]=\"msg.me == 1 ? 'mine' : 'other'\">\n            <ion-row>\n                <ion-col size=\"2\">\n                    <ion-avatar>\n                        <img [src]=\"msg.sender_avatar\" />\n                    </ion-avatar>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"message\">\n                        <p>{{ msg.content }}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-row>\n        <ion-col size=\"12\">\n            <ion-item>\n                <ion-textarea #newMsgArea placeholder=\"Write something here\" rows=\"1\" [(ngModel)]=\"msgCotent\">\n                </ion-textarea>\n                <ion-button slot=\"end\" color=\"primary\" fill=\"clear\" shape=\"round\" size=\"large\" (click)=\"addNewMessage()\" [disabled]=\"msgCotent == ''\">\n                    <ion-icon name=\"send\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-col>\n        <!-- <ion-col size=\"1\">\n            <ion-button color=\"dark\" fill=\"clear\" shape=\"round\" size=\"large\" class=\"add\">\n                <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n        </ion-col> -->\n    </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.messages div.single {\n  margin-bottom: 10px; }\n  ion-list.messages div.single ion-row {\n    margin-bottom: 5px; }\n  ion-list.messages div.single ion-row ion-col {\n      padding: 0;\n      z-index: 2; }\n  ion-list.messages div.single ion-row ion-col ion-avatar {\n        width: 56px;\n        height: 56px; }\n  ion-list.messages div.single ion-row ion-col div.message {\n        padding: 5px;\n        display: inline-block;\n        margin-top: 10px; }\n  ion-list.messages div.single ion-row ion-col div.message p {\n          margin: 5px;\n          white-space: pre-line; }\n  ion-list.messages div.single ion-row ion-col:last-child {\n        z-index: 1; }\n  ion-list.messages div.single.mine ion-row ion-col div.message {\n    background: #f5f5f5;\n    border-radius: 0 10px 10px 0;\n    margin-left: -15px;\n    padding-left: 15px; }\n  ion-list.messages div.single.mine ion-row ion-col div.message p {\n      font-size: 14px; }\n  ion-list.messages div.single.other ion-row {\n    flex-direction: row-reverse;\n    text-align: right; }\n  ion-list.messages div.single.other ion-row ion-col div.message {\n      background: var(--ion-color-primary);\n      color: #fff;\n      font-size: 16px;\n      font-weight: 500;\n      margin-right: -15px;\n      padding-right: 20px;\n      border-radius: 10px 0 0 10px; }\n  ion-footer {\n  padding-bottom: 10px;\n  background: #fff; }\n  ion-footer:before {\n    display: none; }\n  ion-footer ion-item {\n    --padding-start: 10px;\n    --padding-top: 0;\n    --padding-bottom: 0;\n    margin-left: 10px;\n    --background: #f5f5f5;\n    --border-radius: 8px; }\n  ion-footer ion-item ion-textarea {\n      font-size: 17px;\n      line-height: 20px;\n      min-height: 30px; }\n  ion-footer ion-item ion-button {\n      margin: 0;\n      padding: 0;\n      --padding-start: 5px;\n      --padding-end: 5px;\n      height: 38px; }\n  ion-footer ion-item.item-has-value ion-button {\n      display: block; }\n  ion-footer ion-item.item-has-value ion-textarea {\n      --background: transparent;\n      --background-activated: transparent;\n      background: transparent;\n      --border-color: transparent;\n      border-radius: 0px;\n      --inner-border-width: 0;\n      border: 0px solid transparent;\n      --padding-start: 0px;\n      --padding-end: 0px; }\n  ion-footer ion-item.item-has-focus ion-textarea {\n      --background: transparent;\n      --background-activated: transparent;\n      background: transparent;\n      --border-color: transparent;\n      border-radius: 0px;\n      --inner-border-width: 0;\n      border: 0px solid transparent;\n      --padding-start: 0px;\n      --padding-end: 0px; }\n  ion-footer ion-button.add {\n    margin: 0;\n    padding: 0;\n    --padding-start: 0;\n    --padding-end: 0;\n    margin-left: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcm9wZXJ0aWVzYm9va3N5ZWQvRG9jdW1lbnRzL21vYmlsZS9jZW50cmljX0lPU19PTEQvc3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQW1CLEVBQUE7RUFGM0I7SUFJWSxrQkFBa0IsRUFBQTtFQUo5QjtNQU1nQixVQUFVO01BQ1YsVUFBVSxFQUFBO0VBUDFCO1FBU29CLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUFWaEM7UUFhb0IsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBQTtFQWZwQztVQWlCd0IsV0FBVztVQUNYLHFCQUFxQixFQUFBO0VBbEI3QztRQXNCb0IsVUFBVSxFQUFBO0VBdEI5QjtJQThCd0IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFqQzFDO01BbUM0QixlQUFlLEVBQUE7RUFuQzNDO0lBMkNnQiwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUE7RUE1Q2pDO01BK0N3QixvQ0FBb0M7TUFDcEMsV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQiw0QkFBNEIsRUFBQTtFQVNwRDtFQUNJLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQUZwQjtJQUlRLGFBQWEsRUFBQTtFQUpyQjtJQU9RLHFCQUFnQjtJQUNoQixnQkFBYztJQUNkLG1CQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQWE7SUFDYixvQkFBZ0IsRUFBQTtFQVp4QjtNQWNZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7RUFoQjVCO01BbUJZLFNBQVM7TUFDVCxVQUFVO01BQ1Ysb0JBQWdCO01BQ2hCLGtCQUFjO01BQ2QsWUFBWSxFQUFBO0VBdkJ4QjtNQTJCZ0IsY0FBYyxFQUFBO0VBM0I5QjtNQThCZ0IseUJBQWE7TUFDYixtQ0FBdUI7TUFDdkIsdUJBQXVCO01BQ3ZCLDJCQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLHVCQUFxQjtNQUNyQiw2QkFBNkI7TUFDN0Isb0JBQWdCO01BQ2hCLGtCQUFjLEVBQUE7RUF0QzlCO01BMkNnQix5QkFBYTtNQUNiLG1DQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsMkJBQWU7TUFDZixrQkFBa0I7TUFDbEIsdUJBQXFCO01BQ3JCLDZCQUE2QjtNQUM3QixvQkFBZ0I7TUFDaEIsa0JBQWMsRUFBQTtFQW5EOUI7SUF3RFEsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBZ0I7SUFDaEIsZ0JBQWM7SUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5tZXNzYWdlcyB7XG4gICAgZGl2LnNpbmdsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYubWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWluZSB7XG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2Lm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5vdGhlciB7XG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgfVxuICAgICAgICAmLml0ZW0taGFzLXZhbHVlIHtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xuICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b24uYWRkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.page.ts":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
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





var MessagePage = /** @class */ (function () {
    function MessagePage(router, activatedRoute, navCtrl, authService, wpApiService, loadingCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.passedId = null;
        this.msgCotent = '';
        this.isLoading = true;
    }
    MessagePage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessagePage.prototype.hideLoading = function () {
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
    MessagePage.prototype.getMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Get User Token
                        this.showLoading();
                        return [4 /*yield*/, this.authService.getUserData2().then(function (data) {
                                var userData = data;
                                console.log(userData);
                                console.log(_this.authService.userFullData);
                                _this.userToken = userData['token'];
                                _this.userAvatar = _this.wpApiService.userProfile.avatar;
                                _this.userData = userData;
                                _this.passedId = _this.activatedRoute.snapshot.paramMap.get('msg_id');
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wpApiService
                                .getMessage(this.authService.userToken, this.passedId)
                                .subscribe(function (messages) {
                                _this.hideLoading();
                                _this.allMessages = messages['messages'];
                                _this.oUserName = messages['contact'];
                                console.log(messages);
                                setTimeout(function () {
                                    _this.content.scrollToBottom();
                                }, 500);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // msgRefreash() {
    //   this.wpApiService.getMessage(this.userToken, this.passedId).subscribe(messages => {
    //     this.allMessages = messages;
    //     this.content.scrollToBottom();
    //   });
    // }
    MessagePage.prototype.sendMessage = function (msg_txt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wpApiService
                            .sendMessage(this.authService.userToken, this.passedId, msg_txt)
                            .subscribe(function (data) {
                            console.log(data);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagePage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    MessagePage.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagePage.prototype.addNewMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newMsg;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.msgCotent !== '') {
                    newMsg = {
                        content: this.msgCotent,
                        sender_id: this.userData['user_id'],
                        sender_name: this.userData['user_display_name'],
                        sender_avatar: this.userAvatar,
                        date: Date.now(),
                        avatar: '',
                        me: 1
                    };
                    console.log(newMsg);
                    this.sendMessage(this.msgCotent);
                    this.allMessages.push(newMsg);
                    this.msgCotent = '';
                    // this.messageInput.setFocus();
                    setTimeout(function () {
                        _this.content.scrollToBottom();
                    }, 100);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"])
    ], MessagePage.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newMsgArea'),
        __metadata("design:type", Object)
    ], MessagePage.prototype, "messageInput", void 0);
    MessagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.page.html */ "./src/app/message/message.page.html"),
            styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/message/message.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_4__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module.js.map