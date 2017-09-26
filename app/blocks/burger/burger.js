/* eslint-disable */
import $ from 'jquery';
import {freeze, unfreeze} from '../../blocks/js-functions/freeze';

export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const menu = $('.header__nav');
  const needHelp = $('.needHelp');
  const needHelpPopup = $('.needHelp-popup');

  $(burgerClass).on('click', (e) => {
    const burger = $(burgerClass);
    e.preventDefault();
    e.stopPropagation();
    burger.toggleClass(activeBurgerClass);
    menu.toggleClass('header__nav_active');
    needHelp.removeClass('needHelp_opened');
    needHelpPopup.hide();
    if (burger.hasClass(activeBurgerClass)) {
      freeze();
    } else {
      unfreeze();
    }
  });

  $('html, body').on('click', function (e) {
    // menu.slideUp();
    $(burgerClass).removeClass(activeBurgerClass);
    unfreeze();
  });
};
/* eslint-enable */
