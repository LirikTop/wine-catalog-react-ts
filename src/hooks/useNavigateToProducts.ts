import { useNavigate } from 'react-router-dom';
import { PagesLinkEnum } from '../types/PagesType';
import { Wine } from '../types/Wine';

export const useNavigateToProduct = () => {
  const navigate = useNavigate();

  const goToProduct = (product: Wine) => {
    const page = PagesLinkEnum.shop;

    navigate(`${page}/${product.itemId}`);
  };

  return goToProduct;
};
