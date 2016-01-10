const http = require('http');

const hostname = 'localhost';
const port = 3000;

var fs      = require("fs"),
    pathFiles = "./files/",
    pathView  = "./view/",
    date      = new Date();

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  res.end("Criando Web App");

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});