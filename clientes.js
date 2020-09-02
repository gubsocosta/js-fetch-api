const infoClients = [
    { name: 'Gabriel Costa', cpf: '11122233300'},
    { name: 'Joao Costa', cpf: '11122233300'},
];


const tableBody = document.querySelector('[data-tbody]');

const showClient = ({name, cpf}) => {
    const trElement = document.createElement('tr');
    const line = `
        <tr>
            <td>${name}</td>
            <td>${cpf}</td>
        </tr>
    `;
    
    trElement.innerHTML = line;

    return trElement;
}

infoClients.forEach(item => {
    tableBody.appendChild(showClient(item));
});