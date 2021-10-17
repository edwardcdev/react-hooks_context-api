import axios from 'axios';

const changeResponseForHeroku = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
}

export const getCollectionSections = () => {
  return axios.get('/api/collections/sections', changeResponseForHeroku);
}; 

export const getCollections = () => {
  return axios.get('/api/collections/collection', changeResponseForHeroku);
}

// export const createCollection = (collectionData) => {
//   return axios.post('/api/collections/collection', collectionData)
// };