const express = require('express'),
      mongoose = require('mongoose'),
      Promise = require('bluebird'),
      cors = require('cors'),
      app = express(),
      server = require('http').Server(app),
      io = require('socket.io')(server),
      setupRoutes = require('./routes'),
      Player = require('./models/Player'),

      port = process.env.PORT || 3001;

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ncoup');

server.listen(port);

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

setupRoutes(app);

io.on('connection', function(socket) {
  socket.on('auth', async function(userId) {
    console.log(userId);
    socket.player = await Player.findById(userId);
    console.log(socket.player);
    console.log('connected player: ' + socket.player.name);
    io.emit('player_connected', socket.player);
  });
});

console.log('Running API server on: http://localhost:' + port);
