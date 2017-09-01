var firebase = require("firebase");
var eventosRef = firebase.database().ref("eventos");

function incluirEvento(req, res) {
    var body = {
        tipoEvento: req.body.tipoEvento,
        animal: req.body.animal,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }
    console.log("API 'incluirEvento' sendo executada. Body: " + JSON.stringify(body));
    eventosRef.push();
    eventosRef.set(body);
        // .then(function () {
        console.log("API 'incluirEvento' executada com sucesso.");
        res.send(200, body);
    // })
    //     .catch(function (erro) {
    //         console.log("API 'incluirEvento' executada com erro.");
    //         res.send(500, {
    //             codigo: 500,
    //             mensagem: erro
    //         });
    //     });
}

exports.findAll = incluirEvento;
