var http = require('http');


var server = http.createServer(function (req, res) {
  //requisicação de url
  var categoria = req.url;

  if (categoria == '/tecnologia') {
    res.end("<html><body>Notícias de Tecnologia</body></html>");
  } else if (categoria == '/moda') {
    res.end("<html><body>Notícias de Moda</body></html>");
  } else if (categoria == '/beleza') {
    res.end("<html><body>Notícias de Beleza</body></html>");
  } else {
    //caso não defina o nicho vai para a página inicial
    res.end("<html><body>Portal de Notícias</body></html>");
  }
  //Subindo para o servidor na porta 3000
}).listen(3000);






