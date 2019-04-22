import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, Content, Header, NavParams } from 'ionic-angular';
import { HelpService } from '../../providers/help';
import { UIService } from '../../providers/ui';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        private platform: Platform,
        private params: NavParams,
        public ui: UIService
    ) {
        
    }

    ionViewWillEnter() {

    }

    ionViewDidEnter() {
        //console.info('PageHome.ionViewDidEnter');
    }
}
