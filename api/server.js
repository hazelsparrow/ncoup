const express = require('express'),
      mongoose = require('mongoose'),
      Promise = require('bluebird'),
      cors = require('cors'),
      app = express(),
      server = require('http').Server(app),
      io = require('socket.io')(server),
      setupRoutes = require('./routes'),

      port = process.env.PORT || 3001;

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ncoup');

server.listen(port);
// io.listen(3002);

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

setupRoutes(app);

// io.set('origins', 'http://localhost:3000');

io.on('connection', function(socket) {
  console.log('a user connected');
});

console.log('Running API server on: http://localhost:' + port);
