

const listaCliente = () => {
    return fetch('http://localhost:3000/profile')
        .then(resposta => {
            return resposta.json()
        })
}

const criaCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })
}

export const clienteService = {
    listaCliente,
    criaCliente
}
