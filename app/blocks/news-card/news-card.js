import $ from 'jquery';
import 'jquery.dotdotdot';

export default () => {
  $('.news-card__text').dotdotdot({
    truncate: 'letter',
    fallbackToLetter: true,
  });

  // function overflowDotts(size, element) {
  //   const CONTENT = $(element);
  //   CONTENT.each(function () {
  //     const SIZE = size;
  //     const CONTENTTEXT = $(this).text();
  //     if (CONTENTTEXT.length > SIZE) {
  //       $(this).text(CONTENTTEXT.slice(0, SIZE) + ' ...');
  //     }
  //   });
  // }
  //
  // if ($(window).width() < 1280) {
  //   overflowDotts(300, '.news-card__text');
  // } else {
  //   overflowDotts(162, '.news-card__text');
  // }
  //
  // $(window).on('resize', function() {
  //   if ($(window).width() < 1280) {
  //     overflowDotts(300, '.news-card__text');
  //   } else {
  //     overflowDotts(162, '.news-card__text');
  //   }
  // });
};
/* eslint-enable */
