import { deletarHospede } from "../../repository/hospedeRepository.js";

export default async function deletarHospedeService(id) {
  let linhasAfetadas = await deletarHospede(id);
  if (linhasAfetadas == 0) throw new Error("Nenhum hospede foi removido");
}
