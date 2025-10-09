import { useCallback } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import backButton from './backButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = useCallback(() => {
    navigate(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onClick={handleGoBack} className={cn(backButton['back-button'])}>
      <div className={cn(backButton['back-button__icon'])}>
        <IoIosArrowRoundBack />
      </div>
      <p className={cn(backButton['back-button__text'])}>Back</p>
    </div>
  );
};
