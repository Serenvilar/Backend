export function validarCamposObrigatoriosHospede(hospedeObj) {
    if (!hospedeObj.nome)
        throw new Error('Nome do hospede obrigatório.');

    if (!hospedeObj.cpf)
        throw new Error('Cpf do hospede obrigatório.');

    if (!hospedeObj.fk_quarto)
        throw new Error('Id do quarto do hospede obrigatório.');
    if (isNaN(hospedeObj.fk_quarto))
        throw new Error('Id do quarto inválida.');

    if (!hospedeObj.data_checkin)
        throw new Error('Data check-in do hospede obrigatório.');

    if (!hospedeObj.data_checkout)
        throw new Error('Data check-out do hospede obrigatório.');
}

export function validarHospedeUnico(dados) {
    if(dados.length == 0)
       throw new Error('Quarto não encontrado!');
}

