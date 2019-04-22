webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = (function () {
    function SessionService() {
        this.authenticated = false;
    }
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ui__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var modes = {
    splash: 'splash',
    password: 'password',
    bioID: 'bioID'
};
var LoginPage = (function () {
    function LoginPage(params, platform, help, session, ui) {
        var _this = this;
        this.params = params;
        this.platform = platform;
        this.help = help;
        this.session = session;
        this.ui = ui;
        this.verified = true;
        this.firstLogin = false;
        this.user = {
            username: {
                value: '',
                valid: true,
                error: null
            },
            password: {
                value: '',
                valid: true,
                error: null
            },
            usebioid: null,
            usepush: null,
            lastuser: null
        };
        this.switchPassword = __WEBPACK_IMPORTED_MODULE_6_underscore__["debounce"](function () {
            _this.switchMode(modes.password);
        }, 2000, true);
        this.appver = __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].release;
        this.mode = modes.password;
    }
    LoginPage.prototype.switchMode = function (val) {
        //console.warn('switchMode: ' + val);
        if (this.mode !== val) {
            this.mode = val;
            this.content.resize();
        }
    };
    LoginPage.prototype.submit = function (e) {
        e.preventDefault();
        this.session.authenticated = true;
        this.ui.flip('home');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.user.username.value = 'test@test.com';
        this.user.password.value = 'testing123!';
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //console.log('LoginPage ionViewDidEnter');
        this.switchMode(modes.password);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], LoginPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lblUsername'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LoginPage.prototype, "lblUsername", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lblPassword'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LoginPage.prototype, "lblPassword", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-title>Ionic Debug</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="{ \'solid-white\': mode == \'bioID\' }" [ngSwitch]="mode">\n\n    <div ion-fixed *ngSwitchDefault class="login-splash animate-switch">\n\n        <div class="version-info">release {{ appver }}</div>\n\n    </div>\n\n    <div *ngSwitchCase="\'password\'" class="password animate-switch">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-lg-4 col-md-8 col-sm-12 push-lg-4 push-md-2>\n\n                    <ion-card>\n\n                        <form #f="ngForm" name="login" class="login" action="javascript:void(0)" (ngSubmit)="submit($event)" novalidate autocomplete="off">\n\n                            <h1>Sign In</h1>\n\n                            <p *ngIf="firstLogin">To sign in below, please use the same email address and password that you used to register.</p>\n\n                            <p *ngIf="returnpath">You must login first to do that. After logging in you will be redirected back to where you were.</p>\n\n                            <ion-list no-lines>\n\n                                <ion-item no-padding>\n\n                                    <ion-label stacked #lblUsername>{{ \'EMAIL\' | translate }}</ion-label>\n\n                                    <ion-input type="email" name="username" [(ngModel)]="user.username.value" [pattern]="ui.regex.email" autocapitalize="off" autocorrect="off" spellcheck="false" tabindex="1"></ion-input>\n\n                                </ion-item>\n\n                                <ion-item [ngStyle]="{ \'visibility\': user.username.valid ? \'hidden\' : \'visible\' }" no-padding class="validation-message">{{user.username.error}}</ion-item>\n\n                                <ion-item no-padding>\n\n                                    <ion-label stacked #lblPassword>{{ \'PASSWORD\' | translate }}</ion-label>\n\n                                    <ion-input type="password" name="password" [(ngModel)]="user.password.value" [pattern]="ui.regex.password" tabindex="1"></ion-input>\n\n                                </ion-item>\n\n                                <ion-item *ngIf="{ \'visibility\': user.password.valid ? \'hidden\' : \'visible\' }" no-padding class="validation-message">{{user.password.error}}</ion-item>\n\n                                <ion-buttons>\n\n                                    <button id="btnSignIn" #btnSubmit type="submit" ion-button full color="secondary" tabindex="3">Sign In</button>\n\n                                </ion-buttons>\n\n                            </ion-list>\n\n                        </form>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <div *ngIf="ui.mobile" class="version-info">release {{ appver }}</div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ui__["a" /* UIService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIService; });
/* unused harmony export ModalFadeIn */
/* unused harmony export ModalFadeOut */
/* unused harmony export PageFlip */
/* unused harmony export BrowserSupport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_availability__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_globalization__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var self;
var prefix = {
    google: 'market://details?id=',
    itunes: 'itms-apps://itunes.apple.com/app/id'
};
var UIService = (function () {
    function UIService(app, availability, config, device, deeplinker, events, globalization, platform, loadingCtrl, actionCtrl, alertCtrl, modalCtrl, popoverCtrl, toastCtrl, transitions, translate) {
        this.app = app;
        this.availability = availability;
        this.config = config;
        this.device = device;
        this.deeplinker = deeplinker;
        this.events = events;
        this.globalization = globalization;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.actionCtrl = actionCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.transitions = transitions;
        this.translate = translate;
        this.viewDidEnter = null;
        this.os = {
            name: null,
            version: null,
            vendor: null
        };
        this.browser = {
            name: null,
            version: {
                full: null,
                major: null,
                minor: null
            },
            supported: null
        };
        this.deviceobsolete = false;
        this.ie11incompatible = false;
        this.pagestate = {
            history: [],
            current: null,
            canpop: false
        };
        this.content = null;
        //stash component instances to dismiss on page navigation
        this.active = {
            action: null,
            alert: null,
            loading: null,
            modal: null,
            toast: null
        };
        //public spinner: Loading;
        this.loading = {
            visible: false,
            element: null,
            content: null,
            show: function (options) {
                if (options && options.blur) {
                    //self.app.setElementClass('blur', true);
                    var nav = self.app.getActiveNavs()[0];
                    if (nav)
                        nav.setElementClass('blur', true);
                }
                if (self.loading.visible) {
                    if (!self.loading.element) {
                        var loading = document.getElementsByTagName('ion-loading');
                        __WEBPACK_IMPORTED_MODULE_8_underscore__["each"](loading, function (el) {
                            //console.log(el.attributes);
                            if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                                //console.log('loading element:');
                                //console.log(el);
                                self.loading.element = el;
                                var content = el.getElementsByClassName('loading-content');
                                if (content.length) {
                                    self.loading.content = content[0];
                                }
                                //console.log('loading content:');
                                //console.log(self.loading.content);
                            }
                        });
                        //self.active.loading.setSpinner('hide');
                        //console.log(self.active.loading);
                    }
                    if (options && options.text && self.loading.content) {
                        requestAnimationFrame(function () {
                            self.loading.content.innerHTML = options.text;
                        });
                    }
                    if (options && options.css) {
                        //console.log('set css: ' + options.css);
                        self.active.loading.setCssClass(options.css); //this fails to actually update the UI
                        self.loading.element.className += ' ' + options.css;
                    }
                    return Promise.resolve();
                }
                else {
                    self.active.loading = self.loadingCtrl.create({
                        spinner: 'custom',
                        content: options && options.text ? options.text : null,
                        cssClass: options && options.css ? 'loading-container ' + options.css : 'loading-container'
                        //dismissOnPageChange: true //causes Uncaught (in promise): removeView was not found
                    });
                    self.loading.visible = true;
                    return self.active.loading.present();
                }
            },
            hide: function () {
                var nav = self.app.getActiveNavs()[0];
                if (nav)
                    nav.setElementClass('blur', false);
                self.loading.visible = false;
                self.loading.content = null;
                self.loading.element = null;
                //if the Loading was already dismissed, return a promise
                return self.active.loading ? self.active.loading.dismiss() : Promise.resolve();
            }
        };
        this.fade = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function () {
            if (!!window['cordova']) {
                var options = {
                    duration: 400,
                    slowdownfactor: 1,
                    //slidePixels: 20,
                    iosdelay: 0,
                    androiddelay: 0,
                    winphonedelay: 250,
                    fixedPixelsTop: 0,
                    fixedPixelsBottom: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].tabs ? 50 : 0
                };
                self.transitions.fade(options);
            }
            else {
            }
        }, 400, true);
        this.flip = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (page, params, options) {
            params = !!params ? params : {};
            options = !!options ? options : {};
            var nav = self.app.getRootNavs()[0], anim = !window['cordova'], opts = self.platform.is('core') ? { animate: anim } : { animate: anim, animation: 'page-flip' }, views = nav.getViews();
            //console.debug('ui.flip');
            //console.log(opts);
            if (!!window['cordova']) {
                self.options = __WEBPACK_IMPORTED_MODULE_8_underscore__["extend"]({
                    direction: 'left',
                    duration: 400,
                    slowdownfactor: 1,
                    //slidePixels: 20,
                    iosdelay: 0,
                    androiddelay: 0,
                    winphonedelay: 250,
                    fixedPixelsTop: 0,
                    fixedPixelsBottom: 0
                }, options);
                self.animation = 'flip';
            }
            if (page) {
                if (options.direction === 'right') {
                    self.pagestate.canpop = true;
                    opts.direction = 'back';
                    //console.info('popTo page: ' + page)
                    //console.log(nav);
                    //return nav.popToRoot({ animate: false }).then(() => {
                    //    let root = self.getActivePageName();
                    //    //console.debug('root page name: ' + name);
                    //    if (root !== page) {
                    //        //console.warn('root does not match destination page. setting root from ' + root + ' to '+ page);
                    //        return nav.setRoot(page, params, { animate: false });
                    //    }
                    //});
                    //let count = views.length;
                    //nav.push(page, params, opts);
                    //return nav.remove(0, count, { animate: false });
                    return nav.setRoot(page, params, opts);
                }
                else {
                    return nav.push(page, params, opts);
                }
            }
            else {
                self.pagestate.canpop = true;
                return nav[0].popToRoot(opts);
            }
        }, 400, true);
        /**
         * UI navigation with NativePageTransition or platform fallback
         * param {string} page - DeepLinker Config "name" (https://ionicframework.com/docs/2.0.1/api/navigation/DeepLinker/)
         * param {any} params - NavParams (https://ionicframework.com/docs/api/navigation/NavParams/)
         * param {any} options - NavOptions (https://ionicframework.com/docs/api/navigation/NavController/#navoptions)
         * return {Promise} - Promise which is resolved when the transition has completed
         * @param {string} page - DeepLinker Config "name" (https://ionicframework.com/docs/2.0.1/api/navigation/DeepLinker/)
         * @param {string} params - NavParams (https://ionicframework.com/docs/api/navigation/NavParams/)
         * @param {string} options - NavOptions (https://ionicframework.com/docs/api/navigation/NavController/#navoptions)
         * @return {Promise} - Promise which is resolved when the transition has completed
         */
        this.slide = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (page, params, options) {
            var anim = self.platform.is('core') || self.platform.is('mobileweb') ? true : false;
            if (options && options.animate === false) {
                self.animation = 'none';
                anim = false;
            }
            else if (!!window['cordova']) {
                if (options && options.direction) {
                    switch (options.direction) {
                        case 'forward':
                            options.direction = 'left';
                            break;
                        case 'back':
                            options.direction = 'right';
                            break;
                    }
                }
                self.options = __WEBPACK_IMPORTED_MODULE_8_underscore__["extend"]({
                    direction: 'left',
                    duration: 400,
                    slowdownfactor: 1,
                    //slidePixels: 20,
                    iosdelay: 0,
                    androiddelay: 0,
                    winphonedelay: 250,
                    fixedPixelsTop: 0,
                    fixedPixelsBottom: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].tabs ? 50 : 0
                }, options);
                self.animation = 'slide';
            }
            var opts = options || {};
            opts.animate = anim;
            self.setPageState(page, params, options);
            return self.app.getRootNavs()[0].push(page, params, opts);
        }, 400, true);
        this.back = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (page, params, options) {
            if (!!window['cordova']) {
                self.options = __WEBPACK_IMPORTED_MODULE_8_underscore__["extend"]({
                    direction: 'right',
                    duration: 400,
                    slowdownfactor: 1,
                    //slidePixels: 20,
                    iosdelay: 0,
                    androiddelay: 0,
                    winphonedelay: 250,
                    fixedPixelsTop: 0,
                    fixedPixelsBottom: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].tabs ? 50 : 0
                }, options);
                self.animation = params && params.transition ? params.transition : 'slide';
            }
            var anim = self.isSimulator() || self.isDesktop() || self.platform.is('mobileweb') ? true : false, nav = self.app.getRootNavs()[0], views = nav.getViews();
            self.pagestate.canpop = true;
            //console.debug('ui.back: ' + page);
            //console.log(views);
            if (!page && views.length > 1) {
                //console.debug('nav.pop');
                return nav.pop({ animate: anim });
            }
            else if (page && views.length > 1 && __WEBPACK_IMPORTED_MODULE_8_underscore__["findWhere"](views, { id: page })) {
                //console.debug('nav.popTo ' + page);
                //return nav.popTo(page, { animate: anim });
                //console.debug('nav.remove until ' + page);
                //let index = _.findIndex(views, { id: page }),
                //    start = views.length - 1,
                //    count = start - index;
                //console.debug('index: ' + index);
                //console.debug('start: ' + start);
                //console.debug('count: ' + count);
                ////return nav.remove(start, count);
                //return new Promise((resolve, reject) => {
                //    nav.remove(start, count).then((res) => {
                //        console.debug('nav.remove success:');
                //        console.log(res);
                //        console.log(nav.getViews());
                //        resolve();
                //    }).catch((err) => {
                //        console.error('nav.remove failure:');
                //        console.log(err);
                //        reject();
                //    });
                //});
                //console.debug('nav.setPages:');
                var index = __WEBPACK_IMPORTED_MODULE_8_underscore__["findIndex"](views, { id: page }), count = index + 1, stack = __WEBPACK_IMPORTED_MODULE_8_underscore__["first"](views, count);
                //console.log(stack);
                var n = __WEBPACK_IMPORTED_MODULE_8_underscore__["findIndex"](self.pagestate.history, { name: page });
                if (n > -1) {
                    self.pagestate.history.splice(n + 1);
                    self.pagestate.current = self.pagestate.history.pop();
                }
                //if (self.desktop || self.mobileweb) {
                //    console.log(history.length);
                //}
                return nav.setPages(stack, { animate: anim });
            }
            else if (page) {
                var n = __WEBPACK_IMPORTED_MODULE_8_underscore__["findIndex"](self.pagestate.history, { name: page });
                if (n > -1) {
                    self.pagestate.history.splice(n + 1);
                    self.pagestate.current = self.pagestate.history.pop();
                }
                switch (page) {
                    case 'root':
                        //console.debug('popToRoot');
                        return nav.popToRoot({ animate: anim });
                    case 'active':
                        //console.debug('restore hash (active)');
                        //console.log(self.deeplinker);
                        var segments = self.deeplinker.getSegmentsFromNav(nav);
                        //console.log(segments);
                        window.location.hash = '/' + segments[0].id;
                        return Promise.resolve(true);
                    default:
                        //broken in ionic-app-scripts > 1.3.1 or --production builds of 1.3.1
                        //console.debug('nav.getViews()');
                        //console.log(views);
                        //_.each(views, v => {
                        //    console.log(v);
                        //    console.log(v.name);
                        //});
                        if (views.length > 1) {
                            var view = __WEBPACK_IMPORTED_MODULE_8_underscore__["findWhere"](views, { id: page });
                            if (view) {
                                //console.debug('nav.popTo: ' + page);
                                return nav.popTo(view, { animate: anim });
                            }
                            else if (params && params.index) {
                                //view = nav.getByIndex(params.index);
                                //console.debug('nav.popTo ' + params.index);
                                //return nav.popTo(view, { animate: anim });
                                return nav.popTo(params.index, { animate: anim });
                            }
                            else {
                                //console.debug('nav.setRoot: ' + page);
                                //return nav.pop({ animate: anim });
                                //console.warn(page + ' not found');
                                return nav.setRoot(page, params || {}, self.options);
                            }
                        }
                        else {
                            //console.debug('nav.setRoot: ' + page);
                            //console.log(self.options);
                            if (page === 'login') {
                                self.animation = 'flip';
                                if (self.options) {
                                    self.options.direction = 'right';
                                }
                            }
                            return nav.setRoot(page, params || {}, self.options);
                        }
                }
            }
            else {
                //console.log('self.pagestate.history');
                //console.log(self.pagestate.history);
                if (self.pagestate.history.length) {
                    self.pagestate.current = self.pagestate.history.pop();
                }
                //console.log('ui.back:');
                //console.log(self.pagestate.current);
                //console.log(views);
                //console.log('views:');
                //console.log(views);
                if (views.length > 1) {
                    //console.debug('nav.pop');
                    return nav.pop({ animate: anim });
                }
                else {
                    //console.debug('nav.popToRoot');
                    return nav.popToRoot({ animate: anim });
                }
            }
        }, 400, true);
        //navigate back to root with animation
        this.root = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (page, params, options) {
            if (!!window['cordova']) {
                self.options = __WEBPACK_IMPORTED_MODULE_8_underscore__["extend"]({
                    direction: 'right',
                    duration: 400,
                    slowdownfactor: 1,
                    //slidePixels: 20,
                    iosdelay: 0,
                    androiddelay: 0,
                    winphonedelay: 250,
                    fixedPixelsTop: 0,
                    fixedPixelsBottom: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].tabs ? 50 : 0
                }, options);
                self.animation = params && params.transition ? params.transition : 'slide';
            }
            var anim = self.isSimulator() || self.isDesktop() || self.platform.is('mobileweb') ? true : false, nav = self.app.getRootNavs()[0], view = nav.getActive(), p = params || {};
            //return nav.push(page, p, { animate: false }).then(() => {
            //    nav.removeView(view, { animate: false });
            //});
            return nav.setRoot(page, p, { animate: anim });
        }, 400, true);
        //redirect
        this.swap = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (page, params, options) {
            var nav = self.app.getRootNavs()[0], view = nav.getActive(), p = params || {};
            //return nav.push(page, p, { animate: false }).then(() => {
            //    nav.removeView(view, { animate: false });
            //});
            //return nav.push(page, p, { animate: false });
            return nav.setRoot(page, p, { animate: false });
        }, 400, true);
        //#endregion page navigation
        this.openWebsite = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (url) {
            //console.debug('openWebsite: ' + url);
            window.open(url, '_system');
        }, 400, true);
        this.openAppStore = __WEBPACK_IMPORTED_MODULE_8_underscore__["debounce"](function (id) {
            //console.debug('openAppStore:');
            //console.log(id);
            var url = self.getAppStoreURL(id);
            window.open(url, '_system');
        }, 400, true);
        //#region validation
        this.regex = {
            email: /[^@\s]+@[^@\s]+\.[^@\s]+/,
            password: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].regex.password || /^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])(?=.*?[#?!@$%^&*-])[0-9a-zA-Z\S]{8,}/
        };
        //#region promise text handlers
        this.console = {
            log: function (obj) {
                console.log(obj);
            },
            info: function (obj) {
                if (typeof obj === 'string') {
                    console.info(obj);
                }
                else if (typeof obj === 'object' && obj.message) {
                    console.info(obj.message);
                }
                else if (typeof obj === 'object' && obj.statusText) {
                    console.info(obj.statusText);
                }
                else {
                    console.info('INFO:');
                    console.log(obj);
                }
            },
            warn: function (obj) {
                if (typeof obj === 'string') {
                    console.warn(obj);
                }
                else if (typeof obj === 'object' && obj.message) {
                    console.warn(obj.message);
                }
                else if (typeof obj === 'object' && obj.statusText) {
                    console.warn(obj.statusText);
                }
                else {
                    console.warn('WARN:');
                    console.log(obj);
                }
            },
            debug: function (obj) {
                if (typeof obj === 'string') {
                    console.debug(obj);
                }
                else if (typeof obj === 'object' && obj.message) {
                    console.debug(obj.message);
                }
                else if (typeof obj === 'object' && obj.statusText) {
                    console.debug(obj.statusText);
                }
                else {
                    console.debug('DEBUG:');
                    console.log(obj);
                }
            },
            error: function (obj) {
                if (typeof obj === 'string') {
                    console.error(obj);
                }
                else if (typeof obj === 'object' && obj.message) {
                    console.error(obj.message);
                }
                else if (typeof obj === 'object' && obj.statusText) {
                    console.error(obj.statusText);
                }
                else {
                    console.error('DEBUG:');
                    console.log(obj);
                }
            }
        };
        self = this;
        self.debug = window.location.port && window.location.port == '8100'; //ionic serve port
        self.config.setTransition('modal-fade-in', ModalFadeIn);
        self.config.setTransition('modal-fade-out', ModalFadeOut);
        self.config.setTransition('page-flip', PageFlip);
        //self.active.loading = self.loadingCtrl.create({
        //    spinner: 'hide',
        //    content: null,
        //    cssClass: 'loading-container',
        //});
        //window.onpopstate = (e) => {
        //    console.info('onpopstate current location: ' + document.location + ', state: ' + JSON.stringify(e.state));
        //    console.info('onpopstate previous page: ' + self.getActivePageName() + ', segment: ' + self.getActivePageSegment());
        //    let state = self.getPageState();
        //    console.log('page state');
        //    console.log(state.current);
        //};
        self.app.viewWillEnter.subscribe(function () {
            if (navigator.simulator) {
                //console.debug('viewWillEnter with ' + self.animation + ' transition');
            }
            else {
                //console.debug('viewWillEnter with ' + self.animation + ' transition');
                switch (self.animation) {
                    case 'flip':
                        self.transitions.flip(self.options);
                        break;
                    case 'slide':
                        self.transitions.slide(self.options);
                        break;
                }
            }
            self.animation = null;
        });
        self.app.viewDidEnter.subscribe(function (e) {
            //console.log('viewDidEnter:');
            //console.log(e);
            if (e.getContent) {
                self.content = e.getContent();
                //console.log('UI Content:');
                //console.log(self.content);
                if (self.desktop && self.content) {
                    if (self.content.getScrollElement) {
                        //self.content.setScrollElementStyle('transform', 'translateZ(0)');
                        var scroll_1 = self.content.getScrollElement();
                        if (scroll_1 && scroll_1.scrollIntoView)
                            scroll_1.scrollIntoView();
                    }
                    else if (self.content.getFixedElement) {
                        var fixed = self.content.getFixedElement();
                        if (fixed && fixed.scrollIntoView)
                            fixed.scrollIntoView();
                    }
                }
            }
            if (!e.isOverlay) {
                //console.log('viewDidEnter:');
                //console.log(e);
                if (typeof self.viewDidEnter === 'function') {
                    self.viewDidEnter();
                }
                self.viewDidEnter = null;
            }
            self.app.setTitle(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].name);
        });
        if (!!window['cordova'] && self.device && self.device.version) {
            var parsed = self.device.version.split('.');
            if (parsed.length) {
                self.os.version = {
                    major: parsed[0] ? parseInt(parsed[0]) : 0,
                    minor: parsed[1] ? parseInt(parsed[1]) : 0,
                    revision: parsed[2] ? parseInt(parsed[2]) : 0
                };
            }
        }
        self.android = self.platform.is('android');
        self.desktop = self.platform.is('core');
        self.ios = self.platform.is('ios');
        self.mobile = self.platform.is('mobile');
        self.tablet = self.platform.is('tablet');
        self.phone = self.platform.is('mobile') && !self.platform.is('tablet');
        self.mobileweb = self.platform.is('mobileweb');
        self.environment = __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].environment;
        self.deviceobsolete = false;
        self.ie11incompatible = false;
        //browser support
        if (self.platform.is('core')) {
            //console.log(self.platform.versions());
            //console.log(self.platform.navigatorPlatform());
            //console.log(self.platform.userAgent());
            //console.log('kendo support:');
            //console.log(kendo.support);
            //console.log(kendo.support.browser);
            //console.log('Windows: ' + self.platform.is('windows'));
            //if (kendo.support.browser.msie) {
            //    console.log('IE ' + kendo.support.browser.version);
            //    self.support.browser = kendo.support.browser.version >= 11;
            //} else if (kendo.support.browser.chrome) {
            //    //console.log('Chrome ' + kendo.support.browser.version);
            //    self.support.browser = kendo.support.browser.version >= 48;
            //} else if (kendo.support.browser.mozilla) {
            //    //console.log('Firefox ' + kendo.support.browser.version);
            //    self.support.browser = kendo.support.browser.version >= 44;
            //} else {
            //    self.support.browser = true; //for now
            //}
            //self.support.browser = true;
            var agent = navigator.userAgent, offset = void 0;
            //parse browser and version
            if (agent.indexOf('MSIE') !== -1) {
                self.browser.name = "ie"; //IE 7-11
                offset = agent.substring(agent.indexOf('MSIE ' + 5));
                offset = offset.substring(0, offset.indexOf(';'));
            }
            else if (agent.indexOf("Edge/") !== -1) {
                self.browser.name = "edge";
                offset = agent.substring(agent.indexOf('Edge/') + 53);
            }
            else if (agent.indexOf("Trident/") !== -1) {
                self.browser.name = "ie";
                offset = agent.substring(agent.indexOf('rv:') + 3);
                offset = offset.substring(0, offset.indexOf(')'));
            }
            else if (agent.indexOf('Chrome/') !== -1) {
                self.browser.name = 'chrome';
                offset = agent.substring(agent.indexOf('Chrome/') + 7);
                offset = offset.substring(0, offset.indexOf(' '));
            }
            else if (agent.indexOf("Firefox/") !== -1) {
                self.browser.name = "firefox";
                offset = agent.substring(agent.indexOf('Firefox/') + 8);
            }
            else if (agent.indexOf("Safari/") !== -1) {
                self.browser.name = "safari";
                if (agent.indexOf("Version/") != -1) {
                    offset = agent.substring(agent.indexOf("Version/") + 8);
                    offset = offset.substring(0, offset.indexOf(' '));
                }
                else {
                    offset = agent.substring(agent.indexOf("Safari/") + 7);
                }
            }
            else {
                self.browser.name = navigator.appName;
            }
            self.browserSupport = new BrowserSupport(48, 44, 11, 8);
            //parse version parts
            self.browser.version.full = offset;
            var parts = offset.split('.');
            self.browser.version.major = parseInt(parts[0]);
            self.browser.version.minor = parseInt(parts[1]);
            self.setBrowserSupport();
        }
        else if (self.platform.is('mobileweb') && (self.platform.is('android') || self.platform.is('ios'))) {
            var ver = self.platform.version();
            if (self.platform.is('android')) {
                //console.warn('android version:');
                //console.log(JSON.stringify(ver));
                //console.log(self.os.version);
                self.deviceobsolete = ver && ver.major && ver.major < 5;
            }
            else if (self.platform.is('ios')) {
                //console.warn('ios version:');
                //console.log(JSON.stringify(ver));
                //console.log(self.os.version);
                //self.deviceobsolete = ver && ver.major && ver.major < 11;
                console.warn('allow iOS 10 temporarily');
                self.deviceobsolete = ver && ver.major && ver.major < 10;
            }
        }
        else {
            self.browser.name = navigator.appName;
            self.browser.supported = true; //for now
        }
        //console.log(self.browser.name);
        //console.log(self.browser.version.full);
        //console.log(self.browser.version.major);
        //console.log(self.browser.version.minor);
        //console.log(self.browser.supported);
        if (navigator.appVersion.indexOf('Windows NT') > -1) {
            //console.log('Windows NT');
            self.os.name = 'Windows';
            self.os.version = parseFloat(navigator.appVersion.substring(navigator.appVersion.indexOf('Windows NT') + 11, navigator.appVersion.indexOf(';')));
            if (self.os.name == 'Windows' && self.os.version > 6.1 && self.browser.name == 'ie' && self.browser.version.major == 11) {
                self.ie11incompatible = true;
                //console.log('incompatible IE11 on Windows 8+');
                //DEBUGGING
                //window['ie11incompatible'] = true;
            }
        }
        window.addEventListener('orientationchange', function () {
            self.onOrientationChange();
            self.events.publish('orientation');
        }, false);
        self.onOrientationChange(); //initialize
        //if (self.desktop || self.mobileweb) {
        //    window.addEventListener('popstate', function (event) {
        //        console.debug('popstate fired!');
        //        console.log(event);
        //        console.log(event.state);
        //        console.log(history.length);
        //    });
        //}
    }
    UIService.prototype.onOrientationChange = function (e) {
        //console.log('fluid video orientation change');
        //console.log(window.orientation);
        //setTimeout(() => {
        switch (window.orientation) {
            case 0:
            case 180:
                self.portrait = true;
                self.landscape = false;
                break;
            default:
                self.portrait = false;
                self.landscape = true;
                break;
        }
        //}, 200);
    };
    UIService.prototype.cordova = function () {
        return !!window['cordova'];
    };
    UIService.prototype.setBrowserSupport = function () {
        // Browser support settings
        if (__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].browserSupport) {
            self.browserSupport.chrome = __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].browserSupport.chrome;
            self.browserSupport.fireFox = __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].browserSupport.fireFox;
            self.browserSupport.ie = __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].browserSupport.ie;
            self.browserSupport.safari = Number.MAX_VALUE;
            self.browserSupport.msEdge = Number.MAX_VALUE;
            //console.log('browser.name: ' + self.browser.name);
            //console.log('browser.version:');
            //console.log(self.browser.version);
            //console.log('browserSupport: ' + self.browserSupport);
            //browser support rules
            switch (self.browser.name) {
                case 'ie':
                    self.browser.supported = self.browser.version.major >= self.browserSupport.ie && !self.ie11incompatible;
                    break;
                case 'chrome':
                    self.browser.supported = self.browser.version.major >= self.browserSupport.chrome;
                    break;
                case 'firefox':
                    self.browser.supported = self.browser.version.major >= self.browserSupport.fireFox;
                    break;
                case 'safari':
                    self.browser.supported = self.browser.version.major >= self.browserSupport.safari;
                    break;
                default:
                    self.browser.supported = false;
                    break;
            }
        }
    };
    //#region localization 
    UIService.prototype.language = function () {
        return self.globalization.getPreferredLanguage();
    };
    UIService.prototype.locale = function () {
        return self.globalization.getLocaleName();
    };
    //#endregion localization
    //#region tabs
    UIService.prototype.showTabs = function () {
        if (!self.tabBarElement) {
            self.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        }
        self.tabBarElement.style.display = 'flex';
    };
    UIService.prototype.hideTabs = function () {
        if (!self.tabBarElement) {
            self.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        }
        self.tabBarElement.style.display = 'none';
    };
    //#endregion tabs
    //#region dialogs
    UIService.prototype.action = function (title, buttons, options) {
        var o = options || {};
        if (title) {
            self.translate.get(title).subscribe(function (res) {
                //console.log('title translation: ' + res);
                if (res) {
                    o.title = res;
                }
            });
        }
        buttons.forEach(function (v, n) {
            //console.log('option title: ' + v.text);
            self.translate.get(v.text).subscribe(function (res) {
                //console.log('translation: ' + res);
                if (res) {
                    v.text = res;
                }
            });
            if (v.handler) {
                var after_1 = v.handler;
                v.handler = function () {
                    self.active.action.dismiss().then(after_1);
                    return false;
                };
            }
        });
        o.buttons = buttons;
        var action = self.actionCtrl.create(o);
        action.onDidDismiss(function (data) {
            //console.debug('self.active.action.onDidDismiss');
            //console.log(data);
            self.active.action = null;
        });
        self.active.action = action;
        return action.present();
    };
    UIService.prototype.alert = function (title, message, button, options) {
        //console.log('AlertController:');
        //console.log(self.alertCtrl);
        if (title) {
            self.translate.get(title).subscribe(function (res) {
                //console.log('title translation: ' + res);
                if (res) {
                    title = res;
                }
            });
        }
        if (message) {
            self.translate.get(message).subscribe(function (res) {
                //console.log('message translation: ' + res);
                if (res) {
                    message = res;
                }
            });
        }
        if (typeof button === 'string') {
            button = {
                text: button,
                handler: null
            };
        }
        var b = button || {
            text: 'OK',
            handler: null
        };
        if (button) {
            self.translate.get(b.text).subscribe(function (res) {
                //console.log('translation: ' + res);
                if (res) {
                    b.text = res;
                }
            });
            if (b.handler) {
                var after_2 = b.handler;
                b.handler = function () {
                    alert.dismiss().then(after_2);
                    return false;
                };
            }
        }
        var o = options || {};
        //let popup = self.alertCtrl.create({
        //    title: title,
        //    //subTitle: message,
        //    message: message,
        //    buttons: [b],
        //    enableBackdropDismiss: false
        //});
        if (title) {
            o.title = title;
        }
        if (message) {
            o.message = message;
        }
        o.buttons = [b];
        if (!o.enableBackdropDismiss) {
            o.enableBackdropDismiss = false;
        }
        var alert = self.alertCtrl.create(o);
        alert.onDidDismiss(function (data) {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    };
    UIService.prototype.confirm = function (title, message, buttons, options) {
        var b = buttons || [
            {
                text: 'OK',
                handler: null
            },
            {
                text: 'Cancel',
                handler: null
            }
        ];
        self.translate.get(title).subscribe(function (res) {
            //console.log('title translation: ' + res);
            if (res) {
                title = res;
            }
        });
        self.translate.get(message).subscribe(function (res) {
            //console.log('message translation: ' + res);
            if (res) {
                message = res;
            }
        });
        b.forEach(function (v, n) {
            //console.log('option title: ' + v.text);
            self.translate.get(v.text).subscribe(function (res) {
                //console.log('translation: ' + res);
                if (res) {
                    v.text = res;
                }
            });
            if (v.handler) {
                var after_3 = v.handler;
                v.handler = function () {
                    alert.dismiss().then(after_3);
                    return false;
                };
            }
        });
        var o = options || {};
        //let popup = self.alertCtrl.create({
        //    title: title,
        //    message: message,
        //    buttons: b
        //});
        o.title = title;
        o.message = message;
        o.buttons = b;
        o.enableBackdropDismiss = false;
        var alert = self.alertCtrl.create(o);
        alert.onDidDismiss(function (data) {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    };
    UIService.prototype.popover = function (event, component, data, options) {
        var popover = self.popoverCtrl.create(component, data, options);
        return popover.present({ ev: event });
    };
    UIService.prototype.prompt = function (title, message, inputs, buttons) {
        self.translate.get(title).subscribe(function (res) {
            //console.log('title translation: ' + res);
            if (res) {
                title = res;
            }
        });
        self.translate.get(message).subscribe(function (res) {
            //console.log('message translation: ' + res);
            if (res) {
                message = res;
            }
        });
        var alert = self.alertCtrl.create({
            title: title,
            inputs: inputs,
            buttons: buttons,
            enableBackdropDismiss: false
        });
        alert.onDidDismiss(function (data) {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    };
    UIService.prototype.toast = function (message, options) {
        //console.log('ToastController:');
        //console.log(self.toastCtrl);
        self.translate.get(message).subscribe(function (res) {
            //console.log('button translation: ' + res);
            if (res) {
                message = res;
            }
        });
        var o = __WEBPACK_IMPORTED_MODULE_8_underscore__["extend"]({ duration: 3000 }, options);
        o.message = message;
        var toast = self.toastCtrl.create(o);
        toast.onDidDismiss(function (data) {
            //console.debug('self.active.toast.onDidDismiss');
            //console.log(data);
            self.active.toast = null;
        });
        self.active.toast = toast;
        return toast.present();
    };
    //#endregion dialogs
    //#region modals
    UIService.prototype.modal = function (mode, type, data, options) {
        //console.log('ModalController:');
        //console.log(self.modalCtrl);
        var d = data || {}, o = options || { showBackdrop: false, enableBackdropDismiss: false }, modal;
        return new Promise(function (resolve, reject) {
            switch (mode) {
                case 'overlay':
                    //console.debug('present passcode modal');
                    var overlay = __WEBPACK_IMPORTED_MODULE_8_underscore__["defaults"]({
                        enterAnimation: 'modal-fade-in',
                        leaveAnimation: 'modal-fade-out'
                    }, o);
                    modal = self.modalCtrl.create(type, d, overlay);
                    break;
                default:
                    //console.debug('present passcode modal');
                    modal = self.modalCtrl.create(type, d, o);
                    break;
            }
            modal.onDidDismiss(function (data) {
                //console.debug('self.active.modal.onDidDismiss');
                //console.log(data);
                self.active.modal = null;
                resolve(data);
            });
            self.active.modal = modal;
            modal.present();
        });
    };
    //#endregion modals
    //#region async
    UIService.prototype.ajax = function (fn, options) {
        return new Promise(function (resolve, reject) {
            //console.debug('ajax request: show spinner');
            var success = function (res) {
                //setTimeout(self.loading.hide, 0); //timeout to prevent Uncaught (in promise): false for immediately resolved cached data
                self.loading.hide();
                //console.debug('ajax success: hide spinner');
                //console.log(res);
                resolve(res);
            }, failure = function (err) {
                //setTimeout(self.loading.hide, 0); //timeout to prevent Uncaught (in promise): false for immediately rejected data
                self.loading.hide();
                //console.error('ajax failure: hide spinner');
                //console.log(err);
                if (typeof err === 'undefined') {
                    //console.warn('statusCode undefined. Set as -1.');
                    err = { status: -1 };
                }
                switch (err.status) {
                    case -1:
                    case 408:
                        self.alert('NETWORK_CONNECTION', 'INTERNET_ERROR_RETRY', 'OK');
                        break;
                }
                reject(err);
            };
            var opts = __WEBPACK_IMPORTED_MODULE_8_underscore__["defaults"](options || {}, { blur: false });
            if (fn && typeof fn === 'function') {
                self.loading.show(opts);
                //setTimeout(spinner.spin, 200);
                return new Promise(function (resolve, reject) {
                    fn().then(success).catch(failure);
                });
            }
            else if (fn && Array.isArray(fn)) {
                self.loading.show(opts);
                //setTimeout(spinner.spin, 200);
                Promise.all(fn).then(success).catch(failure);
            }
            else {
                reject('must pass a function to ui.ajax(fn)');
            }
        });
    };
    UIService.prototype.load = function (fn, options) {
        //return _.debounce(() => { self.ajax(fn); }, 2000, true);
        var opts = __WEBPACK_IMPORTED_MODULE_8_underscore__["defaults"](options || {}, { blur: false });
        self.loading.show(opts);
        if (typeof fn === 'function') {
            //console.info('return promise');
            return new Promise(function (resolve, reject) {
                //console.info('invoke method');
                setTimeout(function () {
                    try {
                        fn().then(function (res) {
                            self.loading.hide();
                            //console.debug('load success: hide spinner');
                            //console.debug(res);
                            //console.info('resolve');
                            resolve(res);
                        });
                    }
                    catch (ex) {
                        //console.error('load failure: hide spinner');
                        self.loading.hide();
                        console.error(ex.message);
                        //console.info('reject');
                        reject(ex);
                    }
                }, 100);
            });
        }
        else {
            return Promise.reject('must pass a function to ui.load(fn)');
        }
    };
    //#endregion async
    //#region page navigation
    UIService.prototype.getPageState = function () {
        return self.pagestate;
    };
    UIService.prototype.setPageState = function (name, params, options) {
        if (self.pagestate.current) {
            self.pagestate.history.push(self.pagestate.current);
        }
        self.pagestate.current = { name: name, params: params, options: options };
        //console.log('setPageState:');
        //console.log(self.pagestate);
    };
    UIService.prototype.getPageParams = function (current) {
        if (current === true) {
            var nav = self.app.getRootNavs()[0];
            self.deeplinker.getCurrentSegments();
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                //console.log('getPageParams ' + self.getActivePageName());
                var params = self.pagestate.current && self.pagestate.current.name === self.getActivePageName() ? self.pagestate.current.params : null;
                resolve(params);
            }, 0);
        });
    };
    UIService.prototype.getCurrentSegments = function () {
        return self.deeplinker.getCurrentSegments();
    };
    UIService.prototype.getActivePageSegment = function () {
        var segments = self.deeplinker.getCurrentSegments();
        return segments[0].id;
    };
    UIService.prototype.getActivePageName = function () {
        var segments = self.deeplinker.getCurrentSegments();
        //console.log('getActivePageName');
        //console.log(segments);
        return segments.length ? segments[0].name : '';
    };
    UIService.prototype.link = function (page, params, options) {
        self.slide(page, params, options);
        return false; //prevent href navigation afterwards but set href for browser link display behavior (underline, pointer cursor) and search indexing
    };
    //#region app store
    //#region launch by url scheme
    UIService.prototype.launchStoreApp = function (options) {
        //console.debug('launchStoreApp:');
        //console.log(options);
        switch (self.device.platform.toLowerCase()) {
            case 'android':
                if (options.google) {
                    self.openAppStore(options.google);
                }
                else {
                    self.alert('App Not Available', 'Unable to open Android app because information missing');
                }
                break;
            case 'ios':
            case 'iphone':
            case 'ipad':
                if (options.itunes) {
                    self.openAppStore(options.itunes);
                }
                else {
                    self.alert('App Not Available', 'Unable to open iOS app because information missing');
                }
                break;
        }
    };
    UIService.prototype.launch = function (url, options) {
        //console.debug('ui launch: ' + url);
        //console.log(options);
        var ref, scheme;
        function onLoadError(e) {
            //$log.log('loaderror');
            //$log.log(JSON.stringify(e));
            //DialogManager.alert('loaderror', JSON.stringify(e));
            self.launchStoreApp(options);
            ref.removeEventListener('loaderror', onLoadError);
        }
        if (self.isMobileApp() && self.availability) {
            //DialogManager.alert('URL Scheme', scheme);
            //ref = window.open('http://meltingpointmobile.com/static/launch.html?scheme=' + encodeURIComponent(scheme) + '&weburl=' + encodeURIComponent(url), '_system');
            switch (self.device.platform.toLowerCase()) {
                case 'android':
                    scheme = options.google;
                    break;
                case 'ios':
                case 'iphone':
                case 'ipad':
                    scheme = url.slice(0, url.indexOf('://') + 3);
                    break;
            }
            //$log.log('scheme:');
            //$log.log(scheme);
            self.availability.check(scheme).then(function (e) {
                //console.info(scheme + ' is available');
                //$log.log(e);
                ref = window.open(url, '_system');
                //$log.log('app ref:');
                //$log.log(JSON.stringify(ref));
                if (!ref) {
                    self.launchStoreApp(options);
                }
                else {
                    ref.addEventListener('loaderror', onLoadError);
                }
            }, function (e) {
                //console.warn(scheme + ' unavailable');
                self.launchStoreApp(options);
            });
        }
        else {
            //DialogManager.toast('appAvailability plugin unavailable');
            self.launchStoreApp(options);
        }
    };
    ;
    /**
     * Attempt to launch mobile app by custom url scheme
     */
    UIService.prototype.scheme = function () {
        var original = window.location.href, redirect = window.location.hash.substr(2);
        //console.log('original: ' + original);
        //console.log('redirect: ' + redirect);
        try {
            if (redirect && redirect.length > 2) {
                var scheme = self.debug ? 'IonProDev://app/' + redirect : __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].urlscheme + '://app/' + redirect;
                //console.log('invoke ' + scheme);
                window.location.assign(scheme);
            }
        }
        catch (ex) {
            console.log('return to original url');
            window.location.replace(original);
            console.error(ex.message);
            console.log(ex);
        }
    };
    //#endregion launch by url scheme
    UIService.prototype.getAppStoreURL = function (id) {
        var storeID = id ? id : self.platform.is('ios') ? __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].itunesAppStoreID : __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* AppConfig */].googleAppStoreID;
        return self.platform.is('ios') ? prefix.itunes + storeID : prefix.google + storeID;
    };
    //#endregion app store
    //#region drag & drop
    UIService.prototype.drag = function (e) {
        e.preventDefault();
        //console.log(e);
        var element = e.currentTarget;
        element.style['webkitCursor'] = '-webkit-grabbing';
        element.style['mozCursor'] = '-moz-grabbing';
        element.style.cursor = 'grabbing';
    };
    UIService.prototype.drop = function (e) {
        //console.log(e);
        var element = e.currentTarget;
        element.style['webkitCursor'] = '';
        element.style['mozCursor'] = '';
        element.style.cursor = '';
    };
    //#endregion drag & drop
    //#region utilities
    UIService.prototype.isMobileApp = function () {
        return self.platform.is('mobile') && !!window['cordova'];
    };
    UIService.prototype.isSimulator = function () {
        return !!navigator.simulator;
    };
    UIService.prototype.isDesktop = function () {
        return self.platform.is('core');
    };
    UIService.prototype.isMobileAppOrSimulator = function () {
        return self.isMobileApp() || self.isSimulator();
    };
    UIService.prototype.validEmailAddress = function (address) {
        //var validEmailRegEx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var re = new RegExp(self.regex.email);
        return re.test(address);
    };
    UIService.prototype.normalizeNumber = function (number) {
        return number.replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '').replace(' ', '');
    };
    UIService.prototype.validPhoneNumber = function (number) {
        var normalized = self.normalizeNumber(number);
        if (normalized.length !== 10) {
            return false;
        }
        var digits = /^\d+$/.test(normalized);
        return digits;
    };
    UIService.prototype.validSocialSecurity = function (number) {
        var normalized = self.normalizeNumber(number);
        if (normalized.length !== 9) {
            return false;
        }
        var digits = /^\d+$/.test(normalized);
        return digits;
    };
    UIService.prototype.validPassword = function (password, options) {
        var len = options && options.length || 8;
        if (options && options.regex) {
            var re = new RegExp(options.regex);
            return re.test(password);
        }
        else {
            return password.length >= len;
        }
    };
    //#endregion validation
    UIService.prototype.resetFields = function (fields) {
        __WEBPACK_IMPORTED_MODULE_8_underscore__["each"](fields, function (val, key) {
            val = false;
        });
    };
    UIService.prototype.normalizeInputs = function (container, fields) {
        var normalize = function (field) {
            if (!container[field]) {
                container[field] = '';
            }
            else if (typeof container[field] === 'string' || container[field] instanceof String) {
                container[field] = container[field].trim();
            }
        };
        if (fields === undefined) {
            __WEBPACK_IMPORTED_MODULE_8_underscore__["each"](container, function (val, key) {
                normalize(key);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_underscore__["each"](fields, function (field) {
                normalize(field);
            });
        }
    };
    UIService.prototype.localize = function (text) {
        return self.translate.get(text); //returns observable
    };
    UIService.prototype.confirmPhoneAction = function () {
        var iOS = self.device && self.device.platform && self.device.platform.toLowerCase() === 'ios';
        return iOS && self.os.version && (self.os.version.major > 10 || (self.os.version && self.os.version.major === 10 && self.os.version.minor >= 3));
    };
    UIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* DeepLinker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */]])
    ], UIService);
    return UIService;
}());

var ModalFadeIn = (function (_super) {
    __extends(ModalFadeIn, _super);
    function ModalFadeIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFadeIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'scale(1)' });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 0, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(400)
            .add(wrapper);
    };
    return ModalFadeIn;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PageTransition */]));

var ModalFadeOut = (function (_super) {
    __extends(ModalFadeOut, _super);
    function ModalFadeOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFadeOut.prototype.init = function () {
        var el = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Animation */](this.plt, el.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'scale(1)' });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .add(wrapper);
    };
    return ModalFadeOut;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PageTransition */]));

var PageFlip = (function (_super) {
    __extends(PageFlip, _super);
    function PageFlip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFlip.prototype.init = function () {
        _super.prototype.init.call(this);
        var plt = this.plt, leavingView = this.leavingView, enteringView = this.enteringView, opts = this.opts, backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Animation */](plt, enteringView.pageRef());
            if (backDirection) {
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-prev')
                    .afterRemoveClass('flip-enter-prev');
                enteringPage.beforeStyles({ 'z-index': 101 });
            }
            else {
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-next')
                    .afterRemoveClass('flip-enter-next');
            }
        }
        if (leavingView) {
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Animation */](plt, leavingView.pageRef());
            if (backDirection) {
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-prev')
                    .afterRemoveClass('flip-leave-prev');
                leavingPage.beforeStyles({ 'z-index': 100 });
            }
            else {
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-next')
                    .afterRemoveClass('flip-leave-next');
            }
            ;
        }
    };
    return PageFlip;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PageTransition */]));

var BrowserSupport = (function () {
    function BrowserSupport(chrome, fireFox, ie, safari, msEdge) {
        // We're always chacking to see if the browser version is greater than the given number.
        // Set the value to the highest value possible so that no browsers are supported by default.
        // Each application will need to set the version it's willing to support.
        // This also makes it so that we need to only worry about turning on the browsers we want to support.
        this.chrome = (chrome !== undefined) ? chrome : Number.MAX_VALUE;
        this.fireFox = (fireFox !== undefined) ? fireFox : Number.MAX_VALUE;
        this.ie = (ie !== undefined) ? ie : Number.MAX_VALUE;
        this.safari = (safari !== undefined) ? safari : Number.MAX_VALUE;
        this.msEdge = (msEdge !== undefined) ? msEdge : Number.MAX_VALUE;
    }
    return BrowserSupport;
}());

//# sourceMappingURL=ui.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(523);




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_number__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_math__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_string__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_array__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_regexp__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_map__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_set__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classlist_js__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classlist_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classlist_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_web_animations_js__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_web_animations_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_reflect__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_reflect__);
/**
* This file includes polyfills needed by Angular and is loaded before the app.
* You can add your own extra polyfills to this file.
*
* This file is divided into 2 sections:
*   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
*   2. Application imports. Files imported after ZoneJS that should be loaded before your main
*      file.
*
* The current setup is for so-called "evergreen" browsers; the last versions of browsers that
* automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
* Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
*
* Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
*/
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/






//import 'core-js/es6/date'; Cannot find module "core-js/es6/date"




/** IE10 and IE11 requires the following for NgClass support on SVG elements */
 // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
 // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/

//import 'core-js/es7/reflect'; Cannot find module "core-js/es7/reflect"
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
//import 'zone.js/dist/zone';  // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ui__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var self;
var HelpService = (function () {
    function HelpService(ui) {
        this.ui = ui;
        self = this;
    }
    HelpService.prototype.show = function () {
        var title = 'Need Assistance?', message = 'Give us a call at <a href="tel:5555555555" target="_system">(555) 555-5555</a>. We are here to help if you are having trouble or need to adjust any of your account settings.', button = {
            text: 'DISMISS',
            cssClass: 'ion-clear'
        };
        self.ui.alert(title, message, button, { enableBackdropDismiss: true, cssClass: 'help' });
    };
    HelpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_ui__["a" /* UIService */]])
    ], HelpService);
    return HelpService;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export GuestureConfig */
/* unused harmony export IonProErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_pro__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_android_fingerprint_auth__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_availability__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_deeplinks__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_opener__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_globalization__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_page_transitions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_secure_storage__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_touch_id__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_session__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_ui__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_transitions__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_about_about__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_error_error_404__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_error_incompatible__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_error_error_unknown__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_home__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_login_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_privacy_privacy__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_format__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_hrefTarget__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_momentDate__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_safeHtml__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pipes_sort__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__directives_inputmask__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__directives_markdown__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__directives_svgimg__ = __webpack_require__(621);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/lang', '.json');
}
var GuestureConfig = (function (_super) {
    __extends(GuestureConfig, _super);
    function GuestureConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { direction: __WEBPACK_IMPORTED_MODULE_8_hammerjs__["DIRECTION_ALL"] } //override stupid horizontal ONRY default
        };
        return _this;
    }
    return GuestureConfig;
}(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* HammerGestureConfig */]));

var IonProErrorHandler = (function () {
    function IonProErrorHandler(injector, platform) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* IonicErrorHandler */]);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }
    IonProErrorHandler.prototype.handleError = function (err) {
        //if (window['cordova']) {
        //    Pro.monitoring.exception(new Error(err));
        //}
        __WEBPACK_IMPORTED_MODULE_10__ionic_pro__["Pro"].monitoring.exception(new Error(err));
        // Remove this if you want to disable Ionic's auto exception handling in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    IonProErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["r" /* Platform */]])
    ], IonProErrorHandler);
    return IonProErrorHandler;
}());

var AppModule = (function () {
    function AppModule(config, platform) {
        this.config = config;
        this.platform = platform;
        this.config.setTransition('action-sheet-leave', __WEBPACK_IMPORTED_MODULE_30__pages_transitions__["a" /* ActionSheetLeave */]);
        //if (!this.platform.is('ios')) {
        //    this.config.setTransition('page-fade', PageFade);
        //}
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MPM */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_error_error_404__["a" /* Error404Page */],
                __WEBPACK_IMPORTED_MODULE_34__pages_error_error_unknown__["a" /* ErrorUnknownPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_error_incompatible__["a" /* ErrorIncompatiblePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_43__directives_inputmask__["a" /* InputMask */],
                __WEBPACK_IMPORTED_MODULE_44__directives_markdown__["a" /* Markdown */],
                __WEBPACK_IMPORTED_MODULE_45__directives_svgimg__["a" /* SvgImg */],
                __WEBPACK_IMPORTED_MODULE_38__pipes_format__["a" /* Format */],
                __WEBPACK_IMPORTED_MODULE_39__pipes_hrefTarget__["a" /* HrefTarget */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_momentDate__["a" /* MomentDatePipe */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_momentDate__["b" /* UtcConvertPipe */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_safeHtml__["a" /* SafeHtml */],
                __WEBPACK_IMPORTED_MODULE_42__pipes_sort__["a" /* ArraySort */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MPM */], {
                    mode: 'md',
                    actionSheetLeave: 'action-sheet-leave',
                    pageTransition: 'page-fade',
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    swipeBackEnabled: false
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */], name: 'about', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_error_error_404__["a" /* Error404Page */], name: 'error-not-found', segment: 'error/not-found' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_error_error_unknown__["a" /* ErrorUnknownPage */], name: 'error-unknown', segment: 'error/oops' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_error_incompatible__["a" /* ErrorIncompatiblePage */], name: 'error-incompatible', segment: 'error/incompatible' },
                        { component: __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */], name: 'home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_login_login__["a" /* LoginPage */], name: 'login', segment: '' },
                        { component: __WEBPACK_IMPORTED_MODULE_37__pages_privacy_privacy__["a" /* PrivacyPage */], name: 'privacy', segment: 'privacy' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MPM */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_error_error_404__["a" /* Error404Page */],
                __WEBPACK_IMPORTED_MODULE_34__pages_error_error_unknown__["a" /* ErrorUnknownPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_error_incompatible__["a" /* ErrorIncompatiblePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_privacy_privacy__["a" /* PrivacyPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], useClass: GuestureConfig },
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* PercentPipe */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_secure_storage__["a" /* SecureStorage */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_touch_id__["a" /* TouchID */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_27__providers_help__["a" /* HelpService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_session__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_ui__["a" /* UIService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* Config */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["r" /* Platform */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MPM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_session__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ui__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import & inject these to prevent manualTreeshaking removal in --prod builds










var MPM = (function () {
    function MPM(app, config, platform, deeplinker, deeplinks, keyboard, splashscreen, statusbar, alert, loading, menu, modal, toast, help, session, translate, ui) {
        var _this = this;
        this.app = app;
        this.config = config;
        this.platform = platform;
        this.deeplinker = deeplinker;
        this.deeplinks = deeplinks;
        this.keyboard = keyboard;
        this.splashscreen = splashscreen;
        this.statusbar = statusbar;
        this.alert = alert;
        this.loading = loading;
        this.menu = menu;
        this.modal = modal;
        this.toast = toast;
        this.help = help;
        this.session = session;
        this.translate = translate;
        this.ui = ui;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            //console.info('platform ready');
            //console.log(platform.platforms());
            if (platform.is('cordova')) {
                _this.plugins();
            }
            else {
                ///console.info('wait for it...');
                document.addEventListener('deviceready', function () {
                    //console.info('deviceready');
                    platform._platforms.splice(0, platform._platforms.length);
                    platform.init();
                    app.setElementClass('platform-mobileweb', false);
                    app.setElementClass('platform-cordova', true);
                    _this.plugins();
                });
            }
            app.setTitle(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */].name);
            translate.setDefaultLang('en');
            var languages = ['en', 'es'], browser = translate.getBrowserLang(); //TODO: use localization plugin
            translate.use('en');
        });
    }
    MPM.prototype.plugins = function () {
        var _this = this;
        //console.debug('cordova device ready:');
        this.statusbar.overlaysWebView(true);
        this.statusbar.styleLightContent();
        this.keyboard.onKeyboardShow().subscribe(function (e) {
            //console.log('ONKEYBOARDSHOW');
            _this.app.setElementClass('keyboard', true);
            //setTimeout(() => {
            var active = document.activeElement;
            //console.debug('active element:');
            //console.log(active);
            if (active) {
                if (_this.platform.is('android') && e.keyboardHeight) {
                    _this.ionapp = active.closest('.app-root');
                    console.log('closest .app-root:');
                    console.log(_this.ionapp);
                    _this.ionapp.setAttribute('style', 'height: calc(100% - ' + e.keyboardHeight + 'px);');
                }
                if (active.scrollIntoViewIfNeeded) {
                    //console.log('scrollIntoViewIfNeeded');
                    active.scrollIntoViewIfNeeded(true);
                }
            }
            //}, 200);
        });
        this.keyboard.onKeyboardHide().subscribe(function (e) {
            //console.log('ONKEYBOARDHIDE');
            _this.app.setElementClass('keyboard', false);
            if (_this.platform.is('android') && _this.ionapp) {
                _this.ionapp.setAttribute('style', 'height: 100%;');
            }
        });
        this.splashscreen.hide();
    };
    MPM.prototype.authenticated = function () {
        console.debug('app.component.authenticated');
        var name = this.app.getActiveNav().getActive().name;
        console.debug(name);
        return true;
    };
    MPM.prototype.assist = function () {
        this.menu.close().then(this.help.show);
    };
    MPM.prototype.link = function (page) {
        var _this = this;
        this.menu.close().then(function () {
            if (_this.ui.getActivePageName() !== page) {
                _this.ui.slide(page, {}, { animate: false });
            }
        });
    };
    MPM.prototype.logout = function () {
        var _this = this;
        this.menu.close().then(function () {
            _this.session.authenticated = false;
            _this.ui.flip('login', {}, { direction: 'right' });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MPM.prototype, "nav", void 0);
    MPM = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\app\app.html"*/'<ion-menu [content]="content" persistent="true" side="right" type="push">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item (click)="assist()">Help</button>\n\n            <button ion-item (click)="link(\'home\')" *ngIf="session.authenticated">Home</button>\n\n            <button ion-item menuClose (click)="link(\'privacy\')">Privacy Policy</button>\n\n            <button ion-item menuClose (click)="link(\'about\')">About Us</button>\n\n            <button ion-item (click)="logout()" *ngIf="session.authenticated">Logout</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* DeepLinker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_session__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_ui__["a" /* UIService */]])
    ], MPM);
    return MPM;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageFade */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TRANSLATEY = 'translateY';
var OFF_BOTTOM = '40px';
var CENTER = '0px';
var SHOW_BACK_BTN_CSS = 'show-back-button';
var PageFade = (function (_super) {
    __extends(PageFade, _super);
    function PageFade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFade.prototype.init = function () {
        _super.prototype.init.call(this);
        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);
        var plt = this.plt, leavingView = this.leavingView, enteringView = this.enteringView, opts = this.opts, backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPage = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](plt, enteringView.pageRef());
            if (backDirection) {
                //console.log('enteringView has backDirection');
                this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('slide-delay-back')
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0, 1, true);
            }
            else {
                //console.log('enteringView not backDirection');
                this.duration(opts.duration || 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('slide-delay-next')
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0, 1, true);
            }
            if (enteringView.hasNavbar()) {
                var enteringPageEle = enteringView.pageRef().nativeElement, enteringNavbarEle = enteringPageEle.querySelector('ion-navbar'), enteringNavBar = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](plt, enteringNavbarEle);
                this.add(enteringNavBar);
                var enteringBackButton = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](plt, enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
        // setup leaving view
        if (leavingView) {
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](plt, leavingView.pageRef());
            if (backDirection) {
                //console.log('leavingView has backDirection');
                this.add(leavingPage);
                leavingPage
                    .beforeRemoveClass('slide-delay-back')
                    .beforeRemoveClass('slide-delay-next')
                    .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
                    .fromTo('opacity', 1, 0);
            }
            else {
                //console.log('leavingView not backDirection');
                this.add(leavingPage);
                leavingPage
                    .beforeRemoveClass('slide-delay-back')
                    .beforeRemoveClass('slide-delay-next')
                    .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
                    .fromTo('opacity', 1, 0);
            }
            ;
        }
        //this.onFinish(() => {
        //    let until = new Date().getTime(),
        //        total = until - since;
        //    console.log('pagefade finish: ' + until);
        //    console.warn('pagefade total: ' + total);
        //});
    };
    return PageFade;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PageTransition */]));

var ActionSheetLeave = (function (_super) {
    __extends(ActionSheetLeave, _super);
    function ActionSheetLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionSheetLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement, backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop')), wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.26, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(200).add(backdrop).add(wrapper);
    };
    return ActionSheetLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* Transition */]));

//# sourceMappingURL=transitions.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(help, ui) {
        this.help = help;
        this.ui = ui;
        this.release = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].release;
        if (__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].build) {
            this.build = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].build.toString();
        }
    }
    AboutPage.prototype.ionViewWillEnter = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>About Us</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only menuToggle><ion-icon name="menu"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <p>\n\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero ultricies, efficitur urna vitae, imperdiet purus. Integer accumsan ex risus, et eleifend dui hendrerit nec. Aenean tellus augue, malesuada at velit ultricies, malesuada fermentum mi. Vestibulum placerat dignissim leo, nec tempus felis porta quis. Aliquam nec mollis risus. Maecenas libero dolor, eleifend ac vehicula in, mattis quis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus id feugiat enim. Integer tincidunt efficitur tristique. Sed sed scelerisque sapien, sit amet luctus magna. Nulla vulputate blandit est non scelerisque. Donec volutpat in ligula eget tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n                        </p>\n\n                        <p>\n\n                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ac ipsum porta, laoreet augue quis, scelerisque lectus. Curabitur vel risus id orci dignissim fringilla a non mi. Vivamus in varius enim. Morbi commodo feugiat egestas. Integer nisi felis, porttitor sed porttitor eu, ultrices auctor lacus. Praesent vehicula, sem ac sodales aliquam, sem magna consectetur elit, sed varius justo neque at leo. Nunc viverra mi ligula, in rutrum nunc fermentum ut. Curabitur in imperdiet dui. In pellentesque laoreet massa, eget finibus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n                        </p>\n\n                        <p>\n\n                            Sed viverra hendrerit turpis sit amet pulvinar. Morbi hendrerit pellentesque fermentum. Suspendisse a feugiat tortor, vestibulum auctor neque. Etiam feugiat sapien et risus sodales, nec dignissim nibh consequat. Vivamus consectetur id magna eu ullamcorper. Aenean neque ante, pellentesque at egestas eu, rhoncus non neque. Nunc mattis arcu eget risus elementum, et laoreet felis commodo. Ut a porta dui. Suspendisse potenti. Sed sed pulvinar nisi, eget bibendum libero. Maecenas arcu arcu, rhoncus quis vulputate a, tincidunt quis eros.\n\n                        </p>\n\n                        <p>\n\n                            Suspendisse potenti. Phasellus eget fringilla tortor, in lacinia neque. Integer tincidunt tortor sit amet erat consectetur vestibulum. Pellentesque eleifend pharetra ligula id rhoncus. Ut ipsum sem, rutrum pellentesque dui ut, tincidunt tincidunt arcu. Sed dui mi, laoreet scelerisque ullamcorper non, mattis ac magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n                        </p>\n\n                        <p>\n\n                            Vestibulum at nibh ac ligula ullamcorper molestie. Vivamus molestie et diam sed rhoncus. Nullam quis quam leo. Pellentesque iaculis ipsum mi, eget euismod ligula tincidunt quis. Integer at ornare sapien, nec finibus lectus. Nulla hendrerit finibus nisi ac commodo. Nullam id odio orci. Aliquam erat volutpat. Morbi mattis ullamcorper accumsan. In posuere lacus congue ornare venenatis.\n\n                        </p>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <footer>\n\n        <button ion-button clear color="medium" type="button" (click)="ui.slide(\'privacy\')">Privacy Policy</button>\n\n        <div class="version-info">Release {{release}}</div>\n\n        <div *ngIf="build" class="version-info">Build {{build}}</div>\n\n    </footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error404Page = (function () {
    function Error404Page(help, ui) {
        this.help = help;
        this.ui = ui;
    }
    Error404Page.prototype.ionViewDidEnter = function () {
    };
    Error404Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-error-404',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\error-404.html"*/'﻿<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button clear class="logo" (click)="ui.back(\'home\')"></button>\n\n        </ion-buttons>\n\n        <ion-buttons right>\n\n            <button ion-button clear no-padding (click)="help.show()" color="neutral" class="help">HELP?</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div *ngIf="resetSuccess == true" class="bar bar-header bar-balanced success-bar">\n\n        <h1 class="success-bar-text"> {{ \'SUCCESSFUL_RESET_PASSWORD\' | translate }}</h1>\n\n    </div>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-lg-6 col-md-8 col-sm-12 push-lg-3 push-md-2 style="margin-top: 35px;">\n\n                <ion-card style="padding-top: 50px; padding-bottom: 100px;">\n\n                    <div class="error-symbol-container">\n\n                        <img src="assets/images/icons/error-symbol.svg" alt="" style="max-width: 168px;" />\n\n                    </div>\n\n                    <div class="error-title">\n\n                        <p>\n\n                            We were unable to find the page you were looking for.\n\n                        </p>\n\n                    </div>\n\n                    <div style="margin-top: 20px; text-align: center;">\n\n                        <button type="button" ion-button text-center (click)="ui.slide(\'start\', {}, {})" color="secondary-inverse">BACK TO HOME</button>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\error-404.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], Error404Page);
    return Error404Page;
}());

//# sourceMappingURL=error-404.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorIncompatiblePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorIncompatiblePage = (function () {
    function ErrorIncompatiblePage() {
    }
    ErrorIncompatiblePage.prototype.ionViewDidEnter = function () {
    };
    ErrorIncompatiblePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-error-incompatible',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\incompatible.html"*/'﻿<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button clear class="logo" (click)="ui.back(\'home\')"></button>\n\n        </ion-buttons>\n\n        <ion-buttons right>\n\n            <button ion-button clear no-padding (click)="help.show()" color="neutral" class="help">HELP?</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-lg-8 col-md-8 col-sm-12 push-lg-2 push-md-2 style="margin-top: 35px;">\n\n                <ion-card style="padding-top: 50px; padding-bottom: 100px;">\n\n                    <div class="error-symbol-container">\n\n                        <img src="assets/images/icons/error-symbol.svg" alt="" style="max-width: 168px;" />\n\n                    </div>\n\n                    <div class="error-info">\n\n                        <p>We do not currently support Internet Explorer 11 on Windows 8 and higher.</p>\n\n                        <p>We recommend using Google Chrome or Mozilla Firefox instead.</p>\n\n                        <p class="small">If you have not already downloaded one of these browsers,<br />you can click on the links below to get started:</p>\n\n                        <div class="downloads">\n\n                            <a href="https://www.google.com/chrome/" class="chrome">Download now</a>\n\n                            <a href="https://www.mozilla.org/en-US/firefox/new/" class="firefox">Download now</a>\n\n                        </div>\n\n                        <p>If you need assistance feel free to call us at (855) 383-0735</p>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\incompatible.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ErrorIncompatiblePage);
    return ErrorIncompatiblePage;
}());

//# sourceMappingURL=incompatible.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorUnknownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorUnknownPage = (function () {
    function ErrorUnknownPage(help, ui) {
        this.help = help;
        this.ui = ui;
    }
    ErrorUnknownPage.prototype.ionViewDidEnter = function () {
        // Close any loading spinners.
        this.ui.loading.hide();
    };
    ErrorUnknownPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-error-unknown',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\error-unknown.html"*/'﻿<ion-header>\n\n    <ion-navbar [hideBackButton]="ui.desktop">\n\n        <ion-buttons left>\n\n            <button ion-button class="logo" (click)="ui.back(\'start\')"></button>\n\n        </ion-buttons>\n\n        <ion-buttons right *ngIf="ui.desktop">\n\n            <button ion-button clear no-padding color="neutral" class="help" (click)="help.show()">HELP?</button>\n\n        </ion-buttons>\n\n        <ion-buttons right *ngIf="ui.mobile">\n\n            <button ion-button icon-only menuToggle><ion-icon name="menu"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div *ngIf="resetSuccess == true" class="bar bar-header bar-balanced success-bar">\n\n        <h1 class="success-bar-text"> {{ \'SUCCESSFUL_RESET_PASSWORD\' | translate }}</h1>\n\n    </div>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-lg-6 col-md-8 col-sm-12 push-lg-3 push-md-2 style="margin-top: 35px;">\n\n                <ion-card style="padding-top: 50px; padding-bottom: 100px;">\n\n                    <div class="error-symbol-container">\n\n                        <img src="assets/images/icons/error-symbol.svg" alt="" style="max-width: 168px;" />\n\n                    </div>\n\n                    <div class="error-title">\n\n                        <p>\n\n                            We\'re sorry, something has gone wrong.\n\n                        </p>\n\n                    </div>\n\n                    <p text-center style="margin-top: 20px;">\n\n                        We are working to resolve the problem as soon as possible. Please try again later.\n\n                    </p>\n\n                    <div style="margin-top: 20px; text-align: center;">\n\n                        <button type="button" ion-button text-center (click)="onGoBackClicked();" color="secondary-inverse">GO BACK</button>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\error\error-unknown.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], ErrorUnknownPage);
    return ErrorUnknownPage;
}());

//# sourceMappingURL=error-unknown.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(platform, params, ui) {
        this.platform = platform;
        this.params = params;
        this.ui = ui;
    }
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //console.info('PageHome.ionViewDidEnter');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-title>Home</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only menuToggle><ion-icon name="menu"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content><!--(ionScrollEnd)="scrolled($event)"-->\n\n    <header>\n\n        <h1>Welcome to the Community</h1>\n\n    </header>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-12 col-md-6 #colCommunity>\n\n                <ion-card class="community">\n\n                    <div class="scrim">\n\n                        <div class="scrim-content">\n\n                            <ion-card-header>Review the community summary</ion-card-header>\n\n                            <ion-card-content>\n\n                                <p>Compare your responses with other members.</p>\n\n                            </ion-card-content>\n\n                        </div>\n\n                        <div class="scrim-buttons" *ngIf="review && review == \'community\'">\n\n                            <button ion-button small color="secondary">Continue</button>\n\n                        </div>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-6 #colResearch>\n\n                <ion-card class="research">\n\n                    <div class="scrim">\n\n                        <div class="scrim-content">\n\n                            <ion-card-header>Get targeted research briefs</ion-card-header>\n\n                            <ion-card-content>\n\n                                <p>View medical research selected just for you based on your profile.</p>\n\n                            </ion-card-content>\n\n                        </div>\n\n                        <div class="scrim-buttons" *ngIf="review && review == \'research\'">\n\n                            <button ion-button small color="secondary">Continue</button>\n\n                        </div>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-12 col-md-6 #colConnect>\n\n                <ion-card class="connect">\n\n                    <div class="scrim">\n\n                        <div class="scrim-content">\n\n                            <ion-card-header>Find people like you</ion-card-header>\n\n                            <ion-card-content>\n\n                                <p>Connect with individuals within the community.</p>\n\n                            </ion-card-content>\n\n                        </div>\n\n                        <div class="scrim-buttons" *ngIf="review && review == \'connect\'">\n\n                            <button ion-button small color="secondary">Continue</button>\n\n                        </div>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-6 #colProfile>\n\n                <ion-card class="profile">\n\n                    <div class="scrim">\n\n                        <div class="scrim-content">\n\n                            <ion-card-header>Share and update your profile</ion-card-header>\n\n                            <ion-card-content>\n\n                                <p>Keep your medical provider informed about your experience.</p>\n\n                            </ion-card-content>\n\n                        </div>\n\n                        <div class="scrim-buttons" *ngIf="review && review == \'profile\'">\n\n                            <button ion-button small color="secondary">Continue</button>\n\n                        </div>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <div class="review-screen"></div>\n\n</ion-content>'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_help__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyPage = (function () {
    function PrivacyPage(help, ui) {
        this.help = help;
        this.ui = ui;
        this.content = [];
    }
    PrivacyPage.prototype.ionViewWillEnter = function () {
    };
    PrivacyPage.prototype.ionViewDidEnter = function () {
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\privacy\privacy.html"*/'<ion-header>\n\n    <ion-navbar no-border>\n\n        <ion-title>Privacy Policy</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only menuToggle><ion-icon name="menu"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <p>Effective date: April 22, 2019</p>\n\n\n\n\n\n                        <p>Ionic Debug ("us", "we", or "our") operates the Ionic Debug mobile application (the "Service").</p>\n\n\n\n                        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Ionic Debug is created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy Generator</a>.</p>\n\n\n\n                        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>\n\n\n\n\n\n                        <h2>Information Collection And Use</h2>\n\n\n\n                        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n\n\n                        <h3>Types of Data Collected</h3>\n\n\n\n                        <h4>Personal Data</h4>\n\n\n\n                        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>\n\n\n\n                        <ul>\n\n                            <li>Cookies and Usage Data</li>\n\n                        </ul>\n\n\n\n                        <h4>Usage Data</h4>\n\n\n\n                        <p>When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").</p>\n\n\n\n                        <h4>Tracking & Cookies Data</h4>\n\n                        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n\n                        <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\n\n                        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\n\n                        <p>Examples of Cookies we use:</p>\n\n                        <ul>\n\n                            <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n\n                            <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n\n                            <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n\n                        </ul>\n\n\n\n                        <h2>Use of Data</h2>\n\n\n\n                        <p>Ionic Debug uses the collected data for various purposes:</p>\n\n                        <ul>\n\n                            <li>To provide and maintain the Service</li>\n\n                            <li>To notify you about changes to our Service</li>\n\n                            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n\n                            <li>To provide customer care and support</li>\n\n                            <li>To provide analysis or valuable information so that we can improve the Service</li>\n\n                            <li>To monitor the usage of the Service</li>\n\n                            <li>To detect, prevent and address technical issues</li>\n\n                        </ul>\n\n\n\n                        <h2>Transfer Of Data</h2>\n\n                        <p>Your information, including Personal Data, may be transferred to � and maintained on � computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\n\n                        <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>\n\n                        <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\n\n                        <p>Ionic Debug will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n\n\n                        <h2>Disclosure Of Data</h2>\n\n\n\n                        <h3>Legal Requirements</h3>\n\n                        <p>Ionic Debug may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n\n                        <ul>\n\n                            <li>To comply with a legal obligation</li>\n\n                            <li>To protect and defend the rights or property of Ionic Debug</li>\n\n                            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n\n                            <li>To protect the personal safety of users of the Service or the public</li>\n\n                            <li>To protect against legal liability</li>\n\n                        </ul>\n\n\n\n                        <h2>Security Of Data</h2>\n\n                        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\n\n\n\n                        <h2>Service Providers</h2>\n\n                        <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n\n                        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\n\n\n\n\n\n\n\n                        <h2>Links To Other Sites</h2>\n\n                        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n\n                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n\n\n\n\n\n                        <h2>Children\'s Privacy</h2>\n\n                        <p>Our Service does not address anyone under the age of 18 ("Children").</p>\n\n                        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\n\n\n\n\n\n                        <h2>Changes To This Privacy Policy</h2>\n\n                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\n\n                        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>\n\n                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n\n\n\n\n\n                        <h2>Contact Us</h2>\n\n                        <p>If you have any questions about this Privacy Policy, please contact us:</p>\n\n                        <ul>\n\n                            <li>By email: info@debug.com</li>\n\n\n\n                        </ul>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <footer>\n\n        <button ion-button clear color="medium" type="button" (click)="ui.slide(\'about\')">About Us</button>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\ClearCostHealth\v3SideMenu-iOS12.2-bug\src\pages\privacy\privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_help__["a" /* HelpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Format; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Format = (function () {
    function Format() {
        this.match = {
            phone: '(***) ***-****',
            ssn: '***-**-****'
        };
    }
    Format.prototype.transform = function (value, key) {
        if (value) {
            var pattern = this.match[key], format = '', index = 0;
            for (var i = 0; i < value.length; i++) {
                while (index < pattern.length && pattern[index] !== '*') {
                    format += pattern[index];
                    index++;
                }
                format += value[i];
                index++;
                //console.debug(i + ':' + value.length + ', ' + index + ':' + pattern.length);
                if (i === value.length - 1 && index < pattern.length) {
                    while (index < pattern.length && pattern[index] !== '*') {
                        format += pattern[index];
                        index++;
                    }
                }
            }
            return format;
        }
        else {
            return value;
        }
    };
    Format = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'format'
        })
    ], Format);
    return Format;
}());

//# sourceMappingURL=format.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefTarget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HrefTarget = (function () {
    function HrefTarget() {
    }
    HrefTarget.prototype.transform = function (value) {
        var regex = /href="([\S]+)"/g, target = value.replace(regex, 'onclick="window.open(\'$1\', \'_system\')"');
        return target;
    };
    HrefTarget = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'hrefTarget'
        })
    ], HrefTarget);
    return HrefTarget;
}());

//# sourceMappingURL=hrefTarget.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UtcConvertPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentDatePipe = (function () {
    function MomentDatePipe() {
    }
    MomentDatePipe.prototype.transform = function (value, args) {
        var format = args;
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    MomentDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'momentDatePipe',
            pure: false
        })
    ], MomentDatePipe);
    return MomentDatePipe;
}());

var UtcConvertPipe = (function () {
    function UtcConvertPipe() {
    }
    UtcConvertPipe.prototype.transform = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](value).local();
    };
    UtcConvertPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'convertUtcLocal',
            pure: false
        })
    ], UtcConvertPipe);
    return UtcConvertPipe;
}());

//# sourceMappingURL=momentDate.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 289,
	"./af.js": 289,
	"./ar": 290,
	"./ar-dz": 291,
	"./ar-dz.js": 291,
	"./ar-kw": 292,
	"./ar-kw.js": 292,
	"./ar-ly": 293,
	"./ar-ly.js": 293,
	"./ar-ma": 294,
	"./ar-ma.js": 294,
	"./ar-sa": 295,
	"./ar-sa.js": 295,
	"./ar-tn": 296,
	"./ar-tn.js": 296,
	"./ar.js": 290,
	"./az": 297,
	"./az.js": 297,
	"./be": 298,
	"./be.js": 298,
	"./bg": 299,
	"./bg.js": 299,
	"./bn": 300,
	"./bn.js": 300,
	"./bo": 301,
	"./bo.js": 301,
	"./br": 302,
	"./br.js": 302,
	"./bs": 303,
	"./bs.js": 303,
	"./ca": 304,
	"./ca.js": 304,
	"./cs": 305,
	"./cs.js": 305,
	"./cv": 306,
	"./cv.js": 306,
	"./cy": 307,
	"./cy.js": 307,
	"./da": 308,
	"./da.js": 308,
	"./de": 309,
	"./de-at": 310,
	"./de-at.js": 310,
	"./de-ch": 311,
	"./de-ch.js": 311,
	"./de.js": 309,
	"./dv": 312,
	"./dv.js": 312,
	"./el": 313,
	"./el.js": 313,
	"./en-au": 314,
	"./en-au.js": 314,
	"./en-ca": 315,
	"./en-ca.js": 315,
	"./en-gb": 316,
	"./en-gb.js": 316,
	"./en-ie": 317,
	"./en-ie.js": 317,
	"./en-nz": 318,
	"./en-nz.js": 318,
	"./eo": 319,
	"./eo.js": 319,
	"./es": 320,
	"./es-do": 321,
	"./es-do.js": 321,
	"./es.js": 320,
	"./et": 322,
	"./et.js": 322,
	"./eu": 323,
	"./eu.js": 323,
	"./fa": 324,
	"./fa.js": 324,
	"./fi": 325,
	"./fi.js": 325,
	"./fo": 326,
	"./fo.js": 326,
	"./fr": 327,
	"./fr-ca": 328,
	"./fr-ca.js": 328,
	"./fr-ch": 329,
	"./fr-ch.js": 329,
	"./fr.js": 327,
	"./fy": 330,
	"./fy.js": 330,
	"./gd": 331,
	"./gd.js": 331,
	"./gl": 332,
	"./gl.js": 332,
	"./gom-latn": 333,
	"./gom-latn.js": 333,
	"./he": 334,
	"./he.js": 334,
	"./hi": 335,
	"./hi.js": 335,
	"./hr": 336,
	"./hr.js": 336,
	"./hu": 337,
	"./hu.js": 337,
	"./hy-am": 338,
	"./hy-am.js": 338,
	"./id": 339,
	"./id.js": 339,
	"./is": 340,
	"./is.js": 340,
	"./it": 341,
	"./it.js": 341,
	"./ja": 342,
	"./ja.js": 342,
	"./jv": 343,
	"./jv.js": 343,
	"./ka": 344,
	"./ka.js": 344,
	"./kk": 345,
	"./kk.js": 345,
	"./km": 346,
	"./km.js": 346,
	"./kn": 347,
	"./kn.js": 347,
	"./ko": 348,
	"./ko.js": 348,
	"./ky": 349,
	"./ky.js": 349,
	"./lb": 350,
	"./lb.js": 350,
	"./lo": 351,
	"./lo.js": 351,
	"./lt": 352,
	"./lt.js": 352,
	"./lv": 353,
	"./lv.js": 353,
	"./me": 354,
	"./me.js": 354,
	"./mi": 355,
	"./mi.js": 355,
	"./mk": 356,
	"./mk.js": 356,
	"./ml": 357,
	"./ml.js": 357,
	"./mr": 358,
	"./mr.js": 358,
	"./ms": 359,
	"./ms-my": 360,
	"./ms-my.js": 360,
	"./ms.js": 359,
	"./my": 361,
	"./my.js": 361,
	"./nb": 362,
	"./nb.js": 362,
	"./ne": 363,
	"./ne.js": 363,
	"./nl": 364,
	"./nl-be": 365,
	"./nl-be.js": 365,
	"./nl.js": 364,
	"./nn": 366,
	"./nn.js": 366,
	"./pa-in": 367,
	"./pa-in.js": 367,
	"./pl": 368,
	"./pl.js": 368,
	"./pt": 369,
	"./pt-br": 370,
	"./pt-br.js": 370,
	"./pt.js": 369,
	"./ro": 371,
	"./ro.js": 371,
	"./ru": 372,
	"./ru.js": 372,
	"./sd": 373,
	"./sd.js": 373,
	"./se": 374,
	"./se.js": 374,
	"./si": 375,
	"./si.js": 375,
	"./sk": 376,
	"./sk.js": 376,
	"./sl": 377,
	"./sl.js": 377,
	"./sq": 378,
	"./sq.js": 378,
	"./sr": 379,
	"./sr-cyrl": 380,
	"./sr-cyrl.js": 380,
	"./sr.js": 379,
	"./ss": 381,
	"./ss.js": 381,
	"./sv": 382,
	"./sv.js": 382,
	"./sw": 383,
	"./sw.js": 383,
	"./ta": 384,
	"./ta.js": 384,
	"./te": 385,
	"./te.js": 385,
	"./tet": 386,
	"./tet.js": 386,
	"./th": 387,
	"./th.js": 387,
	"./tl-ph": 388,
	"./tl-ph.js": 388,
	"./tlh": 389,
	"./tlh.js": 389,
	"./tr": 390,
	"./tr.js": 390,
	"./tzl": 391,
	"./tzl.js": 391,
	"./tzm": 392,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 392,
	"./uk": 394,
	"./uk.js": 394,
	"./ur": 395,
	"./ur.js": 395,
	"./uz": 396,
	"./uz-latn": 397,
	"./uz-latn.js": 397,
	"./uz.js": 396,
	"./vi": 398,
	"./vi.js": 398,
	"./x-pseudo": 399,
	"./x-pseudo.js": 399,
	"./yo": 400,
	"./yo.js": 400,
	"./zh-cn": 401,
	"./zh-cn.js": 401,
	"./zh-hk": 402,
	"./zh-hk.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 615;

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtml = (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    SafeHtml = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtml);
    return SafeHtml;
}());

//# sourceMappingURL=safeHtml.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySort = (function () {
    function ArraySort() {
    }
    ArraySort.prototype.transform = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    ArraySort = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'sort'
        })
    ], ArraySort);
    return ArraySort;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var InputMask = (function () {
    function InputMask(pattern) {
        this.pattern = pattern;
    }
    InputMask.prototype.onInputChange = function (e) {
        try {
            var value = e.target.value, caret = e.target.selectionStart, pattern = this.pattern, reserve = pattern.replace(/\*/, 'g'), applied = '', ordinal = 0;
            if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
                if (value.length) {
                    //remove all trailing formatting
                    while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
                        value = value.substring(0, value.length - 1);
                    }
                    //remove all leading formatting to restore placeholder
                    if (pattern.substring(0, value.length).indexOf('*') < 0) {
                        value = value.substring(0, value.length - 1);
                    }
                }
            }
            //apply mask characters 
            for (var i = 0; i < value.length; i++) {
                //enforce pattern limit
                if (i < pattern.length) {
                    //match mask
                    if (value[i] === pattern[ordinal]) {
                        applied += value[i];
                        ordinal++;
                    }
                    else if (reserve.indexOf(value[i]) > -1) {
                        //skip other reserved characters
                    }
                    else {
                        //apply leading formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                        applied += value[i];
                        ordinal++;
                        //apply trailing formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                    }
                }
            }
            e.target.value = applied;
            if (caret < value.length) {
                e.target.setSelectionRange(caret, caret);
            }
        }
        catch (ex) {
            console.error(ex.message);
        }
    };
    InputMask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mask]',
            host: {
                '(keyup)': 'onInputChange($event)'
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('mask')),
        __metadata("design:paramtypes", [String])
    ], InputMask);
    return InputMask;
}());

//# sourceMappingURL=inputmask.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Markdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Markdown = (function () {
    function Markdown(el) {
        this.el = el;
    }
    Markdown.prototype.ngOnInit = function () {
        //console.debug('markdown ngOnInit');
        //console.log(this.content);
        var that = this;
        if (that.html) {
            that.el.nativeElement.innerHTML = that.content;
        }
        else {
            var renderer = new __WEBPACK_IMPORTED_MODULE_1_marked__["Renderer"](), that_1 = this;
            renderer.link = function (href, title, text) {
                //let target = that.platform.is('cordova') && !navigator.simulator ? '_system' : '_blank';
                if (href && text) {
                    if (title) {
                        //'onclick="window.open(\'$1\', \'_system\')"'
                        //return '<a href="' + href + '" target="' + target + '" title="' + title + '">' + text + '</a>';
                        return '<a onclick="window.open(\'' + href + '\', \'_system\')" title="' + title + '">' + text + '</a>';
                    }
                    else {
                        //return '<a href="' + href + '" target="' + target + '">' + text + '</a>';
                        return '<a onclick="window.open(\'' + href + '\', \'_system\')">' + text + '</a>';
                    }
                }
                else {
                    return href; //prevent auto-<a> wrapping
                }
            };
            __WEBPACK_IMPORTED_MODULE_1_marked__["setOptions"]({ renderer: renderer, });
            that_1.el.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_1_marked__(that_1.content);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Markdown.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Markdown.prototype, "html", void 0);
    Markdown = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[markdown]',
            inputs: ['content']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], Markdown);
    return Markdown;
}());

//# sourceMappingURL=markdown.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgImg = (function () {
    function SvgImg(el) {
        this.el = el;
    }
    SvgImg.prototype.load = function () {
        this.element.load(this.src);
    };
    SvgImg.prototype.ngOnInit = function () {
        //console.debug('svg-img OnInit');
        this.element = __WEBPACK_IMPORTED_MODULE_1_jquery__(this.el.nativeElement);
        this.element.addClass('svg-img');
        this.load();
    };
    SvgImg.prototype.ngOnChanges = function () {
        //console.debug('svg-img OnChanges');
        //this.load();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SvgImg.prototype, "src", void 0);
    SvgImg = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 'svg-img',
            inputs: ['embed']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SvgImg);
    return SvgImg;
}());

//# sourceMappingURL=svgimg.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    name: "Debug",
    display: "Debug",
    appName: "Debug",
    brandId: "debug",
    inactiveSessionDuration: 840000,
    version: "0.0.1",
    release: "0.01",
    scheme: "https",
    host: "debug",
    environment: "dev",
    regex: {
        password: /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    },
    tabs: false,
    browserSupport: {
        chrome: 48,
        fireFox: 45,
        ie: 11
    }
};
//# sourceMappingURL=app.config.js.map

/***/ })

},[404]);
//# sourceMappingURL=main.js.map