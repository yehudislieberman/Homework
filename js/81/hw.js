(async function () {
    'use strict';

    let map;
    let markers = [];

    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 31.771959, lng: 35.217018 },
        mapId: 'DEMO_MAP_ID'
    });

    const searchInput = document.getElementById('search');

    document.getElementById('submit').addEventListener('click', async e => {
        try {
            markers.forEach(marker => marker.setMap(null));
            const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.value}&maxRows=10&username=ylieberman&type=json`);

            if (response.ok) {
                const answer = await response.json();
                const infowindow = new google.maps.InfoWindow();
                const bounds = new google.maps.LatLngBounds();

                answer.geonames.forEach(data => {
                    const marker = new AdvancedMarkerElement({
                        map: map,
                        position: { lat: data.lat, lng: data.lng },
                        title: data.title,
                    });

                    marker.addListener('click', () => {
                        infowindow.setContent(`<h2>${data.title}</h2><h3>${data.summary}</h3>`);
                        infowindow.open({
                            anchor: marker,
                            map,
                        });
                    });
                    bounds.extend({ lat: data.lat, lng: data.lng });
                    markers.push(marker);
                });
                map.fitBounds(bounds);
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    })
}());