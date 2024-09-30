
module.exports = function (app) { //pasando a função por parâmetro

  app.get('/noticias', function (req, res) {

    var mysql2 = require(mysql2);

    console.log('até aqui ok');
   
    var connection = mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: '#Odeip29',
      database: 'portal_noticias'
    });

    console.log('conexão realizada!');

    connection.query('select * from noticias', function (error, result) {
      res.send(result);
    })
    console.log('erro na conexão com o banco');
  });
};