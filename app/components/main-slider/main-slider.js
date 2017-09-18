// import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  /* eslint-disable */
  const galleryTop = new Swiper('.product-container', {
    wrapperClass: 'product-wrapper',
    slideClass: 'product-slide',
    pagination: '.main-slider__pagination',
    paginationElement: 'li',
    paginationClickable: true,
    loop: true,
    bulletClass: 'slider-pagination-switch',
    bulletActiveClass: 'active',
    autoplay: 2500,
    centeredSlides: true,
    autoplayDisableOnInteraction: false
  });

  $('.slider-pagination-switch').click(function(){
    $('.slider-pagination-switch').removeClass('active');
		$(this).addClass('active')
  })

/* eslint-ensable */
}
