// import React, {
//   createContext,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from 'react';
// import { ProductDetail as Product, Wine } from '../types/Wine';
// import { useLocation } from 'react-router-dom';
// import allProducts from '../api/productDetailApi.json';
// import Wine from '../api/wineApi.json';
// // import { Loader } from '../components/Loader';
// import { SearchEnum, SortEnum } from '../types/SearchType';

// interface PageContextType {
//   products: Product[];
//   loading: boolean;
// }

// export const PageContext = createContext<PageContextType>({
//   products: [],
//   loading: true,
// });

// type Props = {
//   children: React.ReactNode;
// };

// export const PageProvider: React.FC<Props> = ({ children }) => {
//   const { pathname, search } = useLocation();
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState<Product[]>([]);
//   const originalProducts = useRef<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);

//       await new Promise(resolve => setTimeout(resolve, 300));

//       const resultFilter = allProducts;

//       setProducts(resultFilter);
//       originalProducts.current = resultFilter;
//       setLoading(false);
//     };

//     fetchProducts();
//   }, [pathname]);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(search);
//     const query = queryParams.get(SearchEnum.QUERY)?.toLowerCase() || '';
//     const sortBy = queryParams.get(SearchEnum.SORT);

//     let filtered = [...originalProducts.current];

//     const filterProducts = () => {
//       if (query) {
//         filtered = filtered.filter(product =>
//           product.name.toLowerCase().includes(query),
//         );
//       }

//       if (sortBy) {
//         filtered.sort((a, b) => {
//           switch (sortBy) {
//             case SortEnum.Cheapest.toLowerCase():
//               return a.price - b.price;
//             case SortEnum.Expensivest.toLowerCase():
//               return b.price - a.price;
//             case SortEnum.Newest.toLowerCase():
//               return new Date(b.year).getTime() - new Date(a.year).getTime();
//             case SortEnum.Oldest.toLowerCase():
//               return new Date(a.year).getTime() - new Date(b.year).getTime();
//             default:
//               return 0;
//           }
//         });
//       }

//       setProducts(filtered);
//     };

//     filterProducts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search, originalProducts.current]);

//   const valueProps = useMemo(
//     () => ({
//       products,
//       loading,
//     }),
//     [products, loading],
//   );

//   return (
//     <PageContext.Provider value={valueProps}>{children}</PageContext.Provider>
//   );
// };

import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ProductDetail as Product, Wine } from '../types/Wine';
import { useLocation } from 'react-router-dom';
import allProducts from '../api/productDetailApi.json';
import wines from '../api/wineApi.json';
// import { Loader } from '../components/Loader';
import { SearchEnum, SortEnum, SortInterface } from '../types/SearchType';

interface PageContextType {
  products: Wine[];
  loading: boolean;
}

export const PageContext = createContext<PageContextType>({
  products: [],
  loading: true,
});

type Props = {
  children: React.ReactNode;
};

export const PageProvider: React.FC<Props> = ({ children }) => {
  const { pathname, search } = useLocation();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Wine[]>([]);
  const originalProducts = useRef<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      await new Promise(resolve => setTimeout(resolve, 300));

      const resultFilter = allProducts;

      setProducts(wines);
      originalProducts.current = resultFilter;
      setLoading(false);
    };

    fetchProducts();
  }, [pathname]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get(SearchEnum.QUERY)?.toLowerCase() || '';
    const sortBy = queryParams.get(SearchEnum.SORT);
    const minPrise = queryParams.get(SearchEnum.MIN);
    const maxPrise = queryParams.get(SearchEnum.MAX);
    const countries = queryParams.getAll(SearchEnum.COUNTRY);
    const colors = queryParams.getAll(SearchEnum.COLOR);

    const getKeyByValue = <T extends SortInterface>(
      obj: T,
      value: T[keyof T],
    ): keyof T => {
      return Object.keys(obj).find(
        key => obj[key as keyof T] === value,
      ) as keyof T;
    };

    let filtered = [...originalProducts.current];

    const filterProducts = async () => {
      if (query) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query),
        );
      }

      if (minPrise) {
        filtered = filtered.filter(
          product => product.price >= Number(minPrise),
        );
      }

      if (maxPrise) {
        filtered = filtered.filter(
          product => product.price <= Number(maxPrise),
        );
      }

      if (countries.length) {
        filtered = filtered.filter(product =>
          countries.includes(product.country.toLowerCase()),
        );
      }

      if (colors.length) {
        filtered = filtered.filter(product =>
          colors.includes(product.color.toLowerCase()),
        );
      }

      if (sortBy) {
        filtered.sort((a, b) => {
          switch (sortBy) {
            case getKeyByValue(SortEnum, SortEnum.Rating).toLowerCase():
              return b.rating - a.rating;
            case getKeyByValue(SortEnum, SortEnum.Cheapest).toLowerCase():
              return a.price - b.price;
            case getKeyByValue(SortEnum, SortEnum.Expensivest).toLowerCase():
              return b.price - a.price;
            case getKeyByValue(SortEnum, SortEnum.Newest).toLowerCase():
              return new Date(b.year).getTime() - new Date(a.year).getTime();
            case getKeyByValue(SortEnum, SortEnum.Oldest).toLowerCase():
              return new Date(a.year).getTime() - new Date(b.year).getTime();
            default:
              return 0;
          }
        });
      }

      await new Promise(resolve => setTimeout(resolve, 300));

      // const result = filtered
      //   .map(product => wines.find(wine => wine.itemId === product.id))
      //   .filter((wine): wine is Wine => Boolean(wine)); // відсіюємо undefined

      setProducts(
        filtered
          .map(product => wines.find(wine => wine.itemId === product.id))
          .filter((wine): wine is Wine => Boolean(wine)),
      );
    };

    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, originalProducts.current]);

  const valueProps = useMemo(
    () => ({
      products,
      loading,
    }),
    [products, loading],
  );

  return (
    <PageContext.Provider value={valueProps}>{children}</PageContext.Provider>
  );
};
