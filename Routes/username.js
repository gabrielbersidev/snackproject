const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.authenticated == true) {
    res.status(200).send(req.session.fullname);
    return;
  }

  res.sendStatus(404);
});

module.exports = router;
