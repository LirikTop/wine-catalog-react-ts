import React, { useEffect, useState } from 'react';
import { CartItem as CartItemType } from '../../../../types/Wine';
import styleScss from './cartItem.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { ItemsQuantityBar } from '../../../../components/ItemsQuantityBar';
import { useAppDispatch } from '../../../../app/hooks';
import { removeFromCart, updateQuantity } from '../../../../features/cartSlice';
import cn from 'classnames';
import { useNavigateToProduct } from '../../../../hooks/useNavigateToProducts';

interface Props {
  product: CartItemType;
}

export const CartItem: React.FC<Props> = React.memo(({ product }) => {
  const { id, image, name, type, style, producer, country, price, quantity } =
    product;
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const dispatch = useAppDispatch();
  // const navigation = useNavigate();
  const redirect = useNavigateToProduct();

  const handleRedirect = () => {
    redirect(product);
  };

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => e.stopPropagation();

  const handleDeleteItem = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    dispatch(updateQuantity({ id, quantity: currentQuantity }));
  }, [currentQuantity]);

  return (
    <div className={styleScss['cart-item']} onClick={handleRedirect}>
      <div className={styleScss['cart-item__image-wrapper']}>
        <img
          src={image}
          alt="wine image"
          className={styleScss['cart-item__image']}
        />
      </div>
      <div className={styleScss['cart-item__content']}>
        <div className={styleScss['cart-item__info-content']}>
          <div className={styleScss['cart-item__title-content']}>
            <h4 className={styleScss['cart-item__title']}>{name}</h4>
            <AiOutlineDelete
              className={cn(
                styleScss['cart-item__icon'],
                styleScss['cart-item__icon--mob'],
              )}
              onClick={e => handleDeleteItem(e)}
            />
          </div>
          <ul className={styleScss['cart-item__info']}>
            <li className={styleScss['cart-item__text']}>
              {style} &#8226; {type}
            </li>
            <li className={styleScss['cart-item__text']}>
              {country} &#8226; {producer}
            </li>
          </ul>
        </div>
        <div
          className={styleScss['cart-item__price-content']}
          onClick={handleStopPropagation}
        >
          <p className={styleScss['cart-item__price']}>${price * quantity}</p>
          <ItemsQuantityBar
            quantity={quantity}
            onQuantity={setCurrentQuantity}
          />
        </div>
        <AiOutlineDelete
          className={cn(
            styleScss['cart-item__icon'],
            styleScss['cart-item__icon--des'],
          )}
          onClick={e => handleDeleteItem(e)}
        />
      </div>
    </div>
  );
});

CartItem.displayName = 'CartItem';
