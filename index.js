let map;

function initMap() {

  const hamburg = {
    lat: 53.545,
    lng: 9.988
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: hamburg,
    zoom: 8
  });

  const marker = new google.maps.Marker({
    position: hamburg,
    map
  });

  map.addListener("click", data => setMarker(map, data.latLng) );
}

function setMarker(map, location) {
  return new google.maps.Marker({
    position: location,
    map: map
  });
}