module.exports = function(app) {
  const controller = require('../controllers/rooms');

  app.route('/rooms')
    .get(controller.index);
    .post(controller.post)

  app.route('/rooms/:id')
    .get(controller.get);
};
