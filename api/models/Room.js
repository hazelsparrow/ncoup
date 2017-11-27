const mongoose = require('mongoose'),
      Player = require('./Player');

const schema = mongoose.Schema({
  key: mongoose.Schema.Types.String,
  ownerId: mongoose.Schema.Types.ObjectId,
  players: [Player.schema]
});

module.exports = mongoose.model('Room', schema);
