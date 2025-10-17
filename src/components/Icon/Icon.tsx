// import React, { useCallback } from 'react';
// import iconStyle from './Icon.module.scss';
// import {
//   NavLink,
//   // NavLinkRenderProps,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import cn from 'classnames';
// import { IconEnum } from '../../types/iconsType';
// import { NavVariants } from '../../types/NavVariants';
// import { PagesLinkEnum } from '../../types/PagesType';

// type IconProps = {
//   iconName: IconEnum;
//   href?: string;
//   variant?: NavVariants;
//   count?: number;
//   onActive?: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
// };

// export const Icon: React.FC<IconProps> = React.memo(
//   ({
//     iconName,
//     href = '',
//     variant = NavVariants.default,
//     count = false,
//     onActive = () => {},
//   }) => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const isHome = location.pathname === PagesLinkEnum.home;
//     const getActive = () => onActive((current: boolean) => !current);
//     const iaContainerActive =
//       (location.pathname.includes(IconEnum.cart) &&
//         iconName === IconEnum.cart) ||
//       (location.pathname.includes(IconEnum.favorites) &&
//         iconName === IconEnum.favorites) ||
//       (location.pathname.includes(IconEnum.person) &&
//         iconName === IconEnum.person);
//     const getPath = useCallback(
//       (icon: string): string => {
//         if (icon === IconEnum.burger || icon === IconEnum.close) {
//           return location.pathname;
//         }

//         return href;
//       },
//       [href, location.pathname],
//     );

//     const hendleRedirect = (icon: keyof typeof IconEnum) => {
//       navigate(getPath(icon));
//     };

//     return (
//       <div
//         className={cn(iconStyle.icon__container, {
//           [iconStyle[`icon__container--active`]]: iaContainerActive,
//         })}
//       >
//         <NavLink
//           to={getPath(iconName)}
//           onClick={getActive}
//           className={({ isActive }) =>
//             cn(
//               iconStyle.icon,
//               iconStyle[`icon--${iconName}`],
//               iconStyle[`icon--${variant}`],
//               {
//                 [iconStyle['icon--active']]:
//                   isActive &&
//                   iconName !== IconEnum.burger &&
//                   iconName !== IconEnum.close,
//                 [iconStyle[`icon--homePage`]]: isHome,
//               },
//             )
//           }
//           aria-label={iconName}
//         />
//         {Boolean(count) && (
//           <p
//             className={cn(iconStyle.icon__counter)}
//             onClick={() => hendleRedirect(iconName)}
//           >
//             {count}
//           </p>
//         )}
//       </div>
//     );
//   },
// );

// Icon.displayName = 'Icon';

import React, { useCallback } from 'react';
import iconStyle from './Icon.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { IconEnum } from '../../types/iconsType';
import { NavVariants } from '../../types/NavVariants';
import { PagesLinkEnum } from '../../types/PagesType';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiCart, BiSolidCart } from 'react-icons/bi';
import { IoPersonOutline, IoClose, IoPersonSharp } from 'react-icons/io5';
import { LuLeaf } from 'react-icons/lu';

type IconProps = {
  iconName: IconEnum;
  href?: string;
  variant?: NavVariants;
  count?: number;
  onActive?: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
};

export const Icon: React.FC<IconProps> = React.memo(
  ({ iconName, href = '', count = false, onActive = () => {} }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === PagesLinkEnum.home;
    const getActive = () => onActive((current: boolean) => !current);
    const iaContainerActive =
      (location.pathname.includes(IconEnum.cart) &&
        iconName === IconEnum.cart) ||
      (location.pathname.includes(IconEnum.favorites) &&
        iconName === IconEnum.favorites) ||
      (location.pathname.includes(IconEnum.person) &&
        iconName === IconEnum.person);
    const getPath = useCallback(
      (icon: string): string => {
        if (icon === IconEnum.burger || icon === IconEnum.close) {
          return location.pathname;
        }

        return href;
      },
      [href, location.pathname],
    );

    const hendleRedirect = (icon: keyof typeof IconEnum) => {
      navigate(getPath(icon));
    };

    const getIcon = (isActive: boolean) => {
      const getIconClass = cn(iconStyle.icon, iconStyle[`icon--${iconName}`], {
        [iconStyle[`icon--homePage`]]: isHome,
        [iconStyle['icon--active']]:
          isActive &&
          iconName !== IconEnum.burger &&
          iconName !== IconEnum.close,
      });

      if (iconName === 'burger') {
        return <RxHamburgerMenu className={getIconClass} />;
      }

      if (iconName === 'close') {
        return <IoClose className={getIconClass} />;
      }

      if (iconName === 'leaf') {
        return <LuLeaf className={getIconClass} />;
      }

      if (isActive) {
        switch (iconName) {
          case 'favorites':
            return <MdFavorite className={getIconClass} />;
          case 'cart':
            return <BiSolidCart className={getIconClass} />;
          case 'person':
            return <IoPersonSharp className={getIconClass} />;
        }
      }

      if (!isActive) {
        switch (iconName) {
          case 'favorites':
            return <MdFavoriteBorder className={getIconClass} />;
          case 'cart':
            return <BiCart className={getIconClass} />;
          case 'person':
            return <IoPersonOutline className={getIconClass} />;
        }
      }
    };

    return (
      <div
        className={cn(iconStyle.icon__container, {
          [iconStyle[`icon__container--active`]]: iaContainerActive,
        })}
      >
        <NavLink
          to={getPath(iconName)}
          onClick={getActive}
          aria-label={iconName}
          className={iconStyle.icon__link}
        >
          {({ isActive }) => getIcon(isActive)}
        </NavLink>
        {Boolean(count) && (
          <p
            className={cn(iconStyle.icon__counter)}
            onClick={() => hendleRedirect(iconName)}
          >
            {count}
          </p>
        )}
      </div>
    );
  },
);

Icon.displayName = 'Icon';
