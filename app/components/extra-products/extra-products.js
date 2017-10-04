/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import Swiper from 'swiper';

const $ = window.$;

export default function slider() {

  var mySlider = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth > 1399 && mySlider == undefined) { //
      if ($('.js-slider').parents().hasClass('product-page')) {
        var mySlider = new Swiper('.js-slider', {
          // loop: true,
          speed: 700,
          // autoplay: 2000,
          freemode: 'true',
          slidesPerView: 'auto',
          nextButton: '.slider__button_next',
          prevButton: '.slider__button_prev',
          pagination: '.slider__dots',
          paginationClickable: true,
          paginationClickableClass: 'slider__dots_clickable',
          bulletClass: 'slider__dot',
          bulletActiveClass: 'active',
          slidesOffsetBefore: '133',
          roundLengths: true
        });
      } else {
        var mySlider = new Swiper('.js-slider', {
          // loop: true,
          speed: 700,
          // autoplay: 2000,
          freemode: 'true',
          slidesPerView: 'auto',
          nextButton: '.slider__button_next',
          prevButton: '.slider__button_prev',
          pagination: '.slider__dots',
          paginationClickable: true,
          paginationClickableClass: 'slider__dots_clickable',
          bulletClass: 'slider__dot',
          bulletActiveClass: 'active',
          slidesOffsetBefore: '60',
          roundLengths: true
        });
      }
    }
    else if (screenWidth < 1401  && mySlider != undefined) { //
        mySlider.destroy();
        mySlider = undefined;
        // jQuery('.swiper-wrapper').removeAttr('style');
        // jQuery('.swiper-slide').removeAttr('style');
    }
  }

  //Swiper plugin initialization
  initSwiper();

  //Swiper plugin initialization on window resize
  $(window).on('resize', function() {
    initSwiper();
  });

  $(window).trigger('resize');
}
/* eslint-enable */
