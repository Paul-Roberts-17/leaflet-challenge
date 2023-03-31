
  
  // Adding a tile layer (the background map image) to our map:


  let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

  d3.json(link).then(function(data) {
    let markers = L.marker();
      let myMap = L.map("map", {
    center: [-28.01, 153.4],
    zoom: 3,
    //layers: markers
});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    

    // Loop through the data.
    for (let i = 0; i < data.features.length; i++) {

    // Set the data location property to a variable.
        let location = data.features[i];

        
    // Check for the location property.
        if (location) {

      // Add a new marker to the cluster group, and bind a popup.
      L.circle([location.geometry.coordinates[1], location.geometry.coordinates[0]], (location.properties.mag*100000)).addTo(myMap);
        
    

  }}});
  
 

   //radius: magnitude 

  //.bindPopup([data[i].properties.mag, location.coordinates[2]])