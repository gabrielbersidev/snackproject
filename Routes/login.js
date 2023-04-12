const path = require('path');
const express = require('express');
const User = require('../Database/Models/User');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Login/index.html'));
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  const user = await User.findOne({ email: email, password: pass });

  if (user) {
    req.session.authenticated = true;
    req.session.fullname = user.fullname;
    res.redirect('/main');
  } else res.redirect('/login?invalid');
});

module.exports = router;
