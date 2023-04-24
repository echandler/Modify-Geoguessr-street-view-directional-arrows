// ==UserScript==
// @name         Modify Geoguessr street view arrows.
// @discription  Cosmetic upgrade to white arrows on street view.
// @namespace    http://www.geoguessr.com
// @version      0.1
// @author       echandler
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .gmnoprint > svg > [fill-opacity="1"], .gmnoprint > svg > [fill="black"] {
            d: path(" M 0 -100 L 37 -63 Q 37  -52, 27 -53 L 5 -75 Q 0 -80, -5 -75 L -27 -53 Q -37 -52, -37 -63");
        }
    `);

        // Your code here...
})();
