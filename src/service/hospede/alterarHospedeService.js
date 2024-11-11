import { alterarHospede } from "../../repository/hospedeRepository.js";
import { validarCamposObrigatoriosHospede } from "../../validation/hospede/hospedevalidation.js";

export default async function alterarHospedeService(hospedeObj, id) {
  validarCamposObrigatoriosHospede(hospedeObj);

  let linhasAfetadas = await alterarHospede(hospedeObj, id);
  if (linhasAfetadas == 0) throw new Error("Nenhum reserva alterado.");
}
