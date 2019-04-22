import { Animation, PageTransition, Transition } from 'ionic-angular';

const TRANSLATEY = 'translateY';
const OFF_BOTTOM = '40px';
const CENTER = '0px';
const SHOW_BACK_BTN_CSS = 'show-back-button';

export class PageFade extends PageTransition {

    //fadeNext(plt, enteringView, opts, backDirection) {
    //    console.log('fadeNext');
    //    console.log(plt);
    //    console.log(enteringView);
    //    console.log(opts);
    //    console.log(backDirection);
    //}
    next: Animation;

    init() {
        super.init();

        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);

        let plt = this.plt,
            leavingView = this.leavingView,
            enteringView = this.enteringView,
            opts = this.opts,
            backDirection = (opts.direction === 'back');

        if (enteringView) {
            let enteringPage = new Animation(plt, enteringView.pageRef());

            if (backDirection) {
                //console.log('enteringView has backDirection');
                this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('slide-delay-back')
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0, 1, true);
            } else {
                //console.log('enteringView not backDirection');
                this.duration(opts.duration || 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('slide-delay-next')
                    .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
                    .fromTo('opacity', 0, 1, true);
            }

            if (enteringView.hasNavbar()) {
                let enteringPageEle = enteringView.pageRef().nativeElement,
                    enteringNavbarEle = enteringPageEle.querySelector('ion-navbar'),
                    enteringNavBar = new Animation(plt, enteringNavbarEle);
                this.add(enteringNavBar);
                let enteringBackButton = new Animation(plt, enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }

        // setup leaving view
        if (leavingView) {
            let leavingPage = new Animation(plt, leavingView.pageRef());
            if (backDirection) {
                //console.log('leavingView has backDirection');
                this.add(leavingPage);
                leavingPage
                    .beforeRemoveClass('slide-delay-back')
                    .beforeRemoveClass('slide-delay-next')
                    .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
                    .fromTo('opacity', 1, 0);
            } else {
                //console.log('leavingView not backDirection');
                this.add(leavingPage);
                leavingPage
                    .beforeRemoveClass('slide-delay-back')
                    .beforeRemoveClass('slide-delay-next')
                    .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
                    .fromTo('opacity', 1, 0);
            };
        }

        //this.onFinish(() => {
        //    let until = new Date().getTime(),
        //        total = until - since;
        //    console.log('pagefade finish: ' + until);
        //    console.warn('pagefade total: ' + total);
        //});
    }
}

export class ActionSheetLeave extends Transition {

    init() {
        super.init();

        let ele = this.leavingView.pageRef().nativeElement,
            backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop')),
            wrapper = new Animation(this.plt, ele.querySelector('.action-sheet-wrapper'));
        backdrop.fromTo('opacity', 0.26, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(200).add(backdrop).add(wrapper);
    }
}