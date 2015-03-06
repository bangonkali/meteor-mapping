# Meteor-Mapping
A sample real time mapping app written in Meteor using Google Maps API.

## Requirements
* A linux system that works with Meteor 1.0.3.2.
* Meteor 1.0.3.2
* Internet connection (To download dependcies)

## How to
```
git clone git@github.com:bangonkali/meteor-mapping.git
cd meteor-mapping
meteor --port 80 # to launch at port 80.
```

## Inspired from work by:
1. https://github.com/avrora/meteor-gMaps - great starting point. prints routes instead of point. 
1. https://github.com/meteorclub/cityforks - somehow flickers when you add a point on the same viewport and when you drag the viewport to move the map. uses a more advanced/complex/abstracted mapping system called leaflet.

## Demo
http://meteor-mapping.meteor.com/

Consider clicking the map to add points/markers. Clicking clear will clear the markers after the next reload only (this is temporary issue, will fix soon). You can open multiple browsers/instances of browsers and check the same field of view on the map for all instances. 

1. Add points on one instance of the browser. 
1. Check on another instance if the point appeared on the same location.
