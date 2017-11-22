const onAuth = require('./onAuth');

// function onConnection(io, socket) {
//   console.log('hello')
//   socket.on('auth', userId => onAuth(io, userId));
// }

function onConnection(io) {
  io.on('connection', function(socket) {
    onAuth(io, socket);
  });
}

module.exports = onConnection;
