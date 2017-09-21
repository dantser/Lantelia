/* eslint-disable */
import $ from 'jquery';

export default () => {
  const needHelp = $('.needHelp');

  if(!needHelp) {
    return
  };

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

  needHelp.on('click', function (e) {
    e.preventDefault();
    const grayscreen = $('#grayscreen');
    const popup = $('.needHelp-popup');
    needHelp.toggleClass('needHelp_opened');

    if ($(this).hasClass('needHelp_opened')) {
      freeze();
      grayscreen.show();
      popup.show();
    } else {
      unfreeze();
      grayscreen.hide();
      popup.hide();
    }
  });
}
/* eslint-enable */
