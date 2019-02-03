const express = require('express');
const publisherController = require('../controllers/publisher.controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('insert');
});

router.get('/:id', (req, res) => {
  res.send('get by id');
});

router.post('/', (req, res) => {
  publisherController.create(req, res);
  res.send();
});

router.put('/', (req, res) => {
  res.send('put');
});

router.delete('/', (req, res) => {
  res.send('delete');
});

module.exports = router;
