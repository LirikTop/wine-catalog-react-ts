import React, { useCallback } from 'react';
import iconStyle from './Icon.module.scss';
import {
  NavLink,
  // NavLinkRenderProps,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import cn from 'classnames';
import { IconEnum } from '../../types/iconsType';
import { NavVariants } from '../../types/NavVariants';
import { PagesLinkEnum } from '../../types/PagesType';

type IconProps = {
  iconName: IconEnum;
  href?: string;
  variant?: NavVariants;
  count?: number;
  onActive?: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
};

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
//     const getActive = () => onActive((current: boolean) => !current);
//     const getPath = useCallback(
//       (icon: string): string => {
//         if (
//           icon === IconEnum.burger ||
//           icon === IconEnum.close
//           // || icon === IconEnum.arrow
//         ) {
//           return location.pathname;
//         }

//         return href;
//       },
//       [href, location.pathname],
//     );

//     const getNavLinkClass = useCallback(
//       (isActive: NavLinkRenderProps) =>
//         cn(
//           [
//             iconStyle.icon,
//             iconStyle['icon--top-bar'],
//             iconStyle[`icon--${iconName}`],
//           ],
//           {
//             [iconStyle[`icon--${variant}`]]: !!variant,
//             [iconStyle[`icon--home`]]: location.pathname === PagesLinkEnum.home,
//             [iconStyle[`icon--active`]]: !isActive,
//             [iconStyle[`icon--favs-active`]]: isActive && IconEnum.favorites,
//           },
//         ),
//       [iconName, variant],
//     );

//     const hendleRedirect = (icon: keyof typeof IconEnum) => {
//       navigate(getPath(icon));
//     };

//     return (
//       <div
//         className={cn(iconStyle.icon__container)}
//         onClick={() => hendleRedirect(iconName)}
//       >
//         <NavLink
//           to={getPath(iconName)}
//           className={isActive => getNavLinkClass(isActive)}
//           onClick={getActive}
//           aria-label={iconName}
//         ></NavLink>
//         {Boolean(count) && (
//           <p
//             className={cn(iconStyle.icon__counter, {
//               [iconStyle['icon__counter--menu']]: variant === NavVariants.menu,
//             })}
//           >
//             {count}
//           </p>
//         )}
//       </div>
//     );
//   },
// );

export const Icon: React.FC<IconProps> = React.memo(
  ({ iconName, href = '', variant = NavVariants.default, count = false }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === PagesLinkEnum.home;
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

    return (
      <div
        className={cn(iconStyle.icon__container, {
          [iconStyle[`icon__container--active`]]: iaContainerActive,
        })}
      >
        <NavLink
          to={href}
          className={({ isActive }) =>
            cn(
              iconStyle.icon,
              iconStyle[`icon--${iconName}`],
              iconStyle[`icon--${variant}`],
              {
                [iconStyle['icon--active']]: isActive,
                [iconStyle[`icon--homePage`]]: isHome,
              },
            )
          }
          aria-label={iconName}
        />
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
