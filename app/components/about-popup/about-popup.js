/* eslint-disable */
import $ from 'jquery';
import 'jquery-validation';

export default () => {
  const MESSAGE_BOX = $('.error-messages');
  $('#about-form').validate({
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
    errorLabelContainer: $('.error-messages ul'),
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
      name: "Не заполнено поле название салона",
      city: "Не заполнено поле Город",
      fio: "Не заполнено поле ФИО",
      phone: "Не заполнено поле Телефон",
      email: {
        required: "Не заполнено поле E-mail",
        email: "Введите корректный E-mail"
      },
      message: "Не заполнено поле Сообщение"
    },
    focusCleanup: true,
    errorContainer: $('#error-message-about')
  });

  $('.error-messages__close').on('click', () => {
    MESSAGE_BOX.fadeOut().removeClass('active');
  });
}
