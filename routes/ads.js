const express = require('express');
const router = express.Router();

//@route  GET  api/ads
//@desc         Get all Ads
//access        Public
router.get('/', (req, res) => {
  res.send('Get all ads');
});

//@route  GET  api/ads
//@desc         Get one Ad
//access        Public
router.get('/:id', (req, res) => {
  res.send('Get a particular ad');
});

//@route  POST  api/ads
//@desc         Create a new ad
//access        Private
router.post('/', (req, res) => {
  res.send('Create an ad');
});

//@route  PUT  api/ads/:id
//@desc         Create an ad
//access        Private
router.put('/:id', (req, res) => {
  res.send('Update an ad');
});

//@route  DELETE  api/ads/:id
//@desc         Delete an ad
//access        Private
router.delete('/:id', (req, res) => {
  res.send('Delete an ad');
});

module.exports = router;
