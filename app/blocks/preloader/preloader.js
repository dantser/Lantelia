import $ from 'jquery';
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

/* eslint-disable */
export default () => {
  if ($('.index').length == 0) {
    $('#preloader').remove();
    return
  };
  freeze();

  const PRE = $('#preloader');
  const TEXT = $('.preloader__logo');

  PRE.on('click', function (e) {
    e.preventDefault();
  });

  setTimeout(function () {
    TEXT.fadeIn(1500).addClass('animated');
  }, 500);

  TEXT.fadeOut();
  setTimeout(function () {
    PRE.fadeOut();
    unfreeze();
  }, 3000);

}
/* eslint-enable */
