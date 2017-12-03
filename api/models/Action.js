const mongoose = require('mongoose'),
      Player = require('./Player');

const schema = mongoose.Schema({
  actor: Player.schema,
  target: Player.schema,
  actionType: mongoose.Schema.Types.String
}, {
  timestamps: true
});

module.exports = mongoose.model('Action', schema);
