import style from './aboutPeage.module.scss';
import cn from 'classnames';
import aboutBlocks from './aboutBlocks.json';
import { ContactUs } from './components/ContactUs';
import { getImageUrl } from '../../utils/getImageUrl';

export const AboutPage = () => {
  return (
    <section className={style['about-page']}>
      <div className={cn('container', style['about-page__container'])}>
        {aboutBlocks.map(component => (
          <div
            className={cn(
              style['about-page__content'],
              style[`about-page__${component.class}`],
            )}
            key={component.class}
          >
            <div className={style['about-page__block-content']}>
              <h2 className={style['about-page__title']}>{component.title}</h2>
              {component.blocks.map((block, blockIndex) => (
                <div
                  className={cn(
                    style['about-page__block'],
                    style[`about-page__block--${component.class}`],
                    {
                      [style[`about-page__block--first`]]: blockIndex % 2 === 0,
                    },
                  )}
                  key={`${component.class}-${blockIndex}`}
                >
                  <div
                    className={cn(style['about-page__text-content'], {
                      [style[`about-page__text-content--first`]]:
                        blockIndex % 2 === 0,
                    })}
                  >
                    {block.text.map((text, textIndex) => (
                      <p
                        className={style['about-page__text']}
                        key={`${component.class}-${blockIndex}-text-${textIndex}`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                  <picture
                    className={cn(style['about-page__image-wrapper'], {
                      [style[`about-page__image-wrapper--first`]]:
                        blockIndex % 2 === 0,
                    })}
                  >
                    <source
                      srcSet={getImageUrl(block.images.tabletImage)}
                      media="(min-width: 640px)"
                    />
                    <img
                      src={getImageUrl(block.images.image)}
                      alt={`${component.title} image`}
                      className={style['about-page__image']}
                      loading="lazy"
                    />
                  </picture>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={style['about-page__contact']}>
          <h2 className={style['about-page__title']}>Contact us</h2>
          <ContactUs />
        </div>
      </div>
    </section>
  );
};
