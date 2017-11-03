/* eslint-disable */

import $ from 'jquery';

export default () => {
  const w = $(window);
  const HEADER = $('.header');

  if(w.width() < 1149) {
    w.on('scroll', function () {
      const scrollTop = w.scrollTop();
      if (scrollTop > HEADER.height()) {
        HEADER.addClass('header_bg')
      } else {
        if($('.header__nav').hasClass('header__nav_active') || $('.js-burger').hasClass('burger_active')) {
          return
        }
        HEADER.removeClass('header_bg');
      }
    })
  }
};
/* eslint-enable */
