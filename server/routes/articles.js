var express = require('express');
var router = express.Router();

const fs = require('fs');
const file = './data/articles.json';

router.get('/', function (req, res, next) {
  fs.readFile(file, function read(err, content) {
    if (err) {
      console.log(err);
      throw err;
    }
    let json = JSON.parse(content);
    res.send(json);
  })
});

router.get('/:id', function (req, res, next) {
  //let id = req.params.id;
  fs.readFile(file, function read(err, content) {
    if (err) {
      console.log(err);
      throw err;
    }
    let json = JSON.parse(content);
    let article = json.articles.find((el, index,array) => { return el.id == req.params.id })
    console.log(article);
    res.send(article);
  })
});



module.exports = router;
