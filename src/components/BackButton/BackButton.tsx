import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import backButton from './backButton.module.scss';

export const BackButton = React.memo(() => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={cn(backButton['back-button'])}>
      <div className={cn(backButton['back-button__icon'])}>
        <IoIosArrowRoundBack />
      </div>
      <p className={cn(backButton['back-button__text'])}>Back</p>
    </div>
  );
});

BackButton.displayName = 'BackButton';
