import { Component } from '@angular/core';
import { HelpService } from '../../providers/help';
import { UIService } from '../../providers/ui';

@Component({
    selector: 'page-error-404',
    templateUrl: 'error-404.html'
})
export class Error404Page {

    constructor(
        public help: HelpService,
        public ui: UIService
    ) {
        
    }

    ionViewDidEnter() {
        
    }

}
