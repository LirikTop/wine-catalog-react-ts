// import { useContext } from 'react';
// import cn from 'classnames';
// import style from './productList.module.scss';
// import { PageContext } from '../../../../context/PageContext';
// import { CardProduct } from '../../../../components/CardProduct';
// // import { SearchEnum } from '../../../../../types/SearchType';
// // import { useSearchParams } from 'react-router-dom';

// export const ProductList = () => {
//   const { products, loading } = useContext(PageContext);
//   // const [searchParams] = useSearchParams();

//   // const currentPage = Number(searchParams.get(SearchEnum.PAGE)) || 1;
//   // const perPage = Number(searchParams.get(SearchEnum.ITEMS)) || products.length;

//   // const indexOfLastProduct = currentPage * perPage;
//   // const indexOfFirstProduct = indexOfLastProduct - perPage;
//   // const currentProducts = products.slice(
//   //   indexOfFirstProduct,
//   //   indexOfLastProduct,
//   // );

//   return (
//     <div className={cn(style['product-list'])}>
//       {!Boolean(products.length) && !loading && (
//         <h1 className={cn(style['product-list__title'])}>
//           Product was not found
//         </h1>
//       )}
//       {products.map(product => (
//         <div className={cn(style['product-list__item'])} key={product.id}>
//           <CardProduct product={product} />
//         </div>
//       ))}
//     </div>
//   );
// };

import { useContext, useState } from 'react';
import cn from 'classnames';
import style from './productList.module.scss';
import { PageContext } from '../../../../context/PageContext';
import { CardProduct } from '../../../../components/CardProduct';
import { Button } from '../../../../components/Button';

export const ProductList = () => {
  const { products, loading } = useContext(PageContext);
  const [visibleCount, setVisibleCount] = useState(6); // 🔹 спочатку показуємо 8 продуктів

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6); // 🔹 додаємо ще 8 при кожному кліку
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className={cn(style['product-list'])}>
      <div className={cn(style['product-list__content'])}>
        {!products.length && !loading && (
          <h1 className={style['product-list__title']}>
            Product was not found
          </h1>
        )}

        {visibleProducts.map(product => (
          <div className={style['product-list__item']} key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>

      {/* 🔹 Кнопка з’являється, тільки якщо є ще продукти */}
      {visibleCount < products.length && (
        <div className={style['product-list__button']} onClick={handleShowMore}>
          <Button>Show more</Button>
        </div>
      )}
    </div>
  );
};
