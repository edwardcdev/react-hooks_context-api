import React, { useContext } from 'react';

import './checkout.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = () => {
  const { cartItems, totalCost } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem, idx) => (
        <CheckoutItem key={idx} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total"><span>Total: ${totalCost}</span></div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </div>
        <StripeCheckOutButton price={totalCost}/>
    </div>
  )
}

export default CheckoutPage;