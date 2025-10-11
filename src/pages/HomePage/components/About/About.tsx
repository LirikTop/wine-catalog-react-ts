import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import style from './about.module.scss';
import cn from 'classnames';
import { PagesLinkEnum } from '../../../../types/PagesType';

export const About = () => {
  return (
    <section className={cn(style.about)}>
      <div className={cn('container', style.about__container)}>
        <div className={cn(style.about__content)}>
          <div className={cn(style.about__top)}>
            <h2 className={cn(style.about__title)}>About us</h2>
            <p className={cn(style.about__text)}>
              WINSET – your virtual wine library, where it’s easy to find your
              favorite, and our virtual sommelier helps you discover the wine
              that perfectly suits your taste.
            </p>
          </div>

          <div className={cn(style.about__gallery)}>
            <img
              src={`${import.meta.env.BASE_URL}images/home/about_us-1.png`}
              alt=""
              className={cn(style['about__img-1'], style.about__img)}
              loading="lazy"
            />

            <img
              src={`${import.meta.env.BASE_URL}images/home/about_us-2.png`}
              alt=""
              className={cn(style['about__img-2'], style.about__img)}
              loading="lazy"
            />

            <img
              src={`${import.meta.env.BASE_URL}images/home/about_us-3.png`}
              alt=""
              className={cn(style['about__img-3'], style.about__img)}
              loading="lazy"
            />
          </div>
        </div>
        <Link to={PagesLinkEnum.about} className={cn(style.about__button)}>
          <Button variant={'secondary'}>About us</Button>
        </Link>
      </div>
    </section>
  );
};
