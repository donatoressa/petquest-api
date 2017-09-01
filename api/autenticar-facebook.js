var firebase = require("firebase");
var fs = require("fs");
var provider = new firebase.auth.FacebookAuthProvider();
// var token = JSON.parse(fs.readFileSync("./key/fb-token.json")).chave;
// var credential = firebase.auth.FacebookAuthProvider.credential(token);

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
