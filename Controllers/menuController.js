const Menu = require('../Database/Models/Menu');

async function addMenu(menu, period) {
  const menuObj = new Menu({ menu, period });

  await menuObj.save();
}

module.exports = { addMenu };
