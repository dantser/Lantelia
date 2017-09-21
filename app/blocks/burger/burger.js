import $ from 'jquery';

/* eslint-disable */
export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');

  $(burgerClass).on('click', (e) => {
    const burger = $(burgerClass);
    e.preventDefault();
    e.stopPropagation();
    burger.toggleClass(activeBurgerClass);
    menu.slideToggle();
    if (burger.hasClass(activeBurgerClass)) {
      freeze();
    } else {
      unfreeze();
    }
  });

  $('html, body').on('click', function (e) {
    menu.slideUp();
    $(burgerClass).removeClass(activeBurgerClass);
    unfreeze();
  })


  function freeze() {
      const { $ } = window;
      const h = $('html');

      if (h.css('position') !== 'fixed') {
          const top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

          if (window.innerWidth > h.width()) {
              h.css('overflow-y', 'scroll');
          }
          h.css({  position: 'fixed', top: -top });
      }
  };

  // Unfreeze page content scrolling
  function unfreeze() {
      const { $ } = window;
      const h = $('html');

      if (h.css('position') === 'fixed') {
          h.css('position', 'static');
          $('html, body').scrollTop(-parseInt(h.css('top'), 10));
          h.css({ position: '', top: '', 'overflow-y': '' });
      }
  };
};
/* eslint-enable */
