const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = Router;
