const Publisher = require('../models/publisher.model');

// eslint-disable-next-line func-names
exports.create = function (req, res) {
  const publisher = new Publisher({
    publisherid: req.body.id,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    category: req.body.category,
    language: req.body.language,
    country: req.body.country,
  });
  publisher.save();
};

exports.select = (req, res) => {
  Publisher.find((err, publishers) => {
    if (err) {
      console.log(err);
    } else res.json(publishers);
  });
};

exports.selectById = (req, res) => {
  Publisher.findById(req.params.id, (err, publisher) => {
    if (err) {
      console.log(err);
    } else res.json(publisher);
  });
};
