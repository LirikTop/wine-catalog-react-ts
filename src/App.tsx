import './App.scss';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <div className="App__content">
        <main className="App__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
