const express = require('express'),
      mongoose = require('mongoose'),
      Promise = require('bluebird'),
      cors = require('cors'),
      app = express(),
      server = require('http').Server(app),
      io = require('./ws')(server),
      setupRoutes = require('./routes'),

      port = process.env.PORT || 3001;

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ncoup');

server.listen(port);

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

setupRoutes(app);


console.log('Running API server on: http://localhost:' + port);
