var firebase = require("firebase");
var interceptadorHTTP = require("../comum/interceptadorHTTP.js");

function resetSenha(req, res) {

    console.log("[API] resetSenha | iniciada");
    console.log("[API] resetSenha | payload: "+ JSON.stringify(req.body));
    var email = req.body.email;
    
    var autenticador = firebase.auth();
    autenticador.sendPasswordResetEmail(email)
        .then(function (dado) {
            console.log("[API] resetSenha | executada com sucesso");
            res.status(200).send({ codigo: 200, mensagem: "E-mail enviado com sucesso!" });
        })
        .catch(function (erro_) {
            console.log(erro_);
            console.log("[API] resetSenha | executada com falha");
            var erro = interceptadorHTTP(erro_);
            res.status(erro.HTTPcode).send({ codigo: erro.code, mensagem: erro.message });
        });
}

exports.findAll = resetSenha;