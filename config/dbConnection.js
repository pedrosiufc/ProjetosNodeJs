var mysql = require('mysql2');

var connMySQL = function(){//criada variável de conexão com o banco

    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '#Odeip29',
      database: 'portal_noticias'
    });

}

module.exports = function(){ //retornando a variável (exportando)
   return connMySQL;
}