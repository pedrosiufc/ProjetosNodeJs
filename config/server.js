var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views'); //setando aqui as rotas 

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);
//consign escaneia a pasta routes com seus módulos e inclui no servidor 

module.exports = app;