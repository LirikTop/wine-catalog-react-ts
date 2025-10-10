import React from 'react';
import style from './boundary.module.scss';
import cn from 'classnames';

interface Props {
  variant?: 'vertically' | '';
}

export const Boundary: React.FC<Props> = ({ variant = '' }) => {
  return (
    <div
      className={cn(style.boundary, {
        [style['boundary--vertically']]: variant,
      })}
    ></div>
  );
};
