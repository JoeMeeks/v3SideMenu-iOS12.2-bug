import { Component, ViewChild } from '@angular/core';
import { Config, Platform, App, Nav, DeepLinker, AlertController, LoadingController, MenuController, ModalController, ToastController } from 'ionic-angular';  //import & inject these to prevent manualTreeshaking removal in --prod builds
import { TranslateService } from 'ng2-translate';
import { AppConfig } from './app.config';
import { Deeplinks } from '@ionic-native/deeplinks';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HelpService } from '../providers/help';
import { SessionService } from '../providers/session';
import { UIService } from '../providers/ui';
import { LoginPage } from '../pages/login/login';

@Component({
    templateUrl: 'app.html'
})
export class MPM {
    
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    private ionapp: Element;

    constructor(
        private app: App,
        private config: Config,
        private platform: Platform,
        private deeplinker: DeepLinker,
        private deeplinks: Deeplinks,
        private keyboard: Keyboard,
        private splashscreen: SplashScreen,
        private statusbar: StatusBar,
        private alert: AlertController,
        private loading: LoadingController,
        private menu: MenuController,
        private modal: ModalController,
        private toast: ToastController,
        private help: HelpService,
        public session: SessionService,
        public translate: TranslateService,
        public ui: UIService
    ) {

        platform.ready().then(() => {
            //console.info('platform ready');
            //console.log(platform.platforms());

            if (platform.is('cordova')) {
                this.plugins();
            } else {
                ///console.info('wait for it...');
                document.addEventListener('deviceready', () => {
                    //console.info('deviceready');
                    platform._platforms.splice(0, platform._platforms.length);
                    platform.init();
                    app.setElementClass('platform-mobileweb', false);
                    app.setElementClass('platform-cordova', true);
                    this.plugins();
                });
            }

            app.setTitle(AppConfig.name);

            translate.setDefaultLang('en');
            let languages = ['en', 'es'],
                browser = translate.getBrowserLang(); //TODO: use localization plugin
            translate.use('en');
        });
    }

    plugins() {
        //console.debug('cordova device ready:');
        this.statusbar.overlaysWebView(true);
        this.statusbar.styleLightContent();
        this.keyboard.onKeyboardShow().subscribe((e) => {
            //console.log('ONKEYBOARDSHOW');
            this.app.setElementClass('keyboard', true);
            //setTimeout(() => {
                let active: any = document.activeElement;
                //console.debug('active element:');
                //console.log(active);
                if (active) {
                    if (this.platform.is('android') && e.keyboardHeight) {
                        this.ionapp = active.closest('.app-root');
                        console.log('closest .app-root:');
                        console.log(this.ionapp);
                        this.ionapp.setAttribute('style', 'height: calc(100% - ' + e.keyboardHeight + 'px);');
                    }
                    if (active.scrollIntoViewIfNeeded) {
                        //console.log('scrollIntoViewIfNeeded');
                        active.scrollIntoViewIfNeeded(true);
                    }
                }
            //}, 200);
        });
        this.keyboard.onKeyboardHide().subscribe((e) => {
            //console.log('ONKEYBOARDHIDE');
            this.app.setElementClass('keyboard', false);
            if (this.platform.is('android') && this.ionapp) {
                this.ionapp.setAttribute('style', 'height: 100%;');
            }
        });
        this.splashscreen.hide();
    }

    authenticated() {
        console.debug('app.component.authenticated');
        let name = this.app.getActiveNav().getActive().name;
        console.debug(name);
        return true;
    }

    assist() {
        this.menu.close().then(this.help.show);
    }

    link(page: string) {
        this.menu.close().then(() => {
            if (this.ui.getActivePageName() !== page) {
                this.ui.slide(page, {}, { animate: false });
            }
        });
    }

    logout() {
        this.menu.close().then(() => {
            this.session.authenticated = false;
            this.ui.flip('login', {}, { direction: 'right' });
        });
    }
}
