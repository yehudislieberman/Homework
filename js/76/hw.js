(function () {
    'use strict';

    const name = $('#name');
    const address = $('#address');
    const Info = $('#info');
    const Form = $('#Form');

    Form.submit(info => {
        info.preventDefault();
        Info.html(`Name: ${name.val()} <br> Address: ${address.val()}`);
    });
    
    $('#checkbox').change(function () {
        $('#submit').prop('disabled', !this.checked);
    });
}());
