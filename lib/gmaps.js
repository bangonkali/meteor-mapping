map = null;
directionsDisplay = null;
directionsService = null;
pointsArr = new Array();

drawPath = function drawPath() {
    if (pointsArr.length >= 2) {
        var origen = pointsArr[0];
        var destino = pointsArr[pointsArr.length - 1];
        var waypointsArr = new Array();

        //if (pointsArr.length > 2) {
        //  var i = 0;

        pointsArr.forEach(function (item) {
            //if (origen != item && destino != item) {
            //  waypointsArr.push({'location': item});
            //}

            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the '+
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                'south west of the nearest large town, Alice Springs; 450&#160;km '+
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                'Aboriginal people of the area. It has many springs, waterholes, '+
                'rock caves and ancient paintings. Uluru is listed as a World '+
                'Heritage Site.</p>'+
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                '(last visited June 22, 2009).</p>'+
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: item,
                map: map,
                title: 'Hello World!'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });

        });

        //}
        //
        //var request = {
        //  origin: origen,
        //  waypoints: waypointsArr,
        //  destination: destino,
        //  travelMode: google.maps.TravelMode.WALKING
        //};
        //directionsService.route(request, function (response, status) {
        //  if (status == google.maps.DirectionsStatus.OK) {
        //    directionsDisplay.setDirections(response);
        //  }
        //});

        directionsDisplay.setMap(map);
        //directionsDisplay.setPanel(document.getElementById('directions-panel'));

    }
}