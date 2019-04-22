import { Component } from '@angular/core';
import { HelpService } from '../../providers/help';
import { UIService } from '../../providers/ui';

@Component({
    selector: 'page-error-unknown',
    templateUrl: 'error-unknown.html'
})
export class ErrorUnknownPage {

    constructor(
        public help: HelpService,
        public ui: UIService
    ) {
        
    }

    ionViewDidEnter() {
        // Close any loading spinners.
        this.ui.loading.hide();
    }
}
