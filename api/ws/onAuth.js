const {Player, Room} = require('../models'),
      _ = require('lodash');

function onAuth(io, socket) {
  socket.on('auth', async function(userId, roomId) {
    const player = await Player.findById(userId);
    const room = await Room.findOne({key: roomId});
    if (!room || !player) return;

    socket.player = player;
    if (!room.players.length) {
      room.ownerId = player.id;
    }
    if (!_.find(room.players, {id: player.id})) {
      room.players.push(player);
    }
    await room.save();
    
    const roomHandle = `room-${room.id}`;
    socket.join(roomHandle);
    io.to(roomHandle).emit('player_connected', {
      room,
      player
    });
  });
}

module.exports = onAuth;
