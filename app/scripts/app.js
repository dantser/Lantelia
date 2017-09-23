import svg4everybody from 'svg4everybody';
import 'babel-polyfill';
import objectFitImages from 'object-fit-images';
import mainSlider from '../components/main-slider/main-slider';
import addressCard from '../blocks/address-card/address-card';
import whereToBuy from '../components/whereToBuy/whereToBuy';
import map from '../components/map/map';
import newsCard from '../blocks/news-card/news-card';
import needHelp from '../components/needHelp/needHelp';
import burger from '../blocks/burger/burger';
import modal from '../blocks/modal/modal';
import productPopup from '../components/product-popup/product-popup';
import preloader from '../blocks/preloader/preloader';

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
  modal();
  productPopup();
  preloader();
});
