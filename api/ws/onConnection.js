const onAuth = require('./onAuth')
      onDisconnect = require('./onDisconnect');

function onConnection(io) {
  io.on('connection', function(socket) {
    onAuth(io, socket);
    onDisconnect(io, socket);
  });
}

module.exports = onConnection;
