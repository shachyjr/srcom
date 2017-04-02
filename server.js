var express = require('express');
var app = express();

var parser = require('body-parser');
var path = require('path');

// Include Routes
var home = require('./controllers/home');

var port = 8888;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(parser.json());
//app.use(parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', home);



var server = app.listen(port, function(){
  console.log("Server started at " + port);
});
