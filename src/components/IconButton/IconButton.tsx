// import React from 'react';
// import cn from 'classnames';
// import iconButtonStyle from './iconButton.module.scss';
// import { IconEnum } from '../../types/iconsType';
// import { Wine } from '../../types/Wine';

// type ButtonType = 'primary' | 'secondary' | 'none';

// type Prop = {
//   iconName?: IconEnum;
//   isActive?: boolean;
//   isDisabled?: boolean;
//   type?: ButtonType;
//   product?: Wine;
// };

// export const IconButton: React.FC<Prop> = React.memo(
//   ({
//     iconName = null,
//     isDisabled = false,
//     isActive = false,
//     type = 'none',
//   }) => {
//     const favActive = iconName === IconEnum.favorites && isActive;
//     // const iconDisabled = iconName && isDisabled;
//     const iconActive = iconName && isActive && iconName !== IconEnum.favorites;

//     const getIconButtonClass = cn(iconButtonStyle['icon-button'], {
//       [iconButtonStyle['icon-button--active']]: iconActive,
//       [iconButtonStyle['icon-button--disabled']]: isDisabled,
//       [iconButtonStyle[`icon-button--${type}`]]: type,
//     });

//     return (
//       <button className={getIconButtonClass} disabled={isDisabled}>
//         {iconName && (
//           <div
//             className={cn(
//               iconButtonStyle['icon-button__icon'],
//               iconButtonStyle[`icon-button__icon--${iconName}`],
//               {
//                 [iconButtonStyle[`icon-button__icon--fav-active`]]: favActive,
//               },
//             )}
//           ></div>
//         )}
//       </button>
//     );
//   },
// );

// IconButton.displayName = 'IconButton';

import React from 'react';
import cn from 'classnames';
import iconButtonStyle from './iconButton.module.scss';
import { IconEnum } from '../../types/iconsType';
import { Wine } from '../../types/Wine';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from '../../features/favoritesSlice';
import {
  addToCart,
  removeFromCart,
  selectCart,
} from '../../features/cartSlice';

type ButtonType = 'primary' | 'secondary' | 'none';

type Props = {
  iconName: IconEnum;
  isActive?: boolean;
  isDisabled?: boolean;
  type?: ButtonType;
  product?: Wine;
};

export const IconButton: React.FC<Props> = React.memo(
  ({
    iconName,
    isDisabled = false,
    isActive = false,
    type = 'none',
    product,
  }) => {
    const favorites = useAppSelector(selectFavorites);
    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();
    const isFavorite = product
      ? favorites.some(item => item.id === product.id)
      : false;

    const isCart = product
      ? cartItems.some(item => item.id === product.id)
      : false;

    const handleClick = () => {
      if (!product) {
        return;
      }

      if (iconName === IconEnum.favorites) {
        if (isFavorite) {
          dispatch(removeFavorite(product.id));
        } else {
          dispatch(addFavorite(product));
        }
      } else if (iconName === IconEnum.cart) {
        if (isCart) {
          dispatch(removeFromCart(product.id));
        } else {
          dispatch(addToCart(product));
        }
      }
    };

    const favActive = iconName === IconEnum.favorites && isFavorite;
    const cartActive = iconName === IconEnum.cart && isCart;
    const iconActive = iconName && isActive && iconName !== IconEnum.favorites;

    const getIconButtonClass = cn(iconButtonStyle['icon-button'], {
      [iconButtonStyle['icon-button--active']]: iconActive || cartActive,
      [iconButtonStyle['icon-button--disabled']]: isDisabled,
      [iconButtonStyle[`icon-button--${type}`]]: type,
    });

    return (
      <button
        type="button"
        className={getIconButtonClass}
        disabled={isDisabled}
        onClick={handleClick}
      >
        <div
          className={cn(
            iconButtonStyle['icon-button__icon'],
            iconButtonStyle[`icon-button__icon--${iconName}`],
            {
              [iconButtonStyle['icon-button__icon--fav-active']]: favActive,
            },
          )}
        />
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
