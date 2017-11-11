const shortId = require('shortId'),
      _ = require('lodash'),
      Player = require('../models/Player');

function playerParams(request) {
  return _.pick(request.body, [
    'name'
  ]);
}

module.exports.index = async function(request, response) {
  response.send({
    players: await Player.find({})
  });
};

module.exports.get = async function(request, response) {
  const player = await Player.findById(request.params.id);

  if (!player) {
    response.sendStatus(404);
  }

  response.send(player);
};

module.exports.post = async function(request, response) {
  const player = new Player(playerParams(request));
  await player.save();

  response.send(player);
};

module.exports.patch = async function(request, response) {
  const player = await Player.findById(request.params.id);

  if (!player) {
    response.sendStatus(404);
  }

  player.set(playerParams(request));
  await player.save();

  response.send(player);
};
