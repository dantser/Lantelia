import $ from 'jquery';
/* eslint-disable */

export default () => {
  const CARD = $('.product-card'),
        DEL_CARD = CARD.find('.product-card__delete');

  const NUMBER_OF_GOODS = $('.js-num-goods .order-price__price');

  let CARD_LENDTH = CARD.length;
  NUMBER_OF_GOODS.text(CARD_LENDTH);




  function numberOfProducts () { // считаем околичество позици
    let CARD = $('.product-card');
    CARD_LENDTH = CARD.length;
    NUMBER_OF_GOODS.text(CARD_LENDTH);
  };


  $(document).ready(function () {

    let TOTAL_RESULT;
    $('.order-price__price').toLocaleString();

    DEL_CARD.on('click', function () {
      $(this).parents('.product-card').remove();
      numberOfProducts();
      result();
      $('.js-total-sum .order-price__price').text(TOTAL_RESULT);
    });

    productCount();


    function result() { // считаем общую сумму
      let CARD_TOTAL = $('.product-card__total .order-price__price');

      TOTAL_RESULT = 0;

      CARD_TOTAL.each(function () {
        let DATA_TOTAL = $(this).attr('data-total')
        TOTAL_RESULT += parseInt(DATA_TOTAL);
      });

      let TOTAL_RESULT_STR = TOTAL_RESULT.toLocaleString();

      $('.js-total-sum .order-price__price').text(TOTAL_RESULT_STR);

      return TOTAL_RESULT;
    }


    function productCount() { // считаем в одной карточке
      const SELECT_PRICE = CARD.find('.product-card__right .option');
      let COUNT, TOTAL, TOTAL_STRING;

      SELECT_PRICE.on('click', function () {
        const PARENT = $(this).parents('.product-card');
        const PRICE = PARENT.attr('data-price');
        COUNT = $(this).text();
        TOTAL = COUNT * PRICE;
        TOTAL_STRING = TOTAL.toLocaleString();
        PARENT.find('.product-card__bottom .order-price__price').text(TOTAL_STRING);
        PARENT.find('.product-card__bottom .order-price__price').attr('data-total', TOTAL);
        result();
      });





    };

  });









}
