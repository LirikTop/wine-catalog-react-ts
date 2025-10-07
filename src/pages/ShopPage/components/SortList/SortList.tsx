// import { useSearchParams } from 'react-router-dom';
// import { SearchEnum, SortEnum } from '../../../../types/SearchType';
// import { makeSortOptions } from '../../../../utils/makeSortOptions';
// import style from './sortList.module.scss';
// import { useState, useEffect } from 'react';

// const sortBy = makeSortOptions(SortEnum);

// export const SortList = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortParam = searchParams.get(SearchEnum.SORT) || '';
//   const [selected, setSelected] = useState(sortParam);

//   useEffect(() => {
//     setSearchParams({ [SearchEnum.SORT]: selected });
//   }, [selected, setSearchParams]);

//   return (
//     <form className={style['sort-list']}>
//       {sortBy.map(item => (
//         <label key={item.value} className={style['sort-list__option']}>
//           <input
//             type="radio"
//             name="sort"
//             value={item.value}
//             checked={selected === item.value}
//             onChange={() => setSelected(item.value)}
//           />
//           <span className={style['sort-list__radio']}></span>
//           {item.label}
//         </label>
//       ))}
//     </form>
//   );
// };

// import { useSearchParams } from 'react-router-dom';
// import { SearchEnum, SortEnum } from '../../../../types/SearchType';
// import { makeSortOptions } from '../../../../utils/makeSortOptions';
// import style from './sortList.module.scss';
// import React, { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../utils/searchHelper';

// const sortBy = makeSortOptions(SortEnum);

// type SortByType = (typeof sortBy)[0];

// export const SortList = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const sortParam = searchParams.get(SearchEnum.SORT) || '';
//   // const [selected, setSelected] = useState(sortParam);
//   const sortParam = searchParams.get(SearchEnum.SORT);
//   const [selectedSort, setSelectedSort] = useState<SortByType | null>(() => {
//     const found = sortBy.find(opt => opt.value === sortParam);

//     return sortParam && found ? found : null;
//   });

//   // useEffect(() => {
//   //   setSearchParams({ [SearchEnum.SORT]: selected });
//   // }, [selected, setSearchParams]);

//   const handleSortByChange = (newValue: SortByType) => {
//     // const option = newValue as SortByType | null;

//     setSelectedSort(newValue);
//   };

//   const isFirstRender = React.useRef(true);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;

//       return;
//     }

//     const newParams = getSearchWith(searchParams, {
//       [SearchEnum.SORT]: selectedSort ? selectedSort.value : null,
//     });

//     setSearchParams(newParams, { replace: true });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedSort, setSearchParams]);

//   return (
//     <form className={style['sort-list']}>
//       {sortBy.map(item => (
//         <label key={item.value} className={style.option}>
//           <input
//             type="radio"
//             name="sort"
//             value={item.value}
//             checked={selectedSort?.value === item.value}
//             onChange={() => handleSortByChange(item)}
//           />
//           <span className={style.radio}></span>
//           {item.label}
//         </label>
//       ))}
//     </form>
//   );
// };

// import { useSearchParams } from 'react-router-dom';
// import { SearchEnum, SortEnum } from '../../../../types/SearchType';
// import { makeSortOptions } from '../../../../utils/makeSortOptions';
// import style from './sortList.module.scss';
// import React, { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../utils/searchHelper';

// const sortBy = makeSortOptions(SortEnum);

// type SortByType = (typeof sortBy)[0];

// export const SortList = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const sortParam = searchParams.get(SearchEnum.SORT) || '';
//   // const [selected, setSelected] = useState(sortParam);
//   const sortParam = searchParams.get(SearchEnum.SORT);
//   const [selectedSort, setSelectedSort] = useState<SortByType | null>(() => {
//     const found = sortBy.find(opt => opt.value === sortParam);

//     return sortParam && found ? found : null;
//   });

//   // useEffect(() => {
//   //   setSearchParams({ [SearchEnum.SORT]: selected });
//   // }, [selected, setSearchParams]);

//   const handleSortByChange = (newValue: SortByType) => {
//     const option = newValue as SortByType | null;

//     setSelectedSort(option);
//   };

//   const isFirstRender = React.useRef(true);

//   useEffect(() => {
//     const newParams: Record<string, string | null> = {
//       [SearchEnum.SORT]: selectedSort ? selectedSort.value : null,
//     };

//     const updatedParams = getSearchWith(searchParams, newParams);

//     const currentParamsStr = searchParams.toString();
//     const updatedParamsStr = new URLSearchParams(updatedParams).toString();

//     if (isFirstRender.current) {
//       isFirstRender.current = false;

//       return;
//     }

//     if (currentParamsStr !== updatedParamsStr) {
//       setSearchParams(updatedParams, { replace: true });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedSort, setSearchParams]);

//   return (
//     <form className={style['sort-list']}>
//       {sortBy.map(item => (
//         <label key={item.value} className={style.option}>
//           <input
//             type="radio"
//             name="sort"
//             value={item.value}
//             checked={selectedSort?.value === item.value}
//             onChange={() => handleSortByChange(item)}
//           />
//           <span className={style.radio}></span>
//           {item.label}
//         </label>
//       ))}
//     </form>
//   );
// };

import style from './sortList.module.scss';
import { useSearchParams } from 'react-router-dom';
import { SearchEnum, SortEnum } from '../../../../types/SearchType';
import { makeSortOptions } from '../../../../utils/makeSortOptions';
import React, { useState, useEffect } from 'react';
import { getSearchWith } from '../../../../utils/searchHelper';

const sortBy = makeSortOptions(SortEnum);

type SortByType = (typeof sortBy)[0];

export const SortList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get(SearchEnum.SORT);

  // ✅ Синхронізуємо локальний стан із URL
  const [selectedSort, setSelectedSort] = useState<SortByType | null>(() => {
    const found = sortBy.find(opt => opt.value === sortParam);

    return sortParam && found ? found : null;
  });

  // ✅ Якщо searchParams змінюються — оновлюємо стан у всіх копіях
  useEffect(() => {
    const found = sortBy.find(opt => opt.value === sortParam) || null;

    setSelectedSort(found);
  }, [sortParam]);

  // ✅ Коли користувач вибирає пункт — оновлюємо URL
  const handleSortByChange = (newValue: SortByType) => {
    const newParams = getSearchWith(searchParams, {
      [SearchEnum.SORT]: newValue.value,
    });

    setSearchParams(newParams, { replace: true });
  };

  return (
    <form className={style['sort-list']}>
      {sortBy.map(item => (
        <label key={item.value} className={style.option}>
          <input
            type="radio"
            name="sort"
            value={item.value}
            checked={selectedSort?.value === item.value}
            onChange={() => handleSortByChange(item)}
          />
          <span className={style.radio}></span>
          {item.label}
        </label>
      ))}
    </form>
  );
};
