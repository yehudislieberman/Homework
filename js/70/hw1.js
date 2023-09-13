window.myApp = window.myApp || {};

window.myApp.utils = (function monthUtils(object) {
    'use strict';
    const months = ['January', 'February', 'March', 'April'];

    function getMonth(index) {
        return months[index - 1];
    }

    function getMonthIndex(month) {
        for (let i = 0; i < months.length; i++) {
            if (months[i] === month) {
                return i + 1;
            }
        }
    }
    object.getMonth=getMonth;
    object.getMonthIndex=getMonthIndex;

    return object; 

}(window.myApp.utils || {}));

console.log(window.myApp.utils.getMonth(3));
console.log(window.myApp.utils.getMonthIndex('March'));