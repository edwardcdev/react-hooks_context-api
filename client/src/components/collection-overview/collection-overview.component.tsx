import React, { useContext, useEffect } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverviewContainer } from './collection-overview.styles';
import { CollectionContext } from '../../providers/collection/collection.provider';
import CollectionItem from '../../interface/collection-item.interface';
interface ICollectionsOverviewProps {}

const CollectionsOverview: React.FC<ICollectionsOverviewProps> = () => {
  const { getCollectionItems, collectionItems } = useContext(CollectionContext);

  useEffect(() => {
    getCollectionItems();
  }, [])
  
  return (
    <CollectionOverviewContainer>
      {(collectionItems as CollectionItem[]).map(({ title, items, routeName }, idx: number) => (<CollectionPreview key={idx} title={title} items={items} routeName={routeName} />))}
    </CollectionOverviewContainer>
  )
};

export default CollectionsOverview;