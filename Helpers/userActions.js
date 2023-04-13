const User = require('../Database/Models/User');

async function checkUserExistance(compareData) {
  const user = await User.findOne(compareData);

  return user;
}

module.exports = { checkUserExistance };
