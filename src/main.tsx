import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './styles/_custom.scss'; // Bootstrap styles
import AppRouter from './AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
