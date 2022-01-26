// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// 

 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg"
  }).addTo(myMap);
  
//------------------------------------------------------------->
//pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg
// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
// Perform a GET request to the query URL/

d3.json(queryUrl).then(function (data) {
  console.log(data)
  // Once we get a response, send the data.features object to the createFeatures function.
  // createFeatures(data.features);

  // example to print out the data before continuing
  //
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
    // set different color from magnitude
    function getColor(magnitude) {
      switch (true) {
      case magnitude > 5:
        return "#ea2c2c";
      case magnitude > 4:
        return "#ea822c";
      case magnitude > 3:
        return "#ee9c00";
      case magnitude > 2:
        return "#eecc00";
      case magnitude > 1:
        return "#d4ee00";
      default:
        return "#98ee00";
      }
    }
    // set radiuss from magnitude
    function getRadius(magnitude) {
      if (magnitude === 0) {
        return 1;
      }
      return magnitude * 4;
