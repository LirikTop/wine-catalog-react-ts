import {
  BrowserRouter as Router /*HashRouter*/,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { ProfilePage } from './pages/ProfilePage';
import { WineDetailPage } from './pages/WineDetailPage';
import { CartPage } from './pages/CartPage/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { PagesLinkEnum } from './types/PagesType';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${PagesLinkEnum.home}`} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to={PagesLinkEnum.home} />} />

          <Route path={PagesLinkEnum.about} element={<AboutPage />} />
          <Route path={PagesLinkEnum.shop} element={<ShopPage />} />
          <Route path={PagesLinkEnum.profile} element={<ProfilePage />} />

          <Route
            path={`${PagesLinkEnum.shop}/:wineId`}
            element={<WineDetailPage />}
          />

          <Route path={PagesLinkEnum.cart} element={<CartPage />} />
          <Route path={PagesLinkEnum.favorites} element={<FavoritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
