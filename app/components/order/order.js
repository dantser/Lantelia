import $ from 'jquery';
/* eslint-disable */

export default () => {
  const SLIDE_EL = '.js-slide-el';
  const BUTTON = $('.order__button');

  $('.order__form').on('change', '.checkradio__input', function () {
    if (this.checked) {
      let SLIDE_EL_SIBLINGS = $(this).parents(SLIDE_EL).parents('.grid__col').siblings().find(SLIDE_EL);

      $(this).parents(SLIDE_EL).addClass('js-slide-el_active');
      $(this).siblings('.checkradio__content').find('p').not('.rule').slideDown();
      SLIDE_EL_SIBLINGS.find('.checkradio__content').find('p').not('.rule').slideUp();
      SLIDE_EL_SIBLINGS.removeClass('js-slide-el_active');
    }
  });

  if ($(window).width() < 1001) {
    BUTTON.text('Оформить заказ');
  } else {
    BUTTON.text('Продолжить оформление заказа');
  }

  $(window).resize(function () {
    if ($(window).width() < 1001) {
      BUTTON.text('Оформить заказ');
    } else {
      BUTTON.text('Продолжить оформление заказа');
    }
  });
}
/* eslint-enable */
