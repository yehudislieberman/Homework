'use strict';

window.app = window.app || {};

let counterTracker = 0;

window.app.createCounter = function () {
    let c = 0;

    counterTracker++;

    return {
        increment: function () {
            return c++;
        },
        getCount: function () {
            return c;
        },

    };
};