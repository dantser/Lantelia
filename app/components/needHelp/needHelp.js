/* eslint-disable */
import $ from 'jquery';
import {freeze, unfreeze} from '../../blocks/js-functions/freeze';

export default () => {
  const needHelp = $('.needHelp');
  const w = $(window);
  const SLIDER = $('.main-slider');
  if(!SLIDER) {
    return;
  }
  const SHOW_ELEMENT_AT = SLIDER.offset().top;
  const grayscreen = $('#grayscreen');
  const popup = $('.needHelp-popup');
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');


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

  $(document).on('click', '.needHelp', function (e) {
    e.preventDefault();
    needHelp.addClass('needHelp_opened');
      freeze();
      if($(window).width() > 971) {
        grayscreen.fadeIn();
      } else {
        menu.removeClass('header__nav_active');
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
