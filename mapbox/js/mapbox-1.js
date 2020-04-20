mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var monument = [-82.0999, 39.4066];
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-82.0592, 39.4407],
  zoom: 8.5
});

var geojson = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-81.985599, 39.518240]
    },
    "properties": {
      "name": "Location of 911 Call"
    }

  }]
};

map.on('load', function() {
  map.addSource('EMS', {
    type: 'geojson',
    data: {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-82.131027, 39.364913]
        },
        "properties": {
          "name": "Athens County EMS"

        }
      }]
    }
  });

  map.addLayer({
    id: 'EMS',
    source: 'EMS',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'red',
      'circle-opacity': 0.85,
      'circle-stroke-color': '#000',
      'circle-stroke-width': 1
    }
  });


  // FOR EMS LAYER
  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'EMS', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var name = e.features[0].properties.name;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(name)
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'HCOM', function() {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'HCOM ', function() {
    map.getCanvas().style.cursor = '';
  });

  // FOR CALL LAYER
  // add markers to map
  geojson.features.forEach(function(markercall) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'markercall';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(markercall.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({
          offset: 25
        }) // add popups
        .setHTML(markercall.properties.name))
      .addTo(map);
  });


  map.scrollZoom.disable(); // disable scroll zoom
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');

});
