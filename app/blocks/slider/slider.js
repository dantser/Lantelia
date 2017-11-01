/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
const $ = window.$;
import Swiper from 'swiper';

export default function slider() {
  const sliderS = $('.js-slider');
  if (sliderS.length == 0 || $('.product-page').length == 1) {
    return;
  }
  var mySlider = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 767 && mySlider == undefined) {
      mySlider = new Swiper('.js-slider', {
        // loop: true,
        speed: 700,
        // autoplay: 2000,
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
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        breakpoints: {
          1280: {
            slidesOffsetBefore: '24',
          }
        }
      });

    } else if (screenWidth < 768 && mySlider != undefined) {
        mySlider.destroy();
        mySlider = undefined;
        $('.swiper-wrapper').css('transform', 'translate3d(0, 0, 0)');
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
}
/* eslint-enable */
