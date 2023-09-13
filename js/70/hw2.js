window.myApp = window.myApp || {};

window.myApp.utils = (function (object) {
    'use strict';
    
    function caseInsensitiveEquals(a, b) {
    return a.toLowerCase() === b.toLowerCase();
    }

    object.caseInsensitiveEquals = caseInsensitiveEquals;

    return object;
   
}(window.myApp.utils || {}));

console.log(window.myApp.utils.caseInsensitiveEquals('apple', 'APple'));