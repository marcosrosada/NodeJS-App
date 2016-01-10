const http = require('http');

const hostname = 'localhost';
const port = 3000;

var fs      = require("fs"),
    pathFiles = "./files/",
    pathView  = "./view/",
    date      = new Date();

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  var logTxt = fs.createWriteStream(pathFiles + "log.txt", { flags: "a"});
  logTxt.write(date + ": Acesso a página " + req.url + "\n");

  if (req.url == "/")
  {
      readPage("index.html");
  }
  else if (req.url == "/usuario")
  {
      readPage("usuario.html");
  }
  else
  {
      message = "Página não encotrada";
  }

  
  
  function readPage(pageFile)
  {
      fs.readFile(pathView + pageFile, function(e, html) {
          if (e) message = "Página " + pageFile + " não encotrada";
          res.end(html);
      });
  }

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});