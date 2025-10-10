/* eslint-disable max-len */
import { useAppSelector } from '../../app/hooks';
import { BackButton } from '../../components/BackButton';
import { selectCartItems } from '../../features/cartSlice';
import style from './cartPeage.module.scss';
import cn from 'classnames';
import { CartList } from './components/CartList';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Boundary } from './components/Boundary';
import { shallowEqual } from 'react-redux';

export const CartPage = () => {
  const cartItems = useAppSelector(selectCartItems, shallowEqual);
  const totalPrice = cartItems.reduce(
    (accumulator: number, item: (typeof cartItems)[0]) => {
      return accumulator + item.price * item.quantity;
    },
    0,
  );

  return (
    <section className={style.cartPage}>
      <div className={cn('container', style.cartPage__container)}>
        <div className={style.cartPage__top}>
          <BackButton />
          <h2 className={style.cartPage__title}>
            Your cart ({cartItems.length})
          </h2>
        </div>
        <div className={style.cartPage__content}>
          <div className={style['cartPage__cart-list']}>
            <CartList products={cartItems} />
          </div>
          <div className={style.cartPage__boundary}>
            <Boundary variant={'vertically'} />
          </div>
          <div className={style.cartPage__summary}>
            <h2 className={style.cartPage__title}>Order summary</h2>
            <form className={style.cartPage__form}>
              <ul className={style['cartPage__summary-list']}>
                <li className={style['cartPage__summary-row']}>
                  <h3 className={style['cartPage__summary-title']}>Subtotal</h3>{' '}
                  <span className={style['cartPage__summary-value']}>
                    ${totalPrice}
                  </span>
                </li>
                <li className={style['cartPage__summary-row']}>
                  <h3 className={style['cartPage__summary-title']}>Shipping</h3>{' '}
                  <span className={style['cartPage__summary-value']}>Free</span>
                </li>
              </ul>
              <div className={style['cartPage__input-content']}>
                <label htmlFor="email" className={style.cartPage__text}>
                  Have a discount code?
                </label>
                <Input isButton={false} />
              </div>
            </form>
            <Boundary />
            <div className={style['cartPage__button-content']}>
              <div className={style['cartPage__button-text']}>
                <h2 className={style.cartPage__title}>Total</h2>
                <span className={style.cartPage__price}>${totalPrice}</span>
              </div>
              <div className={style.cartPage__button}>
                <Button type={'submit'} disabled={!Boolean(cartItems.length)}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
