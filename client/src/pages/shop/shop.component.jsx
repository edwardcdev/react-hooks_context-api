import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom'; 
import './shop.styles.scss';

import Spinner from '../../components/spinner/spinner.component';
const CollectionOverview = lazy(() => import('../../components/collection-overview/collection-overview.component'));
const CollectionPage = lazy(() => import('../collection/collection-page.component'));

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
    <Suspense fallback={<Spinner/>}>
      <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </Suspense>
    </div>
  )
}

export default ShopPage;