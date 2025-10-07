import React from 'react';
import style from './filter.module.scss';
import cn from 'classnames';
import { ShopIcon } from '../ShopIcon';
import { FiltersPanel } from '../FiltersPanel';

interface Props {
  isFilterActive: boolean;
  setFilterActive: (key: boolean) => void;
}

export const Filter: React.FC<Props> = React.memo(
  ({ isFilterActive, setFilterActive }) => {
    const getfilterClass = cn(style.filter, {
      [style['filter--active']]: isFilterActive,
    });

    return (
      <aside className={getfilterClass}>
        <div className={cn('container', style.filter__container)}>
          <h1 className={cn(style.filter__title)}>filter by</h1>
          <div className={cn(style.filter__content)}>
            <div
              className={cn(style['filter__icon-content'])}
              onClick={() => setFilterActive(false)}
            >
              <ShopIcon variant={'arrow'} />
              <p>Back</p>
            </div>
            <div className={cn(style['filter__filter-list'])}>
              <FiltersPanel />
            </div>
          </div>
        </div>
      </aside>
    );
  },
);

Filter.displayName = 'Filter';
