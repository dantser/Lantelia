/* eslint-disable */
import $ from 'jquery';

export default () => {
  // $('.cart').siblings('.addcart').hide();
  const CARD = $('.product-card'),
        DEL_CARD = CARD.find('.product-card__delete');

  const NUMBER_OF_GOODS = $('.js-num-goods .order-price__price');
  const SELECT_PRICE = CARD.find('.js-select');

  let CARD_LENDTH = CARD.length;
  let COUNT, TOTAL, TOTAL_STRING;
  NUMBER_OF_GOODS.text(CARD_LENDTH);

  function numberOfProducts () { // считаем околичество позиций
    let CARD = $('.product-card');
    CARD_LENDTH = CARD.length;
    NUMBER_OF_GOODS.text(CARD_LENDTH);
  };

  $('.order-price__price').toLocaleString();


  $(document).ready(function () {
    let TOTAL_RESULT;

    DEL_CARD.on('click', function () {
      $(this).parents('.product-card').remove();
      numberOfProducts();
      result();
      $('.js-total-sum .order-price__price').text(TOTAL_RESULT.toLocaleString());
    });

    productCount();

    SELECT_PRICE.each(function () {
      const PARENT = $(this).parents('.product-card');
      const PRICE = PARENT.attr('data-price');
      COUNT = $(this).val();
      TOTAL = COUNT * PRICE;
      TOTAL_STRING = TOTAL.toLocaleString();
      PARENT.find('.product-card__bottom .order-price__price').text(TOTAL_STRING);
      PARENT.find('.product-card__bottom .order-price__price').attr('data-total', TOTAL);
    });

    function result() { // считаем общую сумму
      let CARD_TOTAL = $('.product-card__total .order-price__price');

      TOTAL_RESULT = 0;

      CARD_TOTAL.each(function () {
        let DATA_TOTAL = $(this).attr('data-total')
        TOTAL_RESULT += parseInt(DATA_TOTAL);
      });

      let TOTAL_RESULT_STR = TOTAL_RESULT.toLocaleString();

      $('.js-total-sum .order-price__price').text(TOTAL_RESULT_STR);
    }

    function productCount() { // считаем в одной карточке
      SELECT_PRICE.on('change', function () {
        const PARENT = $(this).parents('.product-card');
        const PRICE = PARENT.attr('data-price');
        COUNT = $(this).val();
        TOTAL = COUNT * PRICE;
        TOTAL_STRING = TOTAL.toLocaleString();
        PARENT.find('.product-card__bottom .order-price__price').text(TOTAL_STRING);
        PARENT.find('.product-card__bottom .order-price__price').attr('data-total', TOTAL);
        result();
      });
    };
  });
}
