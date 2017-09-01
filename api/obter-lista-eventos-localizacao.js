var firebase = require("firebase");
var database = firebase.database();

function obterListaEventosLocalizacao(req, res) {

    var body = {
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }

    var eventosRef = database.ref("eventos");
    eventosRef.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnap) {
                var dados = filtrarEventos(childSnap, body);
                res.send(200, {
                    codigo: 200,
                    eventos: dados
                });
            })
        })
        .catch(function (erro) {
            res.send(500, {
                codigo: 500,
                mensagem: "Erro ao obter eventos próximos."
            });
        });
}

/**
 * evento: latitude e longitude
 * posicaoAtual: latitude e longitude
 */
function calcularDistanciaEvento(evento, posicaoAtual) {
    var R = 6371e3; // metros
    var A = posicaoAtual.latitude * Math.PI / 180;
    var B = evento.latitude * Math.PI / 180;
    var C = (evento.latitude - posicaoAtual.latitude) * Math.PI / 180;
    var D = (evento.longitude - posicaoAtual.longitude) * Math.PI / 180;

    var e = Math.sin(C / 2) * Math.sin(C / 2) + Math.cos(A) * Math.cos(B) * Math.sin(D / 2) * Math.sin(D / 2);
    var f = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1 - e));
    var g = R * f;

    return parseFloat((Math.round(g) / 1000).toFixed(2));
}

function filtrarEventos(dadosBD, payload) {

    var saida = [];

    dadosBD.forEach(function (evento) {
        var distancia = calcularDistanciaEvento(evento, payload);
        evento.distanciaPosicaoAtual = distancia;
        saida.push(evento);
    });

    saida.sortOn();
    return saida.slice(0, 10);
}

Array.prototype.sortOn = function () {
    this.sort(function (a, b) {
        if (a["distancia"] < b["distancia"]) {
            return -1;
        }
        else if (a["distancia"] > b["distancia"]) {
            return 1
        }
        return 0;
    })
}

exports.findAll = obterListaEventosLocalizacao;
