const express = require('express');
const publisherController = require('../controllers/publisher.controller');

const publisherRouter = express.Router();

function router() {
  publisherRouter.route('/')
    .get((req, res) => {
      publisherController.select(req, res);
    })
    .post((req, res) => {
      publisherController.create(req, res);
    });

  publisherRouter.route('/:id')
    .get((req, res) => {
      publisherController.selectById(req, res);
    })
    .put((req, res) => {
      publisherController.deleteById(req, res);
    })
    .delete((req, res) => {
      publisherController.deleteById(req, res);
    });
  return publisherRouter;
}

module.exports = router;
