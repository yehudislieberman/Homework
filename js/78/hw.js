(function () {
    'use strict';

    const name = $("#fileName");
    const load = $("#button");
    const loading = $("#loading");
    const file = $("#file");

    load.on('click', async () => {
        loading.show();
        try {
            const response = await fetch(name.val());
            if (response.status >= 400) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.text();
            file.text(data);
            loading.hide();
        }
        catch (error) {
            loading.hide();
            file.text(error.message);
        }
    })
}());

