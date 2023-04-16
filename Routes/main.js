const path = require('path');
const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Main/index.html'));
});

module.exports = Router;
