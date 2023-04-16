const path = require('path');
const express = require('express');
const userController = require('../Controllers/userController');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Login/index.html'));
});

Router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userController.checkUserExistance({ email, password });

  if (user) {
    req.session.authenticated = true;
    req.session.fullname = user.fullname;
    req.session.email = user.email;
    res.redirect('/main');
  } else res.redirect('/login?invalid');
});

module.exports = Router;
