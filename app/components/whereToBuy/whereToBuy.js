/* eslint-disable */
import Swiper from 'swiper';
// import $ from 'jquery';
import 'selectric';

export default () => {

  const mainSlider = new Swiper('.address-container', {
    wrapperClass: 'address-wrapper',
    slideClass: 'address-card',
    slidesPerView: 'auto'
  });

  $('select').selectric();

  /* eslint-ensable */
}
