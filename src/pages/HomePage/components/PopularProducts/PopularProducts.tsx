import style from './popularProduct.module.scss';
import cn from 'classnames';
import Wines from '../../../../api/wineApi.json';
import { ProductCarousel } from '../../../../components/ProductCarousel';
import { NavLink } from 'react-router-dom';
import { PagesLinkEnum } from '../../../../types/PagesType';

export const PopularProducts = () => {
  return (
    <section className={style['popular-products']}>
      <div className={cn('container', style['popular-products__content'])}>
        <h2 className={style['popular-products__title']}>Popular Products</h2>
        <div className={style['popular-products__corousel-content']}>
          <div className={style['popular-products__link-wrapper']}>
            <NavLink
              to={PagesLinkEnum.shop}
              className={style['popular-products__link']}
            >
              See all
            </NavLink>
          </div>
          <ProductCarousel products={Wines} />
        </div>
      </div>
    </section>
  );
};
