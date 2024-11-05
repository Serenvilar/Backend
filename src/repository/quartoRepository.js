import con from './connection.js';


export async function salvarQuarto(quarto) {
    let comando = `
        insert into quarto (tipo_quarto, banheiro, tam_cama, wifi, ar_condi, classi_avaliacao, num_avaliacao, status_quar, valor)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

   let resposta = await con.query(comando, [quarto.nome, quarto.banheiro, quarto.tamCama, quarto.wifi, quarto.arCondi, quarto.classiAvaliacao, quarto.numAvaliacao, quarto.status, quarto.valor]);
   let info = resposta[0];

   let idQuarto = info.insertId;
   return idQuarto;
}

export async function consultarQuartos(nome) {
    let comando = `       
        select id_quarto         id,
               imagem, 
	           tipo_quarto       nome, 
               banheiro, 
               tam_cama          cama, 
               wifi, 
               ar_condi          arcondicionado, 
               classi_avaliacao  avaliacao, 
               num_avaliacao     numero, 
               status_quar       status, 
               valor
        from   quarto
        where  tipo_quarto like ?
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;
}

export async function consultarQuartoPorId(id) {
    let comando = `       
        select id_quarto         id,
               imagem, 
	           tipo_quarto       nome, 
               banheiro, 
               tam_cama          cama, 
               wifi, 
               ar_condi          arcondicionado, 
               classi_avaliacao  avaliacao, 
               num_avaliacao     numero, 
               status_quar       status, 
               valor
        from   quarto
        where  id_quarto = ?
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}


export async function alterarQuarto(quarto, id) {
    let comando = `
        update quarto
           set tipo_quarto = ?, 
               banheiro = ?, 
               tam_cama = ?, 
               wifi = ?, 
               ar_condi = ?, 
               classi_avaliacao = ?, 
               num_avaliacao = ?, 
               status_quar = ?, 
               valor = ?
        where id_quarto = ?;
    `

    let resposta = await con.query(comando, [
        quarto.nome, 
        quarto.banheiro, 
        quarto.tamCama, 
        quarto.wifi, 
        quarto.arCondi, 
        quarto.classiAvaliacao, 
        quarto.numAvaliacao, 
        quarto.status, 
        quarto.valor, 
        id]);

    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function deletarQuarto(id) {
    let comando = `
        delete from quarto where id_quarto = ?;
    `
   
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas
}

export async function alterarImagemQuarto(id, caminho) {
    let comando = `
        update quarto
           set imagem = ?
        where id_quarto = ?
    `

    let resposta = await con.query(comando, [caminho, id]);
    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}