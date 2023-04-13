const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  lastUpdate: {
    type: Date,
    default: Date.UTC(2005, 7, 19),
  },
});

module.exports = mongoose.model('User', userSchema);
