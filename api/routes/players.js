module.exports = function(app) {
  const controller = require('../controllers/players');

  app.route('/players')
    .get(controller.index);
};
