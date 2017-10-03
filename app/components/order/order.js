import $ from 'jquery';
import 'jquery-validation';
import Inputmask from 'inputmask';

/* eslint-disable */

export default () => {
  const SLIDE_EL = '.js-slide-el';
  const BUTTON = $('.order__button .button__text');
  const MESSAGE_BOX = $('#error-messages');

  $('#orderForm').validate({
    // invalidHandler: function(form, validator) {
    //   var errors = validator.numberOfInvalids();
    //
    //   if (errors) {
    //       $("#error-message").show();
    //   } else {
    //       $("#error-message").hide();
    //   }
    // },
    errorPlacement: function (error, element) {
      MESSAGE_BOX.find('.error__text').html(error)
    },
    errorContainer: MESSAGE_BOX,
    errorLabelContainer: $('#error-messages ul'),
    wrapper: 'li',
    highlight: function (element, errorClass, validClass) {
      MESSAGE_BOX.fadeIn().addClass('active'); //animation
      setTimeout(function () {
        MESSAGE_BOX.fadeOut().removeClass('active'); //animation
      }, 10000);
      $(element).addClass("errorHighlight");
      $(element).siblings('.input__label').addClass('input__label_error')
    },
    unhighlight: function (element) {
      $(element).removeClass("errorHighlight");
      $(element).siblings('.input__label').removeClass('input__label_error')
    },
    rules: {
        // surname: "required"
        // age: {
        //     required: true,
        //     range: [18,70]
        // }
    },
    messages: {
      name: "Не заполнено поле Имя",
      surname: "Не заполнено поле Фамилия",
      phone: "Не заполнено поле Телефон",
      email: {
        required: "Не заполнено поле E-mail",
        email: "Введите корректный E-mail"
      },
      city: "Не заполнено поле Город/Населенный пункт",
      address: "Не заполнено поле Адрес доставки"
    },
    focusCleanup: true,
    errorContainer: $('#error-message')
  });

  $('.order__error-close').on('click', () => {
    MESSAGE_BOX.fadeOut().removeClass('active');
  });

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

  if ($(window).width() < 1001) {
    BUTTON.text('Оформить заказ');
    slide();
  } else {
    BUTTON.text('Продолжить оформление заказа');
  }

  $(window).resize(function () {
    if ($(window).width() < 1001) {
      BUTTON.text('Оформить заказ');
      slide();
    } else {
      BUTTON.text('Продолжить оформление заказа');
    }
  });
}
/* eslint-enable */
