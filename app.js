var app = require('./config/server');

//incluindo módulos dentro da aplicação
var rotaNoticias = require('./app/routes/noticias')(app); //é posssivel passar na frente do require (app) a execução reduzindo assim a codificação;
//Executando a função
//rotaNoticias(app);

var rotaHome = require('./app/routes/home')(app);

var rotaformularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
  console.log('Servidor ON');
});