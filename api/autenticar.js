var firebase = require("firebase");

function autenticar(req, res) {

    var usuario = req.body.usuario;
    var password = req.body.senha;
    var autenticador = firebase.auth();
    autenticador.signInWithEmailAndPassword(usuario, password)
        .then(function (dado) {
            res.send(200,"Usuário autenticado com sucesso!");
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.send(403,{ erro: errorCode, msg: errorMessage });
        });
}

exports.findAll = autenticar;
