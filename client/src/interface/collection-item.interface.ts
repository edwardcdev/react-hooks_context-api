import ShopItem from './shop-item.interface';

interface CollectionItem {
  id: number,
  title: string,
  imageUrl?: string,
  linkUrl?: string,
  routeName?: string,
  items?: ShopItem[]
}

export default CollectionItem;