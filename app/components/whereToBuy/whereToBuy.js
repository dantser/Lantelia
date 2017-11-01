/* eslint-disable */
import $ from 'jquery';

export default () => {

  $(document).ready(function () {
    $('.swiper-slide-visible').last().hover(function () {
      $('.slider__button_next').show();
      return false
    })
  })
}
  /* eslint-ensable */
