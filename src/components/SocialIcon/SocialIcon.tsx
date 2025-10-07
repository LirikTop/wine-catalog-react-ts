/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import style from './social-icon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SocialIconsType } from '../../types/iconsType';

interface Props {
  variant: SocialIconsType;
}

export const SocialIcon: React.FC<Props> = React.memo(({ variant }) => {
  const icon =
    variant === 'instagram'
      ? faInstagram
      : variant === 'facebook'
        ? faFacebookF
        : faPaperPlane;

  const link =
    variant === 'instagram'
      ? 'https://www.instagram.com/'
      : variant === 'facebook'
        ? 'https://www.facebook.com/?locale=uk_UA'
        : 'https://web.telegram.org/a/';

  return (
    <Link to={link} className={style.social}>
      <FontAwesomeIcon icon={icon} className={style.social__icon} />
    </Link>
  );
});

SocialIcon.displayName = 'SocialIcon';
