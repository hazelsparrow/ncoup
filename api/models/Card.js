const mongoose = require('mongoose');

const schema = mongoose.Schema({
  character: mongoose.Schema.Types.String,
  alive: mongoose.Schema.Types.Boolean
});

module.exports = mongoose.model('Card', schema);
