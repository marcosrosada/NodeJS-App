var fs = require("fs"),
    pathFiles = "./files/";
/*
module.exports = function(url){
	var logTxt = fs.createWriteStream(pathFiles + "log.txt", { flags: "a"});
  	logTxt.write(new Date() + ": Acesso a página " + url + "\n");
}*/

exports.doLog = function(url){
	var logTxt = fs.createWriteStream(pathFiles + "log.txt", { flags: "a"});
  	logTxt.write(new Date() + ": Acesso a página " + url + "\n");
}