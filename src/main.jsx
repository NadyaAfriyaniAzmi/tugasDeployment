import React from 'react';
import { createRoot } from 'react-dom/client'; // Mengimpor createRoot dari react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Menggunakan createRoot dari react-dom/client

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
