/* eslint-disable*/
const $ = window.$;
import 'velocity-animate';

///////////////////////////////////////////////////////
export function smartToggle(dimension, options) {
  var el = this,
      options = options || '',
      toggleXClass = 'toggled-x',
      toggleYClass = 'toggled-y',
      easing = options.easing || 'swing',
      timing = options.timing || 500,
      type = options.display || 'block', // Display 'block' by default
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
  });

  !toggledX && isWidth ? el.addClass(toggleXClass) : el.removeClass(toggleXClass);
  !toggledY && isHeight ? el.addClass(toggleYClass) : el.removeClass(toggleYClass);

  $.fn.actualSize = function (margins) {

      var el = this,
          previousCSS = el.attr('style'),
          size;

      el.css({
        position: 'absolute',
        visibility: 'hidden',
        display: 'block',
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
}


/* eslint-enable*/
