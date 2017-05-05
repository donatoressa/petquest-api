function incluirEvento(req, res){
    res.send({ "teste": req.body });
}

exports.findAll = incluirEvento;
