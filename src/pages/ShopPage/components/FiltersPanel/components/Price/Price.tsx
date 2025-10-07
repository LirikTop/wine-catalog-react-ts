/* eslint-disable import/no-extraneous-dependencies */
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchWith } from '../../../../../../utils/searchHelper';
import { SearchEnum } from '../../../../../../types/SearchType';
import style from './price.module.scss';
import { useDebounce } from 'use-debounce';

const MIN = 0;
const MAX = 100;

export const Price = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [priceRange, setPriceRange] = useState({
    min: Number(searchParams.get(SearchEnum.MIN)) || 0,
    max: Number(searchParams.get(SearchEnum.MAX)) || 100,
  });
  const [debouncedValue] = useDebounce(priceRange, 800);

  // ⏳ Дебаунс для оновлення URL
  useEffect(() => {
    const newParams = getSearchWith(searchParams, {
      [SearchEnum.MIN]:
        debouncedValue.min !== MIN ? String(debouncedValue.min) : null,
      [SearchEnum.MAX]:
        debouncedValue.max !== MAX ? String(debouncedValue.max) : null,
    });

    const current = searchParams.toString();
    const updated = new URLSearchParams(newParams).toString();

    if (current !== updated) {
      setSearchParams(newParams);
    }
  }, [debouncedValue]);

  const minPercent = (priceRange.min / 100) * 100;
  const maxPercent = (priceRange.max / 100) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value <= priceRange.max) {
      setPriceRange(prev => ({ ...prev, min: value }));
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value >= priceRange.min) {
      setPriceRange(prev => ({ ...prev, max: value }));
    }
  };

  return (
    <div className={style.price}>
      <div className={style.price__inputs}>
        <span>${priceRange.min}</span> - <span>${priceRange.max}</span>
      </div>

      <div className={style.price__track}>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step="1"
          value={priceRange.min}
          onChange={handleMinChange}
          className={style.price__range}
          style={
            {
              '--min': `${minPercent}%`,
              '--max': `${maxPercent}%`,
            } as React.CSSProperties
          }
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step="1"
          value={priceRange.max}
          onChange={handleMaxChange}
          className={style.price__range}
          style={
            {
              '--min': `${minPercent}%`,
              '--max': `${maxPercent}%`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};
