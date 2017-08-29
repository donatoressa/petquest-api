var firebase = require("firebase");
var database = firebase.database();

function incluirEvento(req, res) {

    var body = {
        tipoEvento: req.body.tipoEvento,
        animal: req.body.animal
    }

    database.ref("eventos").push(body)
        .then(function () {
            res.send(200,body);
        })
        .catch(function (erro) {
            res.send(500,{
                codigo: 500,
                mensagem: erro
            });
        });
}

exports.findAll = incluirEvento;
