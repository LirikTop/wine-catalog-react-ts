import { About } from './components/About';
import { Header } from './components/Header';
import { PopularProducts } from './components/PopularProducts';
import { Reviews } from './components/Reviews/Reviews';
import style from './homePeage.module.scss';

export const HomePage = () => {
  return (
    <section className={style['home-page']}>
      <Header />
      <PopularProducts />
      <Reviews />
      <About />
    </section>
  );
};
