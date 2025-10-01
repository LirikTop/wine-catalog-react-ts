import { CommentsCarousel } from '../../../../components/CommentsCarousel';
import style from './reviews.module.scss';
import cn from 'classnames';

export const Reviews = () => {
  return (
    <section className={cn(style.reviews)}>
      <div className={cn('container', style.reviews__container)}>
        <h2 className={cn(style.reviews__title)}>Reviews</h2>
        <CommentsCarousel />
      </div>
    </section>
  );
};
