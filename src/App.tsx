import './App.scss';
import './styles/theme/theme.css';
import { Outlet, useLocation } from 'react-router-dom';
import { Topbar } from './components/Topbar/Topbar';
import { useAppDispatch } from './app/hooks';
import { fetchUsers } from './features/userSlice';
import { fetchWines } from './features/wineSlice';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { PageProvider } from './context/PageContext';

export const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchWines());
  }, []);

  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <PageProvider>
      <div className="App">
        <div className="container">{!isHomePage && <Topbar />}</div>
        <div className="App__content">
          <main className="App__main">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </PageProvider>
  );
};
