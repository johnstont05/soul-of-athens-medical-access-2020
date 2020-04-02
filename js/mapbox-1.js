mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var monument = [-81.985599, 39.518240];
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: monument,
  zoom: 16
});

// create the popup
var popup = new mapboxgl.Popup({
  offset: 25
}).setText(
  'Location of 911 Call'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker1';

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(monument)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);


map.scrollZoom.disable(); // disable scroll zoom
map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
