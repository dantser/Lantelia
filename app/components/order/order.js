import $ from 'jquery';
import Inputmask from 'inputmask';

/* eslint-disable */

export default () => {
  const SLIDE_EL = '.js-slide-el';
  const BUTTON = $('.order__button .button__text');

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
  function input(value) {
    return $('.checkradio__input[value='+value+']')
  }

  $('.tabs__tab').on('click', function () {
    setTimeout(function () {
      if ($('[data-tab-target="tab1"]').hasClass('active')) {
        input('online').prop('checked', true);
        input('msk-courier').prop('checked', true);
        input('offline').parents('.grid__col').show();
      } else if ($('[data-tab-target="tab2"]').hasClass('active')) {
        input('online').prop('checked', true);
        input('mo-courier').prop('checked', true);
        input('offline').parents('.grid__col').show();
      } else if ($('[data-tab-target="tab3"]').hasClass('active')) {
        input('russia').prop('checked', true);
        input('online').prop('checked', true);
        input('offline').parents('.grid__col').hide();
      }
    }, 100);
  });

  input('mo-tk').on('click', function () {
    input('offline').parents('.grid__col').hide();
    input('online').prop('checked', true);
  })

  input('mo-courier').on('click', function () {
    input('offline').parents('.grid__col').show();
  })

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
