import $ from 'jquery';
import 'jquery-validation';
import Inputmask from 'inputmask';

/* eslint-disable */

export default () => {
  const SLIDE_EL = '.js-slide-el';
  const BUTTON = $('.order__button .button__text');
  const MESSAGE_BOX = $('.error-messages');



  Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask('input[data-type="tel"]');

  function slide() {
    $('.order__form').on('change', '.checkradio__input', function () {
      if (this.checked) {
        let SLIDE_EL_SIBLINGS = $(this).parents(SLIDE_EL).parents('.grid__col').siblings().find(SLIDE_EL);

        $(this).parents(SLIDE_EL).addClass('js-slide-el_active');
        $(this).siblings('.checkradio__content').find('p').not('.rule').slideDown();
        SLIDE_EL_SIBLINGS.find('.checkradio__content').find('p').not('.rule').slideUp();
        SLIDE_EL_SIBLINGS.removeClass('js-slide-el_active');
        return false;
      }
    });

  };

  if ($(window).width() < 769) {
    BUTTON.text('Оформить заказ');
    slide();
  } else {
    BUTTON.text('Продолжить оформление заказа');
  }

  $(window).resize(function () {
    if ($(window).width() < 769) {
      BUTTON.text('Оформить заказ');
      slide();
    } else {
      BUTTON.text('Продолжить оформление заказа');
    }
  });
}
/* eslint-enable */