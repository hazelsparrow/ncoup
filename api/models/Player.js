const mongoose = require('mongoose'),
      Card = require('./Card');

const schema = mongoose.Schema({
  name: mongoose.Schema.Types.String,
  coins: mongoose.Schema.Types.Number,
  cards: [Card.schema]
});

module.exports = mongoose.model('Player', schema);
