import { useEffect, useState } from 'react';
import { Button } from '../../../../components/Button';
import { ShopIcon } from '../ShopIcon';
import { SortList } from '../SortList';
import style from './sortSelector.module.scss';
import cn from 'classnames';

export const SortSelector = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsActive(false);
    }
  };

  return (
    <div
      className={cn(style.selector)}
      tabIndex={0}
      onBlur={e => handleBlur(e)}
    >
      <div
        className={style.selector__button}
        onClick={() => setIsActive(current => !current)}
      >
        <Button variant={'secondary'}>
          Sort <ShopIcon variant={'sort'} />
        </Button>
      </div>
      <div
        className={cn(style['selector__sort-list'], {
          [style['selector__sort-list--active']]: isActive,
        })}
        onClick={() => setIsActive(false)}
      >
        <SortList />
      </div>
    </div>
  );
};
