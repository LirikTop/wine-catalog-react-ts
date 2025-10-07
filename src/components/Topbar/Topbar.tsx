import { Link, useLocation } from 'react-router-dom';
import { PagesLinkEnum } from '../../types/PagesType';
import style from './topbar.module.scss';
import cn from 'classnames';
import { Navbar } from '../Navbar';
import React, { useEffect, useState } from 'react';
import { IconEnum } from '../../types/iconsType';
import { Icon } from '../Icon';
import { NavVariants } from '../../types/NavVariants';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cartSlice';
import { selectFavorites } from '../../features/favoritesSlice';
import { Menu } from '../Menu';
// import cn from 'classnames';

export const Topbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const getBurgerName = !isActive ? IconEnum.burger : IconEnum.close;
  const getStyleTopBar = cn(style['top-bar'], {
    [style['top-bar--home']]: location.pathname === PagesLinkEnum.home,
  });
  const { cartItems } = useAppSelector(selectCart);
  const favorites = useAppSelector(selectFavorites);

  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  return (
    <div className={getStyleTopBar}>
      <div className={style['top-bar__nav']}>
        <Icon
          iconName={getBurgerName}
          key={getBurgerName}
          onActive={setIsActive}
          variant={NavVariants.home}
        />
        <Link className={style['top-bar__logo-link']} to={PagesLinkEnum.home}>
          winset
        </Link>
      </div>
      <Navbar onLinkClick={() => setIsActive(false)} />
      <div className={style['top-bar__icons']}>
        <Icon
          iconName={IconEnum.person}
          href={PagesLinkEnum.profile}
          variant={NavVariants.home}
          key={IconEnum.person}
        />

        <Icon
          iconName={IconEnum.favorites}
          href={PagesLinkEnum.favorites}
          variant={NavVariants.home}
          key={IconEnum.favorites}
          count={favorites.length}
        />
        <Icon
          iconName={IconEnum.cart}
          href={PagesLinkEnum.cart}
          variant={NavVariants.home}
          key={IconEnum.cart}
          count={cartItems.length}
        />
      </div>
      <Menu isActive={isActive} />
    </div>
  );
};
