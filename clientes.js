const tableBody = document.querySelector('[data-tbody]');

const showClient = ({nome, cpf}) => {
    const trElement = document.createElement('tr');
    const line = `
        <tr>
            <td>${nome}</td>
            <td>${cpf}</td>
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