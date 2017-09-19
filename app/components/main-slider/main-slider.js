// import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  /* eslint-disable */
  const mainSlider = new Swiper('.product-container', {
    wrapperClass: 'product-wrapper',
    slideClass: 'product-slide',
    pagination: '.main-slider__pagination',
    // paginationElement: 'li',

    paginationClickable: true,
    // loop: true,

    // bulletClass: 'slider-pagination-switch',
    // bulletActiveClass: 'active',

    autoplay:2000,
    centeredSlides: true,
    autoplayDisableOnInteraction: false

  });

  // $('.slider-pagination-switch').click(function(){
  //   $('.slider-pagination-switch').removeClass('slider-pagination-switch-active');
	// 	$(this).addClass('slider-pagination-switch-active')
  // })

/* eslint-ensable */
}
