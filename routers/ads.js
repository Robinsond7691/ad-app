const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User = require('../models/User');
const Ad = require('../models/Ad');

//@route  GET  api/ads
//@desc         Get all Ads
//access        Public
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find({}).sort({
      date: -1,
    });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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
router.get('/:id', async (req, res) => {
  try {
    let ad = await Ad.findById(req.params.id);

    if (!ad) return res.status(404).json({ msg: 'Ad not found' });

    res.json(ad);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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
        'Please enter a longer description (50 characters)'
      ).isLength({ min: 50 }),
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
router.put(
  '/:id',
  [
    auth,
    [
      check(
        'desc',
        'Please enter a longer description (50 characters)'
      ).isLength({ min: 50 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, img, phone, email, type } = req.body;

    try {
      let ad = await Ad.findById(req.params.id);

      if (!ad) return res.status(404).json({ msg: 'Ad not found' });

      //Make sure user owns contact
      if (ad.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not Authorized' });
      }

      if (title) ad.title = title;
      if (desc) ad.desc = desc;
      if (img) ad.img = img;
      if (phone) ad.phone = phone;
      if (email) ad.email = email;
      if (type) ad.type = type;

      updatedAd = await ad.save();
      res.json(updatedAd);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route  DELETE  api/ads/:id
//@desc         Delete an ad
//access        Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let ad = await Ad.findById(req.params.id);

    if (!ad) return res.status(404).json({ msg: 'Ad not found' });

    //Make sure user owns contact
    if (ad.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    await Ad.findOneAndDelete({ _id: req.params.id });

    res.json({ msg: 'Ad Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
