import React from 'react';
import { CartItemContainer, ImageContainer, ItemDetailsContainer } from './cart-item.styles';
interface ICartItemProps {
  item: {
    imageUrl: string,
    price: number,
    name: string,
    quantity: number
  }
}

const CartItem: React.FC<ICartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;