// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// 
//------------
 

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: "pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXRwMjhtNzFmcXMydm85cWoya3dlMjUifQ.y2-wA_382EIfDx3L3vwSsA"
}).addTo(myMap);
//-------


//  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
// //  accessToken:"pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg"
//   accessToken:"pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXRwMjhtNzFmcXMydm85cWoya3dlMjUifQ.y2-wA_382EIfDx3L3vwSsA"
 
//   }).addTo(myMap);
  
//------------------------------------------------------------->
//pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg
// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
// Perform a GET request to the query URL/

d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  // createFeatures(data.features);

  // example to print out the data before continuing
  //
  console.log(data)
});
