var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index.ejs');
});

router.get('/test4417', function(req, res, next){
  res.render('test.ejs');
});

module.exports = router;
