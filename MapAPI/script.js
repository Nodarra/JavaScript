var L;
var lat;
var lng;

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
})


window.onload = function() {
  L.mapquest.key = 'hw8gMDG6LQBEvsb5NujPlenWiAgQ6Ryk';

  var map = L.mapquest.map('map', {
    center: [lat, lng],
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 12
  });

  map.addControl(L.mapquest.control({position: 'bottomright'}));
  
  L.marker([lat, lng], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'A'
    })
  }).bindPopup('This is You').addTo(map);
}