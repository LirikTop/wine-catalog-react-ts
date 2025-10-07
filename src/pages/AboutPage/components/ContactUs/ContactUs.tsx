import { Link } from 'react-router-dom';
import style from './contactUs.module.scss';
import cn from 'classnames';
import { SocialIcon } from '../../../../components/SocialIcon';
import { SocialIconsType } from '../../../../types/iconsType';
import { useCallback } from 'react';
import { ContactForm } from '../ContactForm';

const telnumber = [
  '+33 1 23 45 67 89',
  '+32 1 23 15 43 89',
  '+31 1 24 24 89 00',
];
const socialIcons: SocialIconsType[] = ['instagram', 'facebook', 'telegram'];

export const ContactUs = () => {
  const getTel = useCallback((tel: string) => tel.split(' ').join(''), []);

  return (
    <div className={style['contact-us']}>
      <div
        className={cn(
          style['contact-us__list-wrapper'],
          style['contact-us__list-wrapper--1'],
        )}
      >
        <h4 className={style['contact-us__title']}>Contacts</h4>
        <ul className={style['contact-us__list']}>
          {telnumber.map(tel => (
            <li className={style['contact-us__li']} key={tel}>
              <Link
                to={`tel:${getTel(tel)}`}
                className={style['contact-us__link']}
              >
                {tel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(
          style['contact-us__list-wrapper'],
          style['contact-us__list-wrapper--2'],
        )}
      >
        <h4 className={style['contact-us__title']}>Social media</h4>
        <ul className={style['contact-us__list']}>
          <li
            className={cn(
              style['contact-us__li'],
              style['contact-us__li--social'],
            )}
          >
            {socialIcons.map(icon => (
              <SocialIcon variant={icon} key={icon} />
            ))}
          </li>
        </ul>
      </div>
      <div
        className={cn(
          style['contact-us__list-wrapper'],
          style['contact-us__list-wrapper--3'],
        )}
      >
        <h4 className={style['contact-us__title']}>E-mail</h4>
        <ul className={style['contact-us__list']}>
          <li className={style['contact-us__li']}>
            <Link
              to="mailto:WINSET@gmail.com"
              className={style['contact-us__link']}
            >
              WINSET@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      <div className={style['contact-us__form']}>
        <ContactForm />
      </div>
    </div>
  );
};
