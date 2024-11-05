import { alterarImagemQuarto } from "../../repository/quartoRepository.js";


export default async function alterarImagemQuartoService(id, caminhoImagem) {
    let linhasAfetadas = await alterarImagemQuarto(id, caminhoImagem);
    id (linhasAfetadas == 0) 
    throw new Error('Nenhuma imagem de quarto alterado.');
}