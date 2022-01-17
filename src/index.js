import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { CartProvider } from "react-use-cart";
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
