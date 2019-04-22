import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as $ from 'jquery';

@Directive({
    selector: 'svg-img',
    inputs: ['embed']
})
export class SvgImg implements OnInit, OnChanges {
    @Input() src: string;
    private element: any;

    constructor(private el: ElementRef) {}

    load() {
        this.element.load(this.src);
    }

    ngOnInit() {
        //console.debug('svg-img OnInit');
        this.element = $(this.el.nativeElement);
        this.element.addClass('svg-img');
        this.load();
    }

    ngOnChanges() {
        //console.debug('svg-img OnChanges');
        //this.load();
    }

}