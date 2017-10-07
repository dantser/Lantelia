import $ from 'jquery';

/* eslint-disable */

export default () => {
  const CARD = $('.address-card');
  const MAP = $('.sales-offices__map');

  $('.js-close').on('click',function (e) {
    e.preventDefault();
    $(this).parents('.sales-offices__map').slideUp('slow')
  });
  const cardWidth = CARD.width(),
        parentWidth = $('.sales-offices__wrapper').width(),
        rowsCount = Math.ceil((CARD.length * cardWidth) / parentWidth),
        perRow = Math.ceil(CARD.length / rowsCount);


  CARD.on('click', function () {
    const cardIndex = $(this).index();
      console.log(cardIndex);
    const cardInRow = Math.ceil(cardIndex / perRow);
    const lastCardInRow = cardInRow * perRow;
    if(CARD.eq(lastCardInRow).length) {
      MAP.insertAfter(CARD.eq(lastCardInRow)).slideDown();
    } else {
      MAP.insertAfter(CARD.eq(rowsCount)).slideDown();
    }



    // if (cardIndex <= perRow) {
    //
    // } else {
    //   MAP.insertAfter(CARD.eq(perRow*2-1)).slideDown();
    // }
  });
}

/* eslint-enable */
