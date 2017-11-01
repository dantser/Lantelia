/* eslint-disable */
const $ = window.$;
import 'velocity-animate';
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';


// import { smartToggle } from '../../blocks/js-functions/smartToggle';

export default () => {
  const needHelp = $('.needHelp');
  const w = $(window);
  // const SLIDER = $('.main-slider');
  // const SHOW_ELEMENT_AT = SLIDER.offset().top;
  const SHOW_ELEMENT_AT = 700;
  const grayscreen = $('#overlay');
  const popup = $('.needHelp-popup');
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');
  const cart = $('.addcart');

  $.fn.actualSize = function (margins) {
    var el = this,
        previousCSS = el.attr('style'),
        size;

    el.css({
      position: 'absolute',
      visibility: 'hidden',
      display: 'inline-block',
    });

    size = {
      'width': el.width(),
      'height': el.height(),
      'innerWidth': el.innerWidth(),
      'innerHeight': el.innerHeight(),
      'outerWidth': el.outerWidth(margins || false),
      'outerHeight': el.outerHeight(margins || false),
    };

    el.attr('style', previousCSS ? previousCSS : '');

    return size;
  };

///////////////////////////////////////////////////////

  $.fn.smartToggle = function (dimension, options) {
    var el = this,
        options = options || '',
        toggleXClass = 'toggled-x',
        toggleYClass = 'toggled-y',
        easing = options.easing || 'swing',
        timing = options.timing || 500,
        type = options.display || 'inline-block', // Display 'block' by default
        param = dimension || 'height', // Animate height by default
        size = el.actualSize(),
        toggledX = el.hasClass(toggleXClass),
        toggledY = el.hasClass(toggleYClass),
        realWidth = size.width,
        realHeight = size.height,
        isWidth = (param != 'height'),
        isHeight = (param != 'width');

    function elStart() {
      el.css({
        width: toggledX || (isHeight && !isWidth) ? realWidth : 0,
        height: toggledY || (!isHeight && isWidth) ? realHeight : 0,
      });
    };

    function animEnd() {
      el.css({
        display: toggledX || toggledY ? '' : type,
        height: toggledY || (!isHeight && isWidth) ? 'auto' : '',
        width: toggledX || (isHeight && !isWidth) ? 'auto' : '',
      });
    };

    el.show(0, elStart).velocity({
      height: toggledY ? 0 : realHeight + 'px',
      width: toggledX ? 0 : realWidth + 'px',
    }, {
      duration: timing,
      easing: easing,
      complete: animEnd,
      display: 'inline-block',
    });

    !toggledX && isWidth ? el.addClass(toggleXClass) : el.removeClass(toggleXClass);
    !toggledY && isHeight ? el.addClass(toggleYClass) : el.removeClass(toggleYClass);
  }


  // if(w.width() > 1399) {
  //
  //   w.on('scroll', function (e) { // eslint-disable-line
  //     const scrollTop = w.scrollTop();
  //     // eslint-disable-next-line
  //     if (needHelp.hasClass('needHelp_opened') || $('.fancybox-is-open').length) {
  //       return
  //     }
  //     if (scrollTop > SHOW_ELEMENT_AT) {
  //       needHelp.fadeIn();
  //       cart.fadeIn();
  //     } else {
  //       needHelp.fadeOut();
  //       cart.fadeOut();
  //     }
  //   });
  // }

  needHelp.hover( function (e) {
    e.preventDefault();
    $(this).find('.needHelp__text').smartToggle('width', { easing: 'ease', timing: 1000 });
  });

  $(document).on('click', '.needHelp', function (e) {
    e.preventDefault();
    needHelp.addClass('needHelp_opened');
      freeze();
      if($(window).width() < 1400) {
        menu.removeClass('header__nav_active');
      }
      grayscreen.fadeIn('fast');
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
