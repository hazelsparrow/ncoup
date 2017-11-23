const onAuth = require('./onAuth');

function onConnection(io) {
  io.on('connection', function(socket) {
    onAuth(io, socket);
  });
}

module.exports = onConnection;
