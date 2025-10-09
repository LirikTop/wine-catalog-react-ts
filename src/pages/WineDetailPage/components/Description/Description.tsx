import React from 'react';
import style from './description.module.scss';

interface Props {
  description: string;
}

export const Description: React.FC<Props> = React.memo(({ description }) => {
  return (
    <div className={style.description}>
      <h3 className={style.description__title}>Wine description:</h3>
      <p className={style.description__text}>{description}</p>
    </div>
  );
});

Description.displayName = 'Description';
