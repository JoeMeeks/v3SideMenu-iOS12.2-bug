import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtml {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content: string) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}