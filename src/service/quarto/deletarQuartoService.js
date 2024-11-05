import { deletarQuarto } from "../../repository/quartoRepository.js";


export default async function deletarQuartoService(id) {
    let linhasAfetadas = await deletarQuarto(id);
    if (linhasAfetadas == 0)
        throw new Error('Nenhum quarto foi removido.');
}