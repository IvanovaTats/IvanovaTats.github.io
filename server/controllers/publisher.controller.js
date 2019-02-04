const Publisher = require('../models/publisher.model');

// eslint-disable-next-line func-names
exports.create = function (req, res) {
  const publisher = new Publisher({
    publisherid: req.body.publisherid,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    category: req.body.category,
    language: req.body.language,
    country: req.body.country,
  });
  publisher.save();
  res.json(publisher);
};

exports.select = (req, res) => {
  Publisher.find((err, publishers) => {
    if (err) {
      res.status(500).send(err);
    } else res.json(publishers);
  });
};

exports.selectById = (req, res) => {
  Publisher.findById(req.params.id, (err, publisher) => {
    if (err) {
      res.status(500).send(err);
    } else res.json(publisher);
  });
};

exports.update = (req, res) => {
  Publisher.findById(req.params.id, (err, publisher) => {
    if (err) {
      res.status(500).send(err);
    } else {
      publisher.publisherid = req.body.publisherid;
      publisher.name = req.body.name;
      publisher.description = req.body.description;
      publisher.url = req.body.url;
      publisher.category = req.body.category;
      publisher.language = req.body.language;
      publisher.country = req.body.country;
      publisher.save();
      res.json(publisher);
    }
  });
};
