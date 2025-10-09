import React, { useContext } from 'react';
import style from './cardProduct.module.scss';
import cn from 'classnames';
import { Wine } from '../../types/Wine';
import { Icon } from '../Icon';
import { IconEnum } from '../../types/iconsType';
import { IconButton } from '../IconButton';
import { useNavigateToProduct } from '../../hooks/useNavigateToProducts';
import { PageContext } from '../../context/PageContext';
import { Loader } from '../Loader';

interface Props {
  product: Wine;
}

export const CardProduct: React.FC<Props> = React.memo(({ product }) => {
  const redirect = useNavigateToProduct();
  const handleRedirect = () => redirect(product);
  const { loading } = useContext(PageContext);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <article className={cn(style['card-product'])} onClick={handleRedirect}>
      {loading && <Loader />}
      {!loading && (
        <div className={style['card-product__container']}>
          <div className={style['card-product__top']}>
            <div className={style['card-product__rating-content']}>
              <IconButton iconName={IconEnum.star} />
              <p className={style['card-product__rating-value']}>
                {Number(product.rating).toFixed(1)}
              </p>
            </div>
            <div
              onClick={e => e.stopPropagation()}
              className={
                style['card-product__buttons card-product__buttons--star']
              }
            >
              <IconButton iconName={IconEnum.favorites} product={product} />
            </div>
          </div>
          <div className={style['card-product__middle']}>
            <img
              src={product.image}
              alt={product.name}
              className={style['card-product__img']}
            />
          </div>
          <div className={style['card-product__bottom']}>
            <div className={style['card-product__description']}>
              <div className={style['card-product__name-content']}>
                <h4 className={style['card-product__title']}>{product.name}</h4>
                {product.nature && <Icon iconName={IconEnum.leaf} />}
              </div>
              <div className={style['card-product__text-content']}>
                <p className={style['card-product__text']}>
                  <span>{product.style}</span> &#8226;{' '}
                  <span>{product.type}</span>
                </p>
                <p
                  className={cn(
                    style['card-product__text'],
                    style['card-product__text--dt'],
                  )}
                >
                  <span>{product.country}</span> &#8226;{' '}
                  <span>{product.producer}</span>
                </p>
              </div>
            </div>
            <div className={style['card-product__price-content']}>
              <p className={style['card-product__value']}>${product.price}</p>
              <div
                className={style['card-product__buttons']}
                onClick={e => e.stopPropagation()}
              >
                <IconButton
                  iconName={IconEnum.cart}
                  type={'primary'}
                  product={product}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
});

CardProduct.displayName = 'CardProduct';
