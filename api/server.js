const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      app = express(),
      Promise = require('bluebird'),
      setupRoutes = require('./routes'),
      http = require('http').Server(app),
      io = require('socket.io')(http),

      port = process.env.PORT || 3001;

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ncoup');

app.listen(port);

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
