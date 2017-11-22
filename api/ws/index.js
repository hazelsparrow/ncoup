const socketIo = require('socket.io'),
      onConnection = require('./onConnection');

function setup(server) {
  const io = socketIo(server);

  // io.on('connection', socket => onConnection(io, socket));
  onConnection(io);
}

module.exports = setup;
