import WineApi from '../api/wineApi.json';
import ProductDetailApi from '../api/productDetailApi.json';

export type Wine = (typeof WineApi)[0];
export type ProductDetail = (typeof ProductDetailApi)[0];
