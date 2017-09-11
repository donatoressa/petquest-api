var fs = require("fs");
var dicionario = require("./dicionario.js");

function interceptadorHTTP(resposta) {
    var codigoErro = "";
    var mapaEncontrado = false;
    var dic = dicionario.mapaCodigosHTTP;
    if (resposta.code) {
        for(var dado of dic){
            if (dado.codigoOrigem === resposta.code) {
                resposta.HTTPcode = dado.HTTPcode;
                resposta.code = dado.code;
                resposta.message = dado.message;
                mapaEncontrado = true;
                break;
            }
        }
        if (!mapaEncontrado) {
            resposta.HTTPcode = 500;
            resposta.code = "500";
            resposta.message = "Erro na execução da transação.";
        }
    }

    return resposta;

}

module.exports = interceptadorHTTP;