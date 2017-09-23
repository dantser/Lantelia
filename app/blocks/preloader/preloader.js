import $ from 'jquery';
/* eslint-disable */
export default () => {
  const PRE = $('#preloader');
  const TEXT = $('.preloader__text');
  freeze();

  setTimeout(function () {
    TEXT.fadeIn(2500).addClass('animated');
  }, 500);

  $(document).ready(function () {
    TEXT.fadeOut();
    setTimeout(function () {
      unfreeze();
      PRE.fadeOut();
    }, 3000);
  });



  // Freeze page content scrolling
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
}
/* eslint-enable */
