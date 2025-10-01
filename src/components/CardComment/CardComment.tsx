/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Comment } from '../../types/Comment';
import style from './cardComment.module.scss';
import cn from 'classnames';
import { StarRating } from '../StarRating';
import { useAppSelector } from '../../app/hooks';
import { selectUsers } from '../../features/userSlice';
import { selectWines } from '../../features/wineSlice';
import { useNavigateToProduct } from '../../hooks/useNavigateToProducts';
import { Wine } from '../../types/Wine';
import { formatDistanceToNow } from 'date-fns';
import { enGB } from 'date-fns/locale';

interface Props {
  comment: Comment;
  type?: 'review' | 'comment';
}

export const CardComment: React.FC<Props> = React.memo(
  ({ comment, type = 'comment' }) => {
    const redirect = useNavigateToProduct();
    const { users } = useAppSelector(selectUsers);
    const { wines } = useAppSelector(selectWines);
    const { rating, text, userId, wineId, date } = comment;
    const isComment = type === 'comment';
    const user = users.find(u => u.id === userId) || null;
    const wine = wines.find(w => w.id === wineId) || null;
    const commentDate = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: enGB,
    });

    const handleRedirect = (product: Wine | null) => {
      if (product) {
        redirect(product);
      }
    };

    return (
      <article
        className={cn(style.comment)}
        onClick={() => handleRedirect(wine)}
      >
        <div className={cn(style.comment__container)}>
          <div className={cn(style.comment__content)}>
            <div className={cn(style.comment__top)}>
              <div className={cn(style['comment__rating-content'])}>
                {isComment && (
                  <p className={cn(style['comment__rating-value'])}>{rating}</p>
                )}
                <StarRating type={type} value={Number(rating)} />
              </div>
              {isComment && (
                <h2 className={cn(style.comment__title)}>{wine?.name}</h2>
              )}
            </div>
            <div className={cn(style.comment__body)}>
              <p className={cn(style.comment__text)}>{text}</p>
              <div className={cn(style['comment__user-content'])}>
                <div className={cn(style['comment__user-image-wrapper'])}>
                  <img
                    src={user?.image}
                    alt=""
                    className={cn(style['comment__user-image'])}
                  />
                </div>
                <div className={cn(style.comment__info)}>
                  <p className={cn(style['comment__user-name'])}>
                    {user?.userName}
                  </p>
                  <small className={cn(style.comment__date)}>
                    {commentDate}
                  </small>
                </div>
              </div>
            </div>
          </div>
          {!isComment && (
            <div className={cn(style['comment__wine-image-wrapper'])}>
              <img
                src={wine?.image}
                alt="wine image"
                className={cn(style['comment__wine-image'])}
              />
            </div>
          )}
        </div>
      </article>
    );
  },
);

CardComment.displayName = 'CardComment';
