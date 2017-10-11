/* eslint-disable */
import $ from 'jquery';
import 'leaflet';
import 'leaflet.gridlayer.googlemutant';

export default () => {

  $('.js-label').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings().slideToggle();
  })
}

/* eslint-ensable */
