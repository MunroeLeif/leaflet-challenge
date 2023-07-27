// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// City markers

// Add code to create a marker for each of the following cities and to add it to the map.

// newyork;
let newyork = L.marker([40.7128, -74.0059],{
  title: "Ney York"
}).addTo(myMap);
newyork.bindPopup("New York, population: New Yorkers");
// chicago;
let chicago = L.marker([41.8781, -87.6298], {
  title: "Chicago"
}).addTo(myMap);
chicago.bindPopup("Chicago, population: Windy City Dwellers");
// houston;
// la;
// omaha;
