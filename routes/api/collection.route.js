const express = require("express");
const router = express.Router();

const CollectionSection = require("../../models/collection-section.model");
const Collection = require("../../models/collection.model");

router.get('/test', (req, res) => res.json({ msg: "This is the collections route" }))

router.get('/sections', (req, res) => {
  CollectionSection.find()
    .then(collectionSections => {
      res.setHeader('Content-Type', 'application/json');
      res.json(collectionSections);
    })
    .catch(error => res.status(404).json({ error: "Cannot find Sections!"}))
})

router.get('/collection', (req, res) => {
  Collection.find()
    .then(collections => {
      res.setHeader('Content-Type', 'application/json');
      res.json(collections);
    })
    .catch(error => {
      res.status(404).json({ success: "Collectio not found!"})
    })
})

router.get('./collection/:collectionId')

// Create Collection Items
// router.post('/collection', (req, res) => {
//   const newCollection = new Collection({
//     title: req.body.title,
//     routeName: req.body.routeName,
//     items: req.body.items
//   })

//   newCollection.save()
//     .then(res => res.status(200).json({ success: "Collection has been created!"}))
//     // .catch(err => res.status(400).json({ error: "Cannot create new collection!"}))
// })

// router.post('/sections', (req, res) => {
//   const section = new CollectionSection({
//     title: req.title,
//     imageUrl: req.imageUrl,
//     size: req.size,
//     linkUrl: req.linkUrl
//   })

//   section.save()
//     .then(section => res.json(section))
//     .catch(error => res.send(400).json({ error: 'Cannot save section!'}));
// })

module.exports = router;