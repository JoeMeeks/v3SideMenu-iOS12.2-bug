import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ImageService } from '../providers/image';

var self: BackgroundImage;

@Directive({
    selector: '[background-image]'
})
export class BackgroundImage implements OnInit, OnDestroy {
    @Input() url: string;
    @Output() loaded = new EventEmitter();

    public load: any;
    public error: any;

    constructor(
        public el: ElementRef,
        public image: ImageService,
        public renderer: Renderer2
    ) {
        //console.log('background-image constructor:');
        self = this;
        //console.log(self);
    }

    ngOnInit() {
        //console.debug('background-image OnInit');
        const native = self.el.nativeElement;
        const render = self.renderer;

        //console.log(self.url);

        self.load = render.listen(native, 'load', (res) => {
            //console.log('background-image load');
            render.addClass(native, 'loaded');
            self.loaded.emit();
        });

        self.error = render.listen(native, 'error', (err) => {
            console.error('background image error:');
            console.log(err);
        });

        //self.image.load(native, self.src).then(self.load).catch(self.error);
        native.style.backgroundImage = 'url("' + self.url + '")';
    }

    ngOnDestroy() {
        // remove listeners
        self.load();
        self.error();
    }

}