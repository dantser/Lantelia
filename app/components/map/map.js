/* eslint-disable */
import $ from 'jquery';
import 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import 'leaflet.markercluster';

export default () => {
  const map = $('#map');

  if(map.length == 0) {
    return
  };


  var mymap = L.map('map').setView([55.7788008, 37.5821708], 15);

  var roads = L.gridLayer.googleMutant({
    type: 'roadmap',
    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17},{"gamma":"0.97"}]}]
  }).addTo(mymap);


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
  var iconInactive = new LeafIcon({iconUrl: 'assets/images/pin 2.svg'});
  var iconActive = new LeafIcon({iconUrl: 'assets/images/pin.svg'});
  markers["marker1"] = L.marker([55.7788008, 37.5821708], {icon: iconInactive}, {title: marker1}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Цветной Москва</h3> <p>г. Москва, Ленинградский проспект, д. 2, цокольный этаж, оф. №1</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);


  markers["marker2"] = L.marker([60.010829, 30.402103], {icon: iconInactive}, {title: marker2}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Мулен Руж</h3> <p>г. Санкт-Петербург, просп. Науки, 23а</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);


  markers["marker3"] = L.marker([57.817232, 28.314583], {icon: iconInactive}, {title: marker3}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);


  markers["marker4"] = L.marker([57.234133, 28.314583], {icon: iconInactive}, {title: marker4}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);


  markers["marker5"] = L.marker([57.231244, 28.314583], {icon: iconInactive}, {title: marker5}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);

  markers["marker6"] = L.marker([57.455676, 28.314583], {icon: iconInactive}, {title: marker6}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);

  markers["marker7"] = L.marker([57.753355, 28.314583], {icon: iconInactive}, {title: marker7}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);

  markers["marker8"] = L.marker([57.679006, 28.314583], {icon: iconInactive}, {title: marker8}).addTo(mymap)
                      .bindPopup(L.popup({maxWidth:201})
                      .setContent("<h3>Петровский Пассаж</h3> <p>г. Псков, Рижский пр-кт, д.16</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>")).on('click', clickZoom);
  // var greenIcon = new LeafIcon({iconUrl: 'assets/images/pin.svg'});
  // L.marker([55.7788008, 37.5821708], {icon: greenIcon}).addTo(mymap).bindPopup(L.popup({maxWidth:201}).setContent("<h3>Цветной Москва</h3> <p>г. Москва, Ленинградский проспект, д. 2, цокольный этаж, оф. №1</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>"));
  // var greenIcon = new LeafIcon({iconUrl: 'assets/images/pin.svg'});
  // L.marker([55.7788008, 37.5821708], {icon: greenIcon}).addTo(mymap).bindPopup(L.popup({maxWidth:201}).setContent("<h3>Цветной Москва</h3> <p>г. Москва, Ленинградский проспект, д. 2, цокольный этаж, оф. №1</p><h3>Контакты</h3> <p>Тел.: 79269464613<br>Эл. почта: msk.bel@cdek.ru</p> <p>Пн-Пт – с 10:00 до 20:00<br>Сб, Вс – с 10:00 до 16:00</p>"));
  const markerCl = L.markerClusterGroup([55.7788008, 37.5821708]).addTo(mymap);

  mymap.addLayer(markerCl);

  function focusOn(marker) {
    var pos = markers[marker].getLatLng();
    mymap.setView(pos, 18);
    markers[marker].openPopup();
    for (var i in markers) {
      markers[i].setIcon(iconInactive);
    }
    markers[marker].setIcon(iconActive);
  };

  L.control.zoom({
     position:'bottomleft'
  }).addTo(mymap);

  function clickZoom(e) {
    e.stopPropagation;
    mymap.setView(e.target.getLatLng(), 15);
    for (var i in markers) {
     markers[i].setIcon(iconInactive);
    }

    e.target.setIcon(iconActive);
  };

  $('.address-card').click(function(){
    var currMarker = $(this).find('.address-card__wrapper').attr('id');
    focusOn(currMarker);
  });

  // mymap.on('popupopen', function(centerMarker) {
  //       var cM = mymap.project(centerMarker.popup._latlng);
  //       cM.y -= centerMarker.popup._container.clientHeight/2
  //       mymap.setView(mymap.unproject(cM),30, {animate: true});
  //   });

  function markerFunction(id) {
    for (var i in markers) {
      var markerID = markers[i].options.title;
      var position = markers[i].getLatLng();
      if (markerID == id) {
      	mymap.setView(position, 20);
        markers[i].openPopup();
      };
    }
  }

  // $(document).ready(function() {
  //   var marker = L.marker();
  //   marker.on('click', function () {
  //     $(this).toggleClass('active');
  //   });
  // });
}

/* eslint-ensable */
