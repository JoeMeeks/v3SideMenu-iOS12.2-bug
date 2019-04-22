import { Injectable } from '@angular/core';
import { UIService } from '../providers/ui';

var self: HelpService;

@Injectable()
export class HelpService {
    public apiUrl: string;

    constructor(
        private ui: UIService
    ) {
        self = this;
    }

    show() {
        let title = 'Need Assistance?',
            message = 'Give us a call at <a href="tel:5555555555" target="_system">(555) 555-5555</a>. We are here to help if you are having trouble or need to adjust any of your account settings.',
            button = {
                text: 'DISMISS',
                cssClass: 'ion-clear'
            };
        self.ui.alert(title, message, button, { enableBackdropDismiss: true, cssClass: 'help' });
    }

}
