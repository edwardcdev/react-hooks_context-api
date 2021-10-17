import React, { useContext, useEffect } from 'react';
import './collection-page.styles.scss';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection-page.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionContext } from '../../providers/collection/collection.provider';

const CollectionPage = ({ match }) => {
  const { singleCollection, getSingleCollection } = useContext(CollectionContext)
  const { title, items } = singleCollection;
  useEffect(() => {
    getSingleCollection(match.params.collectionId);
  }, [])

  return ( 
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
      {items.map((item, idx) => (
        <CollectionItem key={idx} item={item}></CollectionItem>
      ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage;