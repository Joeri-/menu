const mongoose = require('mongoose');

const Tag = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Tag', Tag);
