const express = require('express'),
      app = express(),
      port = process.env.PORT || 3001;

app.listen(port);

const playerRoutes = require('./routes/players');
playerRoutes(app);

console.log('Running API server on: http://localhost:' + port);
