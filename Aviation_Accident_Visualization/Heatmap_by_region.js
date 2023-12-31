//Updates using localhost flask api example from rajib.
let link = "http://127.0.0.1:8000/all";

d3.json(link).then(function(data) {
  let myData = data

  let myMap = L.map("map", {
    center: [10.534665,  -8.136879],
    zoom: 2.6
  });

//Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// console.log(myData);
// features = myData.features;

let heatArray = [];

for (let i = 0; i < myData.length; i++) {
  
  let location = myData[i].location;
  
  if (location) {
    // console.log(location);
    heatArray.push([myData[i].LAT,myData[i].LNG]);
  }

}

  let heat = L.heatLayer(heatArray, {
    radius: 45,
    blur: 10,
    minOpacity: 0.1
  }).addTo(myMap);

});
