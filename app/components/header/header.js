/* eslint-disable */

import $ from 'jquery';

export default () => {
  const w = $(window);
  const HEADER = $('.header');

  w.on('scroll', function () {
    const scrollTop = w.scrollTop();
    if (scrollTop > HEADER.height()) {
      HEADER.addClass('header_bg')
    } else {
      HEADER.removeClass('header_bg')
    }
  })
};
/* eslint-enable */
