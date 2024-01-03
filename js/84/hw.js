(function () {
    'use strict';

    const savedData = localStorage.getItem('data');
    if (savedData) {
        $('#selectParts').html(savedData);
        } else {
            setInitialPosition();
        }

    function setInitialPosition() {
        let y = 0;
        const x = $(window).width() - 150;
        $('#selectParts .parts').each(function () {
            $(this).css({
                top: `${y}px`,
                left: `${x}px`,
            });
            y += 100;
        });
        savePositions();
    }

    function savePositions() {
        const positions = {};
        $('#selectParts .parts').each(function () {
            const id = $(this).attr('id');
            const position = $(this).position();
            positions[id] = {top: position.top, left: position.left};
        });
        localStorage.setItem('positions', JSON.stringify(positions));
    }

    let dragging;
    let offset;
    let zIndexCounter = 1;

    function mouseMoveHandler(e) {
        e.preventDefault();
        if (dragging) {
            $(dragging).css({
                top: e.pageY - offset.y,
                left: e.pageX - offset.x,
                zIndex: zIndexCounter++,
            });
        }
    }

    $(document).on('mousedown', '#selectParts .parts', function (e) {
        e.preventDefault();
        dragging = this;
        offset = {
            y: e.pageY - $(dragging).offset().top,
            x: e.pageX - $(dragging).offset().left,
        };

        $(document).on('mousemove', mouseMoveHandler);
    });

    $(document).on('mouseup', function () {
        dragging = false;
        $(document).off('mousemove', mouseMoveHandler);
        savePositions();
    });

    $('#musicSelector').on('change', function () {
        const musicOption = $(this).val();
        changeBackgroundMusic(musicOption);
    });

    function changeBackgroundMusic(selectedMusic) {
        const audioElement = document.getElementById('backgroundMusic');
        if (audioElement) {
            audioElement.src = `images/${selectedMusic}`;
            audioElement.load();
            audioElement.play();
        }
    }

    function changeBackground(usersPick) {
        $('body').css('background-image', usersPick);
    }

    $('#background1, #background2, #background3').on('click', function () {
        const backgroundNumber = $(this).attr('id').replace('background', '');
        const image = `url("images/backgroundPic${backgroundNumber}.jpg")`;
        changeBackground(image);
    });
    
    $('#saveButton').on('click', function () {
        savePositions();
        const toSave = $('#selectParts').html();
        localStorage.setItem('data', toSave);
    });

    $('#resetButton').on('click', function () {
        localStorage.removeItem('data');
        location.reload();
    });
})();