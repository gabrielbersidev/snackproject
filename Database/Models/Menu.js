const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  menu: String,
  period: Boolean,
  acceptance: {
    type: Number,
    default: -1,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Menu', menuSchema);
