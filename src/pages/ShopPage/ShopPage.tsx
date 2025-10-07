// import { ProductList } from './components/ProductList';
// import { SearchBar } from './components/SearchBar';
// import style from './shopPeage.module.scss';
// import cn from 'classnames';
// import { ShopIcon } from './components/ShopIcon';
// import { Sort } from './components/Sort';
// import { useState } from 'react';
// import { SortSelector } from './components/SortSelector';
// import { Filter } from './components/Filter';
// import { FiltersPanel } from './components/FiltersPanel';

// export const ShopPage = () => {
//   const [isSortActive, setSortActive] = useState(false);
//   const [isFilterActive, setFilterActive] = useState(false);

//   return (
//     <section className={style.shopPage}>
//       <div className={cn('container', style.shopPage__container)}>
//         <div className={cn(style['shopPage__search-bar'])}>
//           <SearchBar />
//         </div>
//         <div className={cn(style.shopPage__content)}>
//           <div className={cn(style['shopPage__filter-sort'])}>
//             <div
//               className={cn(style['shopPage__filter-sort-icon'])}
//               onClick={() => setSortActive(current => !current)}
//             >
//               <ShopIcon variant={'sort'} />
//             </div>
//             <div
//               className={cn(style['shopPage__filter-sort-icon'])}
//               onClick={() => setFilterActive(current => !current)}
//             >
//               <ShopIcon variant={'filter'} />
//             </div>
//             <div className={cn(style['shopPage__sort-selector'])}>
//               <SortSelector />
//             </div>
//           </div>
//           <ProductList />
//         </div>
//         <div className={cn(style['shopPage__filter-panel'])}>
//           <FiltersPanel />
//         </div>
//       </div>
//       <Sort isSortActive={isSortActive} setSortActive={setSortActive} />
//       <Filter
//         isFilterActive={isFilterActive}
//         setFilterActive={setFilterActive}
//       />
//     </section>
//   );
// };

import { ProductList } from './components/ProductList';
import { SearchBar } from './components/SearchBar';
import style from './shopPeage.module.scss';
import cn from 'classnames';
import { ShopIcon } from './components/ShopIcon';
import { Sort } from './components/Sort';
import { useState } from 'react';
import { SortSelector } from './components/SortSelector';
import { Filter } from './components/Filter';
import { FiltersPanel } from './components/FiltersPanel';

export const ShopPage = () => {
  const [isSortActive, setSortActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);

  return (
    <section className={style.shopPage}>
      <div className={cn('container', style.shopPage__container)}>
        <div className={cn(style['shopPage__search-bar'])}>
          <SearchBar />
        </div>
        <div className={cn(style.shopPage__content)}>
          <ProductList />
        </div>
        <div className={cn(style['shopPage__filter-sort'])}>
          <div className={cn(style['shopPage__filter-sort-content'])}>
            <div
              className={cn(style['shopPage__filter-sort-icon'])}
              onClick={() => setSortActive(current => !current)}
            >
              <ShopIcon variant={'sort'} />
            </div>
            <div
              className={cn(style['shopPage__filter-sort-icon'])}
              onClick={() => setFilterActive(current => !current)}
            >
              <ShopIcon variant={'filter'} />
            </div>
            <div className={cn(style['shopPage__sort-selector'])}>
              <SortSelector />
            </div>
          </div>
        </div>
        <div className={cn(style['shopPage__filter-panel'])}>
          <FiltersPanel />
        </div>
      </div>
      <Sort isSortActive={isSortActive} setSortActive={setSortActive} />
      <Filter
        isFilterActive={isFilterActive}
        setFilterActive={setFilterActive}
      />
    </section>
  );
};
