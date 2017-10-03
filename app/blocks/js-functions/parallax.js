/* eslint-disable*/
const $ = window.$;
import 'velocity-animate';

export default () => {
  function parallaxInit() {
    const cl = '.js-parallax';
    const k = 0.5;
    const sT = $(window).scrollTop();

    $(cl).each(function () {
      const el = $(this);

      if (!el.attr('data-top')) el.attr('data-top', el.offset().top);

      const thistop = +el.attr('data-top');
      const next = el.next() || false;

      if (!next) return;

      const nexttop = +next.attr('data-top') || next.offset().top;
      const scrollMax = nexttop - thistop;
      let value = 0;

      if (sT < thistop) {
        value = 0;
      } else if (sT >= thistop && sT < thistop + scrollMax) {
        value = (sT - thistop) * k;
      } else if (sT >= thistop + scrollMax && !el.attr('style')) {
        value = scrollMax * k;
      } else {
        return;
      }

      el.velocity({
        translateY: value,
      }, {
        duration: 0,
        easing: 'linear',
      });
    });
  }

  $(window).scroll(parallaxInit);
  $(document).ready(parallaxInit);
};

/* eslint-enable*/
