import $ from 'jquery';
/* eslint-disable */

export default () => {
  const CARD = $('.address-card');
  const ACTIVE_CLASS = 'address-card_active';

  if (!CARD || $(window).width() < 769) {
    return;
  };

  $(window).on('resize', function () {
    if ($(window).width() < 769) {
      return;
    };
  });

  CARD.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
  });
};

/* eslint-enable */
