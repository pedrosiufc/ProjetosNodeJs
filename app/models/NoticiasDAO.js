function NoticiasDAO(connection) {
  this._connection = connection;
  //criando a conexão e passando nas fucitons
}

NoticiasDAO.prototype.getNoticias = function (callback) {
  this._connection.query("SELECT * FROM noticias", callback);
}

NoticiasDAO.prototype.getNoticia = function (callback) {
  this._connection.query("SELECT * FROM noticias where id_noticia = 2", callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
  //transforma o json em string passando para inserir  no BD com SET
  this._connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {
  return NoticiasDAO;

}



