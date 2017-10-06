
const $ = window.$;
/* eslint-disable */
export default () => {
  const FILTER_ITEM = $('.filter__item');
  const ACTIVE_CLASS = 'active';
  const CHECKBOX = $('.checkradio__input');
  const CARD = $('.product-card');

  FILTER_ITEM.on('click', function () {
    const $this = $(this);
    const lFilter = $(this).attr('data-target');

    $this.siblings().removeClass(ACTIVE_CLASS);
    $this.addClass(ACTIVE_CLASS);
    CHECKBOX.prop('checked', false);

    if ($this.hasClass('filter__item_checkbox')) {
      CHECKBOX.prop('checked', true);
    }

    if (lFilter === 'all') {
      CARD.fadeIn(250);
    } else {
      CARD.hide();
      $('.product-card[data-line="'+lFilter+'"]').fadeIn(250);
    }
  });

  const FILTER_CONTACTS = $('.js-select');

  FILTER_CONTACTS.on('change', function () {
    const ADDRESS_CARD = $('.address-card');
    const mFilter = $(this).val();
    if (mFilter === 'all') {
      ADDRESS_CARD.show();
    } else {
      ADDRESS_CARD.hide();
      $('[data-city="'+mFilter+'"]').show();
    }
    // $('select').niceSelect('update');
  });
};

/* eslint-enable */
