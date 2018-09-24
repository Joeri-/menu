const mongoose = require('mongoose');

const Shop = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Shop', Shop);
