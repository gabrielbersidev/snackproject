const User = require('../Database/Models/User');

async function checkUserExistance(compareData) {
  const user = await User.findOne(compareData);

  return user;
}

async function createUser(fullname, email, password) {
  const user = new User({ fullname, email, password });

  await user.save();
}

module.exports = { checkUserExistance, createUser };
