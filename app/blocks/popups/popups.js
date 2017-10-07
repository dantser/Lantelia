// http://fancyapps.com/fancybox/3/
/* eslint-disable */
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

$(document).on('click', '.popup__icon-close', () => {
  $.fancybox.close();
});

// $("#fancybox-overlay").css({"position":"fixed"});

export default function popups() {
  $('.js-fancybox').fancybox({
    // afterLoad: freeze,
    // afterClose: unfreeze
  });
}

// afterLoad: function () {
//   freeze,
//   $('.needHelp').addClass('needHelp_animated')
// },
// afterClose: function () {
//   unfreeze,
//   $('.needHelp').removeClass('needHelp_animated')
// },

/* eslint-enable */
