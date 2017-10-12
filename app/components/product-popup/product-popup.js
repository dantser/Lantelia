/* eslint-disable */

import '@fancyapps/fancybox';
const $ = window.$;

export default () => {

  // $('.product-popup').find('.product-card').on('click', function (e) {
  //   e.preventDefault();
  //   return
  // });

  // $('.product-card').on('click', function (e) {
  //   $('.needHelp').addClass('needHelp_animated');
  // });


  $('.product-card__link').on('click', function () {
    $('.needHelp').fadeIn();
    $('.addcart').fadeIn();
  });

  // if(!CLOSE) {
  //   return;
  // };
  //
  // CLOSE.on('click', function (e) {
  //
  // })
}
/* eslint-enable */
