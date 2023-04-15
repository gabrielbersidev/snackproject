const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');

const router = express.Router();

router.get('/', checkAuthenticated, (req, res) => {
  res.status(200).send(req.session.fullname);
});

module.exports = router;
