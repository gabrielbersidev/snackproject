const Menu = require('../Database/Models/Menu');

async function addMenu(menu, period) {
  const menuObj = new Menu({ menu, period });

  await menuObj.save();
}

async function getMenu(compareData) {
  const menuObj = await Menu.find(compareData);

  return menuObj;
}

module.exports = { addMenu, getMenu };
