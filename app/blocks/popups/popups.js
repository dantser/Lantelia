// http://fancyapps.com/fancybox/3/
/* eslint-disable */
const $ = window.$;
import '@fancyapps/fancybox';
import { freeze, unfreeze } from '../js-functions/freeze';

$(document).on('click', '.popup__icon-close', () => {
  $.fancybox.close();
});

// $("#fancybox-overlay").css({"position":"fixed"});

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    afterClose: unfreeze,
    touch: false
  });
}

/* eslint-enable */
