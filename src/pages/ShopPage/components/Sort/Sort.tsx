import React from 'react';
import style from './sort.module.scss';
import cn from 'classnames';
import { ShopIcon } from '../ShopIcon';
import { SortList } from '../SortList';

interface Props {
  isSortActive: boolean;
  setSortActive: (kye: boolean) => void;
}

export const Sort: React.FC<Props> = React.memo(
  ({ isSortActive, setSortActive }) => {
    const getSortClass = cn(style.sort, {
      [style['sort--active']]: isSortActive,
    });

    return (
      <aside className={getSortClass}>
        <div className={cn('container', style.sort__container)}>
          <h1 className={cn(style.sort__title)}>Sort by</h1>
          <div className={cn(style.sort__content)}>
            <div
              className={cn(style['sort__icon-content'])}
              onClick={() => setSortActive(false)}
            >
              <ShopIcon variant={'arrow'} />
              <p>Back</p>
            </div>
            <div className={cn(style['sort__sort-list'])}>
              <SortList />
            </div>
          </div>
        </div>
      </aside>
    );
  },
);

Sort.displayName = 'Sort';
