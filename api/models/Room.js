const mongoose = require('mongoose');

const schema = mongoose.Schema({
  key: mongoose.Schema.Types.String
});

module.exports = mongoose.model('Room', schema);
