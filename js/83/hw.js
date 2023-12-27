(function () {
    'use strict';

    const savedData = localStorage.getItem('data');
    let savedPositions = localStorage.getItem('positions');

    if (savedData) {
        $('#selectParts').html(savedData);
        if (savedPositions) {
            savedPositions = JSON.parse(savedPositions);
            setNewPositions(savedPositions);
        } else {
            setInitialPosition();
        }
    }

    function savePositions() {
        const positions = {};
        $('#selectParts .parts').each(function () {
            const id = $(this).attr('id');
            const position = $(this).position();
            positions[id] = { top: position.top, left: position.left };
        });
        localStorage.setItem('positions', JSON.stringify(positions));
    }

    function setNewPositions(positions) {
        $('#selectParts .parts').each(function () {
            const id = $(this).attr('id');
            const position = positions[id];
            if (position) {
                $(this).css({
                    top: position.top + 'px',
                    left: position.left + 'px',
                });
            }
        });
    }

    function setInitialPosition() {
        let y = 0;
        const x = $(window).width() - 150;
        $('#selectParts .parts').each(function () {
            const id = $(this).attr('id');
            $(this).css({
                top: `${y}px`,
                left: `${x}px`,
            });
            y += 100;
        });
        savePositions();
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

    $('#saveButton').on('click', function () {
        savePositions();
        const toSave = $('#selectParts').html();
        localStorage.setItem('data', toSave);
    });
})();
