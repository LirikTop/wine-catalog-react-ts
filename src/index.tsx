/* eslint-disable import/no-extraneous-dependencies */
import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { Provider } from 'react-redux';

import { store } from './app/store';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
