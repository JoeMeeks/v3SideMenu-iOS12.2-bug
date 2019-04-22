import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform, NavParams, Content, ModalOptions } from "ionic-angular";
import { Device } from '@ionic-native/device';
import { HelpService } from '../../providers/help';
import { SessionService } from '../../providers/session';
import { UIService } from '../../providers/ui';
import { AppConfig } from '../../app/app.config';
import * as _ from 'underscore';

const modes = {
    splash: 'splash',
    password: 'password',
    bioID: 'bioID'
};

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    @ViewChild(Content) content: Content;

    @ViewChild('lblUsername') lblUsername: ElementRef;
    @ViewChild('lblPassword') lblPassword: ElementRef;

    public resetSuccess: boolean;
    public initialVerifiedLogin: boolean;

    private verified: boolean = true;

    public firstLogin: boolean = false

    public user: any = {
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
    }

    public home: string;
    private required: string[];

    public appver: string;

    public mode: string;

    constructor(
        private params: NavParams,
        private platform: Platform,
        public help: HelpService,
        private session: SessionService,
        public ui: UIService
        
    ) {
        this.appver = AppConfig.release;
        this.mode = modes.password;
    }

    switchMode(val) {
        //console.warn('switchMode: ' + val);
        if (this.mode !== val) {
            this.mode = val;
            this.content.resize();
        }
    }

    submit(e) {
        e.preventDefault();
        this.session.authenticated = true;
        this.ui.flip('home');
    }

    switchPassword = _.debounce(() => {
        this.switchMode(modes.password);
    }, 2000, true);

    ionViewWillEnter() {
        this.user.username.value = 'test@test.com';
        this.user.password.value = 'testing123!';
    }

    ionViewDidEnter() {
        //console.log('LoginPage ionViewDidEnter');
        this.switchMode(modes.password);
    }
}