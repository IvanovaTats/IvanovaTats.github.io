const Publisher = require('../models/publisher.model');

// eslint-disable-next-line func-names
exports.create = (req, res) => {
  const publisher = new Publisher(req.body);
  publisher.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json('added');
  });
};

exports.select = (req, res) => {
  Publisher.find((err, publishers) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(publishers);
  });
};

exports.selectById = (req, res) => {
  Publisher.findById(req.params.id, (err, publisher) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(publisher);
  });
};

exports.update = (req, res) => {
  Publisher.findByIdAndUpdate(req.params.id, req.body, (err, publisher) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(publisher);
  });
};

exports.deleteById = (req, res) => {
  Publisher.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(204).send('deleted');
  });
};
