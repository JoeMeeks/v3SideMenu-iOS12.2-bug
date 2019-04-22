import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as md from 'marked';

@Directive({
    selector: '[markdown]',
    inputs: ['content']
})
export class Markdown implements OnInit {

    @Input() content: string;
    @Input() html: boolean;

    constructor(
        public el: ElementRef
    ) { }

    ngOnInit() {
        //console.debug('markdown ngOnInit');
        //console.log(this.content);
        let that = this;
        if (that.html) {
            that.el.nativeElement.innerHTML = that.content;
        } else {
            let renderer = new md.Renderer(),
                that = this;
            renderer.link = function (href, title, text) {
                //let target = that.platform.is('cordova') && !navigator.simulator ? '_system' : '_blank';
                if (href && text) {
                    if (title) {
                        //'onclick="window.open(\'$1\', \'_system\')"'
                        //return '<a href="' + href + '" target="' + target + '" title="' + title + '">' + text + '</a>';
                        return '<a onclick="window.open(\'' + href + '\', \'_system\')" title="' + title + '">' + text + '</a>';
                    } else {
                        //return '<a href="' + href + '" target="' + target + '">' + text + '</a>';
                        return '<a onclick="window.open(\'' + href + '\', \'_system\')">' + text + '</a>';
                    }
                } else {
                    return href; //prevent auto-<a> wrapping
                }
            };
            md.setOptions({ renderer: renderer, });
            that.el.nativeElement.innerHTML = md(that.content);
        }
    }

}