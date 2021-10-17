const mongoose = require('mongoose');

const CollectionSectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false
  },
  linkUrl: {
    type: String,
    required: false
  }
});

const CollectionSection = mongoose.model('sections', CollectionSectionSchema);
module.exports = CollectionSection;