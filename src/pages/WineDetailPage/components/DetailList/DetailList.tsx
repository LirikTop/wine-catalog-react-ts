import React from 'react';
import style from './detailList.module.scss';
import { ProductDetail } from '../../../../types/Wine';

interface Props {
  detailProduct: ProductDetail;
}

export const DetailList: React.FC<Props> = React.memo(({ detailProduct }) => {
  const list = [
    {
      label: 'Wine:',
      key: [detailProduct.wineType, detailProduct.style],
    },
    { label: 'Country:', key: [detailProduct.country] },
    { label: 'Winery:', key: [detailProduct.winery] },
    {
      label: 'Grapes:',
      key: [...detailProduct.grapes],
    },
    {
      label: 'Alcohol content:',
      key: [detailProduct.alcoholContent],
    },
  ];

  return (
    <ul className={style.list}>
      {list.map(item => (
        <li key={item.label} className={style.list__li}>
          <h4 className={style.list__title}>{item.label}</h4>
          <div className={style.list__values}>
            {item.key.map((k, i) => (
              <span key={i} className={style.list__key}>
                {k}
                {i < item.key.length - 1 && (
                  <span className={style.list__separator}>
                    {' '}
                    {String.fromCharCode(8226)}{' '}
                  </span>
                )}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
});

DetailList.displayName = 'DetailList';
