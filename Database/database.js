const mongoose = require('mongoose');
require('dotenv').config();

async function start() {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.MONGODB_DB,
  });
}

module.exports = { start };
