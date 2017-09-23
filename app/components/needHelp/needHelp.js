/* eslint-disable */
import $ from 'jquery';

export default () => {
  const needHelp = $('.needHelp');
  const w = $(window);
  const SHOW_ELEMENT_AT = $('.main-slider').offset().top;
  const grayscreen = $('#grayscreen');
  const popup = $('.needHelp-popup');
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');

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
    needHelp.addClass('needHelp_opened');
      freeze();
      if($(window).width() > 971) {
        grayscreen.fadeIn();
      } else {
        menu.slideUp();
      }
      popup.fadeIn();
      $(burgerClass).removeClass(activeBurgerClass);

    // }
    // else {
    //   unfreeze();
    //   grayscreen.fadeOut();
    //   popup.fadeOut();
    // }
  });


  $('.needHelp__close').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    needHelp.removeClass('needHelp_opened');
    unfreeze();
    popup.fadeOut();
    grayscreen.fadeOut();
  });

  $('.needHelp-popup, .header__nav, .header__logo').on('click',function (e) {
    e.stopPropagation();
  });

  $('html, body').on('click', function (e) {
    // menu.slideUp();
    needHelp.removeClass('needHelp_opened');
    unfreeze();
    popup.fadeOut();
    grayscreen.fadeOut();
  });
}
/* eslint-enable */
