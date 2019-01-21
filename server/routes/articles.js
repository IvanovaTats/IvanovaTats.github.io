var express = require('express');
var router = express.Router();

const fs = require('fs');
const file = './articles.json';

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

module.exports = router;
