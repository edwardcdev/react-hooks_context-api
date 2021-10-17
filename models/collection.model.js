const mongoose = require('mongoose');

const CollectionItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
const CollectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  routeName: {
    type: String,
    required: true
  },
  items: [ CollectionItemSchema ]
});



const Collection = mongoose.model('collection', CollectionSchema);
module.exports = Collection;