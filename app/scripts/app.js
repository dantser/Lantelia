import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import mainSlider from '../components/main-slider/main-slider';
import addressCard from '../blocks/address-card/address-card';
import whereToBuy from '../components/whereToBuy/whereToBuy';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  mainSlider();
  addressCard();
  whereToBuy();
});
