import React, { useContext } from 'react'

import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon: React.FC = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon/>
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  )
}

export default CartIcon;