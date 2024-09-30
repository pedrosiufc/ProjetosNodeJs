var mysql = require('mysql2');

var connMySQL = function(){//criada variável de conexão com o banco

  console.log('Conexão com BD foi estabelecida');
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '#Odeip29',
      database: 'portal_noticias'
    });

}

module.exports = function(){ //retornando a variável (exportando)
  console.log('O autoload carregou o módulo de conexão com o BD');
  return connMySQL;
}