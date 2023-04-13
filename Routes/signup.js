const express = require('express');
const path = require('path');
const userActions = require('../Helpers/userActions');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/SignUp/index.html'));
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  const fullname = req.body.fullname;
  const password = req.body.password;

  const user = await userActions.checkUserExistance({ email });

  if (user) {
    res.redirect('/signup?invalid');
    return;
  } else {
    res.sendFile(path.join(__dirname, '../Pages/SignUpSuccess/index.html'));
  }
});

module.exports = router;
