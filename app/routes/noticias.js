//const dbConnection = require("../../config/dbConnection");

//var dBconnection = require('../../config/dbConnection')

module.exports = function (app) {

  app.get('/noticias', function (req, res) {

    var connection = app.config.dbConnection();

    connection.query("SELECT * FROM noticias", function (error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};