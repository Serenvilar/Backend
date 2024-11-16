import { deletarHospede } from "../../repository/hospedeRepository.js";
import { consultarHospedePorId } from "../../repository/hospedeRepository.js";

export default async function deletarHospedeService(id) {
  let hospede = await consultarHospedePorId(id);

  if (!hospede || hospede.length === 0) {
    throw new Error("Hóspede com ID ${id} não encontrado.");
  }

  let linhasAfetadas = await deletarHospede(id);
  if (linhasAfetadas == 0) throw new Error("Nenhum hospede foi removido");
}
