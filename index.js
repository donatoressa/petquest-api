var express = require("express");
var fs = require("fs");
var firebase = require("firebase");
var bodyParser = require("body-parser");

var app = express();
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  
  next();
});
app.use(bodyParser.json());
app.listen(3000, run(app));

function run(app) {
  console.log("Servidor rodando na porta 3000");
  
  var config = JSON.parse(fs.readFileSync("./firebase-db-config.json")).configuracao;
  firebase.initializeApp(config);

  var configuracao = JSON.parse(fs.readFileSync("./public/api/rotas.json")).rotas;

  for (let i = 0; i < configuracao.length; i++) {

    let verbo = configuracao[i].verbo;
    let caminho = configuracao[i].caminho;
    let api = require(configuracao[i].api);

    app[verbo](caminho, api.findAll);

    console.log("API '" + caminho + "' inicializada.");
  }


}
