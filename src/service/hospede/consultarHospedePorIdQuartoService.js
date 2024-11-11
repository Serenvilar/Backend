import { consultarHospedePorIdQuarto } from "../../repository/hospedeRepository.js";

export default async function consultarHospedePorIdQuartoService(idQuarto) {
  return await consultarHospedePorIdQuarto(idQuarto);
}
