function verificaCpfInvalido(cpf) {
    const cpfInvalidos = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000'
    ];

    return cpfInvalidos.indexOf(cpf) === -1;
}

function somaDigitosCpf(cpf, totalDigitos, peso) {
    let soma = 0;

    for(let i = 1; i <= totalDigitos; i++) {
        soma += parseInt(cpf.substring(i - 1 , i)) * (peso - i);
    }

    return soma;
}

function verificaDigito(cpf, totalDigitos, peso, digitoVerificador) {
    const soma = somaDigitosCpf(cpf, totalDigitos, peso);
    const resto = (soma * 10) % 11;

    return resto === digitoVerificador;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDigitiosPrimeiraParte = 9;
    const digitoVerificador = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDigitiosPrimeiraParte, peso, digitoVerificador);
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDigitiosSegundaParte = 10;
    const digitoVerificador = parseInt(cpf.substring(10, 11));
    
    return verificaDigito(cpf, totalDigitiosSegundaParte, peso, digitoVerificador);
}

function validaCpf(cpf) {
    return (
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoDigito(cpf) &&
        verificaCpfInvalido(cpf)
    );
}
