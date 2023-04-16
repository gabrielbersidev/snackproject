const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');
const userController = require('../Controllers/userController');
const menuController = require('../Controllers/menuController');

const Router = express.Router();

Router.get('/', checkAuthenticated, async (req, res) => {
  const email = req.session.email;

  const user = userController.checkUserExistance({ email });

  if (!user) {
    res.status(500).send();
    return;
  }

  const menus = await menuController.getMenu({ acceptance: -1 });

  let menu = undefined;
  menus.forEach((m) => {
    const date = m.created;

    const now = new Date(Date.now());
    if (
      m.period === user.period &&
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ) {
      menu = m;
    }
  });

  if (!menu) {
    res.status(401).send();
    return;
  }

  if (user.lastUpdate > menu.created) {
    res.status(406).send();
    return;
  }

  res.status(200).send(menu.menu);
});

module.exports = Router;
