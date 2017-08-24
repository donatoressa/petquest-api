var firebase = require("firebase");
var database = firebase.database();

function incluirEvento(req, res) {

    var body = {
        tipoEvento: req.body.tipoEvento,
        animal: req.body.animal
    }

    database.ref("eventos").push(body)
        .then(function () {
            res.status(200).send(body);
        })
        .catch(function (erro) {
            res.status(500).send({
                codigo: 500,
                mensagem: erro
            });
        });
}

exports.findAll = incluirEvento;
