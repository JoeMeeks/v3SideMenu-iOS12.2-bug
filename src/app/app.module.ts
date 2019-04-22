import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common'; 
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { MPM } from './app.component';
import { AppConfig } from './app.config';

import * as Hammer from 'hammerjs';

import { Config, IonicApp, IonicModule, IonicErrorHandler, Platform, PageTransition } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { AppAvailability } from '@ionic-native/app-availability';
import { Deeplinks } from '@ionic-native/deeplinks';
import { Device } from '@ionic-native/device';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Globalization } from '@ionic-native/globalization'
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Keyboard } from '@ionic-native/keyboard';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SecureStorage } from '@ionic-native/secure-storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TouchID } from '@ionic-native/touch-id';

import { HelpService } from '../providers/help';
import { SessionService } from '../providers/session';
import { UIService } from '../providers/ui';

import { PageFade, ActionSheetLeave } from '../pages/transitions';
import { AboutPage } from '../pages/about/about';
import { Error404Page } from '../pages/error/error-404';
import { ErrorIncompatiblePage } from '../pages/error/incompatible';
import { ErrorUnknownPage } from '../pages/error/error-unknown';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PrivacyPage } from '../pages/privacy/privacy';

import { Format } from '../pipes/format';
import { HrefTarget } from '../pipes/hrefTarget';
import { MomentDatePipe, UtcConvertPipe } from '../pipes/momentDate';
import { SafeHtml } from '../pipes/safeHtml';
import { ArraySort } from '../pipes/sort';

import { InputMask } from '../directives/inputmask';
import { Markdown } from '../directives/markdown';
import { SvgImg } from '../directives/svgimg';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/lang', '.json');
}

export class GuestureConfig extends HammerGestureConfig {
    overrides = <any>{
        'swipe': { direction: Hammer.DIRECTION_ALL } //override stupid horizontal ONRY default
    }
}

@Injectable()
export class IonProErrorHandler implements ErrorHandler {
    ionicErrorHandler: IonicErrorHandler;
    platform: Platform;

    constructor(injector: Injector, platform: Platform) {
        try {
            this.ionicErrorHandler = injector.get(IonicErrorHandler);
        } catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }

    handleError(err: any): void {
        //if (window['cordova']) {
        //    Pro.monitoring.exception(new Error(err));
        //}
        Pro.monitoring.exception(new Error(err));
        // Remove this if you want to disable Ionic's auto exception handling in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    }
}

@NgModule({
    declarations: [
        MPM,
        AboutPage,
        Error404Page,
        ErrorUnknownPage,
        ErrorIncompatiblePage,
        HomePage,
        LoginPage,
        PrivacyPage,
        InputMask,
        Markdown,
        SvgImg,
        Format,
        HrefTarget,
        MomentDatePipe,
        UtcConvertPipe,
        SafeHtml,
        ArraySort
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        IonicModule.forRoot(MPM,
            {
                mode: 'md',
                actionSheetLeave: 'action-sheet-leave',
                pageTransition: 'page-fade',
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false,
                swipeBackEnabled: false
            },
            {
                links: [
                    { component: AboutPage, name: 'about', segment: 'about' },
                    { component: Error404Page, name: 'error-not-found', segment: 'error/not-found' },
                    { component: ErrorUnknownPage, name: 'error-unknown', segment: 'error/oops' },
                    { component: ErrorIncompatiblePage, name: 'error-incompatible', segment: 'error/incompatible' },
                    { component: HomePage, name: 'home', segment: 'home' },
                    { component: LoginPage, name: 'login', segment: '' },
                    { component: PrivacyPage, name: 'privacy', segment: 'privacy' }
                ]
            }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MPM,
        AboutPage,
        Error404Page,
        ErrorUnknownPage,
        ErrorIncompatiblePage,
        HomePage,
        LoginPage,
        PrivacyPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: HAMMER_GESTURE_CONFIG, useClass: GuestureConfig },
        CurrencyPipe,
        PercentPipe,
        AndroidFingerprintAuth,
        AppAvailability,
        Deeplinks,
        Device,
        File,
        FileOpener,
        Globalization,
        GoogleAnalytics,
        Keyboard,
        NativePageTransitions,
        SecureStorage,
        StatusBar,
        SplashScreen,
        TouchID,
        FileTransfer,
        HelpService,
        SessionService,
        UIService
    ]
})
export class AppModule {
    constructor(
        private config: Config,
        private platform: Platform
    ) {
        this.config.setTransition('action-sheet-leave', ActionSheetLeave);

        //if (!this.platform.is('ios')) {
        //    this.config.setTransition('page-fade', PageFade);
        //}
    }
}