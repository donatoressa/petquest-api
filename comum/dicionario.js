module.exports = {
    mapaCodigosHTTP: [
        {
            codigoOrigem: "auth/network-request-failed",
            HTTPcode: 500,
            code: "500",
            message: "Erro de conexão. Tente novamente mais tarde."
        },
        {
            codigoOrigem: "auth/user-not-found",
            HTTPcode: 404,
            code: "404",
            message: "E-mail não cadastrado."
        },
        {
            codigoOrigem: "auth/operation-not-supported-in-this-environment",
            HTTPcode: 500,
            code: "500",
            message: "Operação não suportada neste ambiente."
        },
        {
            codigoOrigem: "auth/weak-password",
            HTTPcode: 460,
            code: "460",
            message: "Senha deve conter pelo menos 6 caracteres."
        }
    ]
};