var firebase = require("firebase");
var fs = require("fs");
var provider = new firebase.auth.FacebookAuthProvider();

function autenticar(req, res) {

    var autenticador = firebase.auth();

    autenticador.signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        })
        .catch(function (erro) {
            var codigoErro = erro.code;
            var msgErro = erro.message;
            var email = erro.email;
            var credential = erro.credential;
            console.log(codigoErro);
            console.log(msgErro);
            console.log(email);
            console.log(credential);
        })
}

exports.findAll = autenticar;
