import { NavLink, useLocation } from 'react-router-dom';
import navBarStyle from './NavBar.module.scss';
import React, { useCallback } from 'react';
import cn from 'classnames';
import { PagesLinkEnum } from '../../types/PagesType';
import { NavVariants } from '../../types/NavVariants';

type NavbarProps = {
  variant?: NavVariants;
  onLinkClick?: () => void;
};

const navLinks = [
  { to: PagesLinkEnum.home, label: 'Home', end: true },
  { to: PagesLinkEnum.shop, label: 'Shop' },
  { to: PagesLinkEnum.about, label: 'About us' },
];

export const Navbar: React.FC<NavbarProps> = React.memo(
  ({ variant = NavVariants.default, onLinkClick }) => {
    const location = useLocation();
    const getNavLinkClass = useCallback(
      ({ isActive }: { isActive: boolean }) =>
        cn(navBarStyle.nav__link, {
          [navBarStyle[`nav__link--${variant}`]]: !!variant,
          [navBarStyle[`nav__link--${variant}--active`]]: !!variant && isActive,
          [navBarStyle['nav__link--active']]: isActive,
        }),
      [variant],
    );

    const liClass = cn(navBarStyle.nav__item, {
      [navBarStyle[`nav__item--${variant}`]]: variant,
    });

    const getClassNav = cn(navBarStyle.nav, {
      [navBarStyle[`nav--home`]]: location.pathname === PagesLinkEnum.home,
      [navBarStyle[`nav--${variant}`]]: !!variant,
    });

    return (
      <nav className={getClassNav}>
        <ul
          className={cn(navBarStyle.nav__list, {
            [navBarStyle[`nav__list--${variant}`]]: variant,
          })}
        >
          {navLinks.map(({ to, label, end }) => (
            <li key={to} className={liClass}>
              <NavLink
                to={to}
                end={end}
                className={getNavLinkClass}
                onClick={onLinkClick}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

Navbar.displayName = 'Navbar';
