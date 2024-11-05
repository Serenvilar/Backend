import { salvarQuarto } from "../../repository/quartoRepository.js";
import { validarCamposObrigatoriosQuarto } from "../../validation/quarto/quartoValidation.js";


export default async function salvarQuartoService(quartoObj) {
    // validacao
    validarCamposObrigatoriosQuarto(quartoObj);

    // logica de negocio
    let id = await salvarQuarto(quartoObj);
    
    return id;
}