// first step: create the map! day 1 activity 1
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
//----------------------------------------------------------------------------
// var myMap = L.map("map", {
//   center: [37.7749, -122.4194],
//   zoom: 5
//   });

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// 

  // L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  //   maxZoom: 18,
  //   id: "mapbox.streets",
  //   accessToken: "pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg"
  // }).addTo(myMap);
//------------------------------------------------------------->
//pk.eyJ1IjoieXRoNjAyIiwiYSI6ImNreXBjdm4xcTA4czYydW55ejhzdjN2Z3EifQ.Iirk2dVnTy_PNUlpeUlsNg
// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
// Perform a GET request to the query URL/

d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  // createFeatures(data.features);

  // example to print out the data before continuing
  console.log(data)

  // second step: create the markers, popups, legend

  // 2.1 Markers: magnitude = size, depth = color. inc mag = bigger circle, inc depth = darker color
  // depth is found in coordinate next to lat and long

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
  // 2.2: Popups: add information about earthquake (add title and time to popup) 

  // 2.3: Legend: add legend. information about the depth of the earthquake. 
  //      higher depth = darker color, lower depth = lighter color
  // set different color from magnitude
    function chooseColor(magnitude) {
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
  }

    // GeoJSON layer
    L.geoJson(data, {
      // Maken cricles
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
      // cirecle style
      style: styleInfo,
      // popup for each marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup(
          "Magnitude: " 
          + feature.properties.mag 
          + "<br>Location: " 
          + feature.properties.place);  
  }  
}).addTo(myMap);

  // add legend
  var legend = L.control({
    position: "bottomright"
  });

  // Add all details for the legend
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");

    // legend description
    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#e95d26",
      "#e92684"
    ];


    // loop all intervals to generate color lable for each interval  
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
      + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    } 
    return div;
  };
    // Add legend to the map.
    legend.addTo(myMap);
});
