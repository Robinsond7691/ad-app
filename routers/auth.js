const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc         Gget logged in user
//@acess        Private
router.get('/', (req, res) => {
  res.send('Get logged in user.');
});

//@route    POST api/auth
//@desc         Authenticate user and get token
//@acess        Public
router.post('/', (req, res) => {
  res.send('Log in user.');
});

module.exports = router;
