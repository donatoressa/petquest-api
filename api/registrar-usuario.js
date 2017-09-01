var firebase = require("firebase");
var interceptadorHTTP = require("../comum/interceptadorHTTP.js");

function registrarUsuario(req, res) {

    console.log("[API] registrarUsuario | iniciada");
    console.log("[API] registrarUsuario | payload: "+ JSON.stringify(req.body));
    var email = req.body.email;
    var password = req.body.senha;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (dado) {
            console.log("[API] registrarUsuario | executada com sucesso");
            res.status(200).send({ codigo: 200, mensagem: "Usuário registrado com sucesso!"});
        })
        .catch(function (erro_) {
            console.log(erro_);
            console.log("[API] registrarUsuario | executada com falha");
            var erro = interceptadorHTTP(erro_);
            res.status(erro.HTTPcode).send({codigo: erro.code, mensagem: erro.message});
        });
}

exports.findAll = registrarUsuario;