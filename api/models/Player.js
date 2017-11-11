const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: mongoose.Schema.Types.String
});

module.exports = mongoose.model('Player', schema);
