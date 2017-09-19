import $ from 'jquery';

export default () => {
  const CARD = $('.address-card');
  const ACTIVE_CLASS = 'address-card_active';

  if (!CARD) {
    return;
  }

  CARD.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
  });
};
