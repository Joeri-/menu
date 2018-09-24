const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
  description: String,
  listOfProductIds: [Number],
  listOfTagIds: [Number],
});

module.exports = mongoose.model('Recipes', Recipe);
