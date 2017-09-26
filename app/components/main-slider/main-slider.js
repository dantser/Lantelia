// import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  /* eslint-disable */
  const mainSlider = new Swiper('.product-container', {
    wrapperClass: 'product-wrapper',
    slideClass: 'product-slide',
    pagination: '.main-slider__pagination',
    paginationElement: 'li',
    paginationClickable: true,
    loop: true,
    speed: 500,
    bulletClass: 'slider-pagination-switch',
    bulletActiveClass: 'active',
    autoplay: 5000,
    effect: 'fade',
    autoplayDisableOnInteraction: false,
    onSlideChangeStart: function (swiper) {
      // $('.swiper-slide-active').fadeIn('slow');
      // $('.swiper-slide-next').fadeOut();
    }
  });

  $('.slider-pagination-switch').click(function(){
    $('.slider-pagination-switch').removeClass('active');
		$(this).addClass('active');
  });

}
/* eslint-enable */
