const User = require('../Database/Models/User');

async function checkUserExistance(compareData) {
  const userObj = await User.findOne(compareData);

  return userObj;
}

async function createUser(fullname, email, password) {
  const userObj = new User({ fullname, email, password });

  await userObj.save();
}

module.exports = { checkUserExistance, createUser };
