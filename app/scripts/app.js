import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import mainSlider from '../components/main-slider/main-slider';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  mainSlider();
});
