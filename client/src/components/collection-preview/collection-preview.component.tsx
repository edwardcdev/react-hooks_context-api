import React, { ReactComponentElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import  './collection-preview.styles.scss';

import { CollectionPreviewContainer, CollectionTitleContainer, PreviewContainer } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';
import ICollectionItem from '../../interface/collection-item.interface'
import ShopItem from '../../interface/shop-item.interface';

interface ICollectionPreviewProps extends RouteComponentProps<any> {
  title: string,
  items: ShopItem[],
  routeName: string
}

const CollectionPreview: React.FC<ICollectionPreviewProps> = ({ title, items, routeName, match, history }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer onClick={() => history.push(`${match.path}/${routeName}`) }>
        {title.toUpperCase()}
      </CollectionTitleContainer>
      <PreviewContainer>
        {(items as ShopItem[]).filter((_: any, idx: number) => idx < 4).map((item: ShopItem, idx: number) => (<CollectionItem key={idx} item={item} />))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview);