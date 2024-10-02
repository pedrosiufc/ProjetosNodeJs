module.exports = function () {

  //criando uma função anônima 
  this.getNoticias = function (connection, callback) {

    connection.query("SELECT * FROM noticias", callback);
  }

  this.getNoticia = function (connection, callback) {
    connection.query("SELECT * FROM noticias where id_noticia = 2", callback);
  }

  this.salvarNoticia = function (noticia, connection, callback) {
    //transforma o json em string passando para inserir  no BD com SET
    connection.query('insert into noticias set ?', noticia, callback)
  }

  return this;

}



