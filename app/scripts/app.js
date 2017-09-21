import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import mainSlider from '../components/main-slider/main-slider';
import addressCard from '../blocks/address-card/address-card';
import whereToBuy from '../components/whereToBuy/whereToBuy';
import map from '../components/map/map';
import newsCard from '../blocks/news-card/news-card';
import needHelp from '../components/needHelp/needHelp';
import burger from '../blocks/burger/burger';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  mainSlider();
  addressCard();
  whereToBuy();
  map();
  newsCard();
  needHelp();
  burger();
});
