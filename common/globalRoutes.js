// Router
Router.route('/', {
    onBeforeAction: function () {
        Tracker.autorun(function () {
            console.log('change');
            if (Coords.find().count()) {
                var allCoords = Coords.find();

                pointsArr = new Array();
                allCoords.forEach(function (coord) {
                    // Add coordinates into the path
                    var latlng = new google.maps.LatLng(coord.lat, coord.lng);
                    pointsArr.push(latlng);
                });
                drawPath();
            }
            else {
                //if(directionsDisplay) {
                //    directionsDisplay.setMap(null);
                //    directionsDisplay.setPanel(null);
                //}
            }
        });
        this.next();
    },
    waitOn: function () {
        return Meteor.subscribe('Coords');
    },
    action: function () {
        if (this.ready())
            return true;
    }
});