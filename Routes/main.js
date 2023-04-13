const path = require('path');
const express = require('express');
const checkAuthenticated = require('../Helpers/checkAuthenticated');

const router = express.Router();

router.get('/', checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Main/index.html'));
});

module.exports = router;
