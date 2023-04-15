const path = require('path');
const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Login/index.html'));
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userController.checkUserExistance({ email, password });

  if (user) {
    req.session.authenticated = true;
    req.session.fullname = user.fullname;
    res.redirect('/main');
  } else res.redirect('/login?invalid');
});

module.exports = router;
