const express = require('express');
const publisherController = require('../controllers/publisher.controller');

const router = express.Router();

router.get('/', (req, res) => {
  publisherController.select(req, res);
});

router.get('/:id', (req, res) => {
  publisherController.selectById(req, res);
});

router.post('/', (req, res) => {
  publisherController.create(req, res);
  res.send();
});

router.put('/:id', (req, res) => {
  publisherController.update(req, res);
});

router.delete('/', (req, res) => {
  res.send('delete');
});

module.exports = router;
