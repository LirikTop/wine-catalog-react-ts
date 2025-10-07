/* eslint-disable import/no-extraneous-dependencies */
import style from './checkBoxFilter.module.scss';
import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getSearchWith } from '../../../../../../utils/searchHelper';
import { SearchEnum } from '../../../../../../types/SearchType';
import { useDebounce } from 'use-debounce';

interface Props {
  paramType: keyof typeof SearchEnum;
  values: string[];
}

export const CheckBoxFilter: React.FC<Props> = ({ paramType, values }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 🔽 нормалізуємо значення з URL
  const currentParams = searchParams
    .getAll(SearchEnum[`${paramType}`])
    .map(c => c.toLowerCase());

  const [checkBoxChecked, setcheckBoxChecked] = useState<string[]>(() => {
    return currentParams.length ? currentParams : [];
  });

  const [debouncedValue] = useDebounce(checkBoxChecked, 100);

  useEffect(() => {
    const newParams = getSearchWith(searchParams, {
      [SearchEnum[`${paramType}`]]: debouncedValue,
    });

    const current = searchParams.toString();
    const updated = new URLSearchParams(newParams).toString();

    if (current !== updated) {
      setSearchParams(newParams);
    }
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase(); // 🔽 нормалізуємо

    setcheckBoxChecked(current =>
      current.includes(value)
        ? current.filter(c => c !== value)
        : [...current, value],
    );
  };

  return (
    <div className={style.color}>
      <div className={style.color__container}>
        {values.map(value => {
          const normaliseValue = value.toLowerCase(); // 🔽 нормалізуємо для input

          return (
            <label key={value} className={style['color__input-content']}>
              {value}
              <input
                type="checkbox"
                value={normaliseValue}
                className={style.color__input}
                checked={checkBoxChecked.includes(normaliseValue)}
                onChange={handleChange}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
