// import { FilterSection } from '../FilterSection';
// import style from './filtersPanel.module.scss';
// import { useSearchParams } from 'react-router-dom';
// import { SearchEnum } from '../../../../types/SearchType';
// import React, { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../utils/searchHelper';

// export const FiltersPanel = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [minPriceValue, setMinPriceValue] = useState(
//     searchParams.get(SearchEnum.MIN) || '0',
//   );

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newParams = getSearchWith(searchParams, {
//       [SearchEnum.MIN]: e.target.value,
//     });

//     setSearchParams(newParams);
//   };

//   return (
//     <div className={style.panel}>
//       <FilterSection title="Price range">
//         <input
//           type="range"
//           min="0"
//           max="100"
//           step="1"
//           onChange={e => handlePriceChange(e)}
//         />
//       </FilterSection>
//       <FilterSection title="Country">
//         <label>
//           <input type="checkbox" /> France
//         </label>
//         <label>
//           <input type="checkbox" /> Italy
//         </label>
//         <label>
//           <input type="checkbox" /> Spain
//         </label>
//       </FilterSection>

//       <FilterSection title="Color">
//         <label>
//           <input type="radio" name="color" /> Red
//         </label>
//         <label>
//           <input type="radio" name="color" /> White
//         </label>
//       </FilterSection>
//     </div>
//   );
// };

import { FilterSection } from '../FilterSection';
import style from './filtersPanel.module.scss';
import { Price } from './components/Price';
import { CheckBoxFilter } from './components/CheckBoxFilter';

const colors = ['Red', 'White', 'Rose'];
const countries = ['France', 'Italy', 'Spain'];

export const FiltersPanel = () => {
  return (
    <div className={style.panel}>
      <FilterSection title="Price range">
        <Price />
      </FilterSection>

      <FilterSection title="Country">
        <CheckBoxFilter values={countries} paramType={'COUNTRY'} />
      </FilterSection>

      <FilterSection title="Color">
        <CheckBoxFilter values={colors} paramType={'COLOR'} />
      </FilterSection>
    </div>
  );
};
