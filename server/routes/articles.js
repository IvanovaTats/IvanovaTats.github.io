var express = require('express');
var router = express.Router();

const fs = require('fs');
const file = './data/articles.json';

router.get('/', (req, res, next) => {
  fs.readFile(file, function read(err, content) {
    if (err) {
      console.log(err);
      throw err;
    }
    let json = JSON.parse(content);
    res.send(json);
  })
});

router.get('/:id', (req, res, next) => {
  fs.readFile(file, function read(err, content) {
    if (err) {
      console.log(err);
      throw err;
    }
    let json = JSON.parse(content);
    let article = json.articles.find((el, index, array) => { return el.id == req.params.id })
    res.send(article);
  })
});

router.post('/', (req, res) => {
  const article = req.body;
  fs.readFile(file, function read(err, content) {
    if (err) {
      console.log(err);
      throw err;
    }
    let jsonObject = JSON.parse(content);
    jsonObject.articles.push(article);

    json = JSON.stringify(jsonObject);
    fs.writeFile(file, json, 'utf8', (err) => {
      if (err) throw err;
      console.log('complete');
    });
  })
  res.status(201).send();
});

router.put('/', (req, res) => {
  res.send('put');
});

router.delete('/', (req, res) => {
  res.send('delete');
});

module.exports = router;
