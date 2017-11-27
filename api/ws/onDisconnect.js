const {Room} = require('../models'),
      _ = require('lodash');

function onDisconnect(io, socket) {
  socket.on('disconnect', async function() {
    if (socket.roomId) {
      const room = await Room.findById(socket.roomId);
      room.players = _.reject(room.players, {id: socket.player.id});
      await room.save();

      io.to(`room-${room.id}`).emit('player_left', {
        player: socket.player,
        room
      });
    }
  });
}

module.exports = onDisconnect;
