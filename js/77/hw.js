(function () {
    'use strict';

    $('#evens').on('click', () => {
        $('p:nth-child(odd)').removeClass('color');
        $('p:nth-child(even)').addClass('color');
    });
    $('#odds').on('click', () => {
        $('p:nth-child(even)').removeClass('color');
        $('p:nth-child(odd)').addClass('color');
    });
}());