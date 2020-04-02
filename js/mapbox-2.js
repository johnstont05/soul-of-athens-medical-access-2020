mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/johnstont05/ck7o27avw1t511jqrkwe48lxs', // stylesheet location
  center: [-82.038, 39.28], // starting position [lng, lat]
  zoom: 8.50 // starting zoom
});

map.on('load', function() {

  map.addSource('places', {
    type: 'geojson',
    data: {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-81.913536, 38.9708204]
          },
          "properties": {
            "name": "Dollar General",
            "address": "602 Elm Street",
            "city": "Racine",
            "state": "Ohio",
            "zip": 45771,
            "Full Address": "602 Elm Street Racine Ohio 45771 "
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-82.4294429, 39.5444921]
          },
          "properties": {
            "name": "Shriver's Pharmacy",
            "address": "21 Hocking Mall",
            "city": "Logan",
            "state": "Ohio",
            "zip": 43138,
            "Full Address": "21 Hocking Mall Logan Ohio 43138 "
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-81.7952486, 39.2228979]
          },
          "properties": {
            "name": "Coolville United Methodist Church",
            "address": "26460 Main Street",
            "city": "Coolville",
            "state": "Ohio",
            "zip": 45623,
            "Full Address": "26460 Main Street Coolville Ohio 45623 "
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-81.5789218, 39.2791042]
          },
          "properties": {
            "name": "Pioneer City Casting",
            "address": "904 Campus Drive",
            "city": "Belpre",
            "state": "Ohio",
            "zip": 45714,
            "Full Address": "904 Campus Drive Belpre Ohio 45714 "
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-82.2163451, 39.6064046]
          },
          "properties": {
            "name": "Tecumseh Theater",
            "address": "116 West Main Street",
            "city": "Shawnee",
            "state": "Ohio",
            "zip": 43782,
            "Full Address": "116 West Main Street Shawnee Ohio 43782 "
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-82.4774544, 39.2536182]
          },
          "properties": {
            "name": "Shriver's Pharmacy",
            "address": "530 North Market Street",
            "city": "McArthur",
            "state": "Ohio",
            "zip": 45651,
            "Full Address": "530 North Market Street McArthur Ohio 45651 "
          }
        }
      ]
    }
  });

  map.addLayer({
    id: 'places',
    source: 'places',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': 'red',
      'circle-opacity': 0.85,
      'circle-stroke-color': '#000',
      'circle-stroke-width': 1
    }
  });

  map.addSource('HCOM', {
    type: 'geojson',
    data: {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-82.101363, 39.324488]
            },
            "properties": {
                "location": "Ohio University",
            }
        }]
    }
});

map.addLayer({
    id: 'HCOM',
    source: 'HCOM',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': 'black',
        'circle-opacity': 0.85,
        'circle-stroke-color': '#000',
        'circle-stroke-width': 1
    }
});

// FOR UNIT LAYER
  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'HCOM', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var location = e.features[0].properties.location;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(location)
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


// FOR OHIO UNIVERSITY LAYER
  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'places', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.name;
    var location = e.features[0].properties.location;

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
});