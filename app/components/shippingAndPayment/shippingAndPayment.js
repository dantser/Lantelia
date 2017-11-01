/* eslint-disable */
import $ from 'jquery';
import 'leaflet';
import 'leaflet.gridlayer.googlemutant';

export default () => {
  // function debouncer( func , timeout ) {
  //    var timeoutID , timeout = timeout || 2000;
  //    return function () {
  //       var scope = this , args = arguments;
  //       clearTimeout( timeoutID );
  //       timeoutID = setTimeout( function () {
  //           func.apply( scope , Array.prototype.slice.call( args ) );
  //       } , timeout );
  //    }
  // }

  function labelClick() {
    if($(window).width() < 1280 ) {
      $('.js-label').removeClass('active').siblings().slideUp(300);
      $('.js-label').on('click',function (e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings().slideToggle(300);
      })
    } else {
      $('.js-label').addClass('active').siblings().slideDown(300);
    }
  }

  labelClick();

  // $(window).resize( function () {
  //   labelClick();
  // })

  // $(window).resize(debouncer (function () {
  //   labelClick();
  // }));
}

/* eslint-ensable */
