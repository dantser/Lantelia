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
    if ($(window).width() < 768) {
      return
    }
    e.preventDefault();
    $(this).toggleClass(ACTIVE_CLASS).parents('.swiper-slide').siblings().find('.address-card').removeClass(ACTIVE_CLASS);
  });
};

/* eslint-enable */
