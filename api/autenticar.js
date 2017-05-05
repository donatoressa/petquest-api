var firebase = require("firebase");

var db = firebase.database();

function autenticar(req, res) {

    var usuario = req.body.usuario;
    var password = req.body.senha;
    
    var cadastro = firebase.database().ref('/users/' + usuario);//.then(auth);
    cadastro.on("value", auth);
    
    function auth(snapshot) {
            var senha = snapshot.val().senha;
            if(senha === password){
                res.send({
                    statusAutenticacao: "sucesso",
                    msgAutenticacao: "Usuário logado com sucesso."
                });
            }
            else{
                res.send({
                    statusAutenticacao: "erro",
                    msgAutenticacao: "Erro ao autenticar usuário."
                });
            }
        }
    }

    exports.findAll = autenticar;
