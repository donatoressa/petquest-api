var restify = require("restify");
var fs = require("fs");
var firebase = require("firebase");
var bodyParser = require("body-parser");
var server = restify.createServer();
server.use(bodyParser.json());
server.use(function crossOrigin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:1234/");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
});

var configuracao = JSON.parse(fs.readFileSync("./api/rotas.json")).rotas;
var config = JSON.parse(fs.readFileSync("./firebase-db-config.json")).configuracao;
firebase.initializeApp(config);
for (let i = 0; i < configuracao.length; i++) {

    let verbo = configuracao[i].verbo;
    let caminho = configuracao[i].caminho;
    let api = require(configuracao[i].api);

    server[verbo](caminho, api.findAll);

    console.log("API '" + caminho + "' inicializada.");
}

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else {
        console.log('Aplicativo pronto na porta: ' + port);

    }
})