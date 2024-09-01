
module.exports = function(app){ //pasando a função por parâmetro

app.get('/noticias', function (req, res) {
  res.render("noticias/noticia");
});

};