import { Component } from '@angular/core';
import { HelpService } from '../../providers/help';
import { UIService } from '../../providers/ui';
import { AppConfig } from '../../app/app.config';


@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    public release: string;
    public build: string;

    constructor(
        public help: HelpService,
        public ui: UIService
    ) {
        this.release = AppConfig.release;
        if (AppConfig.build) { this.build = AppConfig.build.toString(); }
    }

    ionViewWillEnter() {
       
    }

}
