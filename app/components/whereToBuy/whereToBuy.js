/* eslint-disable */
import Swiper from 'swiper';
// import $ from 'jquery';
import 'jquery-nice-select';

export default () => {
  var mainSlider = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth > 768 && mainSlider == undefined) {
      mainSlider = new Swiper('.address-container', {
        wrapperClass: 'address-wrapper',
        slideClass: 'address-card',
        slidesPerView: 'auto'
      });
    } else if (screenWidth < 769 && mainSlider != undefined) {
        mainSlider.destroy();
        mainSlider = undefined;
        // jQuery('.swiper-wrapper').removeAttr('style');
        // jQuery('.swiper-slide').removeAttr('style');
    }
  }

  //Swiper plugin initialization
  initSwiper();

  //Swiper plugin initialization on window resize
  $(window).on('resize', function(){
    initSwiper();
  });

  $(document).ready(function() {
    $('select').niceSelect();
  });

  /* eslint-ensable */
}
