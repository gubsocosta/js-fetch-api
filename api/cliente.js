const baseUrl = 'http://localhost:4000/clientes';

const listarClientes = () => {
    
    return fetch(baseUrl)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error)
};

const cadastrarCliente = (nome, cpf) => {
    const body = JSON.stringify({ nome, cpf });

    return fetch(baseUrl + '/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body,
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
};

const deletaCliente = id => {
    return fetch(baseUrl + '/cliente/' + id)
        .then(response => response.json)
        .then(data => data)
        .catch(error => error);
};
