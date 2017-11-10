const express = require('express'),
      app = express(),
      port = process.env.PORT || 3001;

app.listen(port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const routes = [
  require('./routes/rooms')
];

for (const route of routes) {
  route(app);
}

console.log('Running API server on: http://localhost:' + port);
