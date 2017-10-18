/* eslint-disable */
import $ from 'jquery';

export default () => {
  const cardClass = '.address-card';

  if($('.sales-offices__map').length == 0 || $(window).width() < 768) {
    return
  }

  if($(window).width() < 1280) {
    $('.sales-offices__map').insertAfter($('.address-card:last-child'));
  }

  $('.js-close').on('click',function (e) {
    e.preventDefault();
    $(this).parents('.sales-offices__map').removeClass('active');
  });

  $(cardClass).click(function (e) {
  var el = $(this),
      container = el.parents('.js-cards'),
      map = container.find('.sales-offices__map'),
      ease = 500,
      activeClass = 'active',
      amount = container.find(cardClass).length;

  if (el.hasClass(activeClass)) {
    el.removeClass(activeClass);
    map.removeClass(activeClass);
    return false;
  }

  el.addClass(activeClass).siblings(cardClass).removeClass(activeClass);


  // Ищем целевое положение (index)
  var mapIndex = map.index(),
      elIndex = mapIndex < el.index() ? el.index() - 1 : el.index(),
      elPos = el.offset().top;

  // Перебираем карточки, чтобы найти нужную позицию
  container.find(cardClass).each(function () {
    var card = $(this),
        cardIndex = mapIndex < card.index() ? card.index() - 1 : card.index(),
        cardPos = card.offset().top,
        targetPos,
        islast = card.is(':last-child') || (cardIndex === mapIndex - 1 && map.is(':last-child'));

        // Проверяем, не лежит ли карточка в другом ряду
        if ((cardIndex > elIndex && cardPos > elPos) || islast) {
          targetPos = !islast ? cardIndex : amount;

          // Если карта в правильном положении, сразу делаем активной
          if (targetPos === mapIndex) {
            if (!map.hasClass(activeClass)) map.addClass(activeClass);
            return false;
          }

          // Если карту надо переставить, сначала скрываем ее, потом показываем
          map.removeClass(activeClass);

          setTimeout(function () {
           islast ? card.after(map) : card.before(map);
          }, ease + 10);

         setTimeout(function () {
           map.addClass(activeClass);
         }, ease + 50);

         return false;
        }
      });
    });





  // $(window).resize(function () {
  //   reInitVars();
  //   $('.sales-offices__map').slideUp();
  //
  // });
  //
  // $('.js-select').on('change', function () {
  //   setTimeout(function () {
  //     reInitVars();
  //   }, 300);
  //
  //   $('.sales-offices__map').slideUp();
  // })
}


/* eslint-enable */
