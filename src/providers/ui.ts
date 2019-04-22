import { Injectable } from '@angular/core';
import { App, Config, DeepLinker, Events, Platform, Animation, PageTransition, NavController, NavOptions, Content, Loading, LoadingController, ActionSheet, ActionSheetController, ActionSheetOptions, Alert, AlertController, AlertOptions, Modal, ModalController, ModalOptions, PopoverController, PopoverOptions, Toast, ToastController, ToastOptions } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { Globalization } from '@ionic-native/globalization';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { TranslateService } from 'ng2-translate';
import { AppConfig } from '../app/app.config';
import * as _ from 'underscore';

var self: UIService;
var prefix = {
    google: 'market://details?id=',
    itunes: 'itms-apps://itunes.apple.com/app/id'
};

@Injectable()
export class UIService {

    public animation: string;
    public viewDidEnter = null;
    public options;
    public tabBarElement: any;
    public os = {
        name: null,
        version: null,
        vendor: null

    };
    public browser = {
        name: null,
        version: {
            full: null,
            major: null,
            minor: null
        },
        supported: null
    };
    public browserSupport: BrowserSupport;
    public android: boolean;
    public desktop: boolean;
    public ios: boolean;
    public mobile: boolean;
    public tablet: boolean;
    public phone: boolean;
    public mobileweb: boolean;
    public environment: string;
    public deviceobsolete: boolean = false;
    public ie11incompatible: boolean = false;
    public debug: boolean;

    public portrait: boolean;
    public landscape: boolean;

    public pagestate = {
        history: [],
        current: null,
        canpop: false
    };

    private onOrientationChange(e?: Event) {
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
    }

    private content: Content = null;

    //stash component instances to dismiss on page navigation
    public active: { action: ActionSheet, alert: Alert, loading: Loading, modal: Modal, toast: Toast } = {
        action: null,
        alert: null,
        loading: null,
        modal: null,
        toast: null
    };

    //public spinner: Loading;
    public loading = {
        visible: false,
        element: null,
        content: null,
        show(options?: { text?: string, css?: string, blur?: boolean }) {
            if (options && options.blur) {
                //self.app.setElementClass('blur', true);
                let nav = self.app.getActiveNavs()[0];
                if (nav) nav.setElementClass('blur', true);
            }
            if (self.loading.visible) {
                if (!self.loading.element) {
                    let loading = document.getElementsByTagName('ion-loading');
                    _.each(loading, (el) => {
                        //console.log(el.attributes);
                        if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                            //console.log('loading element:');
                            //console.log(el);
                            self.loading.element = el;
                            let content = el.getElementsByClassName('loading-content');
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
                    requestAnimationFrame(() => {
                        self.loading.content.innerHTML = options.text;
                    });
                }
                if (options && options.css) {
                    //console.log('set css: ' + options.css);
                    self.active.loading.setCssClass(options.css); //this fails to actually update the UI
                    self.loading.element.className += ' ' + options.css;
                }
                return Promise.resolve();
            } else {
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
        hide() {
            let nav = self.app.getActiveNavs()[0];
            if (nav) nav.setElementClass('blur', false);
            self.loading.visible = false;
            self.loading.content = null;
            self.loading.element = null;
            //if the Loading was already dismissed, return a promise
            return self.active.loading ? self.active.loading.dismiss() : Promise.resolve();
        }
    };

    constructor(
        public app: App,
        public availability: AppAvailability,
        public config: Config,
        public device: Device,
        public deeplinker: DeepLinker,
        private events: Events,
        private globalization: Globalization,
        private platform: Platform,
        private loadingCtrl: LoadingController,
        private actionCtrl: ActionSheetController,
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private popoverCtrl: PopoverController,
        private toastCtrl: ToastController,
        public transitions: NativePageTransitions,
        public translate: TranslateService
    ) {
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

        self.app.viewWillEnter.subscribe(() => {
            if (navigator.simulator) {
                //console.debug('viewWillEnter with ' + self.animation + ' transition');
            } else {
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
        self.app.viewDidEnter.subscribe((e) => {
            //console.log('viewDidEnter:');
            //console.log(e);
            if (e.getContent) {
                self.content = e.getContent();
                //console.log('UI Content:');
                //console.log(self.content);
                if (self.desktop && self.content) {
                    if (self.content.getScrollElement) {
                        //self.content.setScrollElementStyle('transform', 'translateZ(0)');
                        let scroll = self.content.getScrollElement();
                        if (scroll && scroll.scrollIntoView) scroll.scrollIntoView();
                    } else if (self.content.getFixedElement) {
                        let fixed = self.content.getFixedElement();
                        if (fixed && fixed.scrollIntoView) fixed.scrollIntoView();
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
            self.app.setTitle(AppConfig.name);
        });

        if (!!window['cordova'] && self.device && self.device.version) {
            let parsed = self.device.version.split('.');
            if (parsed.length) {
                self.os.version = {
                    major: parsed[0] ? parseInt(parsed[0]) : 0,
                    minor: parsed[1] ? parseInt(parsed[1]) : 0,
                    revision: parsed[2] ? parseInt(parsed[2]) : 0
                }
            }
        }

        self.android = self.platform.is('android');
        self.desktop = self.platform.is('core');
        self.ios = self.platform.is('ios');
        self.mobile = self.platform.is('mobile');
        self.tablet = self.platform.is('tablet');
        self.phone = self.platform.is('mobile') && !self.platform.is('tablet');
        self.mobileweb = self.platform.is('mobileweb');
        self.environment = AppConfig.environment;
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
            let agent = navigator.userAgent,
                offset;
            //parse browser and version
            if (agent.indexOf('MSIE') !== -1) {
                self.browser.name = "ie"; //IE 7-11
                offset = agent.substring(agent.indexOf('MSIE ' + 5));
                offset = offset.substring(0, offset.indexOf(';'));
            } else if (agent.indexOf("Edge/") !== -1) {
                self.browser.name = "edge";
                offset = agent.substring(agent.indexOf('Edge/') + 53);
            } else if (agent.indexOf("Trident/") !== -1) {
                self.browser.name = "ie";
                offset = agent.substring(agent.indexOf('rv:') + 3);
                offset = offset.substring(0, offset.indexOf(')'));
            } else if (agent.indexOf('Chrome/') !== -1) {
                self.browser.name = 'chrome';
                offset = agent.substring(agent.indexOf('Chrome/') + 7);
                offset = offset.substring(0, offset.indexOf(' '));
            } else if (agent.indexOf("Firefox/") !== -1) {
                self.browser.name = "firefox";
                offset = agent.substring(agent.indexOf('Firefox/') + 8);
            } else if (agent.indexOf("Safari/") !== -1) {
                self.browser.name = "safari";
                if (agent.indexOf("Version/") != -1) {
                    offset = agent.substring(agent.indexOf("Version/") + 8);
                    offset = offset.substring(0, offset.indexOf(' '));
                } else {
                    offset = agent.substring(agent.indexOf("Safari/") + 7);
                }
            } else {
                self.browser.name = navigator.appName;
            }
            self.browserSupport = new BrowserSupport(48, 44, 11, 8);
            //parse version parts
            self.browser.version.full = offset;
            let parts = offset.split('.');
            self.browser.version.major = parseInt(parts[0]);
            self.browser.version.minor = parseInt(parts[1]);

            self.setBrowserSupport();
        } else if (self.platform.is('mobileweb') && (self.platform.is('android') || self.platform.is('ios'))) {
            let ver = self.platform.version();
            if (self.platform.is('android')) {
                //console.warn('android version:');
                //console.log(JSON.stringify(ver));
                //console.log(self.os.version);
                self.deviceobsolete = ver && ver.major && ver.major < 5;
            } else if (self.platform.is('ios')) {
                //console.warn('ios version:');
                //console.log(JSON.stringify(ver));
                //console.log(self.os.version);
                //self.deviceobsolete = ver && ver.major && ver.major < 11;
                console.warn('allow iOS 10 temporarily');
                self.deviceobsolete = ver && ver.major && ver.major < 10;
            }
        } else {
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
        window.addEventListener('orientationchange', () => {
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

    cordova(): boolean {
        return !!window['cordova'];
    }

    setBrowserSupport() {
        // Browser support settings
        if (AppConfig.browserSupport) {
            self.browserSupport.chrome = AppConfig.browserSupport.chrome;
            self.browserSupport.fireFox = AppConfig.browserSupport.fireFox;
            self.browserSupport.ie = AppConfig.browserSupport.ie;
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
    }

    //#region localization 
    language() {
        return self.globalization.getPreferredLanguage();
    }
    locale() {
        return self.globalization.getLocaleName();
    }

    //#endregion localization

    //#region tabs
    showTabs() {
        if (!self.tabBarElement) {
            self.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        }
        self.tabBarElement.style.display = 'flex';
    }

    hideTabs() {
        if (!self.tabBarElement) {
            self.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        }
        self.tabBarElement.style.display = 'none';
    }
    //#endregion tabs

    //#region dialogs
    action(title, buttons, options?: ActionSheetOptions) {
        let o = options || {};
        if (title) {
            self.translate.get(title).subscribe((res: string) => {
                //console.log('title translation: ' + res);
                if (res) {
                    o.title = res;
                }
            });
        }
        buttons.forEach((v, n) => {
            //console.log('option title: ' + v.text);
            self.translate.get(v.text).subscribe((res: string) => {
                //console.log('translation: ' + res);
                if (res) {
                    v.text = res;
                }
            });
            if (v.handler) {
                let after = v.handler;
                v.handler = () => {
                    self.active.action.dismiss().then(after);
                    return false;
                }
            }
        });
        o.buttons = buttons;
        let action = self.actionCtrl.create(o);
        action.onDidDismiss(data => {
            //console.debug('self.active.action.onDidDismiss');
            //console.log(data);
            self.active.action = null;
        });
        self.active.action = action;
        return action.present();
    }

    alert(title, message?, button?, options?: AlertOptions) {
        //console.log('AlertController:');
        //console.log(self.alertCtrl);
        if (title) {
            self.translate.get(title).subscribe((res: string) => {
                //console.log('title translation: ' + res);
                if (res) {
                    title = res;
                }
            });
        }
        if (message) {
            self.translate.get(message).subscribe((res: string) => {
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
        let b = button || {
            text: 'OK',
            handler: null
        };
        if (button) {
            self.translate.get(b.text).subscribe((res: string) => {
                //console.log('translation: ' + res);
                if (res) {
                    b.text = res;
                }
            });
            if (b.handler) {
                let after = b.handler;
                b.handler = () => {
                    alert.dismiss().then(after);
                    return false;
                }
            }
        }

        let o = options || {};
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
        let alert = self.alertCtrl.create(o);
        alert.onDidDismiss(data => {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    }

    confirm(title: string, message: string, buttons?: any[], options?: AlertOptions) {
        let b = buttons || [
                {
                    text: 'OK',
                    handler: null
                },
                {
                    text: 'Cancel',
                    handler: null
                }
            ];
        self.translate.get(title).subscribe((res: string) => {
            //console.log('title translation: ' + res);
            if (res) {
                title = res;
            }
        });
        self.translate.get(message).subscribe((res: string) => {
            //console.log('message translation: ' + res);
            if (res) {
                message = res;
            }
        });
        b.forEach((v, n) => {
            //console.log('option title: ' + v.text);
            self.translate.get(v.text).subscribe((res: string) => {
                //console.log('translation: ' + res);
                if (res) {
                    v.text = res;
                }
            });
            if (v.handler) {
                let after = v.handler;
                v.handler = () => {
                    alert.dismiss().then(after);
                    return false;
                }
            }
        });
        let o = options || {};
        //let popup = self.alertCtrl.create({
        //    title: title,
        //    message: message,
        //    buttons: b
        //});
        o.title = title;
        o.message = message;
        o.buttons = b;
        o.enableBackdropDismiss = false;
        let alert = self.alertCtrl.create(o);
        alert.onDidDismiss(data => {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    }

    popover(event: Event, component: any, data?: any, options?: PopoverOptions) {
        let popover = self.popoverCtrl.create(component, data, options);
        return popover.present({ ev: event });
    }

    prompt(title, message, inputs, buttons) {
        self.translate.get(title).subscribe((res: string) => {
            //console.log('title translation: ' + res);
            if (res) {
                title = res;
            }
        });
        self.translate.get(message).subscribe((res: string) => {
            //console.log('message translation: ' + res);
            if (res) {
                message = res;
            }
        });
        let alert = self.alertCtrl.create({
            title: title,
            inputs: inputs,
            buttons: buttons,
            enableBackdropDismiss: false
        });
        alert.onDidDismiss(data => {
            //console.debug('self.active.alert.onDidDismiss');
            //console.log(data);
            self.active.alert = null;
        });
        self.active.alert = alert;
        return alert.present();
    }

    toast(message: string, options?: ToastOptions) {
        //console.log('ToastController:');
        //console.log(self.toastCtrl);
        self.translate.get(message).subscribe((res: string) => {
            //console.log('button translation: ' + res);
            if (res) {
                message = res;
            }
        });
        let o = _.extend({ duration: 3000 }, options);
        o.message = message;
        let toast = self.toastCtrl.create(o);
        toast.onDidDismiss(data => {
            //console.debug('self.active.toast.onDidDismiss');
            //console.log(data);
            self.active.toast = null;
        });
        self.active.toast = toast;
        return toast.present();
    }
    //#endregion dialogs

    //#region modals
    modal(mode: string, type: any, data?: any, options?: ModalOptions) {
        //console.log('ModalController:');
        //console.log(self.modalCtrl);
        let d = data || {},
            o = options || { showBackdrop: false, enableBackdropDismiss: false },
            modal: Modal;
        return new Promise((resolve, reject) => {
            switch (mode) {
                case 'overlay':
                    //console.debug('present passcode modal');
                    let overlay = _.defaults({
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
            modal.onDidDismiss(data => {
                //console.debug('self.active.modal.onDidDismiss');
                //console.log(data);
                self.active.modal = null;
                resolve(data);
            });
            self.active.modal = modal;
            modal.present();
        });
    }
    //#endregion modals

    //#region async
    ajax(fn, options?: { text?: string, css?: string, blur?: boolean }) {
        return new Promise((resolve, reject) => {
            //console.debug('ajax request: show spinner');
            let success = (res) => {
                //setTimeout(self.loading.hide, 0); //timeout to prevent Uncaught (in promise): false for immediately resolved cached data
                self.loading.hide();
                //console.debug('ajax success: hide spinner');
                //console.log(res);
                resolve(res);
            }, failure = (err) => {
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


            let opts = _.defaults(options || {}, { blur: false });
            if (fn && typeof fn === 'function') {
                self.loading.show(opts);
                //setTimeout(spinner.spin, 200);
                return new Promise((resolve, reject) => {
                    fn().then(success).catch(failure);
                });
            } else if (fn && Array.isArray(fn)) {
                self.loading.show(opts);
                //setTimeout(spinner.spin, 200);
                Promise.all(fn).then(success).catch(failure);
            } else {
                reject('must pass a function to ui.ajax(fn)');
            }
        });
    }

    load(fn, options?: { text?: string, css?: string, blur?: boolean }) {
        //return _.debounce(() => { self.ajax(fn); }, 2000, true);
        let opts = _.defaults(options || {}, { blur: false });
        self.loading.show(opts);
        if (typeof fn === 'function') {
            //console.info('return promise');
            return new Promise((resolve, reject) => {
                //console.info('invoke method');
                setTimeout(() => { 
                    try {
                        fn().then(res => {
                            self.loading.hide();
                            //console.debug('load success: hide spinner');
                            //console.debug(res);
                            //console.info('resolve');
                            resolve(res);
                        });
                    } catch (ex) {
                        //console.error('load failure: hide spinner');
                        self.loading.hide();
                        console.error(ex.message);
                        //console.info('reject');
                        reject(ex);
                    }
                }, 100);
            });
        } else {
            return Promise.reject('must pass a function to ui.load(fn)');
        }
    }
    //#endregion async

    //#region page navigation
    getPageState() {
        return self.pagestate;
    }

    setPageState(name: string, params?: any, options?: any) {
        if (self.pagestate.current) {
            self.pagestate.history.push(self.pagestate.current);
        }
        self.pagestate.current = { name: name, params: params, options: options };
        //console.log('setPageState:');
        //console.log(self.pagestate);
    }

    getPageParams(current?: boolean) {
        if (current === true) {
            let nav: NavController = self.app.getRootNavs()[0];
            self.deeplinker.getCurrentSegments();
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                //console.log('getPageParams ' + self.getActivePageName());
                let params = self.pagestate.current && self.pagestate.current.name === self.getActivePageName() ? self.pagestate.current.params : null;
                resolve(params);
            }, 0);
        })
    }

    getCurrentSegments() {
        return self.deeplinker.getCurrentSegments();
    }

    getActivePageSegment() {
        let segments = self.deeplinker.getCurrentSegments();
        return segments[0].id;
    }

    getActivePageName() {
        let segments = self.deeplinker.getCurrentSegments();
        //console.log('getActivePageName');
        //console.log(segments);
        return segments.length ? segments[0].name : '';
    }

    fade = _.debounce(() => {
        if (!!window['cordova']) {
            let options = {
                duration: 400,
                slowdownfactor: 1,
                //slidePixels: 20,
                iosdelay: 0,
                androiddelay: 0,
                winphonedelay: 250,
                fixedPixelsTop: 0,
                fixedPixelsBottom: AppConfig.tabs ? 50 : 0
            };
            self.transitions.fade(options);
        } else {
            
        }
    }, 400, true)

    flip = _.debounce((page, params?: any, options?: any) => {
        params = !!params ? params : {};
        options = !!options ? options : {};
        let nav = self.app.getRootNavs()[0],
            anim: boolean = !window['cordova'],
            opts: NavOptions = self.platform.is('core') ? { animate: anim } : { animate: anim, animation: 'page-flip' },
            views = nav.getViews();
        //console.debug('ui.flip');
        //console.log(opts);
        if (!!window['cordova']) {
            self.options = _.extend({
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
            } else {
                return nav.push(page, params, opts);
            }
        } else {
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
    slide = _.debounce((page: string, params?: any, options?: any) => {
        let anim = self.platform.is('core') || self.platform.is('mobileweb') ? true : false;
        if (options && options.animate === false) {
            self.animation = 'none';
            anim = false;
        } else if (!!window['cordova']) {
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
            self.options = _.extend({
                direction: 'left',
                duration: 400,
                slowdownfactor: 1,
                //slidePixels: 20,
                iosdelay: 0,
                androiddelay: 0,
                winphonedelay: 250,
                fixedPixelsTop: 0,
                fixedPixelsBottom: AppConfig.tabs ? 50 : 0
            }, options);
            self.animation = 'slide';
        }
        let opts = options || {};
        opts.animate = anim;
        self.setPageState(page, params, options);
        return self.app.getRootNavs()[0].push(page, params, opts);
    }, 400, true);

    back = _.debounce((page?, params?, options?) => {
        if (!!window['cordova']) {
            self.options = _.extend({
                direction: 'right',
                duration: 400,
                slowdownfactor: 1,
                //slidePixels: 20,
                iosdelay: 0,
                androiddelay: 0,
                winphonedelay: 250,
                fixedPixelsTop: 0,
                fixedPixelsBottom: AppConfig.tabs ? 50 : 0
            }, options);
            self.animation = params && params.transition ? params.transition : 'slide';
        }
        let anim = self.isSimulator() || self.isDesktop() || self.platform.is('mobileweb') ? true : false,
            nav = self.app.getRootNavs()[0],
            views = nav.getViews();
        self.pagestate.canpop = true;
        //console.debug('ui.back: ' + page);
        //console.log(views);
        if (!page && views.length > 1) {
            //console.debug('nav.pop');
            return nav.pop({ animate: anim });
        } else if (page && views.length > 1 && _.findWhere(views, { id: page })) {
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
            let index = _.findIndex(views, { id: page }),
                count = index + 1,
                stack = _.first(views, count);
            //console.log(stack);
            let n = _.findIndex(self.pagestate.history, { name: page });
            if (n > -1) {
                self.pagestate.history.splice(n + 1);
                self.pagestate.current = self.pagestate.history.pop();
            }
            //if (self.desktop || self.mobileweb) {
            //    console.log(history.length);
            //}
            return nav.setPages(stack, { animate: anim });
        } else if (page) {
            let n = _.findIndex(self.pagestate.history, { name: page });
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
                    let segments = self.deeplinker.getSegmentsFromNav(nav);
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
                        let view: any = _.findWhere(views, { id: page });
                        if (view) {
                            //console.debug('nav.popTo: ' + page);
                            return nav.popTo(view, { animate: anim });
                        } else if (params && params.index) {
                            //view = nav.getByIndex(params.index);
                            //console.debug('nav.popTo ' + params.index);
                            //return nav.popTo(view, { animate: anim });
                            return nav.popTo(params.index, { animate: anim });
                        } else {
                            //console.debug('nav.setRoot: ' + page);
                            //return nav.pop({ animate: anim });
                            //console.warn(page + ' not found');
                            return nav.setRoot(page, params || {}, self.options);
                        }
                    } else {
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
        } else {
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
            } else {
                //console.debug('nav.popToRoot');
                return nav.popToRoot({ animate: anim });
            }
        }

    }, 400, true);

    //navigate back to root with animation
    root = _.debounce((page, params?, options?) => {
        if (!!window['cordova']) {
            self.options = _.extend({
                direction: 'right',
                duration: 400,
                slowdownfactor: 1,
                //slidePixels: 20,
                iosdelay: 0,
                androiddelay: 0,
                winphonedelay: 250,
                fixedPixelsTop: 0,
                fixedPixelsBottom: AppConfig.tabs ? 50 : 0
            }, options);
            self.animation = params && params.transition ? params.transition : 'slide';
        }
        let anim = self.isSimulator() || self.isDesktop() || self.platform.is('mobileweb') ? true : false,
            nav = self.app.getRootNavs()[0],
            view = nav.getActive(),
            p = params || {};
        //return nav.push(page, p, { animate: false }).then(() => {
        //    nav.removeView(view, { animate: false });
        //});
        return nav.setRoot(page, p, { animate: anim });
    }, 400, true);

    //redirect
    swap = _.debounce((page, params?, options?) => {
        let nav = self.app.getRootNavs()[0],
            view = nav.getActive(),
            p = params || {};
        //return nav.push(page, p, { animate: false }).then(() => {
        //    nav.removeView(view, { animate: false });
        //});
        //return nav.push(page, p, { animate: false });
        return nav.setRoot(page, p, { animate: false });
    }, 400, true);

    link(page, params?, options?) {
        self.slide(page, params, options);
        return false; //prevent href navigation afterwards but set href for browser link display behavior (underline, pointer cursor) and search indexing
    }

    //#endregion page navigation

    openWebsite = _.debounce((url: string) => {
        //console.debug('openWebsite: ' + url);
        window.open(url, '_system');
    }, 400, true);

    //#region app store
    //#region launch by url scheme
    launchStoreApp(options) {
        //console.debug('launchStoreApp:');
        //console.log(options);
        switch (self.device.platform.toLowerCase()) {
            case 'android':
                if (options.google) {
                    self.openAppStore(options.google);
                } else {
                    self.alert('App Not Available', 'Unable to open Android app because information missing');
                }
                break;
            case 'ios':
            case 'iphone':
            case 'ipad':
                if (options.itunes) {
                    self.openAppStore(options.itunes);
                } else {
                    self.alert('App Not Available', 'Unable to open iOS app because information missing');
                }
                break;
        }
    }

    launch(url, options) {
        //console.debug('ui launch: ' + url);
        //console.log(options);
        var ref,
            scheme;
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
            self.availability.check(scheme).then(e => {
                //console.info(scheme + ' is available');
                //$log.log(e);
                ref = window.open(url, '_system');
                //$log.log('app ref:');
                //$log.log(JSON.stringify(ref));
                if (!ref) {
                    self.launchStoreApp(options);
                } else {
                    ref.addEventListener('loaderror', onLoadError);
                }
            }, e => {  // Error callback
                //console.warn(scheme + ' unavailable');
                self.launchStoreApp(options);
            });
        } else {
            //DialogManager.toast('appAvailability plugin unavailable');
            self.launchStoreApp(options);
        }
    };

    /**
     * Attempt to launch mobile app by custom url scheme
     */
    scheme() {
        let original = window.location.href,
            redirect = window.location.hash.substr(2);
        //console.log('original: ' + original);
        //console.log('redirect: ' + redirect);
        try {
            if (redirect && redirect.length > 2) {
                let scheme = self.debug ? 'IonProDev://app/' + redirect : AppConfig.urlscheme + '://app/' + redirect;
                //console.log('invoke ' + scheme);
                window.location.assign(scheme);
            }
        } catch (ex) {
            console.log('return to original url')
            window.location.replace(original);
            console.error(ex.message);
            console.log(ex);
        }
    }
    //#endregion launch by url scheme

    getAppStoreURL(id?: string) {
        let storeID = id ? id : self.platform.is('ios') ? AppConfig.itunesAppStoreID : AppConfig.googleAppStoreID;
        return self.platform.is('ios') ? prefix.itunes + storeID : prefix.google + storeID;
    }

    openAppStore = _.debounce((id?: string) => {
        //console.debug('openAppStore:');
        //console.log(id);
        var url = self.getAppStoreURL(id);
        window.open(url, '_system');
    }, 400, true);
    //#endregion app store

    //#region drag & drop
    drag(e: Event) {
        e.preventDefault();
        //console.log(e);
        let element = e.currentTarget as HTMLElement;
        element.style['webkitCursor'] = '-webkit-grabbing';
        element.style['mozCursor'] = '-moz-grabbing';
        element.style.cursor = 'grabbing';
    }

    drop(e: Event) {
        //console.log(e);
        let element = e.currentTarget as HTMLElement;
        element.style['webkitCursor'] = '';
        element.style['mozCursor'] = '';
        element.style.cursor = '';
    }
    //#endregion drag & drop

    //#region utilities
    isMobileApp() {
        return self.platform.is('mobile') && !!window['cordova'];
    }

    isSimulator() {
        return !!navigator.simulator;
    }

    isDesktop() {
        return self.platform.is('core');
    }

    isMobileAppOrSimulator() {
        return self.isMobileApp() || self.isSimulator();
    }

    //#region validation

    public regex: any = {
        email: /[^@\s]+@[^@\s]+\.[^@\s]+/,
        password: AppConfig.regex.password || /^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])(?=.*?[#?!@$%^&*-])[0-9a-zA-Z\S]{8,}/
    };

    validEmailAddress(address) {
        //var validEmailRegEx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var re = new RegExp(self.regex.email);
        return re.test(address);
    }

    normalizeNumber(number) {
        return number.replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '').replace(' ', '');
    }

    validPhoneNumber(number) {
        let normalized = self.normalizeNumber(number);

        if (normalized.length !== 10) {
            return false;
        }

        let digits = /^\d+$/.test(normalized);
        return digits;
    }

    validSocialSecurity(number) {
        let normalized = self.normalizeNumber(number);

        if (normalized.length !== 9) {
            return false;
        }

        let digits = /^\d+$/.test(normalized);
        return digits;
    }

    validPassword(password, options?) {
        let len = options && options.length || 8;
        if (options && options.regex) {
            let re = new RegExp(options.regex);
            return re.test(password);
        } else {
            return password.length >= len;
        }
    }

    //#endregion validation

    resetFields(fields) {
        _.each(fields, (val, key) => {
            val = false;
        });
    }

    normalizeInputs(container, fields) {
        let normalize = (field) => {
            if (!container[field]) {
                container[field] = '';
            } else  if (typeof container[field] === 'string' || container[field] instanceof String) {
                container[field] = container[field].trim();
            }
        };

        if (fields === undefined) {
            _.each(container, function (val, key) {
                normalize(key);
            });
        } else {
            _.each(fields, function (field) {
                normalize(field);
            });
        }
    }

    localize(text: string) {
        return self.translate.get(text); //returns observable
    }

    confirmPhoneAction() {
        let iOS = self.device && self.device.platform && self.device.platform.toLowerCase() === 'ios';
        return iOS && self.os.version && (self.os.version.major > 10 || (self.os.version && self.os.version.major === 10 && self.os.version.minor >= 3));
    }

    //#region promise text handlers
    public console = {
        log: (obj: any) => {
            console.log(obj);
        },
        info: (obj: any) => {
            if (typeof obj === 'string') {
                console.info(obj);
            } else if (typeof obj === 'object' && obj.message) {
                console.info(obj.message);
            } else if (typeof obj === 'object' && obj.statusText) {
                console.info(obj.statusText);
            } else {
                console.info('INFO:');
                console.log(obj)
            }
        },
        warn: (obj: any) => {
            if (typeof obj === 'string') {
                console.warn(obj);
            } else if (typeof obj === 'object' && obj.message) {
                console.warn(obj.message);
            } else if (typeof obj === 'object' && obj.statusText) {
                console.warn(obj.statusText);
            } else {
                console.warn('WARN:');
                console.log(obj)
            }
        },
        debug: (obj: any) => {
            if (typeof obj === 'string') {
                console.debug(obj);
            } else if (typeof obj === 'object' && obj.message) {
                console.debug(obj.message);
            } else if (typeof obj === 'object' && obj.statusText) {
                console.debug(obj.statusText);
            } else {
                console.debug('DEBUG:');
                console.log(obj)
            }
        },
        error: (obj: any) => {
            if (typeof obj === 'string') {
                console.error(obj);
            } else if (typeof obj === 'object' && obj.message) {
                console.error(obj.message);
            } else if (typeof obj === 'object' && obj.statusText) {
                console.error(obj.statusText);
            } else {
                console.error('DEBUG:');
                console.log(obj)
            }
        }
    };
    //#endregion promise text handlers

    //#endregion utilities
}

export class ModalFadeIn extends PageTransition {

    init() {
        const ele = this.enteringView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'scale(1)' });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 0, 1);

        this
            .element(this.enteringView.pageRef())
            //.easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(400)
            //.add(backdrop)
            .add(wrapper);
    }
}

export class ModalFadeOut extends PageTransition {

    init() {
        const el = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'scale(1)' });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 1, 0);

        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .add(wrapper);
    }
}

export class PageFlip extends PageTransition {

    init() {
        super.init();

        let plt = this.plt,
            leavingView = this.leavingView,
            enteringView = this.enteringView,
            opts = this.opts,
            backDirection = (opts.direction === 'back');

        if (enteringView) {
            let enteringPage = new Animation(plt, enteringView.pageRef());

            if (backDirection) {
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-prev')
                    .afterRemoveClass('flip-enter-prev');
                enteringPage.beforeStyles({ 'z-index': 101 });
            } else {
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-next')
                    .afterRemoveClass('flip-enter-next');
            }
            
        }

        if (leavingView) {
            let leavingPage = new Animation(plt, leavingView.pageRef());

            if (backDirection) {
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-prev')
                    .afterRemoveClass('flip-leave-prev');
                leavingPage.beforeStyles({ 'z-index': 100 });
            } else {
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-next')
                    .afterRemoveClass('flip-leave-next');
            };
        }
    }
}

export class BrowserSupport {
    public chrome: number;
    public fireFox: number;
    public ie: number;
    public safari: number;
    public msEdge: number;

    constructor(
        chrome?: number,
        fireFox?: number,
        ie?: number,
        safari?: number,
        msEdge?: number
    ) {
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
}