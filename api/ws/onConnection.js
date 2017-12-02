const onAuth = require('./onAuth')
      onDisconnect = require('./onDisconnect'),
      onAction = require('./onAction');

function onConnection(io) {
  io.on('connection', function(socket) {
    onAuth(io, socket);
    onDisconnect(io, socket);
    onAction(io, socket);
  });
}

module.exports = onConnection;
