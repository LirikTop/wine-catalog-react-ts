import React, { useState } from 'react';
import style from './reviews.module.scss';
import { CardComment } from '../../../../components/CardComment';
import { useAppSelector } from '../../../../app/hooks';
import { selectComments } from '../../../../features/commentsSlice';
import { Button } from '../../../../components/Button';

export const Reviews: React.FC = () => {
  const { comments } = useAppSelector(selectComments);
  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const visibleComments = comments.slice(0, visibleCount);

  return (
    <div className={style.reviews}>
      <h2 className={style.reviews__title}>Revievs</h2>
      <div className={style['reviews__list-content']}>
        <div className={style.reviews__list}>
          {visibleComments.map(comment => (
            <div className={style['reviews__list-comment']} key={comment.id}>
              <CardComment comment={comment} />
            </div>
          ))}
        </div>
        {visibleCount < comments.length && (
          <div className={style.reviews__button} onClick={handleShowMore}>
            <Button variant={'secondary'}>Load more</Button>
          </div>
        )}
      </div>
    </div>
  );
};
