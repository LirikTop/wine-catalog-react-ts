import React from 'react';
import { CartItem as CartItemType } from '../../../../types/Wine';
import { CartItem } from '../CartItem';
import style from './cartList.module.scss';
import { Boundary } from '../Boundary';

interface Props {
  products: CartItemType[];
}

export const CartList: React.FC<Props> = React.memo(({ products }) => {
  return (
    <div className={style['cart-list']}>
      {/* Заголовки колонок — тільки для desktop */}
      <div className={style['cart-list__header']}>
        <h3 className={style['cart-list__title']}>Item</h3>
        <h3 className={style['cart-list__title']}>Quantity</h3>
        <h3 className={style['cart-list__title']}>Price</h3>
      </div>

      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <CartItem product={product} />
          {index < products.length - 1 && <Boundary />}
        </React.Fragment>
      ))}
    </div>
  );
});

CartList.displayName = 'CartList';
