const {Player} = require('../models');

function onAuth(io, socket) {
  socket.on('auth', async function(userId) {
    socket.player = await Player.findById(userId);
    io.emit('player_connected', socket.player);
  });
}

module.exports = onAuth;
