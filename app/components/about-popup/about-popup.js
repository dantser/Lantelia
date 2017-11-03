/* eslint-disable */
const $ = window.$;
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export default () => {
  const MESSAGE_BOX = $('.error-messages');

  $('.about-popup').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    freeze();
  })

  $("#orderForm").submit(function(event){
    event.preventDefault(); // Stop default action
    window.emptyfields = 0;
    window.errors = "";
    const postData = $(this).serializeArray();
    const formURL = $(this).attr("action");
    const method = $(this).attr("method");

    // Проверяем каждый инпут на ошибку
    $(this).find("[data-required]").each(function(){
        if ( (!$(this).val()) || ($(this).attr("type") === "checkbox" && $(this).prop('checked')===false) ) {
            emptyfields += 1;
            errors += "«"+$(this).attr("title")+"», ";
            $(this).prev(".inputbox__label").addClass("inputbox__label_error");
        }
    });

    if (emptyfields === 1) {
        $('.error-messages .basic-msg').text("Не заполнено поле");
    } else {$('.error-messages .basic-msg').text("Не заполнены поля");}


    if (emptyfields === 0 ) {
        return true;
    } else {
        errors = errors.slice(0, -2);
        $('.error-messages .errors').text(errors);
        showerror();
        return false;
    }

    $.ajax({
      url : formURL,
      type: method,
      data : postData,
      success: function (data, textStatus, jqXHR) {
        alert("Send success. data: " + data + ", textStatus: " + textStatus + ", jqXHR: " + jqXHR);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Send fails. jqXHR: " + jqXHR + ", textStatus: " + textStatus + ", errorThrown: " + errorThrown);
      }
    });
  });

  $('.order__error-close').on('click', () => {
    MESSAGE_BOX.fadeOut().removeClass('active');
  });

  $('.js-fancyform').fancybox({
    afterLoad: function () {
      freeze();
      MESSAGE_BOX.fadeOut().removeClass('active');
    },
    afterClose: function () {
      unfreeze();
      MESSAGE_BOX.fadeOut().removeClass('active');
    },
    touch: false

  });

//     $("#aboutForm").bind("submit", function() {
//
// 	if ($("#workName").val().length < 1 || $("#workCity").val().length < 1) {
// 	    MESSAGE_BOX.show();
// 	    return false;
// 	}
//
// 	$.fancybox.showActivity();
//
// 	$.ajax({
// 		type		: "POST",
// 		cache	: false,
// 		url		: "/data/login.php",
// 		data		: $(this).serializeArray(),
// 		success: function(data) {
// 			$.fancybox(data);
// 		}
// 	});
//
// 	return false;
// });

// ################################## //
// Плавно скрыть/показать блок //
// ################################## //

function showblock(el) {
    var type = $(el).data("type");
    setTimeout(function() {el.css("display", type);}, 0);
    setTimeout(function() {el.addClass("active")}, 100);
}

function hideblock(el) {
    setTimeout(function() {el.removeClass("active");}, 0);
    setTimeout(function() {el.css("display", "none");}, 1500);
}


$("#aboutForm").on('submit', function(event) {
    freeze();
    event.preventDefault(); // Stop default action
    window.emptyfields = 0;
    window.errors = "";
    const postData = $(this).serializeArray();
    const formURL = $(this).attr("action");
    const method = $(this).attr("method");

    // Проверяем каждый инпут на ошибку
    $(this).find("[data-required]").each(function(){
        if ( (!$(this).val()) ) {
            emptyfields += 1;
            errors += "«"+$(this).attr("title")+"», ";
            $(this).prev(".inputbox__label").addClass("inputbox__label_error");
        }
    });

    if (emptyfields === 1) {
        $('.error-messages .basic-msg').text("Не заполнено поле");
    } else {$('.error-messages .basic-msg').text("Не заполнены поля");}


    if (emptyfields === 0 ) {
        $('.about-popup__main').hide();
        $('.about-popup__success').addClass('active');

    } else {
        errors = errors.slice(0, -2);
        $('.error-messages .errors').text(errors);
        showerror();
        return false;
    }

    $.ajax({
      url : formURL,
      type: method,
      data : postData,
      success: function (data, textStatus, jqXHR) {
        alert("Send success. data: " + data + ", textStatus: " + textStatus + ", jqXHR: " + jqXHR);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Send fails. jqXHR: " + jqXHR + ", textStatus: " + textStatus + ", errorThrown: " + errorThrown);
      }
    });
});

// Показ окошка ошибки
function showerror() {
    window.errorblock = $('.error-messages');
    showblock(errorblock);
    setTimeout(function(){
        hideblock(errorblock);
    }, 10000);
}

// Убираем класс .error при изменении поля ввода
$("input, textarea").on("change keyup", function(){
    $(this).prev(".inputbox__label").removeClass("inputbox__label_error");
});

$('.about-popup__button').on('click',function (e) {
  $("#aboutForm").submit();
  return false;
})



  // $(document).on('click', '.popup__icon-close', () => {
  //   $.fancybox.close();
  // });
  //
  // $('.js-fancyform').fancybox({
  //   afterLoad: freeze,
  //   afterClose: unfreeze,
  //   touch: false,
  //   callbackOnShow:function(){
  //     $('#about-form').validate({
  //       // invalidHandler: function(form, validator) {
  //       //   var errors = validator.numberOfInvalids();
  //       //
  //       //   if (errors) {
  //       //       $("#error-message").show();
  //       //   } else {
  //       //       $("#error-message").hide();
  //       //   }
  //       // },
  //       errorPlacement: function (error, element) {
  //         MESSAGE_BOX.find('.error__text').html(error)
  //       },
  //       errorContainer: MESSAGE_BOX,
  //       errorLabelContainer: $('.error-messages ul'),
  //       wrapper: 'li',
  //       highlight: function (element, errorClass, validClass) {
  //         MESSAGE_BOX.fadeIn().addClass('active'); //animation
  //         setTimeout(function () {
  //           MESSAGE_BOX.fadeOut().removeClass('active'); //animation
  //         }, 10000);
  //         $(element).addClass("errorHighlight");
  //         $(element).siblings('.input__label').addClass('input__label_error')
  //       },
  //       unhighlight: function (element) {
  //         $(element).removeClass("errorHighlight");
  //         $(element).siblings('.input__label').removeClass('input__label_error')
  //       },
  //       rules: {
  //           // surname: "required"
  //           // age: {
  //           //     required: true,
  //           //     range: [18,70]
  //           // }
  //       },
  //       messages: {
  //         name: "Не заполнено поле название салона",
  //         city: "Не заполнено поле Город",
  //         fio: "Не заполнено поле ФИО",
  //         phone: "Не заполнено поле Телефон",
  //         email: {
  //           required: "Не заполнено поле E-mail",
  //           email: "Введите корректный E-mail"
  //         },
  //         message: "Не заполнено поле Сообщение"
  //       },
  //       focusCleanup: true,
  //       submitHandler: function (form) {
	// 	   //Handle Ajax Method and success  / error here
	// 		  $(".js-fancyform").trigger('click');
	// 	    }
  //     });
	// 	}
  // });
  //
  //
  //
  $('.error-messages__close').on('click', () => {
    MESSAGE_BOX.fadeOut().removeClass('active');
  });
}
