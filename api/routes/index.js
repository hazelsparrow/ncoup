const routes = [
  require('./rooms'),
  require('./players')
];

function setupRoutes(app) {
  for (const route of routes) {
    route(app);
  }
}

module.exports = setupRoutes;
