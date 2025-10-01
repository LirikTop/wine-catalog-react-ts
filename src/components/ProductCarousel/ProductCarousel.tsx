/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import style from './productCarousel.module.scss';
import './pagination.scss';
import cn from 'classnames';
import { Wine } from '../../types/Wine';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CardProduct } from '../CardProduct';

interface Props {
  products: Wine[];
}

export const ProductCarousel: React.FC<Props> = React.memo(({ products }) => {
  return (
    <div className={cn(style['product-carousel'])}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{
          el: '.product-carousel__custom-pagination',
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 7 },
          640: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className={style['product-carousel__swiper']}
      >
        {products.map(product => (
          <SwiperSlide
            className={style['product-carousel__swiper-item']}
            key={product.id}
          >
            <CardProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="product-carousel__custom-pagination"></div>
    </div>
  );
});

ProductCarousel.displayName = 'ProductCarousel';
