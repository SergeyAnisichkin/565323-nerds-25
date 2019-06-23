var link = document.querySelector(".write-us");
  
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name1 = popup.querySelector(".input-name");
var email = popup.querySelector(".input-email");
var text = popup.querySelector(".user-text");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !name1.value || !text.value) {
    evt.preventDefault();
    name1.classList.remove("field-error");
    email.classList.remove("field-error");
    text.classList.remove("field-error");
    if (!name1.value) {
        name1.classList.add("field-error");
    }
    if (!email.value) {
        email.classList.add("field-error");
    }
    if (!text.value) {
        text.classList.add("field-error");
    }
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

function initMap() {
  var mapProp = {
    center: new google.maps.LatLng(59.939171, 30.321609),
    zoom: 17,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
  var coordinates = {lat: 59.938732, lng: 30.323666};
  var image = 'img/map-marker.png';
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
  });
  var noPoi = [
    {
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]   
      }
    ];
    
    map.setOptions({styles: noPoi});
}