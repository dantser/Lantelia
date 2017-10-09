/* eslint-disable */
import $ from 'jquery';
import 'leaflet';
import 'leaflet.gridlayer.googlemutant';

export default () => {
  const map = $('#shippingMap');
  // if (map.length == 0 || shippingMaps.length == 0) {
  //   return
  // };

  if (map.length == 0) {
    return
  }

  var shippingMaps = L.map('shippingMap').setView([55.818, 37.648412], 15);

  var roads = L.gridLayer.googleMutant({
    type: 'roadmap',
    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17},{"gamma":"0.97"}]}]
  }).addTo(shippingMaps);


  var LeafIcon = L.Icon.extend({
      options: {
          iconSize:     [38, 95],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
      }
  });

  var markers = [];
  var iconActive = new LeafIcon({iconUrl: 'assets/images/pin.svg'});
  markers["marker1"] = L.marker([55.816591, 37.648412], {icon: iconActive}).addTo(shippingMaps)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Цветной Москва</h3> <p>г. Москва, Ленинградский проспект, д. 2, цокольный этаж, оф. №1</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);

  function focusOn(marker) {
    var pos = markers[marker].getLatLng();
    shippingMaps.setView(pos, 18);
    markers[marker].openPopup();
  };

  if ($(window).width() > 1399) {
    L.control.zoom({
       position:'bottomleft'
    }).addTo(shippingMaps);
    return;

  };

  // $(window).resize(function () {
  //   if ($(window).width() > 1399) {
  //     L.control.zoom({
  //        position:'bottomleft'
  //     }).addTo(shippingMaps);
  //     return;
  //
  //   };
  // })



  function clickZoom(e) {
    e.stopPropagation;
    shippingMaps.setView(e.target.getLatLng(), 15);
  };


  function markerFunction(id) {
    for (var i in markers) {
      var markerID = markers[i].options.title;
      var position = markers[i].getLatLng();
      if (markerID == id) {
      	shippingMaps.setView(position, 20);
        markers[i].openPopup();
      };
    }
  };


  // $(document).ready(function() {
  //   var marker = L.marker();
  //   marker.on('click', function () {
  //     $(this).toggleClass('active');
  //   });
  // });



  $('.js-label').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings().slideToggle();
  })
}

/* eslint-ensable */
