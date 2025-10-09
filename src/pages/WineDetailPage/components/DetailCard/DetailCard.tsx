import React, { useEffect, useState } from 'react';
import style from './detailCard.module.scss';
import cn from 'classnames';
import { ProductDetail, Wine } from '../../../../types/Wine';
import { IconEnum } from '../../../../types/iconsType';
import Wines from '../../../../api/wineApi.json';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addToCart } from '../../../../features/cartSlice';
import { IconButton } from '../../../../components/IconButton';
import { StarRating } from '../../../../components/StarRating';
import {
  fetchComments,
  selectComments,
} from '../../../../features/commentsSlice';
import { Button } from '../../../../components/Button';
import { ItemsQuantityBar } from '../../../../components/ItemsQuantityBar';
import { DetailList } from '../DetailList';
import { Description } from '../Description';
import { IconDecore } from '../IconDecore';
import { RatingGrape } from '../RatingGrape';
import { LuLeaf } from 'react-icons/lu';

interface Props {
  detailProduct: ProductDetail;
}

export const DetailCard: React.FC<Props> = React.memo(({ detailProduct }) => {
  const { comments } = useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const { image, name, rating, price, description, tasteQualities } =
    detailProduct;
  const tasteKeysArr = Object.keys(
    tasteQualities,
  ) as (keyof typeof tasteQualities)[];

  const baseProduct = Wines.find(
    wine => wine.itemId === detailProduct.id,
  ) as Wine;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...baseProduct, quantity }));
  };

  useEffect(() => {
    dispatch(fetchComments(baseProduct.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseProduct]);

  return (
    <article className={style.card}>
      <div className={style.card__top}>
        <div className={style.card__imageColumn}>
          <div className={style.card__imageContent}>
            <div className={style.card__iconWrapper}>
              <IconButton iconName={IconEnum.favorites} product={baseProduct} />
            </div>
            <img src={image} alt={name} className={style.card__image} />
          </div>
          <aside
            className={cn(
              style.card__tasteRating,
              style['card__tasteRating--tab'],
            )}
          >
            {tasteKeysArr.map(key => (
              <RatingGrape
                key={key}
                tasteKey={key}
                tasteQualities={tasteQualities}
              />
            ))}
          </aside>
        </div>

        <div className={style.card__content}>
          <div className={style.card__info}>
            <div className={style.card__titleContent}>
              <h2 className={style.card__title}>{name}</h2>
              <LuLeaf className={style['cart__title-icon']} />
            </div>

            <div className={style.card__ratingPriceContent}>
              <div className={style.card__ratingContent}>
                <div className={style.card__rating}>
                  <p className={style.card__ratingValue}>
                    {Number(detailProduct.rating).toFixed(1)}
                  </p>
                  <StarRating type={'comment'} edit={false} value={rating} />
                </div>
                <small className={style.card__reviews}>
                  {comments.length} reviews
                </small>
              </div>

              <div className={style.card__priceContent}>
                <p>${price * quantity}</p>
                <ItemsQuantityBar
                  quantity={quantity}
                  onQuantity={setQuantity}
                />
              </div>
            </div>
          </div>

          <div className={style.card__button} onClick={handleAddToCart}>
            <Button>Add to Cart</Button>
          </div>

          <div className={style.card__detailInfo}>
            <DetailList detailProduct={detailProduct} />
            <div className={style['card__desctiption-content']}>
              <Description description={description} />
              <div className={style.card__iconDecor}>
                <IconDecore />
              </div>
            </div>
          </div>
        </div>

        <aside
          className={cn(
            style.card__tasteRating,
            style['card__tasteRating--mob'],
          )}
        >
          {tasteKeysArr.map(key => (
            <RatingGrape
              key={key}
              tasteKey={key}
              tasteQualities={tasteQualities}
            />
          ))}
        </aside>
      </div>
    </article>
  );
});

DetailCard.displayName = 'DetailCard';
