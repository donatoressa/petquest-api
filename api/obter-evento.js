function obterEvento(req, res){

    var evento = req.body.evento;

    res.status(200).send([{ teste: "x" }]);
}

exports.findAll = obterEvento;
