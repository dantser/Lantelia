/* eslint-disable */
import $ from 'jquery';
import { shippingMap } from '../map/map';
import L from 'leaflet';

export default () => {
  const CARD = $('.address-card');
  const MAP = $('.sales-offices__map');

  $('.js-close').on('click',function (e) {
    e.preventDefault();
    $(this).parents('.sales-offices__map').slideUp('slow');
  });

  const cardWidth = CARD.outerWidth(true);
  let parentWidth = $('.sales-offices__wrapper').width(),
      rowsCount = Math.ceil((CARD.length * cardWidth) / parentWidth),
      perRow = Math.ceil(CARD.length / rowsCount),
      cardsCount = rowsCount * perRow,
      lastCardsInRow = CARD.eq(perRow n);
  lastCardsInRow.css('margin-right', '0');
  console.log(perRow);

  function reInitVars() {
      parentWidth = $('.sales-offices__wrapper').width(),
      rowsCount = Math.ceil((CARD.length * cardWidth) / parentWidth),
      perRow = Math.ceil(CARD.length / rowsCount),
      cardsCount = rowsCount * perRow;
  }

  if ($(window).width() > 1399) {
    CARD.on('click', function () {
      const cardIndex = $(this).index('.address-card') + 1;
      const cardInRow = Math.ceil(cardIndex / perRow);
      const lastCardInRow = cardInRow * perRow;

      if(CARD.eq(lastCardInRow - 1).length) {
        MAP.insertAfter(CARD.eq(lastCardInRow - 1)).slideDown().removeClass('hidden');
      } else {
        MAP.insertAfter(CARD.last()).slideDown().removeClass('hidden');
      }
    });

    $(window).resize(function () {
      reInitVars()
    });
  }
}

/* eslint-enable */
