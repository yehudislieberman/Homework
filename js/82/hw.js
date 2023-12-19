(async function () {
    'use strict';

    const { Map } = await google.maps.importLibrary('maps');
    const { DrawingManager } = await google.maps.importLibrary('drawing');

    let drawingManager = new DrawingManager();

    const map = new Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 31.771959, lng: 35.217018 },
        mapId: 'DEMO_MAP_ID'
    });

    drawingManager.setMap(map);

    const storedMarkers = JSON.parse(localStorage.getItem('Markers')) || [];
    if (storedMarkers.length > 0) {
        storedMarkers.forEach(marker => {
            new google.maps.Marker({
                map,
                position: marker.position
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        storedMarkers.push({ position: marker.getPosition() });
        localStorage.setItem('Markers', JSON.stringify(storedMarkers));
    });

    const storedCircles = JSON.parse(localStorage.getItem('Circles')) || [];
    if (storedCircles.length > 0) {
        storedCircles.forEach(circle => {
            new google.maps.Circle({
                map,
                center: circle.center,
                radius: circle.radius,
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        storedCircles.push({ center: circle.getCenter(), radius: circle.getRadius() });
        localStorage.setItem('Circles', JSON.stringify(storedCircles));
    });

    const storedRectangle = JSON.parse(localStorage.getItem('Rectangles')) || [];
    if (storedRectangle.length > 0) {
        storedRectangle.forEach(rectangle => {
            new google.maps.Rectangle({
                map,
                bounds: rectangle.bounds
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        storedRectangle.push({ bounds: rectangle.getBounds() });
        localStorage.setItem('Rectangles', JSON.stringify(storedRectangle));
    });

    const storedPolyline = JSON.parse(localStorage.getItem('Polylines')) || [];
    if (storedPolyline.length > 0) {
        storedPolyline.forEach(polyline => {
            new google.maps.Polyline({
                map,
                path: polyline.path
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        storedPolyline.push({ path: polyline.getPath().getArray() });
        localStorage.setItem('Polylines', JSON.stringify(storedPolyline));
    });

    const storedPolygon = JSON.parse(localStorage.getItem('Polygons')) || [];
    if (storedPolygon.length > 0) {
        storedPolygon.forEach(polygon => {
            new google.maps.Polygon({
                map,
                path: polygon.path
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        storedPolygon.push({ path: polygon.getPath().getArray() });
        localStorage.setItem('Polygons', JSON.stringify(storedPolygon));
    });
})();
