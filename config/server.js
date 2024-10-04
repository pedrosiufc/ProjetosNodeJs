var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views'); //setando aqui as rotas 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);
//consign escaneia a pasta routes com seus módulos e inclui no servidor 

module.exports = app;