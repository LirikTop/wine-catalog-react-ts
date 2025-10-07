// /* eslint-disable import/no-extraneous-dependencies */
// import style from './country.module.scss';
// import { useSearchParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../../../utils/searchHelper';
// import { SearchEnum } from '../../../../../../types/SearchType';
// import { useDebounce } from 'use-debounce';

// const countries = ['France', 'Italy', 'Spain'];

// export const Country = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const countryParams = searchParams
//     .getAll(SearchEnum.COUNTRY)
//     .map(c => c.toLowerCase());

//   const [countryChecked, setCountryChecked] = useState<string[]>(() => {
//     return countryParams.length ? countryParams : [];
//   });

//   const [debouncedValue] = useDebounce(countryChecked, 100);

//   useEffect(() => {
//     const newParams = getSearchWith(searchParams, {
//       [SearchEnum.COUNTRY]: debouncedValue,
//     });

//     const current = searchParams.toString();
//     const updated = new URLSearchParams(newParams).toString();

//     if (current !== updated) {
//       setSearchParams(newParams);
//     }
//   }, [debouncedValue]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.toLowerCase();

//     setCountryChecked(current =>
//       current.includes(value)
//         ? current.filter(c => c !== value)
//         : [...current, value],
//     );
//   };

//   return (
//     <div className={style.country}>
//       <div className={style.country__container}>
//         {countries.map(country => {
//           const value = country.toLowerCase();

//           return (
//             <label key={country} className={style['country__input-content']}>
//               {country}
//               <input
//                 type="checkbox"
//                 value={value}
//                 className={style.country__input}
//                 checked={countryChecked.includes(value)}
//                 onChange={handleChange}
//               />{' '}
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
