var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('homeView.html');
  //res.send("Hello");
});

module.exports = router;
