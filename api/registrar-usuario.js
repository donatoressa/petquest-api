var firebase = require("firebase");

function registrarUsuario(req, res) {

    var email = req.body.email;
    var password = req.body.senha;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (dado) {
            res.status(200).send({
                codigo: 200,
                mensagem: "Usuário registrado com sucesso!"
            });
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(500).send({
                codigo: errorCode, 
                mensagem: errorMessage
            });
        });
}

exports.findAll = registrarUsuario;