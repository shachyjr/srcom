var express = require('express');
var app = express();

var parser = require('body-parser');
var path = require('path');
//var favicon = require('serve-favicon');

// Include Routes
var main = require('./controllers/main');

var port = process.env.PORT || '3333';

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(parser.json());
//app.use(parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'design_elements', 'logos', 'favicon.ico')));
app.use('/', main);



var server = app.listen(port, function(){
  console.log("Server started at " + port);
});
