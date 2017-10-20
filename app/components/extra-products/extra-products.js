/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  if ($('.extra-products__slider').length === 0) {
    return;
  }
  var prodSlider = undefined;

  if ($('.orderdone').length) {
    function initSlider() {
      var screenWidth = $(window).width();
      if (screenWidth > 899 && prodSlider == undefined) { //
        prodSlider = new Swiper('.extra-products__slider', {
          // loop: true,
          speed: 700,
          // autoplay: 2000,
          // freemode: 'true',
          slidesPerView: 'auto',
          nextButton: '.slider__button_next',
          prevButton: '.slider__button_prev',
          pagination: '.slider__dots',
          paginationClickable: true,
          paginationClickableClass: 'slider__dots_clickable',
          bulletClass: 'slider__dot',
          bulletActiveClass: 'active',
          slidesOffsetBefore: '60',
          roundLengths: true,
          breakpoints: {
            1280: {
              slidesOffsetBefore: '24',
            }
          }
        });
      } else if (screenWidth < 900  && prodSlider != undefined) { //
          prodSlider.destroy();
          prodSlider = undefined;
          $('.swiper-wrapper').css('transform', 'translate3d(0, 0, 0)');
          // jQuery('.swiper-wrapper').removeAttr('style');
          // jQuery('.swiper-slide').removeAttr('style');
      }
    }

    //Swiper plugin initialization
    initSlider();

    //Swiper plugin initialization on window resize
    $(window).resize( function() {
      initSlider();
    });

    return
  }
  function initSlider() {
    var screenWidth = $(window).width();
    if (screenWidth > 899 && prodSlider == undefined) { //
      prodSlider = new Swiper('.extra-products__slider', {
        // loop: true,
        speed: 700,
        // autoplay: 2000,
        // freemode: 'true',
        slidesPerView: 'auto',
        nextButton: '.slider__button_next',
        prevButton: '.slider__button_prev',
        pagination: '.slider__dots',
        paginationClickable: true,
        paginationClickableClass: 'slider__dots_clickable',
        bulletClass: 'slider__dot',
        bulletActiveClass: 'active',
        slidesOffsetBefore: '133',
        roundLengths: true,
        breakpoints: {
          1280: {
            slidesOffsetBefore: '24',
          }
        }
      });
    } else if (screenWidth < 900  && prodSlider != undefined) { //
        prodSlider.destroy();
        prodSlider = undefined;
        $('.swiper-wrapper').css('transform', 'translate3d(0, 0, 0)');
        // jQuery('.swiper-wrapper').removeAttr('style');
        // jQuery('.swiper-slide').removeAttr('style');
    }
  }

  //Swiper plugin initialization
  initSlider();

  //Swiper plugin initialization on window resize
  $(window).resize( function() {
    initSlider();
  });
}
/* eslint-enable */
