window.pcs = (function () {
    'use strict';

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        return getComputedStyle(elem)[property];
    }

    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();
        return `rgb(${r}, ${g}, ${b})`;
    }

    return function (selector) {
        const elem = document.querySelector(selector);

        return {
            css: function (property, value) {
                if (arguments.length === 2) {
                    setCss(elem, property, value);
                    return this;
                } else {
                    return getCss(elem, property);
                }
            },

            flash: function (time, speed) {
                const originalColor = getCss(elem, 'color');

                const flashingInterval = setInterval(() => {
                    setCss(elem, 'color', getRandomColor());
                }, speed);


                setTimeout(() => {
                    clearInterval(flashingInterval);
                    setCss(elem, 'color', originalColor);
                }, time);

                return this;
            },
        };
    };
}());

