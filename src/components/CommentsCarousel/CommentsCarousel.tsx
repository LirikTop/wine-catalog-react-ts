/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './commentsCarousel.module.scss';
import './pagination.scss';
import { CardComment } from '../CardComment';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAllComments, selectComments } from '../../features/commentsSlice';

export const CommentsCarousel: React.FC = React.memo(() => {
  const { allComments } = useAppSelector(selectComments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllComments());
  }, []);

  return (
    <div className={cn(style['reviews-carousel'])}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{
          el: '.reviews-carousel__custom-pagination',
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 7 },
          640: { slidesPerView: 2, spaceBetween: 14 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
        }}
        className={style['reviews-carousel__swiper']}
      >
        {allComments.map(comment => (
          <SwiperSlide
            className={style['reviews-carousel__swiper-item']}
            key={comment.id}
          >
            <CardComment comment={comment} type={'review'} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="reviews-carousel__custom-pagination"></div>
    </div>
  );
});

CommentsCarousel.displayName = 'CommentsCarousel';
