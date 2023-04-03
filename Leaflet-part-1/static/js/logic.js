let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
 
d3.json(link).then(function(data) {
  let markers = L.marker();
    let myMap = L.map("map", {
  center: [-0.7264,29.3364],
  zoom: 2,
 });

  // Adding a tile layer (the background map image) to our map:
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    
    // Loop through the data.
    for (let i = 0; i < data.features.length; i++) {

    // Set the data location property to a variable.
        let location = data.features[i];
        let color = "";

        if (location.geometry.coordinates[2] > 90) {
          color = "black";
        }
        else if (location.geometry.coordinates[2] > 70) {
          color = "purple";
        }
        else if (location.geometry.coordinates[2] > 50) {
          color = "blue";
        }
        else if (location.geometry.coordinates[2] > 30) {
          color = "green";
        }
        else if (location.geometry.coordinates[2] > 10) {
          color = "yellow";
        }
        else if (location.geometry.coordinates[2] > -10) {
          color = "white";
        }
        else {
          color = ""};

        
    // Check for the location property.
        if (location) {

      // Add a new marker to the cluster group, and bind a popup.
      L.circle([location.geometry.coordinates[1], location.geometry.coordinates[0]], (location.properties.mag*100000), {fillOpacity: 0.75, color: color, fillColor: color})
      .bindPopup(`<h3>${location.properties.place}</h3> <p>Magnitude: ${location.properties.mag}</p> <p>Coordinates: ${location.geometry.coordinates[1]},${location.geometry.coordinates[0]}</p> <p>Depth: ${location.geometry.coordinates[2]}</p>`).addTo(myMap);
        
      
      

  }}});
  
 
