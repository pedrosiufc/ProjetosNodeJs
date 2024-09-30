var mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '#Odeip29',
      database: 'portal_noticias'
    });
  }