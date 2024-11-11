import { consultarHospede } from "../../repository/hospedeRepository.js";

export default async function consultarHospedeService(nome) {
  if (!nome) {
    nome = "";
  }

  let dados = await consultarHospede(nome);
  return dados;
}
