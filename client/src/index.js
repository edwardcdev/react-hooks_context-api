import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './stylesheets/icon-font.css';
import './index.scss';
import App from './App';

import CartProvider from './providers/cart/cart.provider';
import UserProvider from './providers/user/user.provider';
import CollectionProvider from './providers/collection/collection.provider';

ReactDOM.render(
  <UserProvider>
    <CollectionProvider>
      <CartProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </CartProvider>
    </CollectionProvider>
  </UserProvider>,
  document.getElementById('root')
);
