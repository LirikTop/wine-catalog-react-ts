// // /* eslint-disable import/no-extraneous-dependencies */
// // import style from './color.module.scss';
// // import { useSearchParams } from 'react-router-dom';
// // import { useState, useEffect } from 'react';
// // import { getSearchWith } from '../../../../../../utils/searchHelper';
// // import { SearchEnum } from '../../../../../../types/SearchType';
// // import { useDebounce } from 'use-debounce';

// // const colors = ['Red', 'White', 'Rose'];

// // export const Color = () => {
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const colorParams = searchParams.getAll(SearchEnum.COLOR);

// //   const [colorChecked, setcolorChecked] = useState<string[]>(() => {
// //     return colorParams.length ? colorParams : [];
// //   });

// //   const [debouncedValue] = useDebounce(colorChecked, 100);

// //   useEffect(() => {
// //     const newParams = getSearchWith(searchParams, {
// //       [SearchEnum.COLOR]: debouncedValue,
// //     });

// //     const current = searchParams.toString();
// //     const updated = new URLSearchParams(newParams).toString();

// //     if (current !== updated) {
// //       setSearchParams(newParams);
// //     }
// //   }, [debouncedValue]);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = e.target.value;

// //     setcolorChecked(current =>
// //       current.includes(value)
// //         ? current.filter(c => c !== value)
// //         : [...current, value],
// //     );
// //   };

// //   return (
// //     <div className={style.color}>
// //       <div className={style.color__container}>
// //         {colors.map(color => (
// //           <label key={color} className={style['color__input-content']}>
// //             {color}
// //             <input
// //               type="checkbox"
// //               value={color}
// //               className={style.color__input}
// //               checked={colorChecked.includes(color)}
// //               onChange={handleChange}
// //             />{' '}
// //           </label>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// /* eslint-disable import/no-extraneous-dependencies */
// import style from './color.module.scss';
// import { useSearchParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../../../utils/searchHelper';
// import { SearchEnum } from '../../../../../../types/SearchType';
// import { useDebounce } from 'use-debounce';

// const colors = ['Red', 'White', 'Rose'];

// export const Color = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // 🔽 нормалізуємо значення з URL
//   const colorParams = searchParams
//     .getAll(SearchEnum.COLOR)
//     .map(c => c.toLowerCase());

//   const [colorChecked, setColorChecked] = useState<string[]>(() => {
//     return colorParams.length ? colorParams : [];
//   });

//   const [debouncedValue] = useDebounce(colorChecked, 100);

//   useEffect(() => {
//     const newParams = getSearchWith(searchParams, {
//       [SearchEnum.COLOR]: debouncedValue,
//     });

//     const current = searchParams.toString();
//     const updated = new URLSearchParams(newParams).toString();

//     if (current !== updated) {
//       setSearchParams(newParams);
//     }
//   }, [debouncedValue]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.toLowerCase(); // 🔽 нормалізуємо

//     setColorChecked(current =>
//       current.includes(value)
//         ? current.filter(c => c !== value)
//         : [...current, value],
//     );
//   };

//   return (
//     <div className={style.color}>
//       <div className={style.color__container}>
//         {colors.map(color => {
//           const value = color.toLowerCase(); // 🔽 нормалізуємо для input

//           return (
//             <label key={color} className={style['color__input-content']}>
//               {color}
//               <input
//                 type="checkbox"
//                 value={value}
//                 className={style.color__input}
//                 checked={colorChecked.includes(value)}
//                 onChange={handleChange}
//               />
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// /* eslint-disable import/no-extraneous-dependencies */
// import style from './color.module.scss';
// import { useSearchParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getSearchWith } from '../../../../../../utils/searchHelper';
// import { SearchEnum } from '../../../../../../types/SearchType';
// import { useDebounce } from 'use-debounce';

// const colors = ['Red', 'White', 'Rose'];

// export const Color = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const colorParams = searchParams.getAll(SearchEnum.COLOR);

//   const [colorChecked, setcolorChecked] = useState<string[]>(() => {
//     return colorParams.length ? colorParams : [];
//   });

//   const [debouncedValue] = useDebounce(colorChecked, 100);

//   useEffect(() => {
//     const newParams = getSearchWith(searchParams, {
//       [SearchEnum.COLOR]: debouncedValue,
//     });

//     const current = searchParams.toString();
//     const updated = new URLSearchParams(newParams).toString();

//     if (current !== updated) {
//       setSearchParams(newParams);
//     }
//   }, [debouncedValue]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;

//     setcolorChecked(current =>
//       current.includes(value)
//         ? current.filter(c => c !== value)
//         : [...current, value],
//     );
//   };

//   return (
//     <div className={style.color}>
//       <div className={style.color__container}>
//         {colors.map(color => (
//           <label key={color} className={style['color__input-content']}>
//             {color}
//             <input
//               type="checkbox"
//               value={color}
//               className={style.color__input}
//               checked={colorChecked.includes(color)}
//               onChange={handleChange}
//             />{' '}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };
