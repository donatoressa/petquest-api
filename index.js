var express = require('express');
var fs = require("fs");
var firebase = require("firebase");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.listen(3000, run(app));

function run(app) {
  console.log("Servidor rodando na porta 3000");
  
  var config = JSON.parse(fs.readFileSync("./firebase-db-config.json")).configuracao;
  firebase.initializeApp(config);
  var database = firebase.database();
  console.log("Database petquest-70299 inicializado.");

  var configuracao = JSON.parse(fs.readFileSync("./api/rotas.json")).rotas;

  for (let i = 0; i < configuracao.length; i++) {

    let verbo = configuracao[i].verbo;
    let caminho = configuracao[i].caminho;
    let api = require(configuracao[i].api);

    app[verbo](caminho, api.findAll);

    console.log("Carregando API '" + caminho + "'");
  }


}
