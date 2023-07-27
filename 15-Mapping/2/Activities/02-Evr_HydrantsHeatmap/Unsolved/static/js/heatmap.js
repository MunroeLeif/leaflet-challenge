//Step 1: Add map variable
let myMap = L.map("map", {
    center: [-32.8, 117.9],
    zoom: 7
  });
//Step2: Add baselayer Tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Step3: Data Aquisition
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/Water_Hydrant_WCORP_070_WA_GDA2020_Public.geojson";

d3.json(url).then(function(data) {
    
})