const Publisher = require('../models/publisher.model');

// eslint-disable-next-line func-names
exports.create = function (req, res) {
  const publisher = new Publisher({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    category: req.body.category,
    language: req.body.language,
    country: req.body.country,
  });
  publisher.save();
};
