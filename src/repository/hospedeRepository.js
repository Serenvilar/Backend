import con from './connection.js';

export async function consultarReservaAtivaPorQuarto(id_quarto, data_checkin, data_checkout) {
    const comando = `
        SELECT 1
        FROM hospede
        WHERE fk_quarto = ?
          AND (data_checkin < ? AND data_checkout > ?)
    `;

    const [resposta] = await con.query(comando, [id_quarto, data_checkout, data_checkin]);
    
    // retorna "true" se já existe uma reserva ativa para o quarto nesse período, senão "false"
    return resposta.length > 0;
}

export async function salvarHospede(hospede) {
    let comando = `
        insert into hospede (nome, cpf, fk_quarto, data_checkin, data_checkout)
        values (?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [hospede.nome, hospede.cpf, hospede.fk_quarto, hospede.data_checkin, hospede.data_checkout ]);
    
    let info = resposta[0];
    let idHospede = info.insertId;

    if (!idHospede) {
        throw new Error('Falha na inserção do Hóspede.');
    }

    // atualiza o status do quarto para "Indisponível"
    let comandoUpdateQuarto = `
        update quarto
        set status_quar = 'Indisponível'
        where id_quarto = ?
    `;
    await con.query(comandoUpdateQuarto, [hospede.fk_quarto]);

    return idHospede;
}


export async function consultarHospede(nome) {
    let comando = `
        select id_hospede   id,
	           nome,
               cpf,
               fk_quarto    id_quarto,
               data_checkin,
               data_checkout
        from   hospede
        where  nome like ?
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let dados = resposta[0];

    return dados;
}


export async function consultarHospedePorId(id) {
    let comando = `
        select id_hospede   id,
	           nome,
               cpf,
               fk_quarto    id_quarto,
               data_checkin,
               data_checkout
        from   hospede
        where  id_hospede = ?
    `
    
    let resposta = await con.query(comando, [id]);
    let dados = resposta[0];

    return dados;
}

export async function deletarHospede(id) {
    // recuperar o fk_quarto (id do quarto) antes de excluir o hóspede
    let comandoSelect = `
        select fk_quarto
        from hospede
        where id_hospede = ?
    `;
    let respostaSelect = await con.query(comandoSelect, [id]);
    let quartoId = respostaSelect[0][0]?.fk_quarto;

    // deletar hospede / reserva
    let comandoDelete = `
        delete from hospede
        where id_hospede = ?
    `;
    let respostaDelete = await con.query(comandoDelete, [id]);
    let info = respostaDelete[0];
    let linhasAfetadas = info.affectedRows;

    // verficar que o hospede foi excluído antes de atualizar o status do quarto
    if (linhasAfetadas === 0) {
        throw new Error(`Falha ao excluir hospede com id ${id}`);
    }

    // se o id da sala existe, atualize o status da sala de volta para "Disponível"
    if (quartoId) {
        let comandoUpdateQuarto = `
            update quarto
            set status_quar = 'Disponível'
            where id_quarto = ?
        `;
        await con.query(comandoUpdateQuarto, [quartoId]);
    }

    return linhasAfetadas;
}
