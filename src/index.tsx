import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/store/store';

const root = ReactDOM.createRoot(document.body as HTMLBodyElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
