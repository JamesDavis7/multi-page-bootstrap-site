function initMap() {

    // Map options
    var options = {
        zoom: 8,
        center: {
            lat: 54.9527,
            lng: -1.6178
        },
    }

    var map = new google.maps.Map(document.getElementById('map'), options)

    var marker = new google.maps.Marker({
        position: {
            lat: 54.9783,
            lng: -1.6178
        },
        map: map,
    });


    marker.addListener('click', function () {
        infoWindow.open(map, marker)
    })
}