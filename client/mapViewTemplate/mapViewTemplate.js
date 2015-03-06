Template.mapview.helpers({
    counter: function () {
        return Coords.find().count();
    }
});

Template.mapview.events = {
    'click #clearButton': function () {
        Meteor.call('removeAllCoords');
    }
};

Template.mapview.rendered = function () {
    // Create map
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(40.4378271, -3.6795367)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    directionsService = new google.maps.DirectionsService();

    // Add listener
    google.maps.event.addListener(map, 'click', addLatLng);

    directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));

    function addLatLng(event) {

        // Add coordinates into db
        var point = {
            'lat': event.latLng.lat(),
            'lng': event.latLng.lng()
        };
        Coords.insert(point);
    }
};