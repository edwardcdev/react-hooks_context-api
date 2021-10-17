interface ShopItem {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity?: number
}

export default ShopItem;