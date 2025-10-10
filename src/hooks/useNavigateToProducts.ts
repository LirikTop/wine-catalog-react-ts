import { useNavigate } from 'react-router-dom';
import { PagesLinkEnum } from '../types/PagesType';
import { CartItem, Wine } from '../types/Wine';

export const useNavigateToProduct = () => {
  const navigate = useNavigate();

  const goToProduct = (product: Wine | CartItem) => {
    const page = PagesLinkEnum.shop;

    navigate(`${page}/${product.itemId}`);
  };

  return goToProduct;
};
