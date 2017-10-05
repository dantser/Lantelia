/* eslint-disable */
import $ from 'jquery';

export default () => {

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     width: 600,
//        height: 400,
//        videoId: 'Xa0Q0J5tOP0',
//        playerVars: {
//            color: 'white',
//            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
//        },
//        events: {
//            onReady: initialize
//        }
//   });
// }
//
//   function initialize(){
//
//     // Обновляем элементы управления и загружаем
//     updateTimerDisplay();
//     updateProgressBar();
//
//     // Сброс старого интервала
//     clearInterval(time_update_interval);
//
//     // Запускаем обновление таймера и дорожки проигрывания
//     // каждую секунду.
//     time_update_interval = setInterval(function () {
//         updateTimerDisplay();
//         updateProgressBar();
//     }, 1000)
//
// }
//
  $('.video').on('click', function () {
    var video = '<div class="video__container"><iframe class="video__player" frameborder="0" allowfullscreen src="' + $(this).find('.video__image').attr('data-video') + '"></iframe></div>';
    $(this).find('.video__icon').fadeOut();
    $('.video__image').replaceWith(video);
  });




};
/* eslint-enable */
