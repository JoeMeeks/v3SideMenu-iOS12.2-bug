import { Component, ElementRef, ViewChild } from '@angular/core';
import { HelpService } from '../../providers/help';
import { UIService } from '../../providers/ui';
import { AppConfig } from '../../app/app.config';

@Component({
    selector: 'page-privacy',
    templateUrl: 'privacy.html'
})
export class PrivacyPage {

    public content: any[] = [];

    constructor(
        public help: HelpService,
        public ui: UIService
    ) {
        
    }

    ionViewWillEnter() {
        
    }

    ionViewDidEnter() {
        
    }

}
