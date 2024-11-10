import { consultarHospedePorIdQuarto } from "../../repository/hospedeRepository.js";

export async function consultarHospedePorIdQuartoService(idQuarto) {
    return await consultarHospedePorIdQuarto(idQuarto);
}