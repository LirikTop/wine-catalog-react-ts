/* eslint-disable import/no-extraneous-dependencies */
import { Input } from '../Input';
import style from './footer.module.scss';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={cn('container', style.footer__content)}>
        <div className={style['footer__title-content']}>
          <h1 className={style.footer__title}>WINSET</h1>
          <h3 className={style.footer__subtitle}>Discover, taste, enjoy!</h3>
        </div>
        <div
          className={cn(
            style['footer__list-content'],
            style['footer__list-content--1'],
          )}
        >
          <h4 className={style['footer__list-title']}>Information</h4>
          <ul className={cn(style.footer__list, style['footer__list--1'])}>
            <li className={style.footer__li}>
              <a href="#" className={style.footer__link}>
                Privacy Policy
              </a>
            </li>
            <li className={style.footer__li}>
              <a href="#" className={style.footer__link}>
                Terms of Use
              </a>
            </li>
            <li className={style.footer__li}>
              <a href="#" className={style.footer__link}>
                Contacts Us
              </a>
            </li>
            <li className={style.footer__li}>
              <a href="#" className={style.footer__link}>
                Subscribe & Save
              </a>
            </li>
            <li className={style.footer__li}>
              <a href="#" className={style.footer__link}>
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div
          className={cn(
            style['footer__list-content'],
            style['footer__list-content--2'],
          )}
        >
          <h4 className={style['footer__list-title']}>Contacts</h4>
          <ul className={cn(style.footer__list, style['footer__list-2'])}>
            <li className={style.footer__li}>
              <Link to="tel:+33123456789" className={style.footer__link}>
                +33 1 23 45 67 89
              </Link>
            </li>
            <li className={style.footer__li}>
              <Link to="mailto:WINSET@gmail.com" className={style.footer__link}>
                WINSET@gmail.com
              </Link>
            </li>
            <li className={cn(style.footer__li, style['footer__li--social'])}>
              <Link
                to="#"
                className={cn(style.footer__link, style['footer__social-link'])}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={cn(style.footer__icon, style.footer__faInstagram)}
                />
              </Link>
              <Link
                to="#"
                className={cn(style.footer__link, style['footer__social-link'])}
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={cn(style.footer__icon, style.footer__faFacebookF)}
                />
              </Link>
              <Link
                to="#"
                className={cn(style.footer__link, style['footer__social-link'])}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className={cn(
                    style.footer__icon,
                    style['footer__fa-paper-plane'],
                  )}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footer__form}>
          <Input />
        </div>
      </div>
      <div className={style.footer__bottom}>
        <small className={style.footer__copyright}>© 2025, WINSET.</small>
        {/* <div className="container">
        </div> */}
      </div>
    </div>
  );
};
