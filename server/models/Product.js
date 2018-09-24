const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: String,
  storeId: Number,
});

module.exports = mongoose.model('Product', Product);
