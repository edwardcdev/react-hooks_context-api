import ShopItem from '../../interface/shop-item.interface';

export const addPriceToTotal = (totalCost: number, cartItemPrice: number): number => {
  return totalCost + cartItemPrice;
}

export const removePriceFromTotal = (totalCost: number, cartItemPrice: number): number => {
  return totalCost - cartItemPrice;
}

export const addItemToCount = (cartItemCount: number, count: number): number => {
  return cartItemCount + count;
}

export const removeItemFromCount = (cartItemCount: number, count: number): number => {
  return cartItemCount - count;
}

export const addItemToCart = (cartItems: ShopItem[], cartItemToAdd: ShopItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === cartItemToAdd.name
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: ShopItem[], cartItemToRemove: ShopItem): ShopItem[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === cartItemToRemove.name
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.name !== cartItemToRemove.name);
  }

  return cartItems.map(cartItem =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const filterItemFromCart = (cartItems: ShopItem[], item: ShopItem) =>
  cartItems.filter(cartItem => cartItem.name !== item.name);

export const getCartItemsCount = (cartItems: ShopItem[]) =>
  cartItems.reduce(
    (accumalatedQuantity: number, cartItem: ShopItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

export const getCartTotalCost = (cartItems: ShopItem[]) =>
  cartItems.reduce(
    (accumalatedQuantity: number, cartItem: ShopItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
