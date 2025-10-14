// /* eslint-disable import/no-extraneous-dependencies */
// import {
//   faArrowLeft,
//   faArrowsAltV,
//   faFilter,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import style from './shopIcon.module.scss';

// interface Props {
//   variant: 'sort' | 'filter' | 'arrow';
// }

// export const ShopIcon: React.FC<Props> = React.memo(({ variant }) => {
//   const icon =
//     variant === 'sort'
//       ? faArrowsAltV
//       : variant === 'filter'
//         ? faFilter
//         : faArrowLeft;

//   return <FontAwesomeIcon icon={icon} className={style.icon} />;
// });

// ShopIcon.displayName = 'ShopIcon';

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { CiFilter } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
import style from './shopIcon.module.scss';

interface Props {
  variant: 'sort' | 'filter' | 'arrow';
}

export const ShopIcon: React.FC<Props> = React.memo(({ variant }) => {
  if (variant === 'sort') {
    return <HiOutlineArrowsUpDown className={style.icon} />;
  }

  if (variant === 'filter') {
    return <CiFilter className={style.icon} />;
  }

  if (variant === 'arrow') {
    return <GoArrowLeft className={style.icon} />;
  }

  return null; // запасний варіант
});

ShopIcon.displayName = 'ShopIcon';
