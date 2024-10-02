
module.exports = function (application) {

  application.get('/formulario_inclusao_noticia', function (req, res) {
    res.render("admin/form_add_noticia");
  });

  application.post('/noticias/salvar', function (req, res) { //informando req via post
    var noticia = req.body;

    //tratando validação de dados com express-validator
   // console.log(noticia);
    req.assert('titulo','Título é obrigatório').notEmpty(); 
    req.assert('resumo','Resumo é obrigatório').notEmpty(); 
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100); 
    req.assert('autor','O Autor é obrigatório').notEmpty(); 
    req.assert('data_noticia','A data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'}); 
    req.assert('noticia','A notícia é obrigatória').notEmpty(); 

    var erros = req.validationErrors();

    if(erros){
      res.render("admin/form_add_noticia"); //caso erro true retorna a página de inclusão.
      return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      //resolvendo o problema de reload e redirecionando a página
      res.redirect('/noticias');
      // res.render("noticias/noticias", { noticias: result });

    });
  });

}//modulo não é fechado com ;