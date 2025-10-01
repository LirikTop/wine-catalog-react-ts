// import React, { useState } from 'react';

// export const StarRating: React.FC = () => {
//   const [rating, setRating] = useState(0);

//   const handleClick = (event: React.MouseEvent, star: number) => {
//     const { left, width } = (
//       event.target as HTMLElement
//     ).getBoundingClientRect();
//     const clickX = event.clientX - left;

//     const isHalf = clickX < width / 2;
//     const newRating = isHalf ? star - 0.5 : star;

//     setRating(newRating);
//   };

//   return (
//     <div style={{ display: 'flex', gap: '4px' }}>
//       {[1, 2, 3, 4, 5].map(star => (
//         <span
//           key={star}
//           style={{
//             fontSize: '32px',
//             cursor: 'pointer',
//             color:
//               rating >= star
//                 ? 'gold'
//                 : rating + 0.5 === star
//                   ? 'gold'
//                   : 'lightgray',
//             position: 'relative',
//           }}
//           onClick={e => handleClick(e, star)}
//         >
//           ★
//         </span>
//       ))}
//       <span style={{ marginLeft: '8px' }}>Оцінка: {rating}</span>
//     </div>
//   );
// };

// eslint-disable-next-line import/no-extraneous-dependencies
import ReactStars from 'react-rating-stars-component';
import React from 'react';

interface Props {
  value?: number;
  onRating?: (key: number) => void;
  type?: 'review' | 'comment' | '';
  edit?: boolean;
}

export const StarRating: React.FC<Props> = ({
  value = 0,
  onRating = () => {},
  type = '',
}) => {
  const ratingChanged = (newRating: number) => {
    onRating(newRating);
  };

  const isEdit = !Boolean(type);

  const starRating = {
    size: Boolean(type) ? 24 : 32,
    color: Boolean(type) ? 'gray' : '#F6DDD6',
    activeColor: type === 'review' ? '#212529' : '#6E0D1A',
  };

  const { size, color, activeColor } = starRating;

  return (
    <ReactStars
      count={5}
      value={value}
      onChange={ratingChanged}
      size={size}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      color={color}
      activeColor={activeColor}
      edit={isEdit}
    />
  );
};
