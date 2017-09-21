import $ from 'jquery';
/* eslint-disable */
export default () => {
  function overflowDotts(size, element) {
    const CONTENT = $(element);
    CONTENT.each(function () {
      const SIZE = size;
      const CONTENTTEXT = $(this).text();
      if (CONTENTTEXT.length > SIZE) {
        $(this).text(CONTENTTEXT.slice(0, SIZE) + ' ...');
      }
    });
  }

  if ($(window).width() < 769) {
    overflowDotts(85, '.news-card__text');
  } else {
    overflowDotts(162, '.news-card__text');
  }

  $(window).on('resize', function() {
    if ($(window).width() < 769) {
      overflowDotts(85, '.news-card__text');
    } else {
      overflowDotts(162, '.news-card__text');
    }
  });
};
/* eslint-enable */
