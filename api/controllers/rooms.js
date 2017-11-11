const shortId = require('shortId'),
      Room = require('../models/Room');

module.exports.index = async function(request, response) {
  response.send({
    rooms: await Room.find({})
  });
};

module.exports.get = async function(request, response) {
  const room = await Room.findOne({
    key: request.params.key
  });

  if (!room) {
    response.sendStatus(404);
  }

  response.send(room);
}

module.exports.post = function(request, response) {
  const room = new Room({
    key: shortId.generate()
  });
  room.save();

  response.send(room)
}
