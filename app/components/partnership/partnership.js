import $ from 'jquery';

export default () => {
  const BUTTON = $('.partnership__button .button__text');

  if ($(window).width() < 1400) {
    BUTTON.text('Начать работу с Lantelia');
  } else {
    BUTTON.text('Начать работать с Lantelia');
  }

  $(window).on('resize', () => {
    if ($(window).width() < 1400) {
      BUTTON.text('Начать работу с Lantelia');
    } else {
      BUTTON.text('Начать работать с Lantelia');
    }
  });
};
