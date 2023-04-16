const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  res.status(200).send(req.session.fullname);
});

module.exports = Router;
