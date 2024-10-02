
module.exports = function (application) {

  application.get('/formulario_inclusao_noticia', function (req, res) {
    res.render("admin/form_add_noticia");
  });

  application.post('/noticias/salvar', function (req, res) { //informando req via post
    var noticia = req.body;

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      //resolvendo o problema de reload e redirecionando a página
      res.redirect('/noticias');
      // res.render("noticias/noticias", { noticias: result });

    });
  });

}//modulo não é fechado com ;