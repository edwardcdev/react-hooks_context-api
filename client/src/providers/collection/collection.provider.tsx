import React, { createContext, useState } from 'react';
import { getCollectionSections, getCollections } from './collection.utils';

import Section from '../../interface/section.interface';
import CollectionItem from '../../interface/collection-item.interface'

interface ICollection {
  getSections: Function,
  getCollectionItems: Function,
  collectionSections: [] | Section[],
  collectionItems: [] | CollectionItem[],
  singleCollection: {},
  getSingleCollection: Function,
}

interface SingleCollection {
  title: string,
  routeName: string,
  items: CollectionItem[],
}

interface ICartProps {
  children: React.ReactNode;
}

export const CollectionContext = createContext<ICollection>({
  getSections: () => {},
  getCollectionItems: () => {},
  collectionSections: [],
  collectionItems: [],
  singleCollection: {},
  getSingleCollection: () => {},
})

const CollectionProvider: React.FC<ICartProps> = ({ children }) => {
  const [collectionSections, setCollectionSections] = useState([]);
  const [collectionItems, setCollectionItems] = useState([]);
  const [singleCollection, setSingleCollection] = useState({title: '', routeName: 'string', items: []});

  const getSections = () => {
    getCollectionSections()
      .then(sections => {
        setCollectionSections(sections.data);
      })
      .catch(error => console.log(error));
  }

  const getCollectionItems = () => {
    getCollections()
      .then(collections => {
        setCollectionItems(collections.data);
      })
      .catch(error => console.log(error));
  }

  // TODO: Create backend route to look for single collection instead of fetching all collections and filtering
  const getSingleCollection = (collectionTitle: string) => {
    getCollections()
      .then(collections => {
        const foundCollection = collections.data.filter((collection: SingleCollection) => collection.title.toLowerCase() === collectionTitle);
        setSingleCollection(foundCollection[0]);
      })
      .catch(error => console.log(error));
  }
  
  // Add Collections to the database
  // const createCol = (collectionData) => {
  //   createCollection(collectionData)
  //     .then(collection => console.log(collection))
  //     // .catch(error => console.log(error));
  // }

  return (
    <CollectionContext.Provider
      value={{ getSections, collectionSections, getCollectionItems, getSingleCollection, singleCollection, collectionItems }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;