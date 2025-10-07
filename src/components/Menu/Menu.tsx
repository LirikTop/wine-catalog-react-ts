import React from 'react';
import { Navbar } from '../Navbar';
import style from './menu.module.scss';
import cn from 'classnames';
import { NavVariants } from '../../types/NavVariants';

interface Props {
  isActive: boolean;
}

export const Menu: React.FC<Props> = React.memo(({ isActive }) => {
  const menuClass = cn(style.menu, {
    [style['menu--active']]: isActive,
  });

  return (
    <aside id="menu" className={menuClass}>
      <div className={cn('container', style.menu__content)}>
        <Navbar key={'menu'} variant={NavVariants.menu} />
      </div>
    </aside>
  );
});

Menu.displayName = 'Menu';
