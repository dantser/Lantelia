import svg4everybody from 'svg4everybody';
import 'babel-polyfill';
import objectFitImages from 'object-fit-images';
import parallax from '../blocks/js-functions/parallax';
import { freezebuttons } from '../blocks/js-functions/freeze';
import mainSlider from '../components/main-slider/main-slider';
// import addressCard from '../blocks/address-card/address-card';
import whereToBuy from '../components/whereToBuy/whereToBuy';
import map from '../components/map/map';
import newsCard from '../blocks/news-card/news-card';
import needHelp from '../components/needHelp/needHelp';
import burger from '../blocks/burger/burger';
import { selects, textarea } from '../blocks/form-elements/form-elements';
import slider from '../blocks/slider/slider';
import productPopup from '../components/product-popup/product-popup';
import preloader from '../blocks/preloader/preloader';
import popups from '../blocks/popups/popups';
import products from '../components/products/products';
import tabs from '../blocks/tabs/tabs';
import order from '../components/order/order';
import cart from '../components/cart/cart';
import filter from '../components/filter/filter';
import extraProducts from '../components/extra-products/extra-products';
import newsTraining from '../components/newsTraining/newsTraining';
import video from '../blocks/video/video';
import salesOffices from '../components/sales-offices/sales-offices';
import shippingAndPayment from '../components/shippingAndPayment/shippingAndPayment';
import partnership from '../components/partnership/partnership';
import aboutPopup from '../components/about-popup/about-popup';
import header from '../components/header/header';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  freezebuttons();
  selects();
  textarea();
  parallax();
  mainSlider();
  // addressCard();
  whereToBuy();
  map();
  newsCard();
  needHelp();
  burger();
  slider();
  extraProducts();
  productPopup();
  preloader();
  popups();
  products();
  tabs();
  order();
  cart();
  filter();
  newsTraining();
  video();
  salesOffices();
  shippingAndPayment();
  partnership();
  aboutPopup();
  header();
});
