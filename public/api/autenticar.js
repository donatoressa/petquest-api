var firebase = require("firebase");
var interceptadorHTTP = require("../comum/interceptadorHTTP.js");

function autenticar(req, res) {

    console.log("[API] autenticar | iniciada");
    console.log("[API] autenticar | payload: "+ JSON.stringify(req.body));

    var usuario = req.body.email;
    var password = req.body.senha;
    var autenticador = firebase.auth();
    autenticador.signInWithEmailAndPassword(usuario, password)
        .then(function (dado) {
            console.log("[API] autenticar | executada com sucesso");
            res.status(200).send({ codigo: "200", mensagem: "Usuário autenticado com sucesso!"});
        })
        .catch(function (erro_) {
            console.log("[API] autenticar | executada com falha");
            var erro = interceptadorHTTP(erro_);
            res.status(erro.HTTPcode).send({ codigo: erro.code, mensagem: erro.message });
        });
}

exports.findAll = autenticar;
