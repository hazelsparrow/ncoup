module.exports = function(app) {
  const controller = require('../controllers/players');

  app.route('/players')
    .get(controller.index)
    .post(controller.post);

  app.route('/players/:id')
    .get(controller.get)
    .patch(controller.patch);
};
