/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Grape } from 'lucide-react';
import style from './ratingGrape.module.scss';
import cn from 'classnames';

interface TasteQualities {
  sweetness: number;
  acidity: number;
  tannin: number;
  strength: number;
  texture: number;
}

interface Props {
  tasteQualities: TasteQualities;
  tasteKey: keyof TasteQualities;
}

const capitalize = (str: string) => {
  if (!str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const RatingGrape = React.memo(
  ({ tasteQualities, tasteKey }: Props) => {
    const value = tasteQualities[tasteKey];

    return (
      <div className={style['rating-row']}>
        <div className={cn(style['rating-row__icon-content'])}>
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i + 1 <= value;

            return (
              <Grape
                key={i}
                className={`${style['rating-row__icon']} ${filled ? style['rating-row__icon--full'] : ''}`}
              />
            );
          })}
        </div>
        <p className={style['rating-row__name']}>{capitalize(tasteKey)}</p>
      </div>
    );
  },
  (prev, next) =>
    prev.tasteQualities[next.tasteKey] === next.tasteQualities[next.tasteKey],
);

RatingGrape.displayName = 'RatingGrape';
