(function () {
    'use strict';

    const gallery = $('#videoLibrary ul');
    const player = $('#videoPlayer');

    async function getVideos(file) {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return await response.json();

        } catch (e) {
            console.error(e.message);
        }
    }

    async function showVideos() {
        try {
            const videos = await getVideos(`videos.json`);
            videos.forEach(video => {
                gallery.append(`<li>
                    <div>${video.title}</div>
                    <img src="${video.picture}" />
                </li>`);
            });

            gallery.on('click', 'li', function () {
                showVideo(videos[$(this).index()]);
            });

        } catch (e) {
            console.error(e.message);
        }
    }

    function showVideo(video) {
        player.attr('src', video.url);
        player[0].play();
    }

    showVideos();

})();

