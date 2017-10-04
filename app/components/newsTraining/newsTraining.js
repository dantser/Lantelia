const $ = window.$;

export default () => {
  if ($(window).width() < 1401) {
    $('[data-tab="tab2"]').removeClass('active');
  }
};
