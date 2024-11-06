import con from './connection.js';

export async function verificarLogin(email, senha) {
    const comando = `
        SELECT id, email, senha
        FROM login_adm
        WHERE email = ? AND senha = ?;
    `;

    console.log('Comando SQL:', comando);
    console.log('Parâmetros:', [email, senha]);

    const [resultados] = await con.query(comando, [email, senha]);
    console.log('Resultados da consulta:', resultados);

    return resultados;
}
