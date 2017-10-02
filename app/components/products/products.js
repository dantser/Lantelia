import $ from 'jquery';
/* eslint-disable */

export default () => {
  const PRODUCT = $('.product-card');

  if(!PRODUCT) {
    return
  };

  const span = $('.products__helper');
  const section = $('.products__line');
  const doc = $(document);
  const ACTIVE_CLASS = 'active';

  function cardsHover(ACTIVE_CLASS) {
    PRODUCT.hover(function () {
      let el = $(this);
      let offset = el.position();

      span.addClass(ACTIVE_CLASS);

      span.css({
        left: offset.left,
        top: offset.top,
        width: el.outerWidth(),
        height: el.outerHeight()
      });
    }, function () {
      span.removeClass(ACTIVE_CLASS);
    });
  };

  if ($(window).width() > 999) {
    cardsHover(ACTIVE_CLASS);
  };

  $(window).resize(function () {
    if ($(window).width() > 999) {
      cardsHover(ACTIVE_CLASS)
    };
  });
}
/* eslint-enable */
