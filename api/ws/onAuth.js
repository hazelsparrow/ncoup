const {Player, Room} = require('../models');

function onAuth(io, socket) {
  socket.on('auth', async function(userId, roomId) {
    socket.player = await Player.findById(userId);
    const room = await Room.findOne({
      key: roomId
    });
    if (!room) return;
    const roomHandle = `room-${room.id}`;

    socket.join(roomHandle);
    io.to(roomHandle).emit('player_connected', socket.player);
  });
}

module.exports = onAuth;
