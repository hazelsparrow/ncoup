const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      app = express(),
      Promise = require('bluebird'),
      port = process.env.PORT || 3001;

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ncoup');

app.listen(port);
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const routes = [
  require('./routes/rooms'),
  require('./routes/players')
];

for (const route of routes) {
  route(app);
}

console.log('Running API server on: http://localhost:' + port);
