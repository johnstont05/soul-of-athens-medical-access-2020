mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/johnstont05/ck7o27avw1t511jqrkwe48lxs', // stylesheet location
  center: [-81.985599, 39.518240], // starting position [lng, lat]
  zoom: 15 // starting zoom
});

map.on('load', function() {
  map.loadImage(
    'images/phone.svg',
    function(error, image) {
      if (error) throw error;
      map.addImage('cat', image);
      map.addSource('places', {
        type: 'geojson',
        data: {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {
              "description": 'Location of 911 Call',
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-81.985599, 39.518240]
            }

          }]
        }
      });

      map.addLayer({
        id: 'places',
        source: 'places',
        type: 'symbol',
        'layout': {
          'icon-image': 'cat',
          'icon-size': 0.25
        }
      });
    }
  );
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function() {
  map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places ', function() {
  map.getCanvas().style.cursor = '';
});

map.scrollZoom.disable(); // disable scroll zoom
map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
