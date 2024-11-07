import { alterarImagemQuarto } from "../../repository/quartoRepository.js";


export default async function alterarImagemQuartoService(id, caminhoImagem) {
    let linhasAfetadas = await alterarImagemQuarto(id, caminhoImagem);
    
    if (linhasAfetadas == 0) 
    throw new Error('Nenhuma imagem de quarto alterado.');
}