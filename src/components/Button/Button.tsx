import React from 'react';
import style from './button.module.scss';
import cn from 'classnames';

type Variant = 'primary' | 'secondary';

interface Props {
  variant?: Variant;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = React.memo(
  ({
    variant = 'primary',
    onClick = () => {},
    disabled = false,
    type = 'button',
    children,
  }) => {
    return (
      <button
        type={type}
        className={cn(style.button, {
          [style['button--primary']]: variant === 'primary',
          [style['button--secondary']]: variant === 'secondary',
        })}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
