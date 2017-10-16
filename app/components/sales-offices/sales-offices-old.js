/* eslint-disable */
import $ from 'jquery';

export default () => {
  const CARD = $('.address-card');
  const MAP = $('.sales-offices__map');
  let CARD_VISIBLE = $('.address-card :visible');

  if($('.sales-offices__map').length == 0) {
    return
  }

  $('.js-close').on('click',function (e) {
    e.preventDefault();
    $(this).parents('.sales-offices__map').slideUp('slow');
  });

  const cardWidth = CARD.outerWidth(true);
  let parentWidth = $('.sales-offices__wrapper').width(),
      perRow = calculatePerRow(),
      rowsCount = Math.ceil($('.address-card:visible').length / perRow),
      cardsCount = rowsCount * perRow;

  console.log('rowsCount = ' + rowsCount);
  console.log('perRow = ' + perRow);

  function calculatePerRow() {
    perRow = 0;
    $('.address-card:visible').each(function() {
        if($(this).prev().length > 0) {
            if($(this).position().top != $(this).prev().position().top) return false;
            perRow++;
        }
        else {
            perRow++;
        }
    });

    return perRow;

    // var lisInLastRow = CARD.length % lisInRow;
    // if(lisInLastRow == 0) lisInLastRow = lisInRow;
  }
  function reInitVars() {
    parentWidth = $('.sales-offices__wrapper').width(),
    perRow = calculatePerRow(),
    rowsCount = Math.ceil($('.address-card:visible').length / perRow),
    cardsCount = rowsCount * perRow;
    console.log(perRow);
  }

  if ($(window).width() > 1399) {
    CARD.on('click', function () {
      const cardIndex = $(this).siblings(":visible").addBack().index($(this)) + 1;
      const cardInRow = Math.ceil(cardIndex / perRow);
      const lastCardInRow = cardInRow * perRow;

      if(CARD.eq(lastCardInRow - 1).length && CARD.eq(lastCardInRow - 1).is(':visible') && perRow !== 0) {
        MAP.insertAfter($('.address-card:visible').eq(lastCardInRow - 1)).slideDown().removeClass('hidden');
      } else {
        MAP.insertAfter($('.address-card:visible:last')).slideDown().removeClass('hidden');
      }
    });



    $(window).resize(function () {
      reInitVars();
      $('.sales-offices__map').slideUp();

    });

    $('.js-select').on('change', function () {
      setTimeout(function () {
        reInitVars();
      }, 300);

      $('.sales-offices__map').slideUp();
    })
  }
}

/* eslint-enable */
