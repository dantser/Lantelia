import $ from 'jquery';
/* eslint-disable */

export default () => {
  const CARD = $('.product-card'),
        DEL_CARD = CARD.find('.product-card__delete'),
        PRICE = CARD.find('.order-price__price');

  const NUMBER_OF_GOODS = $('.js-num-goods .order-price__price');
  const SELECT = $('.product-card__right .option');
  let CARD_LENDTH = CARD.length;
  console.log(CARD_LENDTH);
  NUMBER_OF_GOODS.text(CARD_LENDTH);

  DEL_CARD.on('click', function () {
    $(this).parents('.product-card').remove();
    numberOfProducts();
  });

  function numberOfProducts () {
    let CARD = $('.product-card');
    CARD_LENDTH = CARD.length;
    console.log(CARD_LENDTH);
    NUMBER_OF_GOODS.text(CARD_LENDTH);
  };

  SELECT.each(function () {
    $(this).on('change', function () {
      // let GOOD_PRICE = $(this).parents(CARD).find('.js-price').text();
      console.log(GOOD_PRICE);
    })
  })




}
