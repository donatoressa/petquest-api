var firebase = require("firebase");
var eventosRef = firebase.database().ref("eventos");

function incluirEvento(req, res) {
    var body = {
        tipoEvento: req.body.tipoEvento, //1 - PERDIDO ; 2 - ACHADO
        tipoAnimal: req.body.animal, // 1 - CACHORRO; 2 - GATO ; 3 - OUTRO
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
