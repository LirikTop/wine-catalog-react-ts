/* eslint-disable max-len */
import React from 'react';
import { Button } from '../Button';
import style from './Input.module.scss';
interface Props {
  isButton?: boolean;
}

export const Input: React.FC<Props> = React.memo(({ isButton = true }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Логіка обробки форми підписки
    alert('Підписка оформлена!');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.form__inputGroup}>
        <input
          id="email"
          type="email"
          className={style.form__input}
          placeholder="Enter email address"
          required
        />
        <button type="submit" className={style.form__iconButton}>
          {/* ➝ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="18"
            viewBox="0 0 32 18"
            fill="none"
          >
            <path
              d="
                M25 10H7C6.44 10 6 9.56 6 9
                C6 8.44 6.44 8 7 8H25
                C25.56 8 26 8.44 26 9
                C26 9.56 25.56 10 25 10Z
              "
              fill="#6E0D1A"
            />
            <path
              d={
                'M20 17C19.8688 17.0016 19.7388 16.9757 19.6183 16.924C19.4977 ' +
                '16.8724 19.3893 16.796 19.3 16.7C18.9 16.3 18.9 15.68 19.3 15.28L25.6 ' +
                '8.97996L19.3 2.67996C18.9 2.27996 18.9 1.65996 19.3 1.25996C19.7 ' +
                '0.859961 20.32 0.859961 20.72 1.25996L27.72 8.25996C28.12 8.65996 ' +
                '28.12 9.27996 27.72 9.67996L20.72 16.68C20.52 16.88 20.26 16.98 ' +
                '20.02 16.98L20 17Z'
              }
              fill="#6E0D1A"
            />
          </svg>
        </button>
      </div>

      {isButton && <Button type="submit">Get my 10% Discount</Button>}
    </form>
  );
});

Input.displayName = 'Input';
