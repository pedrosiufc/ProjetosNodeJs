function NoticiasDAO(connection) {
  this._connection = connection;
  //criando a conexão e passando nas fucitons
}

NoticiasDAO.prototype.getNoticias = function (callback) {
  this._connection.query("SELECT * FROM noticias order by data_criacao desc", callback);
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
  console.log(id_noticia.id_noticia);
  this._connection.query("SELECT * FROM noticias where id_noticia = " + id_noticia.id_noticia, callback);
}

//a persistência fica automática pois os names dados são iguais aos que estão no bd, passados através de JSON
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
  console.log(noticia); //mostra o conteúdo inserido
  //transforma o json em string passando para inserir  no BD com SET
  this._connection.query('insert into noticias set ?', noticia, callback)
}


NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
 this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {
  return NoticiasDAO;

}



