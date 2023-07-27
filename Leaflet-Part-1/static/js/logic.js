// Creating the map object
let myMap = L.map("map", {
  center: [12.814, -88.1265],
  zoom: 2
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the data (Signifigant Earthquakes over the last 30 days)
let JSONdata = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

function colorMarker(colordepth) {
  if (colordepth < 10) {
    return "#800080"
  }
  else if (colordepth < 20){
    return "#008000"
  }
  
}

//Read in the data with d3
d3.json(JSONdata).then(function (data) {

  console.log(data);
  features = data.features;

  //let markers = [];
  //geometry = features.geometry;
  //coordinates = data.features.geometry.coordinates;
  console.log(features)
  //console.log(data.features.geometry.coordinates)
  // Loop through the data.
  for (let i = 0; i < features.length; i++) {

    // Set the data location property to a variable.
    let location = features[i].geometry;

    // Set the marker option variables
    let radius = features[i].properties.mag;
    let colordepth = features[i].geometry.coordinates[2];
    

    // Check for the location property.
    if (location) {
      //console.log(location)
      // Add a new marker, and bind a popup.
      L.circleMarker([location.coordinates[1], location.coordinates[0]], {
        radius: radius,
        color: colorMarker(colordepth),
      })
        .bindPopup(features[i].properties.title)
        .addTo(myMap);
    }
  }

  /*// Set up Legend
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");


    let legendInfo = 
  }*/




});