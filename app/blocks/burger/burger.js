/* eslint-disable */
import $ from 'jquery';
import {freeze, unfreeze} from '../../blocks/js-functions/freeze';

export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');

  const needHelpPopup = $('.needHelp-popup');
  const grayscreen = $('#overlay');
  const header = $('.header');
  const needHelp = header.find('.needHelp');

  $(burgerClass).on('click', (e) => {
    const burger = $(burgerClass);
    e.preventDefault();
    e.stopPropagation();
    burger.toggleClass(activeBurgerClass);
    menu.toggleClass('header__nav_active');
    needHelp.removeClass('needHelp_opened');
    needHelpPopup.hide();
    if ( header.hasClass('header_top') ) {
      header.toggleClass('header_fill');
    }

    if (burger.hasClass(activeBurgerClass)) {
      freeze();
      grayscreen.fadeIn();
    } else {
      unfreeze();
      grayscreen.fadeOut();
    }
  });

  $('.header').on('click', (e) => {
    e.stopPropagation();
  })

  $('html, body').on('click', function (e) {
    // menu.slideUp();
    $(burgerClass).removeClass(activeBurgerClass);
    unfreeze();
    grayscreen.fadeOut();
    menu.removeClass('header__nav_active');
    $('.header').removeClass('header_fill');
  });
};
/* eslint-enable */
