import $ from 'jquery';
/* eslint-disable */

export default () => {
  const CARD = $('.address-card');
  const ACTIVE_CLASS = 'address-card_active';

  if (!CARD || $(window).width() < 1399) {
    return;
  };

  $(window).on('resize', function () {
    if ($(window).width() < 1400) {
      return;
    };
  });

  if ($(window).width() > 1399) {
    CARD.on('click', function (e) {

      e.preventDefault();
      CARD.removeClass(ACTIVE_CLASS)
      $(this).toggleClass(ACTIVE_CLASS);
    });
  }


};

/* eslint-enable */
