import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { Topbar } from '../../../../components/Topbar';
import style from './header.module.scss';
import cn from 'classnames';
import { PagesLinkEnum } from '../../../../types/PagesType';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={cn('container', style.header__container)}>
        <Topbar />
        <div className={style.header__content}>
          <h2 className={style.header__title}>
            Explore, taste and enjoy - find your perfect wine!
          </h2>
          <Link to={PagesLinkEnum.shop} className={style.header__button}>
            <Button variant="primary">Choose your wine</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
