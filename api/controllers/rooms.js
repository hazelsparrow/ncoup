const shortId = require('shortId');

module.exports.index = function(request, response) {
  response.send({
    rooms: []
  })
};

module.exports.get = function(request, response) {
  response.send({
    id: request.params.id,
    generatedId: shortId.generate()
  })
}

module.exports.post = function(request, response) {
  response.send({
    id: shortId.generate()
  })
}
