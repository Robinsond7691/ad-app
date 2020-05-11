const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User = require('../models/User');
const Ad = require('../models/Ad');

//@route  GET  api/ads
//@desc         Get all Ads
//access        Public
router.get('/', (req, res) => {
  res.send('Get all ads');
});

//@route  GET  api/ads/user
//@desc         Get all user Ads
//access        Private
router.get('/user', auth, async (req, res) => {
  try {
    const ads = await Ad.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  GET  api/ads/:id
//@desc         Get one Ad
//access        Public
router.get('/:id', (req, res) => {
  res.send('Get a particular ad');
});

//@route  POST  api/ads
//@desc         Create a new ad
//access        Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'A title is required').not().isEmpty(),
      check(
        'desc',
        'Please enter a longer description (100 characters)'
      ).isLength({ min: 100 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, img, phone, email, type } = req.body;

    try {
      const newAd = new Ad({
        title,
        desc,
        img,
        phone,
        email,
        type,
        user: req.user.id,
      });

      const ad = await newAd.save();
      res.json(ad);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route  PUT  api/ads/:id
//@desc         Update an ad
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
