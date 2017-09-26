import $ from 'jquery';
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

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
}
/* eslint-enable */
