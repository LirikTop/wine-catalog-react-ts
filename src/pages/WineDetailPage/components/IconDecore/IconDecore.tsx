/* eslint-disable import/no-extraneous-dependencies */
import { getImageUrl } from '../../../../utils/getImageUrl';
import style from './iconDecore.module.scss';
import { CiApple } from 'react-icons/ci';

export const IconDecore = () => {
  return (
    <div className={style.decore}>
      <div className={style.decore__content}>
        <CiApple className={style.decore__icon} />
        <p className={style.decore__name}>Apple</p>
      </div>
      <div className={style.decore__content}>
        <img
          src={getImageUrl('pear.svg')}
          alt="pear image"
          className={style.decore__icon}
        />
        <p className={style.decore__name}>Pear</p>
      </div>
      <div className={style.decore__content}>
        <img
          src={getImageUrl('lemon.svg')}
          alt="lemon image"
          className={style.decore__icon}
        />
        <p className={style.decore__name}>Lemon</p>
      </div>
      <div className={style.decore__content}>
        <img
          src={getImageUrl('minerality.svg')}
          alt="minerality image"
          className={style.decore__icon}
        />
        <p className={style.decore__name}>Minerality</p>
      </div>
      <div className={style.decore__content}>
        <img
          src={getImageUrl('herbs.svg')}
          alt="herbs image"
          className={style.decore__icon}
        />
        <p className={style.decore__name}>Herbs</p>
      </div>
    </div>
  );
};
