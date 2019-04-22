(function (pwa) {
    //TODO: add PWA behavior

    pwa.test = function () {
        console.log('test');
    }

    pwa.browser = function () {
        console.log(kendo.support.browser);
    }

    window.exitwarn = true;

    window.onbeforeunload = function (e) {
        let hash = window.location.hash;
        if (hash.indexOf('register') > -1 && window.exitwarn || hash.indexOf('profile/create') > -1 && window.exitwarn) {
            return 'If you refresh the page you will lose session information and be logged out.'; //CUSTOM MESSAGES NO LONGER ALLOWED IN CHROME AND FIREFOX
            //return true;
        }
        
    }

}(window.pwa = window.pwa || {}));

//#region google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
//#endregion google analytics
