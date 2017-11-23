const socketIo = require('socket.io'),
      onConnection = require('./onConnection');

function setup(server) {
  const io = socketIo(server);

  onConnection(io);
}

module.exports = setup;
