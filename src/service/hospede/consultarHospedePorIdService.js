import { consultarHospedePorId } from "../../repository/hospedeRepository.js";
import { validarHospedeUnico } from "../../validation/hospede/hospedevalidation.js";


export default async function consultarHospedePorIdService(id) {
    let dados = await consultarHospedePorId(id);
    validarHospedeUnico(dados);

    let hospede = dados[0];
    return hospede;  
}

