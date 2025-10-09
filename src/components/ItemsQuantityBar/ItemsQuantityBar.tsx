import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './itemsQuantityBar.module.scss';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  quantity: number;
  onQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const ItemsQuantityBar: React.FC<Props> = React.memo(
  ({ quantity = 1, onQuantity }) => {
    return (
      <div className={style['items-quantity']}>
        <div
          onClick={() => onQuantity(q => Math.max(1, q - 1))}
          className={style['items-quantity__button']}
        >
          <FontAwesomeIcon icon={faMinus} size={24} />
        </div>
        <span className={style['items-quantity__value']}>{quantity}</span>
        <div
          onClick={() => onQuantity(q => q + 1)}
          className={style['items-quantity__button']}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    );
  },
);

ItemsQuantityBar.displayName = 'ItemsQuantityBar';
