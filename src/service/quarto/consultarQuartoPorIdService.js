import { consultarQuartoPorId } from "../../repository/quartoRepository.js";
import { validarQuartoUnico } from "../../validation/quarto/quartoValidation.js";

export default async function consultarQuartoPorIdService(id) {
    let registros = await consultarQuartoPorId(id);
    validarQuartoUnico(registros);
    
    let quarto = registros[0];
    return quarto;
}