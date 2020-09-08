const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]').value;
    const cpf = event.target.querySelector('[data-cpf]').value;

    if(validaCpf(cpf)) {
        cadastrarCliente(nome, cpf);
    } else {
        alert('CPf invalido');
    }
});