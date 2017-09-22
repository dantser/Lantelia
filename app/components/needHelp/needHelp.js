/* eslint-disable */
import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const needHelp = $('.needHelp');
  const w = $(window);
  const SHOW_ELEMENT_AT = $('.main-slider').offset().top;

  if(!needHelp) {
    return
  };
  if(w.width > 971) {
    w.on('scroll', function (e) { // eslint-disable-line
      const scrollTop = w.scrollTop();
      // eslint-disable-next-line

      if (scrollTop > SHOW_ELEMENT_AT) {
        needHelp.fadeIn();
      } else {
        needHelp.fadeOut();
      }
    });
  }



  // Freeze page content scrolling
  function freeze() {
      const { $ } = window;
      const h = $('html');

      if (h.css('position') !== 'fixed') {
          const top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

          if (window.innerWidth > h.width()) {
              h.css('overflow-y', 'scroll');
          }

          h.css({ width: '100%', height: '100%', position: 'fixed', top: -top });
      }
  }

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

  $(document).on('click', '.needHelp', function (e) {
    e.preventDefault();
    const grayscreen = $('#grayscreen');
    const popup = $('.needHelp-popup');
    needHelp.toggleClass('needHelp_opened');

    if ($(this).hasClass('needHelp_opened')) {
      freeze();
      if($(window).width() > 971) {
        grayscreen.fadeIn();
      }
      popup.fadeIn();
    } else {
      unfreeze();
      grayscreen.fadeOut();
      popup.fadeOut();
    }
  });
}
/* eslint-enable */
