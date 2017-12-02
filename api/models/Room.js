const mongoose = require('mongoose'),
      Player = require('./Player'),
      Action = require('./Action'),
      Card = require('./Card');

const schema = mongoose.Schema({
  key: mongoose.Schema.Types.String,
  ownerId: mongoose.Schema.Types.ObjectId,
  players: [Player.schema],
  actions: [Action.schema],
  deck: [Card.schema],
  currentAction: Action.schema
});

module.exports = mongoose.model('Room', schema);
