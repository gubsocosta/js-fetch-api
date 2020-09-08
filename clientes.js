const tableBody = document.querySelector('[data-tbody]');

const excluirCliente = id => {
    if(confirm('Deseja excluir o cliente?')) {
        deletaCliente(id)
            .catch(error => {
                console.warn(error);
                alert('Erro ao excluir o cliente');
            });
    }
};

const showClient = ({id, nome, cpf}) => {
    const trElement = document.createElement('tr');
    const line = `
        <tr>
            <td>${nome}</td>
            <td>${cpf}</td>
            <td>
                <button
                    class="btn btn-sm btn-danger"
                    onClick="excluirCliente(${id})"
                >Excluir</button>
            </td>
        </tr>
    `;
    
    trElement.innerHTML = line;

    return trElement;
}

listarClientes()
    .then(data => {
        data.forEach(item => {
            tableBody.appendChild(showClient(item));
        });
    })
    .catch(error => console.warn(error))