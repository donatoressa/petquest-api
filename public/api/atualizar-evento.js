var firebase = require("firebase");
var database = firebase.database();

function atualizarEvento(req, res) {

    var body = {
        tipoEvento: req.body.tipoEvento,
        animal: req.body.animal,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }

    database.ref("eventos").update(body)
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

exports.findAll = atualizarEvento;
