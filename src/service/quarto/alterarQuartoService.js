import { alterarQuarto } from "../../repository/quartoRepository.js";
import { validarCamposObrigatoriosQuarto } from "../../validation/quarto/quartoValidation.js";

export default async function alterarQuartoService(quartoObj, id) {
  // validar campos obrigatorios
  validarCamposObrigatoriosQuarto(quartoObj);

  let linhasAfetadas = await alterarQuarto(quartoObj, id);
  if (linhasAfetadas == 0) throw new Error("Nenhum quarto alterado.");
}
