'use strict';

window.app = window.app || {};
window.app.counter = (function () {
    let c = 0;

    return {
        increment: function () {
            return c++;
        },
        getCount: function () {
            return c;
        },
        
    };
})();

