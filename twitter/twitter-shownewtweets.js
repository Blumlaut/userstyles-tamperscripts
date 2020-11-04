// ==UserScript==
// @name         Auto-Show new tweets on twitter timeline
// @namespace    twitter_shownewtweets
// @version      04112020
// @author       Blumlaut
// @match        https://twitter.com/*
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/twitter/twitter-shownewtweets.js
// @run-at        document-start
// ==/UserScript==

(function() {
    'use strict';

    // css-901oao r-1n1174f r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-q4m81j r-qvutc0

    function timeout() {
        setTimeout(function () {
            var mydiv = document.querySelector('.css-901oao.r-1n1174f.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-q4m81j.r-qvutc0');

            if (mydiv) {
                mydiv.click();
            }

            timeout();
        }, 1000);
    }
    timeout()

})();
