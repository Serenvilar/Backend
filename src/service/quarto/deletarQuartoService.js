import { deletarQuarto } from "../../repository/quartoRepository.js";
import { consultarHospedePorIdQuarto } from "../../repository/hospedeRepository.js";

export default async function deletarQuartoService(id) {
  let reserva = await consultarHospedePorIdQuarto(id);

  if (reserva.length > 0) {
    throw new Error("Não é possível excluir o quarto com ID ${id}. Existem hóspedes associados a ele.");
  }

  let linhasAfetadas = await deletarQuarto(id);
  if (linhasAfetadas == 0) throw new Error("Nenhum quarto foi removido.");
}
